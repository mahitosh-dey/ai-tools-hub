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

- **Finish the Cursor sweep.** Six posts left, all small now the hub post is
  correct: `ai-coding-agent-pricing-2026`, `top-ai-coding-assistants-for-beginners`,
  `ai-agents-for-freelancers`, `best-ai-tools-under-20-dollars-2026`,
  `ai-pricing-changes-2026`, `best-ai-tools-for-freelancers`. One session, not six.
- **Sweep the Claude context claim.** Nine posts say a flat 200,000-token
  window. Research once, verify against Anthropic's live pricing page, correct
  everywhere. Two of those posts also need the Cursor fix, so do those two once.
- **Fix privacy, terms and ads.txt.** Either run AdSense or stop saying so.
- **Two new posts**, researched and approved as usual.
- `NODE_VERSION` to 22 and the apex redirect, both yours, both five minutes.

**Week 1 done means:** both sweeps closed, 13 posts corrected from two research
sessions rather than thirteen days, the site honest about its own advertising,
cadence held.

---

## Week 2: 2026-11-16 to 2026-11-20

Outreach starts, and nothing displaces it.

- **Monday: pick two targets and verify them.** Not a list of twenty. Two,
  checked live, where a specific published finding of ours is useful to them.
- **Tuesday and Wednesday: send them.** This is the block that moves the only
  metric that matters. Nothing else goes in this slot.
- The strongest assets to lead with are the ones nobody else has: the GitHub
  Copilot marketing page contradicting its own model documentation, and
  Aider's final commit adding a model five versions out of date.
- **Two new posts.**
- Oldest-first drift: `are-ai-detectors-accurate` at 73 days and
  `best-ai-tools-for-social-media` at 71.

**Week 2 done means:** two outreach emails actually sent, logged in
`OUTREACH.md` with the date and the ask, cadence held, two posts off the
over-60 list.

---

## Week 3: 2026-11-23 to 2026-11-27

Compounding, and the first honest look at whether outreach works.

- Two more outreach sends, different targets, same standard.
- **Two new posts.**
- Clear the rest of the over-60 list.
- **Friday: pull the numbers.** Referring domains, Bing indexed, Google
  clicks. Compare against this plan's table and say plainly what moved.
- Medium syndication of an older post, using Import story so the canonical
  stays here.

**Week 3 done means:** four sends total, over-60 list at zero, mid-month
numbers known rather than assumed.

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
