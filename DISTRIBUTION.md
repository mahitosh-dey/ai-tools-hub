# Distribution and Daily Operations

Working document. Companion to `OUTREACH.md`, which covers link building.
This one covers publishing, syndication, and the daily routine.

Platform facts verified 2026-09-16. Re-check before acting on any of them.

Identity everywhere: **Mahitosh Dey**, mahitosh@aivaultblog.com,
linkedin.com/in/mahitosh-dey-b70575147

---

## Read this before anything else

**Medium, Reddit and Quora links are all nofollow.** They pass no ranking
credit and they will not move DR by a single point. Anyone who tells you
otherwise is selling something.

What they do give you is **readers**, and readers are what AdSense pays for.
So these three are a traffic channel, not a link channel.

Only one channel below builds DR: journalist requests. A single editorial
link from a real publication is worth more than a thousand Reddit upvotes.

Keep the two goals separate in your head or you will measure the wrong thing.

| Channel | Gives you | Moves DR? |
|---|---|---|
| Connectively / HARO / Qwoted | Editorial links from news sites | **Yes** |
| Directories | Weak links | Slightly |
| Medium | Readers, second-chance ranking | No |
| Reddit | Readers, fast feedback | No |
| Quora | Readers, long tail, compounds for years | No |

---

## Accounts to create

Do these in order. Week 1 is signup only. Do not post links yet.

### Journalist request services, the ones that build DR

| Service | Cost | Notes |
|---|---|---|
| **Connectively** (connectively.us) | Free tier | **The main one.** Alive and growing, see below |
| **HARO** (helpareporter.com) | Free | The three-times-a-day newsletter. Same company |
| **Featured** (featured.com) | Free tier | Owns all three brands above |
| **Qwoted** (qwoted.com) | Free tier | Good for tech and SaaS reporters |
| **SourceBottle** (sourcebottle.com) | Free | Smaller, AU/UK heavy |
| **MentionMatch** (mentionmatch.com) | Free | Was "Help a B2B Writer" until it renamed |

### Connectively: what actually happened

Get this right, because most guides online have it wrong in one direction or
the other.

- **2024-12-09**: Cision permanently discontinued Connectively. This is the
  event every outdated blog post is still describing.
- **2025**: Featured acquired the HARO and Connectively brands and revived
  HARO first.
- **2026**: Featured revived **Connectively** as its platform product.
  Featured's own app moved into it: profiles, subscriptions and workflows all
  migrated to Connectively.
- **2026-06-09**: Connectively passed **100,000 users**, per a PR Newswire
  release. Featured's CEO Brett Farmiloe: "surpassing 100,000 users tells us
  Connectively isn't just back, it's growing."

So the split today is: **HARO** is the free newsletter, **Connectively** is the
platform with filtering, response tracking and opportunity management, and
**Featured** owns both.

Sign up for Connectively. It is the one with the real interface.

Reported pricing is a free tier at around 10 pitches a month, then Core $20,
Pro $50 and Premier $150 a month. **Treat those numbers as unverified.**
They come from comparison sites, not from Connectively, because connectively.us
sits behind a Vercel bot check that blocks automated reads. Open the pricing
page in your browser and confirm before paying for anything.

### A mistake worth keeping here

An earlier version of this file said Connectively was dead and told you not to
waste time on it. That was wrong, and it was wrong for the exact reason this
whole site exists.

The check returned HTTP 429, a rate limit from a live server behind Vercel's
bot protection, and that was read as confirmation of death. A 429 is proof a
server is running. Two days earlier the same mistake was avoided with Notevibes,
where a 403 turned out to be a Cloudflare wall in front of a healthy product,
and the lesson did not get applied here.

Then Cision's 2024 shutdown notice was taken as current, when it was a
historical page that Cision has never updated. The newer fact, a 2026 relaunch
by a different owner, was sitting in the same search results and got
under-weighted.

Status codes describe servers. Only reading the page describes a business.

Profile setup, same everywhere: real name, the site, one line saying you
publish dated verification research on AI tools. No buzzwords. Reporters
choose sources who sound like people.

### Publishing platforms

| Platform | Account note |
|---|---|
| **Medium** | Free. Use the **Import story** tool, never copy and paste. See below |
| **Reddit** | Free. Account must age and earn karma before it posts links |
| **Quora** | Free. Fill the bio and credentials properly, it affects answer reach |

---

## The Medium rule that people get wrong

If you copy and paste a post into Medium, you create a duplicate of your own
page. Medium has enormous authority, so **Medium's copy can outrank yours**,
and you end up sending your own readers to Medium instead of your site.

Use Medium's **Import story** feature instead. Paste your post URL and Medium
pulls the content in and sets `rel=canonical` back to aivaultblog.com
automatically. Google then knows yours is the original.

Check the canonical is there before publishing. Every time. It takes ten
seconds and it is the difference between distribution and self-sabotage.

Syndicate **one post per week**, and never a brand new one. Wait two to three
weeks after publishing so Google has indexed the original first.

---

## The Reddit and Quora rule that gets people banned

Both platforms ban accounts that arrive and start posting links. Reddit is
especially fast about it, and many subreddits auto-remove links from accounts
with low karma regardless of what the link is.

**Weeks 1 to 3: no links at all.** None. Answer questions, comment, be useful.
Build to roughly 100 comment karma on Reddit before you post any link.

After that, the ratio is **nine helpful posts with no link, one post with a
link**. If that feels slow, it is, and it is still faster than getting banned
and starting over.

The test for whether a link belongs: would the answer still be good with the
link deleted? If yes, include it. If the link is the answer, do not post.

### Where to be

**Reddit**: r/artificial, r/SaaS, r/Entrepreneur, r/editors, r/Teachers,
r/NewTubers, r/ArtificialInteligence

**Quora**: search these and answer the real ones, not the spam ones
- is [tool] worth it
- best free AI tools for [use case]
- is [tool] still working
- alternatives to [tool]

Quora is slow but it compounds. A good answer keeps earning views for years,
which is the opposite of Reddit, where a post is dead in 48 hours.

---

## Daily routine

Budget about 90 minutes. Consistency beats volume. A short session every day
beats a five hour session on Sunday.

| Time | Task | Minutes |
|---|---|---|
| Morning | Read the HARO / Featured / Qwoted emails. Answer only where you already know the answer from your own research | 20 |
| Morning | One Quora answer, properly written | 20 |
| Midday | Reddit: two genuine comments, no links | 15 |
| Afternoon | Blog work, see weekly plan | 30 |
| End of day | Log what you sent in the table in `OUTREACH.md` | 5 |

**The pitching rule.** Most days there will be nothing worth answering.
Answering nothing is the correct action on those days.

This is not a productivity tip, it is the history of the platform. Under
Cision, popular queries drew hundreds of replies, a growing share of them
AI-generated boilerplate signed by invented experts. Journalists stopped
reading past the first screen, then stopped posting queries, and the platform
was discontinued in 2024. It took a new owner and two years to rebuild it.

Send one verified answer a week and you will stand out more than someone
sending twenty. The filler is your competition, and it is bad.

---

## Weekly routine

| Day | Work |
|---|---|
| Monday | Research the week's post. Present findings, no writing yet |
| Tuesday | Write the post after research is approved |
| Wednesday | Publish. Cover image, then IndexNow |
| Thursday | Syndicate an older post to Medium via Import story |
| Friday | Outreach batch: five correction emails maximum |
| Saturday | **Off.** PLAN-MONTH.md sets Monday to Friday working days and this line contradicted it |
| Sunday | Off |

One new post a week is the target, not three. You have 45 posts and almost no
readers. The problem is not that you have too little content.

---

## What to expect, honestly

**Month 1**: almost nothing. Accounts created, karma built, a few answers sent.
Possibly one link. This month feels like failure and is not.

**Month 2**: Quora answers start showing views. Maybe one HARO placement.

**Month 3**: if the routine held, the compounding becomes visible.

Most people quit in month 1 because month 1 has no reward. The entire strategy
is just continuing past that point.

---

## Never do this

- Copy and paste into Medium without a canonical link
- Post a link on Reddit from a new account
- Answer a HARO query on a topic you have not personally verified
- Send the same text to several journalists
- Buy links, exchange links, or pay for guest posts
- Pitch a fact without re-checking it that day

The last one matters most. This site's only asset is being right. One stale
figure sent to a reporter costs more than a month of silence.
