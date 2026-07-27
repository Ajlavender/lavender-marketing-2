## Goal

Rebuild trywebtec.com in Lovable as a close clone: same structure, copy, colors, fonts and imagery, as a modern React/TanStack Start site with real routes (no WordPress).

## What I confirmed from the pasted HTML

- WordPress/Astra + Elementor site. Fonts: Barlow Semi Condensed (headings, 700) + Roboto (body).
- Site map from the nav/links: `/`, `/about` (+ `/about/motto`), `/why-choose-us`, `/website-redesign`, `/seo`, `/digital-ads`, `/copywriting`, `/conversion-rate-optimization`, `/shopify-website`, `/developers`, `/projects`, `/pricing`, `/reviews`, `/faq`, `/blog`.
- Home page sections: hero ("Get a Website Redesign so you… Sexy And Affordable"), problem/analysis blurb, services grid, case-study/portfolio cards (Cutting-Edge Creations, Elite Home London, Ternary Dev, Patent Hacks), "No Strings Attached" guarantee, stats counters (Years, Rockstars, Customers, Countries), testimonials, FAQ accordion, lead-magnet CTA, footer.
- Images will be hotlinked from `https://www.trywebtec.com/wp-content/uploads/...` (logo `webtec.webp`, hero `man-seating-on-beanbag…`, service illustrations, etc.).

## Plan

**1. Design system + shell**
- Load Barlow Semi Condensed + Roboto via `<link>` in `__root.tsx`.
- Put Webtec's palette (brand blue/dark navy accents, light backgrounds) into `src/styles.css` as semantic tokens; no hardcoded colors in components.
- Build shared `Header` (logo, dropdown "Services" nav, phone/CTA button, mobile drawer) and `Footer` (link columns, socials, legal) rendered around `<Outlet />` in `__root.tsx`.

**2. Home page** (`src/routes/index.tsx`, replacing the placeholder)
All the sections listed above, with the live copy, hotlinked imagery, and the YouTube demo embeds referenced in the page schema.

**3. Inner pages** (one route file each)
- Service pages: `website-redesign`, `seo`, `digital-ads`, `copywriting`, `conversion-rate-optimization`, `shopify-website`, `developers`
- Company: `about`, `about/motto`, `why-choose-us`, `projects`, `reviews`, `pricing`, `faq`
Each built from a shared set of section components (hero, feature grid, process steps, testimonials, CTA) so they stay consistent. Since only the homepage HTML was provided, inner-page copy will follow the same voice and the summaries linked from the homepage — you can then paste real copy per page for exact matching.

**4. Blog**
- `blog/index.tsx` listing page with cards, categories and pagination UI, plus `blog/$slug.tsx` post template (hero, body prose styling, author box, related posts). Content comes from a local `src/data/posts.ts` file seeded with a handful of posts. If you later want the real articles pulled live from the WordPress site, that's a separate step using the WordPress connector.

**5. Forms**
Contact / "Free Website Demo" forms are static: validated client-side, showing a success toast. No backend yet.

**6. SEO**
Per-route `head()` with unique title/description/og tags mirroring the live site's Rank Math output, single H1 per page, alt text on all images, lazy-loaded imagery, JSON-LD Organization + WebSite on home.

## Technical notes

- TanStack Start file routes under `src/routes/`; navigation via `<Link>`.
- Reusable section components under `src/components/`; shadcn primitives for accordion, tabs, dialog, form.
- No WordPress, Elementor, jQuery, or tracking scripts carried over.
- Hotlinked images mean the site depends on trywebtec.com staying up; easy to swap to hosted assets later.
