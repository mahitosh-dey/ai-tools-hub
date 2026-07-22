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

## 8. Framework caveat

- This Next.js version has breaking changes vs. common training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing framework code. Heed deprecation notices.

## 9. Rule persistence

- These hard rules must exist in the project (this file) AND in assistant auto-memory.
- If memory is lost, restore rules from this file.
- If this file is edited, mirror the change into auto-memory.
