# Buy Now checkout + free design sign-up

## What customers will see
- **Buy Now buttons** on Essentials, Growth and Scale. The button follows the Monthly/Yearly switch and the visitor's country (US or Canada), so each person lands on the right HighLevel checkout.
- **Scale** gets Buy Now too. "Let's Talk First" stays as a smaller link under it, and ad spend is agreed after purchase.
- **Free website design** opens a $0 checkout-style page on the site: order summary ("Custom website design — $0, no card needed"), name, email, phone, business name, optional text-message consent box, and a "Confirm my free design" button. It sends the sign-up into HighLevel, then goes to the intake form.
- **After paying**, customers go to the intake form at start.lavendermarketingco.com. You set this as the thank-you page on each HighLevel order form.
- **Phone numbers return**: texting approval is done, so the temporary "chat widget only" rule is lifted. Forms get phone back with an optional consent box, and the chat widget stays.
- **Black Friday trial**: I'll add a line on the US Essentials card only if you say yes to the open question.

## Checkout links
| Plan | US monthly | US yearly | Canada monthly | Canada yearly |
|---|---|---|---|---|
| Essentials | …2704a | …27057 | …58dbc | …e1286 |
| Growth | …bb967 | …d7661 | …27050 | …27054 |
| Scale | …bb968 | …27056 | …d765d | …d765f |

All links are under links.lavendersuitepro.com/payment-link/.

## Not changing
Plan names, prices, yearly math or other copy.

## Technical details
- Add a `checkoutLinks` map (plan × billing × locale) to `src/data/pricing-plans.ts`, with a test that confirms all 12 links are present and different from each other.
- Pricing cards render a Buy Now link (same tab) plus the existing free design CTA. Campaign tags carry over through IntakeAttribution.
- New route `/free-design` (both locales, noindex off, unique head) with a zod-validated form that posts through the existing `submitLead` server function to `GHL_WEBHOOK_URL`, then redirects to the intake URL. Free-design CTAs across the site point to it.
- Set `CHAT_WIDGET_ONLY_CONSENT = false` in `consent-policy.ts`, restore phone fields with an unticked optional SMS consent checkbox, and update the consent test and memory note.
- Check both locales and both billing options with Playwright, without submitting real forms.
