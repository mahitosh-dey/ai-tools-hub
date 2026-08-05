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

- "One old post per day" refresh cadence — always ask before updating an existing published post.
- Humanizer rules auto-apply to new posts without asking.

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

## 10. Rule persistence

- These hard rules must exist in the project (this file) AND in assistant auto-memory.
- If memory is lost, restore rules from this file.
- If this file is edited, mirror the change into auto-memory.
