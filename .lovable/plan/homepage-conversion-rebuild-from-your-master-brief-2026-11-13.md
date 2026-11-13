# Homepage conversion rebuild (from your master brief)

A leaner homepage with eight sections, kept in the current look. Both Canada and US versions. Other pages stay as they are, apart from the intake link swap.

## New homepage order
1. **Hero:** a fixed headline, "A better website is just the beginning." (no more rotating words), with the supporting line, body copy, one "Get My Free Website Design" button, the line "Free design preview. No payment required to review it.", and a small note that the free part is a homepage design preview. Three trust points: no payment for the preview, no long-term contract, 4.8 Google rating with 50+ reviews. The video stays below the hero.
2. **The problem:** three cards, each pairing what goes wrong with how we fix it: the missed call, the visitor who left, the review nobody asked for. This replaces "The real issue", "Pretty websites", "The leaks" and "How does this make you money".
3. **Real transformations:** your current before-and-after slider plus the client logo strip, with an "Explore Our Work" link.
4. **How it works:** three steps: tell us about your business, see what we create, approve and launch. This replaces the sticky steps and the 7-day preview sections.
5. **What the system does:** four benefits, an "Everything in Essentials" list, a clear note on what Essentials does not include (ads, ongoing SEO, advanced AI), and "See What's Included".
6. **The numbers:** a value calculator. You enter your average job value and your profit margin, and it shows how many jobs would cover each plan in the visitor's own currency. Under it sits an "Illustrative Report Preview".
7. **Reviews:** three strong full reviews taken from your Reviews page, plus "Read More Customer Reviews". Empty or duplicate review blocks are removed.
8. **FAQ and final call to action:** the eight questions from your brief, answered with:
   - **Cancelling:** your own wording (the domain is yours, and you can ask for a code export if you leave).
   - **Extra charges:** text and call usage, AI usage, and ad spend on Scale only.
   
   The page ends with a branded closing section.

## Removed from the homepage only
The technology/HighLevel section, the three-company breakdown, repeated review counts, repeated steps, and the 7-day preview wording. These details stay on their own pages.

## Free visibility report
While the chat widget has to be the only form on the site, a small "Already happy with your website?" box will ask visitors to request the report through chat or by email. It will not promise an instant report.

## Links
- Announcement bar: "Your new website design is free. Love it? Launch from $297/month." with a "Get Started" button. "See if you qualify" is removed.
- Every free-design button across the site will point to start.lavendermarketingco.com, opening in the same tab and keeping any campaign tags. That address already loads correctly.
- Scale's "Let's Talk First" calendar link stays the same.

## Checks
- Phone and desktop widths from 320px to 1440px: no text running off the screen and no clipping.
- The chat widget and the phone bottom button must not cover each other.
- Only one main headline, and page titles and region tags kept.
- Tests for the calculator maths.
- No forms submitted.

## Technical
- Reuse `BeforeAfterShowcase`, `LogoStrip` and existing review data. Add new `HomeProblem`, `HomeSteps`, `HomeSystem`, `ValueCalculator` (pure maths module with tests) and `HomeFaq` components.
- Calculator: jobs = ceil(plan monthly / (job value × margin)), using `pricing-plans` for each locale.
- `INTAKE_URL` in `src/data/pricing.ts` becomes the new domain, plus a helper that passes through `utm_*` and `gclid`/`fbclid` parameters.
- Update the FAQ entries in `site.ts` that mention the 7-day preview, so they don't contradict the new process.
