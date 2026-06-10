# AI Vault — Site Improvement Checklist

Last updated: 2026-06-10

---

## 🔴 CRITICAL

- [ ] **1. Connect newsletter to real email provider** — NewsletterSignup.tsx fakes success. Every subscriber is lost. Connect Mailchimp, ConvertKit, or Resend.
- [x] **2. Remove fake "Join 1,000+ readers"** — Replaced with "Free forever. Unsubscribe any time."
- [x] **3. Add JSON-LD structured data (Article schema)** — Added to blog/[slug]/page.tsx with author, publisher, dates.
- [x] **4. Add OG image** — Added `images:` to openGraph in layout.tsx and post metadata. Needs `/public/og-default.png` image file.

---

## 🟠 HIGH PRIORITY — SEO

- [x] **5. Add real author identity to posts and metadata** — Added `author` field to PostMeta (defaults to "Mahtosh Dey"). Displayed in post header with JSON-LD.
- [x] **6. Rewrite About page** — Full rewrite with author name, story, what the site covers, affiliate transparency.
- [x] **7. Add canonical URL to post metadata** — Added `alternates: { canonical }` to generateMetadata() in blog/[slug]/page.tsx.
- [ ] **8. Update post titles with "2025" in them** — Titles say "2025" but published in 2026. Hurts CTR in search. Update to "2026" or remove year.
- [x] **9. Add related posts section** — Built RelatedPosts component. Shows up to 3 posts from same category after article body.
- [ ] **10. Make tags clickable** — Tags on posts are dead `<span>` elements. Link to `/tag/[tag]` pages or remove them entirely.

---

## 🟡 MEDIUM PRIORITY — UX & Trust

- [ ] **11. Add images to posts** — All posts are pure text. No cover image, no screenshots. Add cover images + tool screenshots to every post.
- [ ] **12. Add Table of Contents on long posts** — Posts are 1,500–2,000 words. A ToC improves UX and increases chance of Google featured snippet jump links.
- [x] **13. Remove `"use client"` from Footer.tsx** — Footer has hover handlers so must stay as client component. Low priority — acceptable trade-off.
- [ ] **14. Fix future-dated posts showing now** — midjourney-vs-dalle3 (2026-06-29) and how-to-make-money (2026-08-14) are visible today with future dates. Looks broken. Hide until publish date or re-date.
- [ ] **15. Add search functionality** — No way to search posts. Needed once 10+ posts are live.

---

## 🟢 CONTENT & MONETIZATION

- [ ] **16. Write Post 5 — Claude AI vs ChatGPT** — Due 2026-06-17 (Wednesday). Next on content calendar.
- [ ] **17. Add internal links between existing posts** — None of the 6 posts link to each other. Easy SEO wins sitting on the table.
- [ ] **18. Add affiliate links to all existing posts** — Zero posts have real affiliate links. This is the revenue model. Fix immediately.
- [ ] **19. Write Post 6 — Best AI Tools for Students** — Due 2026-06-19 (Friday).
- [ ] **20. Write Post 7 — How to Use ChatGPT to Make Money Online** — Due 2026-06-22 (Monday).

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
| 17 | Internal links between posts | ⏳ | — |
| 18 | Affiliate links in posts | ⏳ | — |
