# Backlink Outreach

Working document. Backlinks are the only lever on Google position and this site has zero,
so this is the growth channel. Bing already ranks the content at ~5.7 without links, which is
why that channel works and Google does not.

Identity for all outreach: **Mahitosh Dey**, mahitosh@aivaultblog.com,
linkedin.com/in/mahitosh-dey-b70575147

**Rule for everything below:** never ask for a link. Offer a fact that is useful on its own.
If the fact is good the link follows, and if it does not, the fact was still worth sending.

**Qualify the target before writing a word.** All three checks take a minute and the first
batch skipped them, which is why it was abandoned.

0. **Does the article actually say the thing?** Open the page and find the sentence. Never
   qualify a target off a search result summary. On 2026-11-12 the search said Content
   Mavericks ranked Tome first and listed Replica Studios. Both pages were clean and had
   been updated that same week. Drafting from that summary would have meant writing to a
   twelve-year-old domain to correct an error it never made, which is the fastest way to
   burn a good contact.
1. **Is there a real email address?** If the only route is a contact form, skip it. A form
   leaves no sent record, no thread to reference and no evidence it was read. You cannot
   follow a channel you cannot measure. Cloudflare email obfuscation is not a form: the
   address is real and decodes in any normal browser, it just cannot be fetched.
2. **How old is the domain?** Query the registry, not the registrar:
   `whois -h whois.verisign-grs.com "domain <name>.com" | grep -i 'Creation Date:'`. A plain
   `whois | grep -i 'creation date'` returns `1985-01-01` for every .com, because that is
   when the TLD itself was created. Under about two years and a link is worth close to
   nothing. technoparkai.com turned out to be one day older than this site.

Verify the error first, qualify second, draft third. Drafting before either wastes the
research.

---

## What we actually have to offer

Ranked by how newsworthy each finding is to somebody who is not us. The top four are things
no other publisher has written down, each verifiable in under a minute by the recipient.

All facts below re-verified 2026-09-15. Re-check before every send: the whole point of this
site is that other people pitch stale facts, and sending one would cost more than silence.

| # | Finding | Evidence they can check | Best for |
|---|---|---|---|
| 0 | **Replica Studios died 2025-06-30 and is still on every AI voice list.** The company that signed the first SAG-AFTRA AI voice agreement in 2023 ran out of money. Its domain now returns SERVFAIL and the registration expires 2026-09-25 | The shutdown announcement, the SAG-AFTRA release, and a dead domain | Journalists, AI voice writers, SAG-AFTRA/actor press |
| 1 | **Tome has no working website.** tome.com does not resolve, tome.app returns 404 | Both domains, checkable instantly | Journalists, roundup authors |
| 2 | **LOVO filed Chapter 7** on 2026-05-27, SDNY case 26-11249 | Public court docket | Journalists, AI voice writers |
| 3 | **Runway's "free tier" is 125 one-time credits**, about 10 seconds of video, ever | Runway's own pricing page | Journalists, video creators |
| 4 | **Turnitin's 1.3% false positive rate** means roughly 650 falsely flagged students a year at a 50,000-submission university | Turnitin's published figure, our arithmetic | Education press, teachers |
| 5 | **Play.ht shut down** 2025-12-31 after Meta acqui-hired the team | Dead domain | AI voice roundup authors |
| 6 | **Windsurf is now Devin Desktop**, and the price went $15 to $20 | windsurf.com redirects to devin.ai/desktop | Dev tool writers |
| 7 | **Podcastle renamed itself Async** on 2026-01-28, and most comparison pages still call it Podcastle | Async's own announcement | AI audio and creator-tool writers |

The tracker page collects all of it: `/blog/what-happened-to-ai-tools`

Finding 0 is the strongest thing on this list and it is the newest. A company shutting down is
ordinary. The company that did the *ethical* version shutting down, while the ones that did not
are still trading, is a story with a point to it. It also has a named union angle, which gives
a reporter somebody else to call. Lead with it.

---

## Channel 1: journalist request services

Highest authority per unit of effort. Reporters need dated, sourced figures and we have them.

Sign up for: **Featured**, **HARO**, **Qwoted**, **SourceBottle**, **MentionMatch**.

Ownership as of 2026-09-16. Cision discontinued Connectively on 2024-12-09. Featured then
acquired the HARO and Connectively brands, revived HARO in 2025 and **Connectively in 2026**,
and Connectively passed 100,000 users on 2026-06-09. All three are one company now: HARO is
the free newsletter, Connectively is the platform, Featured owns both. Connectively is very
much alive, whatever the 2024-era blog posts say. Also, Help a B2B Writer renamed itself
MentionMatch, and helpab2bwriter.com now redirects there.

Answer only queries where we already did the work. Do not stretch. A specific number with a
date beats three paragraphs of opinion every time.

**Template**

> Subject: Re: [their query]
>
> Hi [name],
>
> On [their topic]: [one specific figure with its date and where it came from].
>
> I publish AI Vault, where I check whether tools still exist before writing about them. That
> figure came from [source] on [date]. Happy to send the working if useful.
>
> Mahitosh Dey, aivaultblog.com

---

## Channel 2: AI tool directories

Lower authority, but fast and legitimate. Submit the site once, do not resubmit.

There's A Tool For That, Futurepedia, Toolify, Insidr, AI Tool Hunt, TopAI.tools.

Skip anything that charges for a listing or asks for a reciprocal link.

---

## Channel 3: communities

Participation, not promotion. Answer the question first. Link only when it genuinely adds
something the answer needs, and expect most posts to include no link at all.

- **Reddit**: r/artificial, r/SaaS, r/Entrepreneur, r/editors, r/Teachers for the detector maths
- **Hacker News**: the Runway arithmetic and the detector false-positive numbers are the two
  that could land. Post the finding, not the article.
- **Indie Hackers**, **Lobsters** where relevant

The "what happened to Windsurf" and "is Play.ht still working" questions get asked repeatedly.
Answering those properly is genuinely useful and the link is incidental.

---

## Channel 4: correction outreach

Politely tell people their published article recommends something that no longer exists.

Works occasionally, annoys people if done carelessly. Be gracious, expect silence, never
follow up twice.

**Template**

> Subject: Small heads-up on your [topic] piece
>
> Hi [name],
>
> Your [article] lists [tool]. I went to check it while writing something similar and
> [tome.com does not resolve / LOVO filed Chapter 7 on 2026-05-27, case 26-11249].
>
> No agenda here, just thought you would want to know before a reader hits it. Details and
> dates are on my tracker if useful: aivaultblog.com/blog/what-happened-to-ai-tools
>
> Mahitosh

---

## Channel 5: tell the people whose work we used

When we cite a vendor or a source, tell them. This is the highest-response, lowest-effort
category and it is almost always skipped.

Cognition (Devin), Gamma, Runway, Originality.ai and Sapling have all been written about here
with their own figures quoted accurately. A short note saying so is not a pitch.

---

## Cadence

One action per week, sustained, beats a burst then nothing. Suggested order:

1. Week 1: journalist services signup + directory submissions
2. Week 2: first correction outreach batch, five recipients maximum
3. Week 3: community participation, no links for the first few posts
4. Week 4: notify cited vendors
5. Then repeat 2 to 4

## Prepared for week 2, not yet sent

Researched 2026-11-12. Both targets qualified against all three checks above. Nothing has
been sent: sending is yours, and the facts need re-checking on the morning they go, because
a dead domain can be bought by somebody else overnight and a pitch built on a stale reading
would be the exact failure this site exists to point out in other people.

### Facts re-verified 2026-11-12, by direct check rather than by search

| Domain | Observed |
|---|---|
| `tome.com` | no DNS record at all |
| `tome.app` | 404 |
| `lightfield.ai` | 200, the Tome team's sales product |
| `play.ht` | no DNS record |
| `playht.com` | parked, resolves to `anycast.parklogic.com` |
| `lovo.ai` | HTTP 402, header `x-vercel-error: DEPLOYMENT_DISABLED` |
| `replicastudios.com` | no DNS record |
| `podcastle.ai` | 200, redirects to `async.com` |

The LOVO reading is better than the one in the table above and should replace it on the next
pass. The site is not merely offline. It returns `Payment required` with Vercel's
deployment-disabled header, which is a hosting account switched off for non-payment, from a
company that filed Chapter 7 liquidation in the Southern District of New York on 2026-05-27,
case 26-11249. Note the limit of that evidence: a 402 describes a hosting bill, not a
company. The docket is what carries the claim, and the 402 is the detail that makes it
readable.

### Target 1: ToolJunction

`https://www.tooljunction.io/best/best-ai-presentation-tools`, reached at
**contact@tooljunction.io**, published in the footer. Reviewed by Deepak Kumar, Founder.
Domain created 2024-04-28, so 2.5 years old: it clears the two-year bar and not by much, and
the link would be worth little. The pitch is sound and the target is mediocre.

The page ranks Tome at number 2, calls it "the best free option", lists "$16/user/month" and
says "Last updated November 2026". A current price for a product whose domain does not
resolve.

> Subject: Small heads-up on your AI presentation tools page
>
> Hi Deepak,
>
> Your best AI presentation tools page has Tome at number 2 and calls it the best free
> option, at $16 a user a month.
>
> I went to check it while updating something similar, and tome.com no longer resolves at
> all while tome.app returns a 404. The team moved to sales software under the Lightfield
> name, which is live at lightfield.ai. Checked today, [DATE].
>
> No agenda here. The page says it was updated in November 2026, so I thought you would want
> to know before a reader clicks through. Dates and details are on my tracker if useful:
> aivaultblog.com/blog/what-happened-to-ai-tools
>
> Mahitosh

### Target 2: Kripesh Adwani

`https://kripeshadwani.com/best-ai-voice-generators/`. Domain created 2018-01-08, so 8.8
years old, which is the better of the two by a wide margin. Written in the first person by a
named individual, so a real person opens the mail. Last updated 2026-01-03.

The guide ranks Genny by Lovo AI at number 2 and PlayHT at number 3. Both companies are
gone, and both entries carry affiliate links, so the error costs him money rather than only
accuracy. That is the strongest form this pitch takes: it is worth something to the
recipient before it is worth anything to us.

His address sits behind Cloudflare email obfuscation, the same feature switched off on this
site on 2026-11-11. It cannot be fetched. Open the contact page in a browser and it decodes
on sight.

> Subject: Two of the tools in your AI voice guide have gone
>
> Hi Kripesh,
>
> Your best AI voice generators guide ranks Genny by Lovo AI at number 2 and PlayHT at
> number 3.
>
> Both are gone. Lovo filed Chapter 7 liquidation in the Southern District of New York on 27
> May 2026, case 26-11249, and lovo.ai now returns an HTTP 402 with a Vercel
> DEPLOYMENT_DISABLED header, which is a site switched off for non-payment. play.ht does not
> resolve and playht.com is parked. All checked today, [DATE].
>
> I mention it because both entries carry affiliate links, so it is costing you clicks as
> well as accuracy.
>
> No agenda. Details and dates on my tracker if useful:
> aivaultblog.com/blog/what-happened-to-ai-tools
>
> Mahitosh

Neither draft asks for a link.

### Why these two and not the Copilot findings

The month plan nominated the GitHub Copilot contradictions and the Aider commit as the
assets to lead with. They are not used here, deliberately. Those are arguments, and
correcting somebody's argument reads as picking a fight. A domain that does not resolve is a
fact the recipient can check in four seconds, and checking it helps them. The Copilot
material is better aimed at the journalist services, where a reporter wants a sourced figure,
than at a blogger who would have to rewrite a section to act on it.

---

## Tracking

Log every send below. Response rate matters more than volume, and if a channel produces
nothing after ten attempts, stop using it.

| Date | Channel | Target | What was sent | Response | Link? |
|---|---|---|---|---|---|
| 2026-09-24 | Correction | technoparkai, thinkdom | Abandoned before sending: no email address, contact form only | n/a | n/a |
| 2026-09-24 | Connectively | WeblineIndia | Unexpected challenge integrating AI into software development. Reused the Claude Code context story | pending | |
| 2026-09-23 | Inbound | BookTranslator.app (Dott, founder) | He asked to be added to `best-ai-tools-for-students`. Declined: the title says Ranked and Tested and the tool has not been used. Offered to test it if a document translation post is ever written | Accepted without arguing, thread closed 2026-09-23 | no |
| 2026-09-30 | Inbound | Higgsfield (editorial@higgsfield.ai) | Asked to be added to the pricing tracker. Agreed on the page's own terms: figures read off their site, date printed, no access taken. Asked whether Basic and Starter have an annual rate | pending | n/a, no link involved |
| 2026-10-08 | Inbound | Higgsfield (editorial@higgsfield.ai) | After publication they asked for three changes: a single entry price, $15 Starter, and a link to their pricing page. Granted the format point only. The figure is $9 not $15, because their suggestion was a week out of date against the 7 October reading, and no row in that table links out | **"That works for us."** Accepted a no on two of three | no |
| 2026-09-30 | Inbound | Flashi (Archie, hello@flashi.app) | Proposed a dofollow link swap for a place in the students post. Swap declined, no outbound link by arrangement. Offered instead to test Flashi on a provided account under four conditions: no promise of inclusion, no promise of a good verdict, no preview, disclosure in the piece | pending | declined the swap |
| 2026-10-13 | Inbound | EndSchool (Harley, founder) | Asked to join the students post and offered free runs. Declined inclusion: their title tag and meta description say "Bypass Turnitin", and a students list is the wrong place for it. Offered a separate honest piece on humanizers instead | user chose the separate-piece route | n/a |
| 2026-10-14 | Inbound | MentionAgent (matt@mentionagentteam.com) | Proposed mutual mentions. Declined, not replied. Their own homepage sells AI link-building outreach and lists registering a separate sending domain as a feature, which is what mentionagentteam.com is: registered 17 Aug, redirects to mentionagent.ai | no reply sent | declined |
| 2026-10-26 | Inbound | Strawberry (Laurits Wehding, founder) | Asked to join the small-business costs post. Included as a price row, not a recommendation, with its own section stating it arrived by request and is untested. Offered free credits to test properly, no strings. **Declined the credits.** | "Totally fine on the testing offer" | n/a, no link involved |

## What not to do

Buying links, PBNs, guest-post farms, comment spam, link exchanges, and any directory that
requires a reciprocal link. All are against Google's guidelines and a manual action would cost
more than zero backlinks does. It would also contradict everything this site publishes about
verification and honesty.
