# Credibility cleanup — coach's 93→97 feedback

The coach's review identified one blocking bug, one pricing inconsistency, and several unverifiable social-proof claims that need to go before investing in case studies. Design is frozen — no aesthetic changes.

## P0 — Fix blocking runtime error on /pricing
The pricing page throws `ReferenceError: Star is not defined` during SSR. The import `import { Check, ChevronRight, Star } from "lucide-react"` IS present on line 3, so this is a stale SSR module graph, not a code bug. Restart the dev server (kill + respawn) so it picks up the current source. Verify the pricing page renders after restart.

## P1 — Fix the $497/$597 pricing bug
`src/routes/pricing.tsx` line 29: the Growth plan still reads `"$497"`. The homepage value stack already says `$597/mo`. Change the Growth plan `price` to `"$597"` so pricing matches the homepage and the offer ladder ($297 → $597 → $4,997). Change nothing else on this card.

## P2 — Remove unverifiable social proof
The coach's core message: the site is polished enough that every specific claim must now be real. Remove all filler.

### 2a — Remove fabricated Facebook reviews
`src/routes/reviews.tsx` lines 60-81 define three hard-coded Facebook reviews (Mark P., Dana R., Tony L.) that were generated as build filler. Dana's quote ("Our bookings doubled after launch") is a measurable performance claim attributed to a customer — the highest-risk item.
- Remove the `facebookReviews` array and the `ReviewSlider` call that renders it.
- Replace the Facebook section body with a genuine CTA: the Facebook logo, a short line ("See recommendations on our Facebook page"), and a button linking to the real page `https://www.facebook.com/LavenderMarketingCompany`. No fabricated review text, no fake names, no performance claims.
- The four real Google reviews (from `src/data/site.ts`) stay as-is.

### 2b — Fix the Reviews meta description
`src/routes/reviews.tsx` lines 15 and 20: the description claims "video testimonials from real customers" but the page has no video testimonials. Remove that clause so it reads: "Read 5-star Lavender Marketing & Co. reviews on Google, plus what local business owners say about their free-design-first website and growth system."

### 2c — Remove the decorative "312%" floating card
`src/routes/index.tsx` lines 510-515: the floating proof card showing "312% More Google reviews" is decorative — it is not tied to a real client result. Delete the entire `<div>` block (lines 510-515). Keep the second floating card (see 2d).

### 2d — Correct the "7 days" floating card to the real number
`src/routes/index.tsx` lines 520-521: the card shows "7 days / Design to launch", but the real timeline — stated in the FAQ and the Counters section — is 14 days. Change the `CountUp` value from `"7 days"` to `"14 days"`. This keeps the visual without an unverifiable number.

### 2e — Fix "Live in 7 days" in the hero trust row
`src/routes/index.tsx` line 463: the trust chip says "Live in 7 days", which contradicts the 14-day claim elsewhere. Change to "Live in 14 days".

## P3 — Soften the review-engine headline
`src/routes/index.tsx` lines 687-688: "The review engine that turns happy customers into Google rankings." implies direct ranking causation. Change to the coach's preferred phrasing: "The review engine that turns happy customers into reviews that help more local customers choose you." Keep the `<span className="text-primary">` highlight on the word "reviews" (first instance) for visual continuity.

## P4 — Add source citations to the stats section
The five statistics in the "Why this matters" section are specific and currently unsourced. Add a small `source` string to each stat in `src/data/site.ts` and render it as tiny muted text beneath each label. Suggested attributions (you should verify these point to the real studies before publishing):

| Stat | Suggested source |
|------|------------------|
| 88% won't return after bad experience | Sweor |
| 75% judge trust from website | Stanford Web Credibility Research |
| 60% won't call back after missed call | Call-tracking industry data |
| 9/10 read reviews | BrightLocal Consumer Review Survey |
| 5 min response window | Lead Response Management Study |

Render each source as a `<p className="mt-2 text-xs text-muted-foreground/60">Source: {s.source}</p>` directly under the label in both the first-row map (index.tsx ~line 766) and the second-row map (~line 776). This is a small, non-academic citation — it moves the section from "marketing statistic" to "authority content" and helps with AEO.

## Out of scope (coach's guidance, not this round)
- Case studies: the coach recommends building a `/projects/[slug]` case-study template (Problem / What Lavender Built / Result / screenshots / View Live link) as the next major investment. This is the real 93→97 lever, but it is a separate, larger effort — not bundled here.
- No further aesthetic changes. Design is frozen.

## Verification
After the edits: restart the dev server, open `/pricing` (confirm no SSR error and Growth = $597), open `/reviews` (confirm no fabricated Facebook reviews, no "video testimonials" in meta), and open `/` (confirm no 312% card, 14-day floating card, 14-day trust chip, softened headline, and source lines under stats).
