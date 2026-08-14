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

/** Retired products asserted as current, ignoring correction context. */
function checkStale(posts) {
  const rows = [];
  let total = 0;
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
    lines.forEach((ln, i) => {
      // Three lines each way. A correction usually sits beside its claim,
      // but "X was retired" can be a paragraph above the next mention.
      const window = lines.slice(Math.max(0, i - 3), i + 4).join(" ");
      if (CONTEXT_OK.test(window)) return;
      for (const [re, why] of RETIRED) {
        const n = (ln.match(re) || []).length;
        if (!n) continue;
        const key = re.source.replace(/\\b|\(\?!.*?\)/g, "");
        // Skip if the post is about this thing rather than recommending it.
        if (new RegExp(re.source, "i").test(subject)) continue;
        if ((body.match(re) || []).length >= SUBJECT_THRESHOLD) continue;
        const prev = hits.get(key) || { n: 0, why, line: i + 1 };
        hits.set(key, { ...prev, n: prev.n + n });
      }
    });
    if (hits.size) {
      const n = [...hits.values()].reduce((a, h) => a + h.n, 0);
      total += n;
      rows.push({ slug, n, hits });
    }
  }
  rows.sort((a, b) => b.n - a.n);
  console.log("\n=== Retired products asserted as current ===");
  if (!rows.length) console.log("  none");
  for (const { slug, n, hits } of rows) {
    console.log(`  ${pad(slug, 44)} ${String(n).padStart(3)}`);
    for (const [k, h] of hits) console.log(`      L${pad(h.line, 5)} ${pad(k, 20)} ${h.why}`);
  }
  console.log(`  total: ${total}`);
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
