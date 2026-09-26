# Site edits: 7-day preview offer, consistency and fixes

Applies to both /en-ca and /en-us (shared pages). Footer Google report form and /growth-report stay untouched.

## New content
- **7-day preview section** (4 numbered steps): homepage after "What you get", and pricing page above plan cards.
- **"What happens next" block** under the contact page form.
- **Report fallback line** under the homepage hero, contact and website-redesign forms, linking to /growth-report.
- **FAQ**: add the 4 new Q&As (preview, no card, after 7 days, report vs preview).
- **/privacy-policy page** (standard agency policy covering names, emails, phones from lead forms), linked in footer and sitemap, both locales.

## Copy fixes
- Contact + website-redesign form buttons: "Get My Free Website Design".
- Website-redesign: "within 45 days" to "within 14 days"; "make the Google gods smile" to "impress Google"; niche-leader headline to "Stand Out In Your Local Market".
- Pricing headline: "...qualifies for a free 7-day website preview!"
- 8 Essentials feature pages: "Included in the $297/mo Essentials plan".
- AI chat + voice receptionist: "Included in the $497/mo Growth plan".
- Local SEO: "Included in the Scale plan".
- Nav button reads "Get Free Website Design" on every page (remove per-page overrides).
- Social proof: "5.0-star Google rating" and "50+ reviews" everywhere; all client-count claims (2000 clients, Thousands, 2000 websites) become "50+ businesses".

## US spelling
- Extend the en-us spelling map (summarised, optimise, and a full audit of -ise/-our/-re words) so US pages render American spelling.

## Technical fixes
- Count-up stats showing "0": make counters render the real number by default (server + no-animation fallback), animate only when visible.
- Floating FAQ buttons overlapping pricing cards: reposition/offset so they never cover content.
- Hero video "Unable to play media": verify the file encoding (H.264 baseline, faststart), add a fallback source and graceful poster fallback on error.

## Verification
- Browser check both locales: homepage, pricing, contact, FAQ, privacy page, stats values, video playback, mobile overlap.
