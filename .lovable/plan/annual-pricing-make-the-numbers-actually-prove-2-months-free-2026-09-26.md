# Annual pricing: make the numbers actually prove "2 months free"

## What changes

The annual prices currently charge 10 months of service but round it oddly ($2,997 / $4,997 / $49,997), and the small print repeats the full monthly rate. This replaces them with the true 10-month totals and shows the discounted monthly equivalent, so a visitor can check the maths themselves.

Verified arithmetic (12 months of service, charged for 10):

| Plan | Monthly | 12 months at full price | Charged (10 months) | Effective monthly |
|---|---|---|---|---|
| Essentials | $297 | $3,564 | **$2,970** | $247.50 |
| Growth | $497 | $5,964 | **$4,970** | $414.17 |
| Scale | $4,997 | $59,964 | **$49,970** | $4,164.17 |

Two of your figures need a one-cent correction, otherwise the numbers don't multiply back:
- Growth: $4,970 ÷ 12 = $414.166… → **$414.17**, not $414.16 ($414.16 × 12 = $4,969.92).
- Scale: $49,970 ÷ 12 = $4,164.166… → **$4,164.17**, not $4,164.16.
- Essentials $247.50 is exact as you wrote it.

## Small print under each annual price

- Essentials: `$247.50/mo billed annually — 2 months free`
- Growth: `$414.17/mo billed annually — 2 months free`
- Scale: `$4,164.17/mo billed annually — 2 months free`

The "Get 2 months free with annual billing" chip above the cards stays as it is, and Canada keeps the `CA` prefix on the yearly figure (so the Canadian side reads `CA$2,970/yr`, the US side `$2,970/yr`).

## What does not change

Monthly prices, plan names, feature lists, the dark treatment on Essentials, the stage labels, and every button ("Get My Free Website Design" on Essentials and Growth, "Let's Talk First" on Scale) all stay exactly as they are. Nothing else on the site quotes annual figures, so this is a single-page change.

## Technical details

`src/routes/pricing.tsx`, the `plans` array only:
- `annualPrice`: `"$2,997"` → `"$2,970"`, `"$4,997"` → `"$4,970"`, `"$49,997"` → `"$49,970"`
- `annualMonthly`: replaced with the three strings above

Both locales render from the same array, so one edit covers `/en-ca/pricing` and `/en-us/pricing`. The yearly figure and the small print sit in a fixed-height price block, so cards keep lining up; the longer Scale line will be checked on a phone-sized screen in both countries to confirm nothing wraps awkwardly or shifts the buttons out of alignment.
