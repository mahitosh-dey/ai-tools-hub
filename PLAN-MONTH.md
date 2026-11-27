# One Month Plan: 2026-11-06 to 2026-12-04

Working days Monday to Friday. Saturday and Sunday off, properly off.
21 working days.

Review date: **Friday 2026-12-04**. Measure against the targets honestly,
including what missed.

---

## Review of the last plan, 2026-09-17 to 2026-10-16

The review date was 2026-10-16 and it did not happen. The plan then sat
untouched for 21 days. This section is that review, late.

### What I can measure from the repository

| Target | Baseline | Goal | Actual 2026-11-06 |
|---|---|---|---|
| New posts | n/a | 2 per week from 2026-10-08 | **10 posts in 50 days. Met** |
| Posts over 30 days since check | 14 | 0 | **25. Missed, and worse than baseline** |
| Posts over 45 days | 1 | 0 | **12. Missed badly** |
| Posts over 60 days | n/a | n/a | **9** |
| IndexNow running | no | yes | **Yes, first successful run 2026-11-05** |
| Middleware question | open | decided | **Closed 2026-11-04, by deletion** |

### What only you can measure

I have no access to Search Console, Bing Webmaster Tools or Ahrefs, so these
stay blank until you fill them in. Do not let me guess at them.

| Target | Baseline | Goal | Actual |
|---|---|---|---|
| Dofollow referring domains | 0 | 3 | |
| Google clicks, 28 days | 2 | 10 | |
| Google impressions, 28 days | 3,780 | 5,500 | |
| Bing indexed pages | 53 | 80 | |

The referring domains number is almost certainly still zero. The last plan
predicted that outcome in writing, for the stated reason: the outreach never
left the building. `OUTREACH.md` records one Connectively answer still pending
from 2026-09-24, one correction abandoned before sending, and two inbound
conversations. No outbound campaign ran.

### The one that went well

The Higgsfield exchange on 2026-10-08 is worth keeping as the template. They
asked for three changes, two of which would have made the page wrong, and the
answer granted the format point and refused the figure with the reading date
attached. Their reply was "That works for us." Holding an accuracy line turned
out to cost nothing and the relationship survived.

### Still not done, flagged 2026-09-17

`src/app/privacy/page.tsx` and `src/app/terms/page.tsx` still say this site runs
AdSense. It does not. There is also no `public/ads.txt` at all. Fifty days is
long enough for a page to be wrong about its own business model.

---

## The finding that shapes this month

Content production went up and maintenance went down. Both at once, and the
second one is not laziness. It is arithmetic nobody did.

At 55 posts, holding every post to a 45-day maximum needs **8.6 refreshes a
week**. The one-old-post-a-day rule, on weekdays only, allows **5**. Five a
week sustains an archive of about **32 posts** at that standard. The site has
55 and grows by two every week.

So the rule cannot hold the target, the gap widens with every post published,
and the last month is exactly what that looks like: ten new posts shipped while
posts over 45 days went from one to twelve.

Three ways out, and only one of them is good.

**Publish less.** Rejected. The cadence is the thing producing the asset.

**Refresh more.** Eight a week is most of the working day, every day, forever.

**Stop refreshing by post and start correcting by fact.** This is the answer.
A vendor changes one thing, that one thing is wrong in eleven posts, and the
expensive part is the research, not the editing. Done post by post, that is
eleven research sessions. Done fact first, it is one.

The two sweeps queued right now prove the point. Cursor's reprice and the
Claude context-window claim between them touch **13 posts**. Each needs one
research step. Post by post that is thirteen days under the old rule. Fact
first it is two sessions and a batch of small edits.

**So the rule changed to match.** One *fact* per day, applied everywhere it
appears, instead of one post per day. Approved and amended in `HARD-RULES.md`
section 3 on 2026-11-06, and mirrored into memory. Asking before editing a
published post is unchanged.

---

## What changed since the last plan was written

The site moved off Vercel on 2026-11-04 after the Hobby plan paused it for
exceeding its CPU allowance, and because Vercel's Hobby terms forbid the
affiliate links and paid placements this site carries. It is now a static
export on Cloudflare Pages. Full account in `HOSTING.md`.

Three operational consequences for this month:

- There is no server. No ISR, no middleware, no server-rendered routes. A
  Pages Function costs quota and needs asking about first.
- IndexNow works for the first time, because the middleware that was blocking
  its own key file is gone. Run it after every publish and every refresh.
- Bot blocking belongs at the Cloudflare edge, never in application code.

Two small cleanups outstanding: `NODE_VERSION` is still 20 and Cloudflare warns
it is past end of life, and the apex domain serves the site rather than
redirecting to `www`.

---

## The targets

| Target | Now | Goal by 2026-12-04 |
|---|---|---|
| **Dofollow referring domains** | 0 | **2**. Lowered from 3 because 3 was missed from the same standing start |
| Posts over 60 days | 9 | **0** |
| Posts over 45 days | 12 | **4** |
| Posts over 30 days | 25 | no target, it is the wrong metric |
| New posts | n/a | **2 a week, held** |
| Facts swept across the archive | 0 | **3** |
| Privacy, terms and ads.txt honest | no | **yes** |

Note what is not a target. "Posts over 30 days" is dropped, because chasing it
is what produced a month of refreshing while the real work waited. Sixty days
is the line where a post becomes actively misleading. Forty-five is the line
worth defending. Thirty is tidiness.

Google clicks and impressions are deliberately absent. Two months of data say
this site's Google channel does not respond to content, it responds to links,
and there are no links. Setting a clicks target again would be measuring the
wrong half of the machine.

---

## Who does what

Unchanged, and worth repeating because it is the part that slipped.

| Yours | Mine |
|---|---|
| Create accounts | Research and verification |
| Send journalist answers | Draft the answer for you to edit and send |
| Post on Reddit and Quora | Draft, fact-check, humanize |
| Publish on Medium | Prepare the post, check the canonical |
| Decide what ships | Technical fixes, indexing, audits, builds |
| Cloudflare and GSC dashboards | Everything in the repository |

Generating cover images is yours. The prompt is mine, and it goes in
`COVER-IMAGES.md` before the post ships, not after.

---

## Week 1: 2026-11-06 to 2026-11-13

Clear the two queued sweeps and fix the pages that lie about the business.

- ~~**Finish the Cursor sweep.**~~ **Done 2026-11-06**, one session as planned.
  All six corrected: `ai-coding-agent-pricing-2026`,
  `top-ai-coding-assistants-for-beginners`, `ai-agents-for-freelancers`,
  `best-ai-tools-under-20-dollars-2026`, `ai-pricing-changes-2026`,
  `best-ai-tools-for-freelancers`. Note for the next sweep: they were not "all
  small". The queue counted twelve spots by grepping for Cursor beside a dead price
  and the real figure was about thirty, because the lines describing the retired
  pricing *structure* carry no number. Two posts needed an argument reworked rather
  than a figure swapped. Budget accordingly.
- ~~**Sweep the Claude context claim.**~~ **Done 2026-11-10.** It was seven
  posts, not nine. Three of the nine were false positives (200K lines of code,
  200,000 monthly views, and Haiku 4.5's genuine 200K window) and two had
  already been corrected on 3 November. The answer took two passes and the
  first one was wrong, which is the lesson worth keeping. Reading the pricing
  page alone gives "up to 1M, varying by model, every plan including the free
  one", and all seven posts were edited to say that in the morning. Anthropic's
  support article 8606394, found that afternoon, gives a per-model ladder
  instead: 1M on the newest models, 500K on the previous generation, 200K
  outside that list, varying again by product surface, and it never mentions
  the free plan at all. All seven were corrected a second time. One vendor
  page is not a source when the vendor publishes two. Two posts
  carried a retired model name in the same sentence. `gpt5-vs-claude4` is
  flagged for a full refresh: its whole comparison table describes a model
  lineup Anthropic has replaced.
- **Fix privacy, terms and ads.txt.** Either run AdSense or stop saying so.
- **Two new posts**, researched and approved as usual.
- `NODE_VERSION` to 22 and the apex redirect, both yours, both five minutes.

**Week 1 done means:** both sweeps closed, 13 posts corrected from two research
sessions rather than thirteen days, the site honest about its own advertising,
cadence held.

**Status at 2026-11-10.** Both sweeps are closed: 6 posts for Cursor on the 6th,
7 for the Claude context window on the 10th. An unplanned emergency took the
10th as well, after Search Console reported 21 pages as Not found: 94 tag URLs
were 404ing because tag pages are generated from post frontmatter and nobody
had redirected the slugs that editing had removed. Fixed, and hard rule 2c now
prevents a repeat.

**Status at 2026-11-12. Week 1 is done, with a day to spare.** The three
contradictory AdSense lines are gone, and `ads.txt` was deliberately not added:
no ad network runs here, so there is no authorised seller to declare and an
empty file would be its own small lie. Both posts shipped, post 56 on the 10th
and post 57 on the 12th, so cadence held in the week the plan expected it to
break. Two unplanned fixes landed as well: two orphan pages given inbound
links, and an Ahrefs Health Score drop from 100 to 75 traced to Cloudflare's
Email Address Obfuscation injecting a link to a 404 endpoint on all 91 pages,
now switched off and verified clean. Still yours: `NODE_VERSION` to 22, the
apex redirect, a fresh Ahrefs crawl, and Validate Fix in Search Console on
Not found (404) and Blocked due to other 4xx.

---

## Week 2: 2026-11-16 to 2026-11-20

**Rewritten 2026-11-16. The outreach half of this week is cancelled, not
slipped.** The user asked what the benefit of the two prepared emails actually
was, and the honest answer was almost none: this email converts to a link
about one time in ten, so at the two or three sends a week this site can
sustain the expected return is zero. All cold outreach is now closed, vendors
and bloggers alike, as rule 13 in `HARD-RULES.md`. The two drafts stay in
`OUTREACH.md` as a record and are not to be revived.

That leaves this plan without its growth lever, which is a real problem and
not one to paper over. See the note at the end of this section.

- ~~Monday: pick two targets and verify them.~~ Done on 13 November, re-checked
  on 16 November, then cancelled. The re-check was still worth it: it caught
  that `lightfield.ai` is a registrar parking page rather than the company,
  which would have sent a stranger to a domain-for-sale page.
- ~~Tuesday and Wednesday: send them.~~ Cancelled.
- **Two new posts.** One done: `ai-api-price-increases-december-2026`,
  published 16 November. One still due.
- Drift, corrected 2026-11-16: `are-ai-detectors-accurate` and
  `best-ai-tools-for-social-media` were both already refreshed before this week
  began, and this line named them anyway for three days. The current oldest are
  `chatgpt-vs-google-gemini`, `how-to-use-midjourney-beginners`,
  `midjourney-vs-dalle3` and `midjourney-vs-stable-diffusion` at 77 days, then
  `gpt5-vs-claude4` and `perplexity-ai-review` at 76. Re-count before trusting
  this line again, because it has now been wrong once.
- `gpt5-vs-claude4` is the one to take first when a refresh slot opens. It is
  a generation behind on both vendors and now contradicts three newer posts on
  this site, which is worse than being merely stale.

**Week 2 done means:** two new posts published, cadence held. The outreach
criterion is removed rather than failed.

**The open question this leaves.** This plan opened by saying backlinks are the
only lever on Google position and this site has zero. Outreach was the answer
to that and the answer is now gone. What has not changed is that Bing already
ranks this content at about 5.7 without links, so the content is not the
problem. Do not quietly replace outreach with more correction work, which is
what will happen by default, because corrections cannot produce a referring
domain either. Decide on 2026-12-04 what the honest growth plan is, or write
down that there is not one and that cadence plus Bing is the strategy.

---

## Week 3: 2026-11-23 to 2026-11-27

Compounding, and the first honest look at what is left now that outreach is
closed.

- ~~Two more outreach sends, different targets, same standard.~~ Cancelled
  2026-11-16 along with the rest of the channel. See week 2.
- **Two new posts.**
- Clear the rest of the over-60 list, `gpt5-vs-claude4` first.
- **Friday: pull the numbers.** Referring domains, Bing indexed, Google
  clicks. Compare against this plan's table and say plainly what moved.
  Referring domains will be flat, since nothing was sent and nothing will be.
  Report it as flat rather than as a miss.
- ~~Medium syndication of an older post, using Import story so the canonical
  stays here.~~ **Done 2026-11-27.** `are-ai-detectors-accurate` published at
  https://medium.com/@mahitosh/are-ai-detectors-accurate-in-2026-the-arithmetic-nobody-does-079307616764

  Chosen on one criterion above all others: it contains **no dollar figures**.
  A syndicated copy never gets maintained, so anything with prices in it rots
  in public under your name. It also carries four internal links home, no
  external links at all, and an argument rather than a list.

  The post was re-verified the same morning before it went out, under rule 10,
  and that caught a real problem. GPTZero had replaced its 1 percent false
  positive ceiling with below 0.03 percent at some point in the previous
  fortnight, with no announcement, which broke the sentence the post's central
  argument rested on. Nine surfaces were corrected first (commit `3ffaf2e`).
  A post arguing that detector numbers drift silently was itself quoting a
  number that had drifted silently. Re-verify before outward-facing use is not
  a formality, and this is the evidence.

  **Open question that decides whether this counts.** Medium's outbound links
  are widely reported to carry `nofollow` or `ugc`. This could not be checked
  from here, because Medium returns 403 to automated requests, which is a bot
  wall and not a verdict. If the links are nofollow, this produces a referring
  domain but **not a dofollow one**, and the month's headline target is missed
  rather than met. Settle it in devtools before the review and write down
  whichever answer is true.

**Week 3 done means:** over-60 list at zero, mid-month numbers known rather
than assumed, and a decision recorded about what replaces outreach.

---

## Week 4: 2026-11-30 to 2026-12-04

Finish and measure.

- Two more sends.
- **Two new posts.**
- Third fact sweep, chosen from whatever the month turned up.
- **Friday 4 December: review against the target table.** Honestly. Anything
  missed gets written down as missed, not reframed. Then write the next month
  from real numbers, on the day, not three weeks later.

---

## Standing rules

- **One fact per day, swept everywhere it appears.** Replaced one old post per
  day on 2026-11-06, in `HARD-RULES.md` section 3. Still ask before editing a
  published post.
- **Minimum two new posts per week.** Correction work does not count.
- Never write final content before showing research and getting approval.
- Re-verify any fact on the day you use it.
- Never ask anyone for a link. Offer a fact that stands on its own.
- Never buy links, exchange links, or pay for guest posts.
- Log every send in `OUTREACH.md` on the day it goes.
- Run IndexNow after every publish and every refresh. It works now.
- Verify sitemap and JSON-LD after any change. Check that
  `/blog/<slug>/opengraph-image` still serves `image/png`.
- Never push or deploy without explicit permission.
- Saturday and Sunday are off.

---

## What will probably go wrong

**Outreach will slip again.** It slipped every week of the last plan, for the
same reason it will slip in week 2: correction work feels productive and
outreach feels like asking a stranger for a favour. The difference is that
corrections cannot produce a referring domain and outreach can. If week 2 ends
with zero sent, the honest move on 2026-12-04 is to write down that outreach
failed twice and stop planning for it, rather than planning it a third time.

**The fact-sweep method will be slower than it looks on the first run.** The
research is the expensive part and it does not get cheaper just because the
edits are batched. Expect the first sweep to take most of a day.

**Two posts a week will collide with the sweeps in week 1.** If something has
to give in that week only, it is the second post, and it gets written down as
missed.

**Nine posts over 60 days is worse than it sounds.** This category of content
goes wrong quietly. Every single drift post checked at depth so far has
contained a real error, and that record is now nine for nine. Assume the
remaining nine contain errors too, because the evidence says they do.
