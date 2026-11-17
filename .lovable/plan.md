# Buy-today checkout for plans + committed free design sign-up

## Payment approach
Use your existing Stripe account connected inside HighLevel. Payments, subscriptions, receipts and customer records all stay in HighLevel/Stripe as they do today. No new payment provider, no extra fees beyond Stripe's.

## What customers will see
1. **Pricing cards** - Essentials, Growth and Scale all get a "Buy Now" button. It follows the monthly/annual toggle and opens the matching HighLevel checkout (6 links). For Scale, ad spend is agreed after purchase; "Let's Talk First" stays as a smaller link.
2. **Checkout** - your HighLevel order form, with email and phone. Canadian and US visitors go to their own currency's checkout if you have separate ones.
3. **After payment** - set the HighLevel order form's thank-you redirect to start.lavendermarketingco.com so buyers go straight to the intake form.
4. **Free website design** - a $0 checkout-style page on your site: order summary ("Custom website design - $0.00"), name, email, phone, business, current website, optional text-message consent checkbox, then "Confirm my free design" and a confirmation page. Sent to HighLevel through your existing lead connection.
5. **Campaign tags** (utm, gclid, fbclid) carried onto every checkout link.

## Texting approval
Carrier approval is done, so the temporary "chat widget only" rule is lifted and phone fields return. The chat widget stays.

## Steps
1. Add the 6 checkout links to the shared plan data and wire the Buy Now buttons.
2. Build the free design checkout page and confirmation page.
3. Lift the temporary consent restriction.
4. Test in both locales on desktop and phone. No real forms submitted.

## Technical details
- Checkout URLs stored per plan + billing period (+ locale if separate) in `src/data/pricing-plans.ts`; `IntakeAttribution` appends campaign params.
- Free design page posts via existing `submitLead` to `GHL_WEBHOOK_URL` with a `free-design-checkout` tag.
- `CHAT_WIDGET_ONLY_CONSENT` to false in `src/lib/consent-policy.ts`; update test and a2p memory.
- Starting-point check-in and plan cards stay on shared data, so prices never drift.
