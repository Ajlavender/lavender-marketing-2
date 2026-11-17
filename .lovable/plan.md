# Buy-today checkout for plans + committed free design sign-up

## Payment provider
Paddle (recommended for your US business). Paddle is the legal seller on each sale, so it handles sales tax, refunds, chargebacks and billing support worldwide. Fee: 5% + 50c per sale, nothing else. A test mode is created right away; live payments open after Paddle verifies your business.

## What customers will see
1. **Pricing cards** - Essentials, Growth and Scale all get a "Buy Now" button (monthly or annual, following the toggle). For Scale, ad spend is agreed after purchase; "Let's Talk First" stays as a secondary link.
2. **Checkout** - secure Paddle checkout pops up on your site, email only (no phone field while texting approval is pending). Canadian visitors see CA$, US visitors see US$.
3. **After payment** - a "You're in" page with next steps and a button to your intake form (start.lavendermarketingco.com), plus a receipt email from Paddle.
4. **Free website design** - a checkout-style page: order summary ("Custom website design - $0.00"), name, email, business and current website, then a "Confirm my free design" button and a confirmation page. No card.
5. **Manage billing** - customers can update their card or cancel from a link in their receipt email.

## Defaults used until you answer the open questions
- After payment: thank-you page then intake form.
- Email only, no phone numbers.

## Steps
1. Turn on Paddle (test mode).
2. Create 6 prices: Essentials, Growth, Scale, monthly and annual ($297/$2,970, $497/$4,970, $997/$9,970), with CAD prices.
3. Add Buy Now buttons, checkout, thank-you page.
4. Save each purchase to your database so we know who has which plan; send each new customer to HighLevel as well.
5. Build the free design sign-up and confirmation page (respects the chat-widget-only consent rule: no phone or SMS opt-in).
6. Test purchases with a test card in both locales. No real forms submitted.

## Technical details
- `enable_paddle_payments`, then `batch_create_product`; subscriptions + webhook route under `src/routes/api/public/` with signature verification.
- `subscriptions` table (RLS, grants) keyed by email/customer id; webhook upserts.
- Prices pulled from `src/data/pricing-plans.ts` so cards and checkout never disagree.
