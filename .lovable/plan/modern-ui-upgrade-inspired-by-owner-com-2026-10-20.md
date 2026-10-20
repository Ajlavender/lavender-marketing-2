# Modern UI upgrade, inspired by owner.com

Owner.com feels modern because it is calm, confident and product-led: huge plain headlines, lots of white space, real product screens, and motion that explains instead of decorates. Below are the cues worth borrowing, ranked by impact. Brand colours, copy, prices and the nav stay as they are.

## Cues to adopt

1. **Product-first hero**
   Big two-line headline, one short sentence, one main button. Beside it, a stacked "live" mockup: a client website on a phone, a new-review notification and a missed-call text-back bubble, each easing in one after another.

2. **Logo marquee of real clients**
   A slow, endless strip of client names/logos (RCM Plumbing, Authentic Customs, TA Construction...) under the hero, greyscale with colour on hover. Pauses for reduced-motion users.

3. **Sticky scroll storytelling**
   A "How it works" section where the left text column scrolls through 3 steps (Free design, Launch for $297/mo, Grow into the full system) while the right-side picture stays pinned and swaps to match each step.

4. **Bento grid for features**
   Replace the uniform service card grid on the homepage with mixed-size tiles (one large "Review engine" tile, smaller tiles for booking, text-back, reports), each with a small live UI snippet instead of a 3D illustration.

5. **Results with numbers**
   Owner-style case-study cards: client photo, one big result ("+38 Google reviews in 90 days"), short quote, "Read story" link. Uses only real figures you supply.

6. **Simple savings calculator**
   A slider: "How many calls do you miss a week?" → shows estimated lost revenue and what the $297 plan recovers. Strong, interactive, plain-language.

7. **Typography and spacing reset**
   Tighter, heavier headlines with slight negative letter-spacing, larger section padding, fewer eyebrows/badges per section, one accent colour per section. Softer, larger-radius cards with hairline borders instead of heavy shadows.

8. **Calmer motion system**
   Keep the reveal-on-scroll, but shorter travel and no blur; add subtle number count-ups, button hover lift, and image parallax limited to 1-2 places. Remove competing effects (shimmer bar, multiple glows) so the page feels expensive, not busy.

9. **Big closing CTA band**
   Full-width plum band with one oversized headline and the "Get Free Website Design" button, repeated at the bottom of every main page.

## Suggested order
Phase 1 (biggest visible lift): 7, 8, 1, 2
Phase 2: 3, 4, 9
Phase 3 (needs your real numbers/stories): 5, 6

## Technical details
- New shared pieces: Marquee, StickySteps, BentoGrid, HeroMockup, SavingsCalculator, CtaBand in `src/components/site/`.
- Motion via CSS + IntersectionObserver (extend existing `Reveal`), no new animation library; respect `prefers-reduced-motion`.
- Typography/radius/shadow changes made as tokens in `src/styles.css` so every page updates consistently.
- Both locales; Canadian spelling authored, US derived as today. Images from the Cloud media library.
- Verify desktop + phone in both locales with Playwright; no form submissions.
