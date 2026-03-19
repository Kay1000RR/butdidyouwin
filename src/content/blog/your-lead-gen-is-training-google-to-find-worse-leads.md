---
title: "Your Lead Gen Is Training Google to Find Worse Leads. Here's How It Happens."
description: 'A diagnostic framework for identifying whether automated bidding is optimizing for revenue-producing leads or algorithmic noise.'
pubDate: 'March 16, 2026'
updatedDate: 'March 16, 2026'
canonical: 'https://butdidyouwin.com/blog/your-lead-gen-is-training-google-to-find-worse-leads'
draft: false
author: 'Kay Inoue'
---

**TL;DR:** When you tell Google or Meta to "maximize leads" at a target cost, the algorithm finds the cheapest form fills on the internet. Bots. Students. Competitors. It learns that these are the goal, then finds more of them. Cost per lead drops. Sales pipeline rots. One technical fix (feeding CRM data back into the ad platforms) breaks the cycle. This article shows how to diagnose whether your account is stuck in this loop and the specific steps to get out.

## The Verdict

Most B2B paid media programs are running a self-reinforcing failure loop. The algorithm finds cheap leads. The team celebrates. Sales ignores them. The algorithm finds more cheap leads. Cost per lead drops. Revenue stays flat. Everyone points fingers.

This is not a campaign optimization problem. It is a structural defect in how the system was built.

- This article explains the mechanism behind what I call the Feedback Loop of Doom: the specific technical failure that causes ad platforms to get worse at finding customers the longer they run.
- It shows why "more leads" and "cheaper leads" are often signals that something is breaking, not improving.
- It is written for executives and operators who fund paid media programs and need to know whether those programs are producing revenue or producing noise.
- The outcome is a clear diagnostic framework and the specific fix that breaks the loop.

## Who This Is For

This is for B2B operators spending $10,000 or more per month on paid media and wondering why the sales team treats marketing leads like spam. For CMOs and VPs of Growth who keep seeing "record lead volume" in the monthly report while pipeline stays anemic. For CEOs who have a nagging feeling that the cost per lead metric everyone celebrates has nothing to do with the closed deals everyone needs.

If your CRM is full and your pipeline is empty, keep reading.

## Definitions

**Feedback Loop of Doom:** A systemic failure where automated bidding learns to optimize for the cheapest possible conversion signal (form fills, PDF downloads) rather than the most valuable one (qualified leads, closed deals). The loop is self-reinforcing. Once it starts, it accelerates.

**Value-based optimization:** Training the algorithm on downstream business outcomes (lead qualified, meeting booked, deal closed) instead of top-of-funnel vanity events (form submitted, content downloaded).

**Offline Conversion Import (OCI):** The technical mechanism for feeding CRM data back into Google and Meta so the algorithm can learn which leads actually became customers.

**Signal quality:** The accuracy and depth of the data you give the algorithm to learn from. Garbage signal produces garbage results. Precise signal produces precise results.

## Why This Article Exists

I keep auditing B2B ad accounts and finding the same thing.

The agency reports declining CPL and growing lead volume. Marketing presents this as proof of performance. Sales quietly builds a spreadsheet showing that 85% of those leads never responded to outreach, and of the ones who did, most were unqualified. Students. Competitors. People who wanted a free PDF and nothing else.

The conversation between marketing and sales becomes adversarial. Marketing says "we delivered the leads, sales can't close." Sales says "these aren't leads, they're email addresses." Both are partially right. But neither is identifying the actual cause.

The cause is not bad targeting. It is not weak creative. It is not even a bad offer (though that does not help). The cause is that the algorithm was given the wrong objective, and it did exactly what it was told. It found the cheapest form fills on the internet. It found a lot of them. And it learned that finding more of them was the goal.

This is happening in the majority of B2B lead gen accounts I audit. It is structural, not incidental.

## The Actual Business Problem

The business problem is not "we need more leads." The business problem is "we are spending money on a system that is teaching itself to produce outcomes that do not generate revenue."

When you set a campaign to "Maximize Conversions" with a target CPA of $50 and the conversion event is a form fill, you have told Google or Meta exactly one thing: find people who will fill out this form for $50 or less. That is the entire instruction set.

The algorithm does not know what happens after the form. It does not know whether the person who filled it out is a VP of Operations at a $50M company or a college student researching a term paper. It does not know whether the lead responded to the SDR's email. It does not know whether the deal closed. It does not care. Its job is to find form fills for under $50, and it is very good at that job.

The problem is where it finds them.

The internet has vast pockets of low-cost inventory: mobile gaming apps, clickbait article sites, content recommendation widgets. Users in these environments are prone to filling out forms. Some are bots. Some are real people with zero buying intent. They are cheap to acquire. The algorithm discovers this inventory, determines it has found a winning strategy, and pivots the entire budget toward it.

Cost per lead drops to $15. Lead volume triples. The monthly report looks like a triumph. Sales has never been more frustrated.

## What Most Teams Get Wrong

The standard response to this problem is to blame targeting. "We need better audiences." "We need to exclude certain demographics." "We need to tighten the geographic radius."

That misses the point. In automated bidding environments (which is nearly all of B2B paid media now), audience settings are suggestions, not instructions. Google's Performance Max and Meta's Advantage+ treat your targeting inputs as starting points. Once the algorithm finds conversions outside those parameters, it expands. Your "audience signal" of senior decision-makers in enterprise software becomes "anyone on the internet who might fill out a form."

The other common response is to add friction to the form. More fields. Qualifying questions. This helps at the margins. But it treats the symptom, not the disease. The algorithm is still optimizing for the wrong event. You are just making that wrong event slightly harder to trigger.

The actual fix is not at the campaign level. It is at the data pipeline level.

## The Forensic Framework

### Is the Algorithm Optimizing for Revenue or for Noise?

**What to test:** Pull conversion data from your ad platform. Match it against CRM outcomes. Calculate two numbers: cost per lead (what the platform reports) and cost per closed deal (what actually happened).

**What "true" looks like:** Cost per lead and cost per closed deal move roughly in proportion. When CPL drops, cost per deal also drops. The ratio of leads to qualified opportunities is stable or improving.

**What "false" looks like:** CPL is declining while cost per closed deal is flat or rising. Lead volume is up 200% but qualified pipeline has not moved. The ratio of leads to qualified opportunities is deteriorating. Sales is spending more time disqualifying leads than working them.

**What decision follows:** If these numbers diverge, the algorithm is in a doom loop. It has learned to optimize for the wrong signal and will continue to get better at finding the wrong people.

### Are You Feeding the Algorithm Outcomes or Just Events?

**What to test:** Check what conversion events are configured in your ad platforms. Are you only tracking form submissions? Or are you passing back deeper funnel stages from your CRM?

**What "true" looks like:** Your Google Ads account has Offline Conversion Import configured. It receives data from your CRM indicating which leads became qualified, which booked meetings, and which closed as revenue. The bidding strategy is set to optimize for these downstream events, not for form fills.

**What "false" looks like:** The only conversion event is "form submission" or "thank you page view." The algorithm has zero visibility into what happened after the click. It is flying blind after the form fill and making all of its learning decisions based on that single, shallow signal.

**What decision follows:** If you are not feeding downstream data back into the platforms, every other optimization you do (audiences, creative, bid adjustments) is built on a foundation of incomplete information. Fix this first. Everything else is secondary.

### Does Your Measurement System Match Your Sales Cycle?

**What to test:** Compare your attribution window to your actual sales cycle. If enterprise deals take 90 days to close, but your attribution window is set to 7-day click, the algorithm never sees the outcome of its own decisions.

**What "true" looks like:** Attribution windows are aligned with the buying cycle. For long sales cycles, Offline Conversion Import is used to connect deals that close in month three back to the ad click that happened in month one.

**What "false" looks like:** Default attribution settings. The algorithm gets credit for whatever happens within 7 days, then learns nothing from the 90-day sales process that follows. It cannot self-correct because it never receives the signal.

**What decision follows:** Extend your feedback mechanism to match your business reality. The algorithm can only learn from data it receives. If your sales cycle is 90 days and your feedback loop is 7 days, you have a system that is structurally incapable of learning what works.

### What Is the Actual Cost of a Customer?

**What to test:** Calculate blended cost per acquired customer from paid media. Not cost per lead. Not cost per MQL. Cost per customer who signed a contract and paid.

**What "true" looks like:** The number exists. Someone tracks it. It is compared against customer lifetime value to determine whether the acquisition economics work. The ratio of ad spend to revenue generated is defensible in a board meeting.

**What "false" looks like:** Nobody knows. The marketing team reports CPL. The sales team reports close rates. Finance reports revenue. Nobody connects the three. The actual cost of acquiring a paying customer from paid media is a mystery hidden across three different spreadsheets in three different departments.

**What decision follows:** If you cannot answer "what does it cost us to acquire a paying customer through paid media," you cannot make an informed capital allocation decision about paid media. Full stop.

## How to Fix This in Practice

The fix has three steps. They are sequential. Skipping ahead does not work.

**Step one: instrument the CRM.** Define your pipeline stages clearly. Lead received. Lead qualified. Meeting booked. Proposal sent. Deal closed. Deal value. Assign each stage a value. This is not a marketing project. This is a revenue operations project that requires alignment between marketing, sales, and finance.

**Step two: connect the CRM to the ad platforms.** Use Offline Conversion Import for Google. Use the Conversions API for Meta. Pass back the deeper funnel events with their values. Tell the algorithm: "This lead that came in on March 3rd became a $75,000 deal on May 15th." Now the algorithm knows what a valuable lead looks like and can find patterns in the data it would never see from form fills alone.

**Step three: change the bidding objective.** Move from "Maximize Conversions" (form fills) to "Maximize Conversion Value" using the imported data. Or use Target ROAS with the revenue values from your CRM. The algorithm now has a fundamentally different instruction set: find people who become customers, not people who fill out forms. These are different populations, and the algorithm will find different inventory to reach them.

This process takes 4 to 8 weeks to implement properly and another 4 to 6 weeks for the algorithm to accumulate enough data to optimize effectively. It is not instant. But the trajectory change is usually visible within the first 30 days.

## Example Scenario

A B2B SaaS company spending $40,000 per month on Google Ads reported 800 leads per month at $50 CPL. The agency was hitting its targets. The dashboard was green.

The audit matched those 800 leads against the CRM. 612 never responded to any outreach. Of the 188 who engaged, 31 were qualified. 8 booked meetings. 2 became customers over the following quarter. Average deal value: $36,000.

The real numbers: $120,000 in ad spend over the quarter. $72,000 in revenue from those two deals. The platform said CPL was $50 and improving. The actual cost per acquired customer was $60,000. The company was losing money on every customer it acquired through paid media.

After implementing Offline Conversion Import and shifting to value-based bidding, lead volume dropped to 200 per month. CPL rose to $200. The agency was initially uncomfortable with those numbers. But qualified leads rose from 31 to 89 per quarter. Closed deals went from 2 to 7. Revenue from paid media tripled. Cost per acquired customer dropped from $60,000 to $17,143.

The dashboard looked worse. The business performed better. That is the distinction this framework exists to make visible.

## What Changes After You Do This Correctly

The most immediate change is the conversation between marketing and sales. It stops being adversarial. When the algorithm is trained on qualified outcomes, marketing starts delivering leads that sales actually wants to work. The finger-pointing ends because the data is shared and the objectives are aligned.

Budgeting decisions become clearer. Instead of arguing about whether $40,000 or $60,000 per month is the right spend level, you can calculate it. If a customer is worth $36,000 in first-year revenue and you can acquire them for $17,000, the math tells you exactly how aggressively to scale.

Forecasting becomes possible. When your conversion data connects spend to revenue with a known lag (your sales cycle), you can model future revenue based on current spend. Finance starts trusting marketing's numbers because they reconcile with the P&L.

The strategic shift is bigger than any single campaign. You move from a "lead factory" model (which rewards volume) to a "revenue engine" model (which rewards quality). That change affects hiring, agency selection, tool purchases, and how marketing is evaluated at the executive level.

## FAQ

**My agency says CPL is a valid metric. Are they wrong?**

CPL measures one thing: what it costs to get someone to fill out a form. That is useful information. It is not a business outcome. If your agency presents CPL as the primary indicator of campaign health without connecting it to pipeline and revenue, they are reporting on activity rather than results. Ask them to add cost per qualified lead and cost per acquired customer to the monthly report. Watch the reaction carefully.

**We tried OCI but did not see improvement. What went wrong?**

Two common failures. First, insufficient data volume. Google needs approximately 30 to 50 conversion events per month at each funnel stage to optimize effectively. If you only close 3 deals a month, you may need to optimize for an earlier stage (like "qualified lead") that has enough volume for the algorithm to learn from. Second, bad CRM hygiene. If your sales team is not consistently updating lead statuses, the data you send back is unreliable and the algorithm learns from noise.

**How long before we see results?**

Expect the first 4 to 6 weeks to look worse on the dashboard. Lead volume will drop. CPL will rise. This is the algorithm recalibrating away from cheap, low-quality audiences toward more expensive, higher-quality ones. Pipeline quality improvements typically become measurable around week 8. Revenue impact follows your sales cycle. If deals take 90 days to close, you will see revenue impact around month 5 or 6 from the start of implementation.

**Does this apply to lead gen outside of B2B?**

Yes. Any business where the valuable action happens after the tracked conversion is vulnerable to this loop. Higher education enrollment, financial services applications, real estate inquiries, insurance quotes. Anywhere the form fill is not the sale.

**What if our CRM data is a mess?**

Fix it before you connect it to your ad platforms. Feeding bad CRM data into Google or Meta is worse than feeding no data. The algorithm will learn from your inconsistencies. Invest in CRM hygiene first. Standardize pipeline stages. Enforce update discipline. Then connect the systems.

**Can we do this with Meta as well as Google?**

Yes. Meta's equivalent mechanism is the Conversions API, which allows you to pass back offline events including CRM stages and revenue values. The principle is identical: give the algorithm visibility into what happened after the click so it can optimize for business outcomes instead of platform events.

## Final Takeaway

The algorithm is not broken. It is doing exactly what you told it to do. If you told it to find cheap form fills, it found cheap form fills. The fix is not a better campaign. It is a better instruction set.

Stop training the machine on noise. Start training it on revenue.

---

_Originally published on BUT DID YOU WIN._
