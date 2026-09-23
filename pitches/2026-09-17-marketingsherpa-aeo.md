# Pitch draft: MarketingSherpa, transparency and AEO

**Drafted:** 2026-09-17
**Status:** NOT SENT. Abandoned 2026-09-23, deadline was 2026-09-24.

Why it died: the draft was handed over with two bracketed gaps for the author to
fill, twice, rather than as a finished piece. That was the wrong shape of help. The
query asked three things, and two of them, what changed and what surprised you, were
fully answerable from documented evidence already in the repo. Only "how did you get
the idea" genuinely needed the author. Leaving three blanks where one belonged turned
a ten-minute review into a writing task that never got done.

Lesson for future pitches: draft it complete from what is verifiable, mark the single
line that needs confirming, and never hand back more than one open question.

---

## The query

| | |
|---|---|
| **Summary** | How transparency impacts AI recommendations (AEO) and conversion |
| **Journalist** | Daniel Burstein, Senior Director of Content and Marketing |
| **Outlet** | MarketingSherpa, https://marketingsherpa.com |
| **Category** | Business and Finance |
| **Deadline** | 4:21 PM ET, 24 September 2026 |
| **Reply to** | reply+80560017-80fc-4028-9dcb-13a310fbeac5@helpareporter.com |
| **Profile** | https://www.helpareporter.com/journalist/daniel-burstein-1 |
| **Source** | HARO digest, 16 September 2026, evening edition, query 3 of 20 |

**Query text, verbatim:**

> What did you change? How did you get the idea to change it? What surprised you?

**Restriction printed on the query:** "No AI Pitches Considered."

---

## What this editor actually publishes

Checked two of the three sample articles he linked. The format is consistent and
every published contributor supplies a conversion number:

| Contributor | Their number |
|---|---|
| Dave Lertola, REK Marketing | conversion 12.8% to 31.25% |
| Libby Kelly, Calmily | 65% conversion increase |
| Maxime Doussin, MWM | 9.8% conversion increase |
| Phil Forbes, HeyPolo | 47% clickthrough increase |
| Mike Plactere, We Buy Long Island Homes | 21% lift in response |

Contributors are founders, owners, CTOs and agency operators, so the right kind
of person. The gap is the metric: **we have no conversion number.** 2 Google
clicks in 28 days, no product, no signups, no revenue.

The pitch below handles that by saying so outright rather than hiding it.

---

## Draft

> I run a site that reviews AI tools. The change was to publish the date I checked
> something, and to publish the things I could not check.
>
> On my pricing tracker there is a column saying when each price was last read off
> the vendor's own page. Where a vendor blocks automated reading, the row says
> "third-party, unverified" instead of a number I could not confirm. At the bottom
> of other posts there is a sourcing section naming what I failed to check. One of
> them says plainly: not verified, and deliberately not quoted, Canva, and the exact
> prices for Pitch and Slidebean, because they render in JavaScript.
>
> More recently I started writing corrections into the post itself instead of quietly
> editing the page. When I found one of my reviews had named the wrong owner of a
> company for twenty-six days, I wrote that into the article rather than fixing it
> silently.
>
> **[GAP 1: why did you decide to do this? Something made you start. A mistake of
> your own? Something you saw on another site?]**
>
> Here is what happened, and this is the part I did not expect.
>
> Microsoft Copilot cited my site 1,200 times in three months. On some queries my
> citation share is 20 percent. On one it is 50 percent. So AI systems read the
> site, trust it and quote it.
>
> Google clicks in the same period: 2. Against 3,780 impressions.
>
> The AI recommends me and almost nobody arrives.
>
> I cannot tell you that transparency caused the citations. I checked the dates
> before writing this. The open-correction habit is only about a week old, and the
> citation growth started in July, so the timing does not support that claim and I
> am not going to make it.
>
> What I can tell you is what surprised me. Everyone writing about AEO treats the
> citation as the win. I won the citations. The traffic did not follow.
>
> **[GAP 2: anything else that surprised you? Something only you would know.]**

---

## Every factual claim, and where it comes from

| Claim in the draft | Source | Verified |
|---|---|---|
| 1,200 Copilot citations in 3 months | Bing Webmaster Tools, AI Performance, 3M view | 2026-09-16 |
| 20% citation share ("ai youtube automation") | Same, grounding queries table | 2026-09-16 |
| 50% citation share ("best AI tools for social media content") | Same | 2026-09-16 |
| 2 Google clicks, 3,780 impressions, 28 days | Google Search Console | 2026-09-16 |
| Wrong owner for twenty-six days | `content/posts/cursor-ai-review-2026.mdx` says exactly this | 2026-09-17 |
| Canva, Pitch, Slidebean marked unverified | `content/posts/ai-tools-for-client-and-pitch-decks.mdx`, sourcing section, verbatim | 2026-09-17 |
| "third-party, unverified" rows | `content/posts/ai-pricing-changes-2026.mdx` lines 191 to 200 | 2026-09-17 |

Nothing in the draft is unsourced.

---

## The timeline problem, stated on purpose

Checked against git history on 2026-09-17:

| Practice | Started |
|---|---|
| Marking rows "unverified" | around July 2026 |
| Dated checks on posts | 24 of 45 posts carry one |
| Writing corrections into the post | **2026-09-09**, about a week ago |
| Citation growth | began July, jumped early August |

The open-correction habit is far too new to have caused a three month citation
trend. Any careful editor could pull up the site history and see that.

So the draft refuses the causal claim outright. That refusal is the strongest part
of the pitch, because everyone else answering this query will assert a link between
transparency and AEO that they cannot show.

---

## Before sending

- [ ] Fill GAP 1 in your own words
- [ ] Fill GAP 2, or delete it
- [ ] Re-verify the citation and click figures on the day you send, not today
- [ ] Log the send in the tracking table in `OUTREACH.md`

Re-checking on the day matters. These are dashboard numbers that move, and the
whole pitch is about being the person whose figures are current.
