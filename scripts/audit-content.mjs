import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Content rot audit.
 *
 * Built after a manual audit on 2026-08-14 found 113 stale references across
 * 24 posts, including two pages recommending products that no longer exist.
 * That audit took hours. This runs it in seconds so the same rot cannot
 * accumulate silently again.
 *
 *   node scripts/audit-content.mjs            fast checks only
 *   node scripts/audit-content.mjs --links    also check every external URL
 *
 * Exits 0 always. This reports, it does not gate a build.
 */

const POSTS_DIR = "content/posts";
const STALE_AFTER_DAYS = 30;

/**
 * Products and models known to be retired, renamed, or dead.
 * `why` is printed so whoever runs this knows what to replace it with.
 * Add a row the day you learn something has changed, not the day it breaks.
 */
const RETIRED = [
  [/\bGPT-4o\b/gi, "retired from ChatGPT 2026-02-13"],
  [/\bGPT-4\.1\b/gi, "retired 2026-02-13"],
  [/\bGPT-4\.5\b/gi, "retired 2026-06-26"],
  [/\bGPT-4\b(?!\.)/gi, "GPT-4 generation retired"],
  [/\bo1\b/gi, "o-series folded into GPT-5 thinking levels"],
  [/\bo3-mini\b/gi, "retired"],
  [/\bo4-mini\b/gi, "retired 2026-02-13"],
  [/\bo3\b(?!-)/gi, "retires 2026-08-26"],
  [/\bDALL-?E\b/gi, "DALL-E GPT retires 2026-08-30; now ChatGPT Images 2.0"],
  [/\bSonnet 4\b(?!\.)/gi, "Claude naming moved on"],
  [/\bOpus 4\b(?!\.)/gi, "Claude naming moved on"],
  [/\bClaude 3(\.\d)?\b/gi, "Claude 3 generation gone"],
  [/\bGemini 1\.5\b/gi, "Gemini generation gone"],
  [/\bGemini 2\.\d\b/gi, "Gemini flagship is 3.x"],
  [/\bImagen 3\b/gi, "now Nano Banana Pro"],
  [/\bGemini Advanced\b/gi, "renamed Google AI Pro"],
  [/\bGoogle Bard\b/gi, "renamed Gemini"],
  [/\bWindsurf\b/gi, "now Devin Desktop"],
  [/\bCodeium\b/gi, "now Devin"],
  [/\bSuno Basic\b/gi, "no such tier; Suno sells Free, Pro $8, Premier $24"],
  [/\bPlay\.ht\b/gi, "dead, NXDOMAIN"],
  [/\bLOVO\b/gi, "Chapter 7 bankruptcy"],
  [/chat\.openai\.com/gi, "now chatgpt.com"],
  [/codeium\.com/gi, "redirects to devin.ai"],
  [/windsurf\.com/gi, "redirects to devin.ai"],
  [/notebooklm\.google\.com/gi, "now notebook.google.com"],
];

/**
 * Language showing the post already knows the thing is retired. A mention
 * inside this context is a correction, not an error, so it is not reported.
 * The window is three lines because a correction usually sits beside its claim.
 */
const CONTEXT_OK =
  /retir|no longer|used to|renamed|deprecat|shut down|shutting|stopped exist|gone|dead|became|now called|out of date|stale|previously|formerly|does not exist|not exist|redirect|correction|earlier version|older guides|what happened to/i;

const arg = (f) => process.argv.includes(f);
const pad = (s, n) => String(s).padEnd(n);

async function loadPosts() {
  const files = (await readdir(POSTS_DIR)).filter((f) => f.endsWith(".mdx"));
  return Promise.all(
    files.sort().map(async (f) => ({
      slug: f.replace(/\.mdx$/, ""),
      lines: (await readFile(join(POSTS_DIR, f), "utf8")).split("\n"),
    }))
  );
}

function frontmatterValue(lines, key) {
  const re = new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`);
  for (const ln of lines.slice(0, 40)) {
    const m = ln.match(re);
    if (m) return m[1].trim();
  }
  return null;
}

/**
 * Where a mention sits decides whether it is an error. Prose saying
 * "Windsurf is gone" is correct writing. The same word in a table cell
 * beside a price is a claim that the product exists and costs that.
 * These classify the surrounding line so the report can rank by severity
 * instead of printing every occurrence at the same volume.
 */
const isTableRow = (ln) => /^\s*\|.*\|\s*$/.test(ln) && !/^\s*\|[\s:|-]+\|\s*$/.test(ln);
const hasPrice = (ln) => /\$\s?\d/.test(ln);
const RECOMMENDS =
  /\b(use|try|pick|choose|go with|recommend|start with|best|alternative|option|worth|switch to|sign up|check out|see)\b/i;

/** True when the retired term appears inside markdown link anchor text. */
function inAnchorText(line, re) {
  for (const m of line.matchAll(/\[([^\]]*)\]\([^)]*\)/g)) {
    if (new RegExp(re.source, "i").test(m[1])) return true;
  }
  return false;
}

/**
 * Same-line proximity. An FAQ answer runs to 600 characters, so "there is a
 * price on this line" says nothing about whether the price belongs to the
 * retired product. Cursor's review lists Gemini 2.5 Pro as a selectable model
 * 400 characters away from its plan prices, which is not a claim that Gemini
 * 2.5 is current. Table cells are tight enough that the whole row counts.
 */
const NEAR = 80;
const around = (line, at, len) => line.slice(Math.max(0, at - NEAR), at + len + NEAR);

/**
 * Severity for one occurrence.
 *   high   asserts the product exists at a price, or steers a reader to it
 *   med    reads as a recommendation
 *   low    a bare mention with nothing riding on it
 */
function severity(line, re, at, len) {
  const table = isTableRow(line);
  const scope = table ? line : around(line, at, len);
  const price = hasPrice(scope);
  const rec = RECOMMENDS.test(scope);
  if (table && price) return "high"; // a dead product with a price beside it
  if (inAnchorText(line, re)) return "high"; // link text sends people to it
  if (price && rec) return "high";
  if (table || rec) return "med";
  return "low";
}

/** Retired products asserted as current, ignoring correction context. */
function checkStale(posts) {
  const rows = [];
  let total = 0;
  let highTotal = 0;
  for (const { slug, lines } of posts) {
    // A post whose own title or excerpt names the retired thing is about it.
    // Without this, the ElevenLabs alternatives piece scores 19 hits for
    // correctly reporting that Play.ht and LOVO are gone, which is the
    // opposite of an error and trains you to ignore the report.
    const subject = [
      frontmatterValue(lines, "title") || "",
      frontmatterValue(lines, "excerpt") || "",
      slug.replace(/-/g, " "),
    ].join(" ");

    // Document-level subject detection. A term used this heavily is what the
    // post is about, not a stray recommendation: the ElevenLabs alternatives
    // piece names LOVO fifteen times while reporting its bankruptcy.
    const body = lines.join("\n");
    const SUBJECT_THRESHOLD = 8;

    const hits = new Map();
    // Terms the post corrects somewhere. Tracked separately so a post that
    // explains a rename and then contradicts itself is reported louder,
    // not silenced. cursor-ai-review-2026 priced Windsurf at $15 in a table
    // twelve lines above a paragraph explaining Windsurf no longer exists.
    const corrected = new Set();

    lines.forEach((ln, i) => {
      // Three lines each way. A correction usually sits beside its claim,
      // but "X was retired" can be a paragraph above the next mention.
      const window = lines.slice(Math.max(0, i - 3), i + 4).join(" ");
      const isCorrection = CONTEXT_OK.test(window);
      for (const [re, why] of RETIRED) {
        const n = (ln.match(re) || []).length;
        if (!n) continue;
        const key = re.source.replace(/\\b|\(\?!.*?\)/g, "");
        // Skip if the post is about this thing rather than recommending it.
        if (new RegExp(re.source, "i").test(subject)) continue;
        if ((body.match(re) || []).length >= SUBJECT_THRESHOLD) continue;
        if (isCorrection) {
          corrected.add(key);
          continue;
        }
        const prev = hits.get(key) || { n: 0, why, at: [], sev: "low" };
        prev.n += n;
        // Severity is per match, because position decides it.
        for (const m of ln.matchAll(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g"))) {
          const sev = severity(ln, re, m.index, m[0].length);
          prev.at.push({ line: i + 1, sev });
          if (sev === "high" || (sev === "med" && prev.sev === "low")) prev.sev = sev;
        }
        hits.set(key, prev);
      }
    });

    // Mark contradictions: the post knows better elsewhere and still asserts it.
    // Only when the assertion itself carries weight. A passing low-severity
    // mention alongside a correction is ordinary writing, and flagging those
    // buried the one real case in four false positives: cursor-alternatives
    // narrating its own past mistake is exactly the writing you want.
    for (const [key, h] of hits) {
      if (corrected.has(key) && h.sev !== "low") h.contradiction = true;
    }

    if (hits.size) {
      const n = [...hits.values()].reduce((a, h) => a + h.n, 0);
      const high = [...hits.values()].filter((h) => h.sev === "high" || h.contradiction).length;
      total += n;
      highTotal += high;
      rows.push({ slug, n, high, hits });
    }
  }
  // Worst first: posts with high-severity claims outrank posts with many mentions.
  rows.sort((a, b) => b.high - a.high || b.n - a.n);

  const MARK = { high: "HIGH", med: "med ", low: "low " };
  console.log("\n=== Retired products asserted as current ===");
  if (!rows.length) console.log("  none");
  for (const { slug, n, high, hits } of rows) {
    console.log(`  ${pad(slug, 44)} ${String(n).padStart(3)}${high ? `  ${high} high` : ""}`);
    for (const [k, h] of hits) {
      const where = [...new Set(h.at.map((a) => `L${a.line}`))].join(",");
      const flag = h.contradiction ? "  CONTRADICTS ITSELF" : "";
      console.log(`      ${MARK[h.sev]} ${pad(k, 20)} ${pad(where, 18)} ${h.why}${flag}`);
    }
  }
  console.log(`  total: ${total}, high severity: ${highTotal}`);
  return total;
}

/** Internal /blog/ links pointing at a slug that does not exist. */
function checkInternalLinks(posts) {
  const slugs = new Set(posts.map((p) => p.slug));
  const broken = [];
  for (const { slug, lines } of posts) {
    lines.forEach((ln, i) => {
      for (const m of ln.matchAll(/\]\(\/blog\/([a-z0-9-]+)\)/g)) {
        if (!slugs.has(m[1])) broken.push(`${slug} L${i + 1} -> /blog/${m[1]}`);
      }
    });
  }
  console.log("\n=== Broken internal links ===");
  console.log(broken.length ? broken.map((b) => "  " + b).join("\n") : "  none");
  return broken.length;
}

/** Posts nobody has looked at recently. Prices rot faster than prose. */
function checkFreshness(posts) {
  const today = new Date();
  const rows = posts
    .map(({ slug, lines }) => {
      const d = frontmatterValue(lines, "updatedAt") || frontmatterValue(lines, "date");
      const days = Math.floor((today - new Date(d)) / 86400000);
      return { slug, d, days };
    })
    .filter((r) => r.days >= STALE_AFTER_DAYS)
    .sort((a, b) => b.days - a.days);
  console.log(`\n=== Not updated in ${STALE_AFTER_DAYS}+ days ===`);
  console.log(rows.length ? rows.map((r) => `  ${String(r.days).padStart(3)}d  ${r.d}  ${r.slug}`).join("\n") : "  none");
  return rows.length;
}

/**
 * Every product-and-price pair on the site. Not an error list: it is the
 * worklist for re-checking vendors, since a wrong price is the single most
 * damaging thing a review can carry and no scan can tell you it is wrong.
 */
function checkPrices(posts) {
  // A curated vendor list rather than "any capitalised word before a dollar
  // sign". The loose version reported Pro, Yes, Total and The as products,
  // which buries the rows you actually need to check.
  const VENDORS = [
    "ChatGPT", "Claude", "Copilot", "Cursor", "Gemini", "Perplexity", "Notion",
    "Grammarly", "Canva", "Midjourney", "ElevenLabs", "Replit", "Suno", "Zed",
    "Devin", "Jasper", "Otter", "Descript", "Opus Clip", "Bolt", "Firefly",
    "Ideogram", "Leonardo", "Runway", "Gamma", "Amazon Q",
  ];
  const map = new Map();
  for (const { slug, lines } of posts) {
    lines.forEach((ln, i) => {
      for (const v of VENDORS) {
        const re = new RegExp(`\\b${v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b[^.$\\n]{0,45}?\\$(\\d+(?:\\.\\d{2})?)`, "g");
        for (const m of ln.matchAll(re)) {
          if (!map.has(v)) map.set(v, new Map());
          const byPrice = map.get(v);
          if (!byPrice.has(m[1])) byPrice.set(m[1], []);
          byPrice.get(m[1]).push(`${slug}:${i + 1}`);
        }
      }
    });
  }
  const rows = [...map.entries()]
    .sort((a, b) => [...b[1].values()].flat().length - [...a[1].values()].flat().length);
  console.log("\n=== Price claims, most-cited products (verify against vendor pages) ===");
  for (const [product, byPrice] of rows) {
    const prices = [...byPrice.keys()].sort((a, b) => Number(a) - Number(b)).map((p) => "$" + p);
    const n = [...byPrice.values()].flat().length;
    console.log(`  ${pad(product, 18)} ${String(n).padStart(3)} mentions   ${prices.join(", ")}`);
  }
}

/** Slow. Off by default because it hits the network once per unique URL. */
async function checkExternalLinks(posts) {
  const urls = new Set();
  for (const { lines } of posts)
    for (const ln of lines)
      for (const m of ln.matchAll(/https?:\/\/[^\s)\]"'<>]+/g)) urls.add(m[0].replace(/[.,;:]+$/, ""));

  console.log(`\n=== External links (${urls.size} unique) ===`);
  const ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36";
  let dead = 0, moved = 0;
  for (const u of [...urls].sort()) {
    try {
      const res = await fetch(u, { redirect: "follow", headers: { "User-Agent": ua }, signal: AbortSignal.timeout(12000) });
      const host = (s) => new URL(s).host;
      if (![200, 301, 302, 403, 999].includes(res.status)) {
        console.log(`  DEAD  ${res.status}  ${u}`); dead++;
      } else if (host(res.url) !== host(u)) {
        console.log(`  MOVED       ${u}\n              -> ${res.url}`); moved++;
      }
    } catch {
      console.log(`  UNREACHABLE  ${u}`); dead++;
    }
  }
  if (!dead && !moved) console.log("  all resolve, no host changes");
  return dead;
}

const posts = await loadPosts();
console.log(`Auditing ${posts.length} posts in ${POSTS_DIR}`);
checkStale(posts);
checkInternalLinks(posts);
checkFreshness(posts);
checkPrices(posts);
if (arg("--links")) await checkExternalLinks(posts);
else console.log("\n(skipping external link check; pass --links to include it)");
console.log("");
