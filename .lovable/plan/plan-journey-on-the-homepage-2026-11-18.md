# Plan journey on the homepage

## Recommendation
Yes, but use a short version, not a copy of the full pricing cards. Visitors who are ready to buy shouldn't have to leave the homepage to see prices. The full feature lists stay on Pricing so the homepage stays easy to read.

## What visitors will see
- A new section after the money calculator, just before the reviews, so prices show up right after visitors see what the system earns them.
- The same headline: "Start with the Essentials. / Grow into the rest."
- Three short cards (Start here, The next step, The destination). Each card has the plan name, its monthly price ($297 / $497 / $997 + ad spend), one sentence about who it's for, and its top 3 features.
- Essentials keeps the dark highlighted look, the same as on Pricing.
- Each card has a "Buy [plan] monthly" button using the right checkout link for the visitor's country. The US Essentials card shows the Black Friday 30-day trial note.
- Under the cards: "Not sure which fits? Compare plans", which links to the full comparison on Pricing, plus "Or start with a free website design".
- No monthly/yearly switch here, to keep it simple. Yearly prices stay on Pricing.
- On phones, the cards stack, with Essentials first.

## Not changing
Plan names, prices, checkout links and the Pricing page itself.

## Technical details
- New `HomePlans` component in `src/components/site/HomeSections.tsx`. It reads `plans` from `src/data/pricing-plans.ts` and the links from `checkoutLink`/`hasTrial`, so the homepage and Pricing can never disagree.
- Feature lines go through `spell(f, locale)` for US spelling.
- Insert it between `<ValueCalculator />` and `<HomeReviews />` in `src/routes/index.tsx`.
- Check both locales at 390px and 1280px with Playwright: correct links, trial note only on US, no sideways scrolling. No form submissions.
