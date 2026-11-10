# Hard Rules — AI Vault (ai-tools-hub)

These are non-negotiable rules for any AI assistant working in this project. They live in the repo so they can be restored if assistant memory is ever lost. Read every rule before touching code or content.

---

## 1. Preserve the existing setup

- Do NOT change project setup, config files, dependencies, build tools, or infrastructure unless the user explicitly asks for it.
- Before making any change, confirm it will not break existing functionality.
- After every change, verify nothing else regressed (build, routes, data flow, styles).
- If a change requires touching setup, stop and ask first.

## 2. SEO integrity — sitemap & JSON-LD must be 100% correct

- After completing ANY work in this project, verify:
  - `sitemap.xml` (or the Next.js sitemap route) is valid and includes/excludes the right URLs.
  - All JSON-LD schema blocks on affected pages are valid, well-formed, and match the actual content (title, dates, author, images, URLs).
- Never ship work that leaves sitemap or structured data broken, stale, or malformed.

## 2c. Removing a tag from a post deletes a live URL

- Tag pages are **generated from post frontmatter**. `getAllTags()` reads every
  post's `tags:` block and `generateStaticParams` builds one page per tag, so a
  tag page stops existing the instant the last post drops that tag. The URL then
  returns 404, and Google may already have it indexed.
- **Before removing or renaming a tag in any post, check whether that tag still
  appears in another post.** If it does not, add a `301` to `public/_redirects`
  pointing the dead slug at the live tag that absorbs its subject, in the same
  commit. The same applies to categories and to any renamed post slug.
- After any edit that touches a `tags:` block, diff the tag list against the
  previous commit and confirm every slug that disappeared has a redirect.

**Why this exists.** On 2026-11-10 Search Console reported 21 pages as Not found
(404), validation failed, and every one was a `/tag/` URL. Diffing every tag ever
written in post frontmatter across the whole git history against the 35 live
today gave **94** dead slugs with no redirect. Google had recrawled 21; the rest
were queued to surface the same way. They accumulated silently over months of
ordinary post editing, because nothing in the build fails when a tag page
disappears. A July 2026 consolidation added redirects for 7 slugs and left a note
in `public/_redirects` asserting the rest needed none, which was wrong.

## 2b. Correcting a claim means grepping for it, not remembering it

- When a fact turns out to be wrong, **grep the entire `content/` directory for the
  claim** before deciding which posts to fix. Do not rely on memory of where it was
  written.
- Within each post, check **every surface**: the FAQ frontmatter block, comparison
  tables, the body prose, the summary table, and any recommendation section. Fixing
  the heading is not fixing the post.
- Re-grep after the fix and verify against the **built HTML**, not just the source.
- **Grep for the claim, not for the number.** When a vendor changes *how* it charges
  rather than *what* it charges, grep the vocabulary of the old structure as well as
  its figures. Expect the real count to be two or three times the first estimate.
- **Check that the argument still follows before swapping a number.** A correct
  figure in a paragraph that reasons from the old one is still a wrong post. Check
  especially whether the post uses the changed fact as *evidence* for a thesis.

**Why this exists.** Six separate times between 2026-09-24 and 2026-10-15, a stale
figure survived in an FAQ block or a comparison table after the body had been
corrected. FAQ blocks are what Google lifts for AI Overviews, so a corrected body and
a stale FAQ can surface side by side.

The clearest case was 2026-10-15. The play.ht DNS claim was corrected in two posts
from memory. A grep found a third post that had never been checked, and an FAQ in one
of the two already-corrected posts still contradicted its own body hours later, on the
same day a post about checking systematically was published.

The two later clauses were added on 2026-11-06, at the end of the Cursor sweep. That
sweep was scoped by grepping for Cursor on the same line as a dead dollar figure,
which counted twelve spots. The real count was about thirty, because sentences like
"a dollar pool plus a second pool" and "Cursor's on-demand overage" describe the
retired pricing structure without quoting any price, and a reader acts on them the
same way. Two of the six posts also needed an argument reworked rather than a number
swapped: Cursor's new $8 plan fit the "under $20" guide better than $20 ever did but
cannot run Claude or GPT, which was the capability that guide praised it for, and a
second post was using Cursor's old pricing as proof that metered pricing can be fair.

Memory found two posts. Grep found three.

## 3. Humanizer rules apply to ALL content

Apply the `/humanizer` skill (v2.8.0 — 33 anti-AI patterns + 6 AI-citation rules + 10 human-voice rules) to every piece of written content, including but not limited to:

- Blog posts
- Job listings
- Schema / structured data descriptions
- Exam content
- Admit card content
- Result content
- Quora answers
- Medium articles
- Reddit posts

If a content type is not in this list but is user-facing writing, apply humanizer anyway.

## 4. Research before writing — top 20, deep dive

- Before writing any content, research the current top 20 results / sources for that topic.
- Go deep: read what the top ranked pages actually say, what they miss, what angles are underserved, what real people are asking.
- Think like a human reader, not a keyword generator.

## 5. Approval workflow — research first, then write

- Never write final content before showing the research.
- Order of operations:
  1. Do the top-20 research.
  2. Present the research findings and proposed angle to the user.
  3. Wait for explicit approval.
  4. Only then, write the content.
- Do not skip step 2 or 3 even if the topic seems obvious.

## 6. Git & deploy safety

- Never `git push` and never deploy without explicit user permission.
- Committing locally is fine when the user asks; pushing/deploying requires a separate, explicit instruction.

## 7. Editorial cadence

- **Minimum 2 new blog posts per week.** This is a floor, not a target. Correction
  work on existing posts does not count towards it and must never be traded against
  it. If a week is ending and fewer than 2 new posts have been published, say so
  before proposing any more drift work.
- **"One fact per day" correction cadence.** Replaced "one old post per day" on
  2026-11-06. Correct a fact everywhere it appears in one session rather than
  one post per day, because the research is the expensive part and the editing
  is not. Still always ask before updating an existing published post.
  **Why the change:** at 55 posts, holding the archive under 45 days needs about
  8.6 refreshes a week. One post per day on weekdays gives 5, which sustains an
  archive of roughly 32. The old rule could not hold the target and the gap grew
  with every post published. Full arithmetic in `PLAN-MONTH.md`.
- Humanizer rules auto-apply to new posts without asking.

**Why this exists.** Between 2026-09-14 and 2026-10-08 the site published zero new
posts while 10 existing posts were corrected. Each correction was worth doing and
nine of ten found a real error, but the new-post cadence was dropped silently and
nobody flagged it. The failure was not choosing corrections, it was not saying out
loud that the trade was being made.

## 8. Paid placements — publicly committed terms

These are published on `/disclosure`, so breaking one makes the site's own policy page a lie. Added 2026-08-05 when the first paid-placement deal was negotiated.

- A paid post MUST set both `sponsored: true` and `sponsoredBy: "<advertiser>"` in frontmatter. Setting one without the other ships an unnamed disclosure.
- Paid placements are NEVER inserted into an existing comparison post, roundup, or best-of list. Rankings are not for sale. A paid placement gets its own post. If the product then earns a roundup spot on merit, it goes in separately and unpaid.
- The fee never buys the verdict. No advertiser approval over wording, no preview before publication, no removing lines after publication. Agree the bad-outcome term in writing before money moves: either the honest review publishes and the fee is kept, or a partial kill fee is paid and nothing publishes.
- A paid tool gets the same dated shutdown note as any other tool if it dies. Paying buys no exemption.
- Never let "No sponsored content" render on a sponsored post. The byline in `src/app/blog/[slug]/page.tsx` is conditional on `post.sponsored` for this reason.
- Labelling covers four surfaces: the post body (`SponsoredNotice`), and three listings (`FeaturedPost`, `BlogCard`, `RelatedPosts`) via `SponsoredBadge`. Any new listing surface must carry the badge too.
- External links on sponsored posts get `rel="sponsored nofollow"` via the `SponsoredAnchor` override. Internal links stay untouched.

## 9. Framework caveat

- This Next.js version has breaking changes vs. common training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing framework code. Heed deprecation notices.

## 10. Always verify with a live search, never from memory alone

Added 2026-09-16 after telling the user Connectively was a dead product. It was not. Cision discontinued it on 2024-12-09, Featured then bought the brand and relaunched it, and by 2026-06-09 it had passed 100,000 users. The correct, current answer was in the same search results that produced the wrong one.

- **Never answer a factual question from training knowledge alone.** Prices, tiers, tool status, company ownership, platform features, policies, dates and product names all change. Search or fetch before asserting, every time, including when the fact feels certain.
- **A status code describes a server, not a business.** 403 is usually a bot wall (Notevibes, CapCut, Ahrefs). 429 is a rate limit from a server that is very much running (Connectively). 000 can be a transient failure (Flick). Only NXDOMAIN or a sustained SERVFAIL across independent resolvers is evidence of death, and even then read the page before saying a product is gone.
- **A shutdown notice is not proof of current state.** Check whether the thing came back under new ownership. Vendors do not update their own obituary pages.
- **Prefer primary sources.** Vendor pricing page, press release, court docket, official docs. Aggregators and "best X in 2026" blogs have been wrong here repeatedly: Murf, ElevenLabs, Suno, the AdSense six-month rule.
- **Watch for the annual-billing trap.** Pricing pages often default to the annual view. Record the monthly figure and say which is which. This produced wrong prices for Suno and Murf.
- **Re-verify immediately before any outward-facing use.** A fact that was true last month is not cleared for a pitch to a journalist today. Sending a stale figure costs more than sending nothing.
- **When sources conflict, say so** and give the confidence level, rather than picking the more definite-sounding one. Do not present an unverified number as verified; label it.

## 11. Rule persistence

- These hard rules must exist in the project (this file) AND in assistant auto-memory.
- If memory is lost, restore rules from this file.
- If this file is edited, mirror the change into auto-memory.

## 12. Hosting — static export, and why it has to stay that way

Added 2026-11-04, the day Vercel paused the site. Cause: 4h 51m of Fluid Active
CPU against a 4 hour Hobby allowance, with the pause set to run to 2026-12-04.
Full account in `HOSTING.md`.

- **The site is a static export on Cloudflare Pages.** `output: "export"`, built
  to `out/`. There is no server. Do not add server-rendered routes, ISR,
  `revalidate`, middleware, or anything that reads `searchParams`, `cookies()`
  or `headers()` on the server. Any of those breaks the build outright.
- **Per-request work costs quota and quota is what took the site down.** If
  something genuinely needs a server it goes in `functions/` as a Cloudflare
  Pages Function, and only after asking. There is exactly one today, the
  newsletter signup.
- **Never block bots in application code.** The deleted middleware blocked
  scrapers by running a function for every scraper, which is what burned the
  CPU. Blocking belongs at the Cloudflare edge, where it is free. And never
  block YandexBot while `scripts/indexnow.mjs` is feeding IndexNow.
- **Vercel Hobby is not an option to go back to.** Its fair use guidelines
  restrict Hobby to non-commercial use, and define commercial to include
  affiliate links, advertisements and paid placement. This site does all three
  and documents them on `/disclosure`. Do not ask Vercel support to unpause the
  old account; it invites a review that the account would fail.
- **Add `Content-Type` checks to the post-deploy verification.** Next emits the
  102 metadata images with no file extension, so `public/_headers` is the only
  thing stopping every social card on the site serving as
  `application/octet-stream`. Nothing fails loudly when that breaks.
