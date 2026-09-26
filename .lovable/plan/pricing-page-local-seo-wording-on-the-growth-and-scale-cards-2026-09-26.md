# Pricing page: local SEO wording on the Growth and Scale cards

## What changes

Both countries — `/en-ca/pricing` and `/en-us/pricing`.

**Growth card** — one new line added at the end of its feature list, after "Monthly AI transcript review and retraining":

> Local SEO starter: business listings set up across key directories, plus Google Business Profile optimisation.

**Scale card** — the existing "Local SEO & Google Business Profile" line is replaced with:

> Advanced local SEO: ongoing optimisation, regular content updates, and full Google Business Profile management.

Both lines stay plain, in the same style as every other bullet on the cards — no bold labels, no size changes. Prices, plan names, all other features and all buttons stay exactly as they are.

## The local SEO page shows both tiers

The `/local-seo` page is currently labelled "Included in the Scale plan", which now reads oddly next to the Growth card. It will show both tiers:

- The label above the headline becomes "Included in Growth & Scale".
- A short line is added to the page's opening copy: setup and listings start with Growth, ongoing management lives in Scale.
- The "Plan" row in the page's fact list says the same thing in short form.
- The page's search-result description (the text Google shows under the link) is updated to the new "advanced local SEO" wording, still mentioning both tiers.

Nothing else on that page moves — the headline, photos, benefit cards and process steps stay.

## Consistency checks

- Plan feature lists exist only on the pricing page, so the two card edits cover the whole site. I confirmed no other page repeats those lists.
- No prospect-facing text names any internal tools. I searched the whole site for Yext, GHL/HighLevel, Merchynt and Paige — none appear anywhere. I'll re-run the search after the edits to make sure the new copy keeps it that way.
- Canadian pages keep Canadian spelling ("optimisation"), US pages show "optimization". The site already converts spellings automatically, so the US side reads exactly as you wrote it.
- The saved note saying "Local SEO = Included in the Scale plan" is superseded, so I'll update it to the two-tier framing.

## Verification

I'll open the live pages and check:

1. `/en-ca/pricing` and `/en-us/pricing` on desktop and a phone-sized screen: the Growth card ends with the new starter line, the Scale card shows the advanced line, the old short line is gone, the three cards stay the same height with buttons lined up, and nothing overflows sideways.
2. US pages show "optimization", Canadian pages show "optimisation".
3. `/local-seo` in both countries shows the Growth-and-Scale framing.
4. The site still builds clean, and no forms are submitted (they post to the live CRM).

## Technical notes

- `src/routes/pricing.tsx`: append to the Growth `features` array (after "Monthly AI transcript review and retraining"), replace the Scale `features` entry "Local SEO & Google Business Profile". Copy authored in Canadian spelling so `spell()` / `UsSpelling` produce the US form; the `key={f}` on each list item stays unique.
- `src/routes/local-seo.tsx`: eyebrow "Included in Growth & Scale", one new `intro` sentence covering both tiers.
- `src/data/service-seo.ts` (`/local-seo` entry): `description` reworded to the advanced local SEO phrasing, `plan` field and the "Plan" fact row updated to the two-tier wording; `title` and `answer` untouched.
- No changes to `src/data/pricing.ts` payment links, plan prices, annual figures, badges, or the Scale "Let's Talk First" calendar link.
- Playwright checks at 1280x1800 and 402x874 with the `lmc_locale` cookie set per country; `/tmp/observability/build-errors.log` read afterwards.
