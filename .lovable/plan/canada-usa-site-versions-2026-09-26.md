# Canada / USA site versions

## What visitors will experience
- Every page exists twice: `/en-ca/...` (Canadian) and `/en-us/...` (US). Content and design are identical.
- Canada is the default. Visiting `lavendermarketingco.com` (or any old link like `/pricing`) sends people to the `/en-ca` version, so existing Google links keep working.
- On first visit we detect the visitor's country. If it doesn't match the version they're on, a small popup appears: "Looks like you're in the United States. Stay on the Canadian site or switch to the US site?" Their choice is remembered so the popup never nags again.
- A small flag/country switcher in the header and footer lets anyone switch anytime, staying on the same page (e.g. `/en-ca/pricing` to `/en-us/pricing`).

## Spelling
- Canadian side uses Canadian spelling (favourite, colour, centre, optimize stays -ize per Canadian norm); US side uses US spelling (favorite, color, center).
- Handled by one shared word list applied to site text, so both versions stay in sync automatically.

## Pricing
- Same numbers on both sides with a currency label: "$297 CAD/mo" vs "$297 USD/mo" (also $497 and $4,997).
- Each plan button points to its CAD payment link on the Canadian side and USD link on the US side.
- Payment links: you'll send these later. Until then, buttons keep going to the current contact page, with clearly marked spots ready for your 6 links.

## SEO
- Each version gets its own canonical address, plus "hreflang" tags telling Google the two versions are Canadian and US English, so they don't count as duplicates and Google shows the right one per country.
- Sitemap lists both versions.

## Technical details
- Restructure routes under a `$locale` segment (`src/routes/$locale/...`, locale validated to `en-ca`/`en-us`, anything else 404). All existing pages move under it; `src/routes/index.tsx` and legacy top-level paths redirect (301) to `/en-ca/...`.
- `LocaleProvider` + `useLocale()`; locale-aware `Link` helper so every internal link keeps the current locale.
- `localize(text, locale)` utility with a CA→US word map (favourite/favorite, colour/color, centre/center, behaviour, neighbour, cheque, etc.); copy authored in Canadian spelling, converted for `en-us`.
- Country detection: read Cloudflare `cf-ipcountry` header in a server function; fallback to browser timezone. Choice saved in a cookie; popup rendered client-only (no layout shift).
- `src/data/pricing.ts` with `{ cad: url, usd: url }` per plan; `serviceHead` and route heads add hreflang alternates and locale-specific canonicals; `<html lang="en-CA|en-US">`.
- Sitemap updated to emit both locales.
