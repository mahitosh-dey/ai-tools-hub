/**
 * Ping IndexNow so Bing and Yandex fetch new or changed URLs immediately
 * instead of waiting for a crawl. Free, and Bing is this site's working
 * channel, so it matters more here than the Google side does.
 *
 *   npm run indexnow            all sitemap URLs
 *   npm run indexnow -- <path>  one or more paths, e.g. /blog/some-post
 *
 * The key file must stay reachable at https://<host>/<key>.txt or the
 * submission is rejected. Do not rename it.
 */
const KEY = "5e7ad4ecaae57bce806ce0f6a205215a";
const HOST = "www.aivaultblog.com";
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function sitemapUrls() {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const args = process.argv.slice(2).filter((a) => a !== "--");
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : `https://${HOST}${p.startsWith("/") ? p : "/" + p}`))
  : await sitemapUrls();

if (!urlList.length) {
  console.error("No URLs to submit.");
  process.exit(1);
}
// IndexNow caps a single submission at 10,000 URLs.
if (urlList.length > 10000) {
  console.error(`Refusing to submit ${urlList.length} URLs, the cap is 10,000.`);
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

// 200 accepted, 202 accepted but key still being validated. Both are fine.
if (res.status === 200 || res.status === 202) {
  console.log(`Submitted ${urlList.length} URL(s) to IndexNow. Status ${res.status}.`);
} else {
  console.error(`IndexNow rejected the submission. Status ${res.status}: ${await res.text()}`);
  process.exit(1);
}
