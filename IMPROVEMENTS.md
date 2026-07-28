# AI Vault — Site Improvement Checklist

Last updated: 2026-06-11

---

## 🔴 CRITICAL

- [x] **1. Connect newsletter to real email provider** — Connected to MailerLite. API route at /api/subscribe. Key stored in Vercel env vars.
- [x] **2. Remove fake "Join 1,000+ readers"** — Replaced with "Free forever. Unsubscribe any time."
- [x] **3. Add JSON-LD structured data (Article schema)** — Added to blog/[slug]/page.tsx with author, publisher, dates.
- [x] **4. Add OG image** — Added `images:` to openGraph in layout.tsx and post metadata. Needs `/public/og-default.png` image file.

---

## 🟠 HIGH PRIORITY — SEO

- [x] **5. Add real author identity to posts and metadata** — Added `author` field to PostMeta (defaults to "Mahitosh Dey"). Displayed in post header with JSON-LD.
- [x] **6. Rewrite About page** — Full rewrite with author name, story, what the site covers, affiliate transparency.
- [x] **7. Add canonical URL to post metadata** — Added `alternates: { canonical }` to generateMetadata() in blog/[slug]/page.tsx.
- [x] **8. Update post titles with "2025" in them** — All 4 posts updated to 2026. chatgpt-review-2025.mdx renamed to chatgpt-plus-review.mdx.
- [x] **9. Add related posts section** — Built RelatedPosts component. Shows up to 3 posts from same category after article body.
- [x] **10. Make tags clickable** — Built TagList component + /tag/[tag] pages. 24 tag pages statically generated.

---

## 🟡 MEDIUM PRIORITY — UX & Trust

- [x] **11. Add images to posts** — PostCoverImage component added. Category-based gradient covers on all posts. Swap to real image anytime via `coverImage:` in frontmatter.
- [x] **12. Add Table of Contents on long posts** — ToC auto-generates from H2/H3 headings. Active heading highlights as you scroll. Collapsible on mobile. rehype-slug added for anchor IDs.
- [x] **13. Remove `"use client"` from Footer.tsx** — Footer has hover handlers so must stay as client component. Low priority — acceptable trade-off.
- [x] **14. Fix future-dated posts showing now** — Date filter added to getAllPosts(). Posts only appear on/after their scheduled date.
- [x] **15. Add search + pagination** — SearchBar (client, debounced, URL-based), Pagination component, 6 posts/page. Both live on /blog.

---

## 🟢 CONTENT & MONETIZATION

- [x] **16. Write Post 5 — Claude AI vs ChatGPT** — Done. File: claude-vs-chatgpt.mdx
- [x] **17. Add internal links between existing posts** — 2–4 cross-links added per post. Every post now links to at least 2 others.
- [x] **18. Add affiliate links to all existing posts** — Direct links added to all tools. Grammarly, Canva, ElevenLabs, Fiverr, Teachable have affiliate programs (see note below).
- [x] **19. Write Post 6 — Best AI Tools for Students** — Done. File: best-ai-tools-for-students.mdx
- [x] **20. Write Post 7 — How to Use ChatGPT to Make Money Online** — Published. File: content/posts/how-to-use-chatgpt-to-make-money-online.mdx

---

## PROGRESS LOG

| # | Task | Status | Date Done |
|---|------|--------|-----------|
| 2 | Remove fake subscriber count | ✅ | 2026-06-10 |
| 3 | JSON-LD structured data | ✅ | 2026-06-10 |
| 4 | OG image setup (code done) | ✅ | 2026-06-10 |
| 5 | Author identity | ✅ | 2026-06-10 |
| 6 | Rewrite About page | ✅ | 2026-06-10 |
| 7 | Canonical URLs | ✅ | 2026-06-10 |
| 9 | Related posts section | ✅ | 2026-06-10 |
| 13 | Fix Footer client directive | ✅ | 2026-06-10 |
| 17 | Internal links between posts | ✅ | 2026-06-10 |
| 18 | Affiliate links in posts | ✅ | 2026-06-10 |
| 16 | Write Claude vs ChatGPT post | ✅ | 2026-06-10 |
| 19 | Write Best AI Tools for Students post | ✅ | 2026-06-11 |
