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

- Services-menu entries carry an optional `column` key (`src/data/site.ts`): rows
  sharing a `column` render in one mega-panel column, stacked under their own
  plan heading. Why: the panel is a fixed three-column grid, so a new plan
  heading must not become a fourth grid cell.
- Local SEO is listed twice in the Services menu — "Local SEO starter" under
  "Included in Growth" and "Advanced local SEO" under "Included in Scale" —
  mirroring the pricing cards. It stays a single card in the services grid, so
  these rows live in menu-only copy, not in the `services` array.

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
