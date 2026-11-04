# Hosting

AI Vault is a statically exported Next.js site hosted on Cloudflare Pages.

## Why it is not on Vercel

On 2026-11-04 Vercel paused the whole team. The cause was Fluid Active CPU:
4h 51m used against the 4 hour Hobby allowance. Every other meter was
comfortable (bandwidth 4.75 GB of 10, CDN requests 262K of 1M). The dashboard
said the pause would not lift until 2026-12-04.

Two separate problems sat underneath that, and only one of them was the CPU.

**The CPU.** Every page on this site was already a pre-built file. The one
thing that ran per request was `src/middleware.ts`, a user-agent blocklist. It
fired on every page view, which is where 121K function invocations came from.
The irony is worth keeping: that file existed to block scraper bots, but to
block a bot it first had to run a server function for that bot. Blocked traffic
cost more than ignoring it would have, because the CDN would otherwise have
served those requests from cache for free.

**The plan.** Vercel's fair use guidelines restrict Hobby to "non-commercial
personal use only", and define commercial usage to include affiliate linking,
the inclusion of advertisements, and receiving payment to create or host the
site. This site has an ElevenLabs affiliate programme wired up in
`src/lib/affiliate.ts`, a `SponsoredNotice` component for paid placements, and
a `/disclosure` page that publishes the paid-placement terms. That is
commercial use on a non-commercial plan.

So asking Vercel support for an unpause was the one move not to make: it invites
a human to look at an account that is plainly in breach. The risk was not a
refused unpause, it was a permanent one.

Cloudflare's Self-Serve Subscription Agreement (read 2026-11-04, last updated
2025-09-12) has no non-commercial clause. Section 2.2.1 lists the restrictions
and the only one specific to free accounts is (h), which forbids collecting
credit card data on a free-tier property. This site collects none.

## What changed in the code

- `next.config.ts` gained `output: "export"` and `images.unoptimized`.
- `src/middleware.ts` was **deleted**. See "Bot blocking" below.
- `src/app/api/subscribe/route.ts` moved to `functions/api/subscribe.js`, a
  Cloudflare Pages Function. An exported site has no server to run a route
  handler on.
- `src/app/blog/page.tsx` read `searchParams` on the server, which export
  cannot do. Search and pagination moved into `src/components/BlogIndex.tsx`,
  a client component. Its Suspense fallback renders the real unfiltered page 1
  so `next build` still bakes six post cards into `blog.html` for crawlers.
- The 10 redirects in `next.config.ts` moved to `public/_redirects`.
  `redirects()` only runs on a server. Every one of those URLs is indexed.
- `public/_headers` sets `Content-Type: image/png` on the 102 metadata images,
  which Next emits with no file extension.
- All 11 `opengraph-image.tsx` files plus `robots.ts` and `sitemap.ts` gained
  `export const dynamic = "force-static"`, which export requires.
- The `revalidate` exports are gone. A rebuild per commit does that job now.

## Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 or newer (`NODE_VERSION` env var) |

One environment variable has to be set under Settings -> Environment variables,
for production and preview both:

- `MAILERLITE_API_KEY` — the newsletter signup returns HTTP 500 without it.

It is read at request time off `context.env`, not baked in at build.

## Bot blocking

The deleted middleware blocked these user agents: HeadlessChrome, PhantomJS,
SlurpBot, Bytespider, Baiduspider, MJ12bot, AhrefsBot, SemrushBot, DotBot,
PetalBot, YandexBot, SeznamBot, python-requests, Go-http-client, Scrapy, curl
and wget. It explicitly allowed Googlebot, Bingbot, DuckDuckBot, Applebot,
FacebookExternalHit, Twitterbot, LinkedInBot, Slackbot, WhatsApp and Discordbot.

Do not reimplement that as code. Cloudflare blocks bots at the edge before the
request reaches anything billable, which is the whole point of the move. Use
Security -> Bots -> Bot Fight Mode, or a WAF rule, both free.

One thing to carry over: **do not block YandexBot.** `scripts/indexnow.mjs`
submits to IndexNow, which feeds Yandex. The old middleware blocked Yandex
while the script fed it, a contradiction that sat open from 2026-09-21 until
the file was deleted. Do not recreate it.

## Verify after any deploy

1. `https://www.aivaultblog.com/sitemap.xml` returns 200 and 89 `<loc>` entries.
2. A post page carries 5 valid JSON-LD blocks: WebSite, Organization, Article,
   BreadcrumbList, FAQPage.
3. `https://www.aivaultblog.com/blog/<slug>/opengraph-image` returns
   `Content-Type: image/png`, **not** `application/octet-stream`. If this is
   wrong, every social card on the site is broken and nothing else will say so.
4. One of the 10 redirects in `public/_redirects` still 301s, for example
   `/tag/anthropic` -> `/tag/claude`.
5. The newsletter form on `/newsletter` accepts an address.

## What is no longer possible

No server-rendered routes, no ISR, no Next image optimisation, and no
middleware. Anything needing per-request work has to be a Pages Function in
`functions/`, and every one of those costs quota, so think before adding one.
`scripts/optimize-images.mjs` is now load bearing: nothing downsizes covers at
request time any more.
