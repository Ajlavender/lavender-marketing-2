# Site-wide consistency pass + "How does this make me money?" section

## Part 1 — New homepage section: "How this makes you money"
Placed directly **before** "What you get — One growth system, built for local service businesses", so visitors see the money outcome first and the feature list second (coach's point: sell the one result, not 20 features).

Content (plain language, no tool names, no guaranteed results):
- Eyebrow: "The bottom line" — Headline: "So how does this make you money?"
- One-line answer: "More of the people who already find you turn into paying jobs."
- Three money leaks, each with problem -> what we fix -> money result:
  1. Missed calls and slow replies -> instant text-back and follow-up -> jobs you were losing to the next listing come back.
  2. Visitors who leave -> a clear site that asks for the call or booking -> more calls from the same traffic.
  3. Few reviews -> every finished job gets a review request -> more people pick you on Google.
- Simple example math card, clearly labelled as an illustration: "If one saved job is worth $X and the system saves 2 a month, it pays for itself" using $297/mo (CA$ / US formatting respected).
- One CTA: "Get My Free Website Design" (intake link), matching the rest of the page.
- Same visual style as surrounding sections, reveal motion, both locales, Canadian spelling source.

## Part 2 — Full consistency pass (all pages, both locales)
Crawl every page and check the facts that must match everywhere:
- Prices: $297 / $497 / $4,997 monthly; annual $2,970 / $4,970 / $49,970; what each plan includes (incl. Local SEO starter in Growth, advanced in Scale).
- Offer: free design first, 7-day preview, no credit card, live within 14 days, first design ~48 hours.
- Proof: 4.8 stars, 50+ Google reviews, 40+ Facebook, 50+ businesses, since 2015.
- Report naming: free one-time snapshot vs paid monthly report.
- Review wording: honest review asked from every customer (no filtering), no ranking guarantees.
- Service "value" claims vs the 20-service catalogue vs pricing inclusions (e.g. homepage tile says Local SEO is "Scale plan" while Growth includes a starter — fix wording).
- CTA labels/links: free-design buttons -> intake link; Scale -> talk-first calendar; no dead links or empty buttons.
- No internal tool names outside the allowed HighLevel spots; no emoji; US pages use US spelling.
- Every link resolves (200), page titles/descriptions unique.

Fix every mismatch found, then re-crawl. No forms submitted. Deliver a short list of what was changed and anything needing your answer (e.g. a fact I can't verify).

## Technical details
- New component `src/components/site/MoneySection.tsx`, inserted in `src/routes/index.tsx` above the "What you get" heading.
- Playwright crawl of sitemap URLs for both locales with text extraction + grep for known facts/conflicting values.
