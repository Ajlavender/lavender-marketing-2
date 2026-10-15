# Services menu and 20 dedicated service pages

## What will change

Replace the plan-based Services dropdown with the four customer-focused categories in your brief. All 20 services are available, and each will have its own page in both `/en-ca` and `/en-us`.

Your existing **Essentials, Growth and Scale names, prices, billing options and pricing-card copy stay unchanged**. The complete catalogue will not imply that all 20 services come with Essentials.

## 1. A premium Services menu

- Desktop: four balanced columns, each with a category heading and five service links. Use restrained icons, bold titles and short descriptions from your brief, rather than plan headings or value claims.
- Remove the current $297 promotional tile from this dropdown. Replace it with the brief’s full-width footer: “Not sure what your business needs?” / “We'll help you figure out which tools make sense for you.” and **Explore the Services**.
- Keep the dropdown within the screen, with readable wrapped text and scrolling when screen height is limited. Use the existing Lavender colours and headline/body fonts.
- On smaller screens, use four expandable category groups, with the same service links and descriptions.
- Support click, keyboard and pointer navigation; Escape closes the menu and closed content cannot receive focus. Respect reduced-motion preferences.

## 2. Service titles and page destinations

Keep matching published URLs and rework their pages. Add nine new service pages rather than sending multiple menu items to one generic page.

| Category | Customer-facing service title | Destination |
|---|---|---|
| Get More Customers | A Website Built to Win Customers | `/website-redesign` — rework |
| | Get Found on Google | `/local-seo` — rework |
| | Respond to New Leads Instantly | `/instant-lead-response` — new |
| | Follow Up Without Lifting a Finger | `/follow-up-automation` — rework |
| | Make More Sales Calls, Faster | `/sales-calling` — new |
| Better Customer Service | Never Lose a Missed Call | `/missed-call-text-back` — rework |
| | Let Customers Book Online 24/7 | `/online-booking` — rework |
| | Fewer No-Shows, Less Wasted Time | `/appointment-reminders` — new |
| | All Your Messages in One Inbox | `/unified-inbox` — rework |
| | Turn Website Visitors Into Conversations | `/chat-widget` — rework |
| Marketing & Online Reputation | Get More Google & Facebook Reviews | `/review-automation` — rework |
| | One Post. All Your Social Media. | `/social-media-publishing` — new |
| | Stay in Touch With Text & Email | `/text-email-marketing` — new |
| | Bring Back Past Customers | `/customer-reactivation` — new |
| | Show Off Your Best Customer Reviews | `/website-review-display` — new |
| AI & Business Automation | Your Own 24/7 AI Receptionist | `/voice-ai-receptionist` — rework |
| | An AI Assistant That Replies for You | `/ai-chat-widget` — rework |
| | Know Where Every Customer Stands | `/crm-pipeline` — rework |
| | Send Estimates, Invoices & Get Paid | `/estimates-invoices-payments` — new |
| | Put Repetitive Work on Autopilot | `/business-automation` — new |

Use the brief’s descriptions, authored in Canadian spelling and converted for US visitors immediately.

## 3. Rebuild the service-page experience

Create a consistent, premium layout, with genuinely service-specific content rather than 20 interchangeable pages:

- The service title, clear supporting description and a relevant visual or example workflow.
- The everyday problem it solves, practical benefits, what setup includes and what happens next.
- A service-specific example, FAQs and links to related services.
- Clear availability notes where connected accounts, consent, usage charges or configuration affect delivery. Avoid guarantees about rankings, sales, review ratings or perfect AI answers.
- Use existing relevant illustrations where appropriate; create additional cohesive visuals when a service has no suitable existing asset.
- Keep internal tool names out of these pages.
- Preserve the free website-design offer and its intake destination where relevant. For other services, use an enquiry CTA to Contact plus a Pricing link; keep the free Google report as a secondary option where relevant.

Keep meaningful website examples and portfolio proof on `/website-redesign` when reworking it.

### Plan accuracy

- Keep confirmed plan associations for existing services, including AI in Growth and Local SEO starter in Growth / advanced management in Scale.
- Show Local SEO once in the new category menu, with both tiers clearly explained on its page; the two-tier service and pricing commitments remain intact.
- Preserve Scale’s existing database-reactivation inclusion on the new customer-reactivation page.
- For new capabilities without a confirmed plan inclusion, invite an enquiry about setup and pricing. Do not assign them to a plan or invent fees.
- Replace the shared service-page assumption that every service is included for $297 with wording appropriate to that service.

## 4. Explore the Services page

Add `/services`, reached from the dropdown footer, showing all 20 services under the same four categories with links to their dedicated pages.

Hosting/support, the Google report and ad management remain available at their existing URLs, outside the main 20-item menu. Do not advertise stores, memberships, courses or affiliate services without confirmation that you offer them.

Leave the existing homepage services grid and unrelated homepage sections unchanged in this makeover.

## Technical details

- Separate the customer-focused service catalogue from the existing homepage/pricing service data so changing navigation cannot silently change plan inclusions or homepage copy.
- Create every referenced TanStack route in the same implementation; reuse published URLs rather than renaming them.
- Extend the service-page content and metadata model for the new pages, with unique titles, descriptions, social metadata and accurate service information.
- Include `/services` and the nine new pages in both locale sitemaps; verify locale-specific canonical addresses and alternate-language links for affected pages.
- Update the navigation architecture rules to describe the new four-category menu, replacing the current three-column plan-group rule.
- No new backend features or changes to form submission behaviour are required.

## Checks before completion

- Open the desktop dropdown and smaller-screen menu in both locales; check all four categories, all 20 links, descriptions, keyboard operation and screen fit.
- Follow menu links to their pages; check all 40 localized service URLs plus both catalogue URLs for working content, relevant visuals and unique metadata.
- Check that US spellings appear correctly on first render.
- Confirm plan names, prices, annual maths and Scale’s “Let's Talk First” calendar destination remain unchanged.
- Check old public URLs still work and the hidden account-transition page remains hidden.
- Add small tests for preserved plan mappings and unassigned new-service pricing; run them and check site error signals.
- **Do not submit any forms.** Leave the makeover in preview; publish only when requested.