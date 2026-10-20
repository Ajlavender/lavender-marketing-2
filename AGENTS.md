<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Navigation rules

- Services navigation uses the independent 20-item `service-catalogue` model and four customer-focused categories; keep homepage and pricing data independent so menu changes never alter plan commitments.
- Each catalogue entry has a dedicated route and uses the shared catalogue page/head helpers; preserve published paths and service-specific setup, availability and related content.
- Local SEO appears once in the category menu; its page explains both confirmed plan tiers so category grouping never hides the distinction.

## Locale copy rules


- Plan feature strings on the pricing page render through `spell(f, locale)` in
  `src/routes/pricing.tsx`, not the raw string: the global `UsSpelling` DOM
  sweep only runs ~2.25s after load, so US visitors would otherwise briefly see
  Canadian spellings on the cards. Why: regional spelling must be correct in the
  first paint, and `spell()` is identity for `en-ca`, so Canada is unaffected.
- Copy is authored in Canadian spelling everywhere; the US side is derived, never
  hand-written. Prospect-visible text must never name internal tools.

## Customer success rules

- Account-transition requests post to their own `GHL_TRANSITION_WEBHOOK_URL`, never
  the sales lead webhook, and the form stays disabled until it is set. Why: service
  requests must not enter the sales funnel, and the form must never fake success.
- `/account-transition` is noindex, absent from the sitemap and never linked publicly.
  Why: it is a support-team direct link, not a landing page.
- The HighLevel disclosure is allowed only on the comparison page, homepage
  technology section and its FAQ entry. Why: the user chose transparent disclosure
  there; other prospect copy still names no internal tools.

## Media rules
- Site photos and illustrations load from the Lovable Cloud public `media` bucket (folders `projects/`, `illustrations/`, `media/`) via the `MEDIA_LIBRARY`/`ILLU`/`PROJECTS` constants in `src/data/site.ts`. Why: the owner swaps images by uploading same-named files there, without code edits. Keep the `-480.webp`/`-800.webp` variants next to each `.jpg` because srcSet derives them by name.

## Brand lockup rules

- The mark + wordmark lockup is rendered only through the shared `Brand` component
  (`src/components/site/Brand.tsx`) in the header, footer and mobile menu; never
  hand-roll the mark/name pair again. Why: the logo asset is square, so inline
  `object-contain` boxes with fixed widths reintroduce dead space between the mark
  and the name.
- The wordmark always uses the `--font-brand` token, whose face is self-hosted
  from `public/fonts/` and declared with `@font-face` in `src/styles.css`; size
  lives in `nameTextClass`, colour in `nameClassName`. Why: a remote font URL
  breaks the Tailwind build, and conflicting Tailwind size utilities silently
  lose to CSS order.
