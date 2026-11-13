# Wider, more immersive desktop layout (whole site)

Make the site use big screens properly: full-width backgrounds, wider content areas and bigger showcase pieces, while paragraphs stay a comfortable reading width. No copy, prices, offers or button destinations change.

## What visitors will see

1. **Opening section becomes a split layout on desktop.** Headline, supporting lines, the free-design button and trust points sit on the left (about 45%). On the right (about 55%) sits a large before/after preview of a real client redesign that people can drag. On tablets and phones it stacks: words first, preview below.
2. **Wider sections everywhere.** Normal content areas grow from about 1,280px to about 1,440px (up to ~1,520px on very large screens). The top bar and footer line up to the same width.
3. **Showcase pieces go bigger.**
   - Before-and-after slider: up to ~1,700px wide.
   - Three problem cards and the "What Essentials includes" area: wider card layouts using the extra space.
   - Calculator: side-by-side with a sample report on large screens.
   - Platform video section: wider frame.
4. **Text stays readable.** Paragraphs keep a 600–720px width even inside wider sections.
5. **Ultra-wide screens (2560px):** content stops at the maximum width with full-width backgrounds behind it, so nothing stretches awkwardly.
6. **Every page** (What We Do and each service page, Pricing, About, Projects, Reviews, Contact, Blog, etc.) picks up the same widths automatically through the shared section layout.

## Not changing
- Any wording, prices, plans, offers or button links.
- Phone and tablet layouts, apart from the opening section stacking cleanly.
- The chat widget, forms rules and tracking.

## Checks
Screenshots at 1280, 1440, 1920 and 2560 wide, plus tablet and phone, on the homepage, Pricing, a service page, About and Projects, in both Canada and US versions. Confirm there's no sideways scrolling, no cut-off content, the hero slider drags, and the calculator still works.

## Technical notes
- Add container tokens/utilities in `src/styles.css`: `container-site` (max ~90rem, 95rem at 2xl), `container-wide` (~100rem for hero), `container-showcase` (~106rem), plus `prose-width` (max 42–45rem).
- Update shared `Section` in `sections.tsx` and other `max-w-7xl`/`max-w-6xl` wrappers in Header, Footer, HomeSections, PlatformVideo, route files to the shared utilities; keep paragraph `max-w-2xl/3xl`.
- Hero in `src/routes/index.tsx`: `lg:grid-cols-[45fr_55fr]`, left-aligned text on desktop, centred on mobile; reuse the existing before/after slider component in compact mode for the right side (first project only), keeping the full showcase section lower down.
- `BeforeAfterShowcase` max width 1280px → showcase container.
- Calculator: two-column on `xl` with the existing visibility report preview beside it, only if that component already exists there; otherwise widen only.
