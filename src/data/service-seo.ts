import { ILLU } from "./site";

export type ServiceSeo = {
  /** Page <title> */
  title: string;
  /** Meta description */
  description: string;
  /** Short human name used in schema + breadcrumbs */
  name: string;
  /** Absolute image used for og:image / twitter:image */
  image: string;
  /** Answer-first paragraph for AI answer engines (40-60 words, self-contained) */
  answer: string;
  /** Scannable facts for AI extraction and quick reading */
  facts: { label: string; value: string }[];
  /** Page-specific FAQs, used on-page and as FAQPage JSON-LD */
  faqs: { q: string; a: string }[];
  /** Plan availability line */
  plan: string;
};

const BRAND = "Lavender Marketing & Co.";
const t = (s: string) => `${s} | ${BRAND}`;

export const serviceSeo: Record<string, ServiceSeo> = {
  "/website-redesign": {
    title: t("Website Redesign Services for Local Businesses"),
    description:
      "We design your new website for free. If you love it, launch for $297/mo — hosting, review engine, missed-call text-back, booking and follow-up included.",
    name: "Website Design & Build",
    image: `${ILLU}/websites.webp`,
    answer:
      "Lavender Marketing & Co. designs and builds your new website for free, then you only pay if you like it. Once approved, the site is included in the $297/month growth system along with hosting, chat, review automation, booking and follow-up — with unlimited small edits handled by us.",
    facts: [
      { label: "Cost to design", value: "$0 upfront" },
      { label: "Ongoing", value: "$297/mo, everything included" },
      { label: "Typical launch", value: "2-4 weeks" },
      { label: "Edits", value: "Unlimited, done by us" },
    ],
    faqs: [
      {
        q: "Is the website design really free?",
        a: "Yes. We design and build the site first. You only start paying the $297/month plan once you have seen it and want it live.",
      },
      {
        q: "Who owns the website?",
        a: "You do. The domain stays in your name and the content is yours.",
      },
      {
        q: "How long does it take to launch?",
        a: "Most local business sites go live in two to four weeks, depending on how quickly we get photos and content from you.",
      },
      {
        q: "What if I need changes after launch?",
        a: "Small edits — text, pricing, hours, photos, new service pages — are unlimited and included. You message us and we make the change.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/chat-widget": {
    title: t("Website Chat Widget For Local Businesses"),
    description:
      "A website chat widget pre-loaded with your real answers so visitors get a reply instantly and every conversation lands on your phone. Included in the $297/mo plan.",
    name: "Website Chat Widget",
    image: `${ILLU}/chat-widget.webp`,
    answer:
      "A website chat widget answers the questions that stop people from calling — service area, rough pricing, availability — right on the page. Ours is pre-loaded with your real answers, captures the visitor's name and number up front, and routes every conversation to your unified inbox.",
    facts: [
      { label: "Response time", value: "Instant, 24/7" },
      { label: "Lead capture", value: "Name and number before the chat starts" },
      { label: "Where chats land", value: "Your unified mobile inbox" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Is the chat widget a bot or a real person?",
        a: "The standard widget answers from a set of pre-written answers we build with you, then hands off to you. If you want free-form conversation, the AI chat widget add-on is trained on your whole business.",
      },
      {
        q: "Where do chat messages go?",
        a: "Into your unified inbox app, alongside texts, emails and social messages, so you can reply from your phone.",
      },
      {
        q: "Will it slow my website down?",
        a: "No. It loads after your page content and has no measurable impact on load speed or Core Web Vitals.",
      },
      {
        q: "What happens if I don't reply?",
        a: "The lead is already captured, so the automatic follow-up sequence takes over by text and email.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/missed-call-text-back": {
    title: t("Missed Call Text Back For Local Businesses"),
    description:
      "Every missed call gets an instant text from your business so the caller stays with you instead of calling a competitor. Included in the $297/mo Essentials plan.",
    name: "Missed-Call Text-Back",
    image: `${ILLU}/missed-call.webp`,
    answer:
      "Missed-call text-back sends an automatic text from your business number the moment a call goes unanswered, so the caller replies to you instead of dialling the next business. The conversation continues in your inbox, and every recovered call is tracked in your monthly report.",
    facts: [
      { label: "Trigger", value: "Any unanswered or after-hours call" },
      { label: "Text sent within", value: "Seconds" },
      { label: "Reply channel", value: "Two-way SMS in your inbox" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Do I need a new phone number?",
        a: "No. We connect texting to your existing business line so the customer sees the number they already called.",
      },
      {
        q: "What does the text say?",
        a: "A short, friendly message written in your voice — usually an apology for missing the call and a question about what they need.",
      },
      {
        q: "Can customers text back?",
        a: "Yes, it is a real two-way conversation and it lands in your unified inbox.",
      },
      {
        q: "Does it work after hours?",
        a: "Yes. You choose whether it runs all the time or only outside business hours.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/review-automation": {
    title: t("Google Review Automation For Local Businesses"),
    description:
      "Automatic text and email review requests after every job, pointing happy customers straight to your Google profile. Included in the $297/mo Essentials plan.",
    name: "Review Automation",
    image: `${ILLU}/reviews.webp`,
    answer:
      "Review automation sends each customer a short text and email after their job is complete with a one-tap link to your Google review box. Happy customers are pointed to Google, unhappy replies are flagged to you privately first, and review count and rating are tracked monthly.",
    facts: [
      { label: "Trigger", value: "Job marked complete" },
      { label: "Channels", value: "SMS and email" },
      { label: "Clicks to review", value: "One tap to Google" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Is this against Google's rules?",
        a: "No. Asking every customer for an honest review is allowed. We never buy, incentivise or fake reviews.",
      },
      {
        q: "What happens if someone is unhappy?",
        a: "You are alerted privately so you can fix it before it becomes a public review.",
      },
      {
        q: "How many more reviews should I expect?",
        a: "It depends on your job volume, but consistently asking every customer typically multiplies review flow several times over versus asking manually.",
      },
      {
        q: "Do reviews help my rankings?",
        a: "Yes. Review volume, recency and rating are among the strongest signals for the Google map pack in local search.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/online-booking": {
    title: t("Online Booking For Local Business Websites"),
    description:
      "Customers book a genuinely free slot straight into your calendar from your site, chat and follow-up texts, with reminders that cut no-shows. Included in $297/mo.",
    name: "Online Booking",
    image: `${ILLU}/booking.webp`,
    answer:
      "Online booking connects a live calendar to your website, chat widget and follow-up messages so customers can lock in a real available time in about twenty seconds. It syncs two-way with Google or Outlook, respects your travel time and buffers, and sends automatic reminders.",
    facts: [
      { label: "Calendar sync", value: "Two-way, Google or Outlook" },
      { label: "Bookable from", value: "Website, chat, SMS, Google profile" },
      { label: "Reminders", value: "Automatic text and email" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Will it double-book me?",
        a: "No. It reads your real calendar and only offers slots that are genuinely free, with the buffers and travel time you set.",
      },
      {
        q: "Can I still take bookings by phone?",
        a: "Yes. Anything you add to your calendar instantly blocks that slot online.",
      },
      {
        q: "Does it reduce no-shows?",
        a: "Automatic text and email reminders before the appointment are the single most effective way to cut no-shows, and they are included.",
      },
      {
        q: "Can different services have different lengths?",
        a: "Yes. Each service type can have its own duration, buffer and availability window.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/follow-up-automation": {
    title: t("Automatic Lead Follow-Up For Local Businesses"),
    description:
      "Automatic text and email sequences that follow up every lead until they book or say no, and stop the moment they reply. Included in the $297/mo Essentials plan.",
    name: "Automatic Follow-Up",
    image: `${ILLU}/automations.webp`,
    answer:
      "Follow-up automation sends a short series of text and email messages to every new lead over the first two weeks, written in your voice, and stops instantly when they reply or book. It also reactivates old leads already sitting in your contact list.",
    facts: [
      { label: "Sequence length", value: "About 2 weeks, spaced messages" },
      { label: "Channels", value: "SMS and email" },
      { label: "Stops when", value: "The lead replies or books" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Will this annoy my customers?",
        a: "The sequence is short, spaced out, written like a real person and stops the second they reply. Every message includes an easy opt-out.",
      },
      {
        q: "How fast is the first message?",
        a: "Within seconds of the lead coming in — responding inside five minutes dramatically improves the odds of reaching them.",
      },
      {
        q: "Can you follow up with my old leads?",
        a: "Yes. We can run a reactivation campaign across your existing contact list, which is usually the fastest win in the first month.",
      },
      {
        q: "Do I write the messages?",
        a: "We write them in your voice and you approve them before anything goes out.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/unified-inbox": {
    title: t("Unified Inbox App For Local Businesses"),
    description:
      "Email, SMS, Facebook, Instagram, Google messages and website chat in one mobile inbox, so no lead is buried in a second app. Included in the $297/mo plan.",
    name: "Unified Inbox",
    image: `${ILLU}/unified-inbox.webp`,
    answer:
      "The unified inbox pulls email, SMS, Facebook and Instagram messages, Google messages and website chat into one mobile app with a single thread per customer. You reply from your phone, assign conversations to staff and leave internal notes, so nothing is missed across apps.",
    facts: [
      { label: "Channels", value: "Email, SMS, Facebook, Instagram, Google, web chat" },
      { label: "Apps", value: "iOS and Android" },
      { label: "Team features", value: "Assignment and internal notes" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Do I lose my existing inboxes?",
        a: "No. Channels stay connected as they are; the inbox mirrors them so you can reply from one place.",
      },
      {
        q: "Can my team use it too?",
        a: "Yes. You can add staff, assign conversations and leave internal notes on any thread.",
      },
      {
        q: "Does it keep conversation history?",
        a: "Every message with a contact sits in one timeline, whatever channel it came from, alongside their CRM record.",
      },
      {
        q: "Can I turn off notifications after hours?",
        a: "Yes, notification and business-hour rules are configured during setup.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/crm-pipeline": {
    title: t("Lead Pipeline And CRM For Local Businesses"),
    description:
      "A simple visual lead pipeline and CRM showing every lead's stage, history and next step, built around how you already sell. Included in the $297/mo plan.",
    name: "Lead Pipeline + CRM",
    image: `${ILLU}/crm-pipeline.webp`,
    answer:
      "The CRM gives every customer one record — calls, texts, emails, quotes and notes on a single timeline — and a visual pipeline showing who is new, quoted, booked or needs chasing. Stages trigger automatic tasks and follow-ups so nothing is forgotten.",
    facts: [
      { label: "Setup", value: "Built around your existing sales steps" },
      { label: "Contacts", value: "Existing customers imported for you" },
      { label: "Automation", value: "Tasks and follow-ups per stage" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "Do I have to change how I sell?",
        a: "No. We copy your existing steps into the pipeline rather than forcing a template on you.",
      },
      {
        q: "Can you import my current contacts?",
        a: "Yes, from a spreadsheet, your phone, your email or your old CRM.",
      },
      {
        q: "Is it hard to use?",
        a: "It is a drag-and-drop board on desktop and a simple list on mobile. Most owners are comfortable within a day.",
      },
      {
        q: "Can I see what my pipeline is worth?",
        a: "Yes, pipeline value and win rate are included in your monthly Google & Local Visibility Report.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/hosting-and-support": {
    title: t("Website Hosting, Security And Unlimited Edits"),
    description:
      "Managed hosting, domain and SSL, security monitoring, backups and unlimited small website edits handled by us. Included in the $297/mo Essentials plan.",
    name: "Hosting & Support",
    image: `${ILLU}/hosting-support.webp`,
    answer:
      "Hosting and support covers fast managed hosting, domain and SSL management, security monitoring, backups and unlimited small edits. When prices, hours, staff or photos change, you message us and we make the change — usually the same or next business day.",
    facts: [
      { label: "Hosting", value: "Managed, global delivery, monitored" },
      { label: "Security", value: "SSL, updates, backups included" },
      { label: "Edits", value: "Unlimited small changes, done by us" },
      { label: "Turnaround", value: "Usually same or next business day" },
    ],
    faqs: [
      {
        q: "What counts as a small edit?",
        a: "Text, pricing, hours, photos, staff changes, new service pages and similar. Anything larger we quote before starting.",
      },
      {
        q: "Do I pay separately for hosting or a domain?",
        a: "No, both are covered inside the $297/month plan.",
      },
      {
        q: "What if my site goes down?",
        a: "Uptime monitoring alerts us, not you, and backups let us restore quickly.",
      },
      {
        q: "Can I move my existing domain?",
        a: "Yes, we handle the migration with no downtime and the domain stays in your name.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/growth-report": {
    title: t("Google & Local Visibility Report"),
    description:
      "A one-page plain-English report on the 1st: leads by source, calls recovered, reviews earned, bookings made and the next improvement. Included in $297/mo.",
    name: "Google & Local Visibility Report",
    image: `${ILLU}/reporting.webp`,
    answer:
      "The Google & Local Visibility Report is one page of plain English sent on the 1st: leads by source, calls recovered, reviews earned, bookings made, compared to last month — plus the one or two things we are changing next. No impressions, no vanity dashboards.",
    facts: [
      { label: "Delivered", value: "1st of every month, by email" },
      { label: "Length", value: "One page, plain English" },
      { label: "Tracks", value: "Calls, forms, chats, bookings, reviews" },
      { label: "Price", value: "Included in $297/mo" },
    ],
    faqs: [
      {
        q: "What metrics are in the report?",
        a: "Leads by source, calls recovered by text-back, chats, form fills, bookings, reviews earned and pipeline value — each compared to the previous month.",
      },
      {
        q: "Can I see numbers between reports?",
        a: "Yes, your dashboard is live at any time. The report is the summary and the plan.",
      },
      {
        q: "Do you explain what the numbers mean?",
        a: "Every report ends with a plain-English next step, not a list of charts.",
      },
      {
        q: "How do you attribute leads?",
        a: "Calls, forms, chats and bookings are tracked from day one, so each lead is tied back to the channel that produced it.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
  "/ai-chat-widget": {
    title: t("AI Chat Widget Trained On Your Business"),
    description:
      "An AI chat widget trained on your services, pricing approach, service area and policies that qualifies leads and books jobs 24/7. Included in the $497/mo Growth plan.",
    name: "AI Chat Widget",
    image: `${ILLU}/chat-widget.webp`,
    answer:
      "The AI chat widget is trained on your services, service area, pricing approach and policies, so it can answer free-form questions instead of only pre-written FAQs. It qualifies the lead, books directly into your calendar, and escalates to you with a conversation summary when needed.",
    facts: [
      { label: "Trained on", value: "Your site, docs, pricing rules and FAQs" },
      { label: "Availability", value: "24/7, including weekends" },
      { label: "Can book", value: "Yes, into your live calendar" },
      { label: "Plan", value: "Included in the $497/mo Growth plan" },
    ],
    faqs: [
      {
        q: "How is this different from the standard chat widget?",
        a: "The standard widget answers pre-written questions. The AI widget holds a real conversation about anything in your business, within guardrails you set.",
      },
      {
        q: "Can it make things up?",
        a: "We set explicit guardrails on what it may answer and what it must escalate, and we review transcripts monthly to retrain it.",
      },
      {
        q: "Does it hand over to a human?",
        a: "Yes, at any point, with a summary of the conversation so far.",
      },
      {
        q: "How long does setup take?",
        a: "Usually about a week, including training, guardrails and testing before it goes live.",
      },
    ],
    plan: "Included in the $497/mo Growth plan",
  },
  "/voice-ai-receptionist": {
    title: t("Voice AI Receptionist For Local Businesses"),
    description:
      "An AI receptionist that answers overflow and after-hours calls, qualifies the caller and books straight into your calendar, with full transcripts. Included in the $497/mo Growth plan.",
    name: "Voice AI Receptionist",
    image: `${ILLU}/ai-receptionist.webp`,
    answer:
      "The voice AI receptionist answers calls you cannot take — overflow, evenings and weekends — greets callers with your business name, answers common questions, takes details and books the appointment into your live calendar. Every call is transcribed and summarised in your CRM.",
    facts: [
      { label: "Answers", value: "Overflow, after-hours or every call" },
      { label: "Books", value: "Directly into your live calendar" },
      { label: "Record", value: "Transcript and summary in your CRM" },
      { label: "Plan", value: "Included in the $497/mo Growth plan" },
    ],
    faqs: [
      {
        q: "Does it sound like a robot?",
        a: "It uses a natural voice you choose and follows a script written with you, including how it greets callers and when it escalates.",
      },
      {
        q: "Can it transfer to me?",
        a: "Yes. Escalation rules decide when a call is transferred live or when a message is taken.",
      },
      {
        q: "Do I have to route every call to it?",
        a: "No. Most businesses start with overflow and after-hours only, then expand once they hear the calls.",
      },
      {
        q: "What happens to the call afterwards?",
        a: "You get a transcript and short summary, and the contact record updates automatically in the CRM.",
      },
    ],
    plan: "Included in the $497/mo Growth plan",
  },
  "/ad-management": {
    title: t("Google And Meta Ad Management For Local Businesses"),
    description:
      "Local Google and Meta ad campaigns wired into your CRM, follow-up and booking system, reported on cost per booked job — not clicks. Included in the Scale plan.",
    name: "Ad Management",
    image: `${ILLU}/lead-gen.webp`,
    answer:
      "Ad management runs Google and Meta campaigns that point at pages, follow-up sequences and a booking calendar we already built, so clicks land in a system that converts. Every lead is tracked from ad click to booked job and reported as cost per job, not cost per click.",
    facts: [
      { label: "Platforms", value: "Google Search and Meta" },
      { label: "Reported as", value: "Cost per booked job" },
      { label: "Tracking", value: "Ad click through to CRM record" },
      { label: "Plan", value: "Included in the Scale plan" },
    ],
    faqs: [
      {
        q: "Is ad spend included in the fee?",
        a: "No. Management is included in your Scale plan; your ad budget is paid directly to Google or Meta so you keep full visibility.",
      },
      {
        q: "What budget should I start with?",
        a: "We start small and scale on results. The right number depends on your service area and average job value, which we work out together.",
      },
      {
        q: "How soon do ads produce leads?",
        a: "Search campaigns usually produce calls in the first week or two; the first month is mostly about learning which terms convert.",
      },
      {
        q: "Do I need the rest of the system first?",
        a: "Yes. Ads only pay off when the site, follow-up and booking behind them are already working, which is why this is part of the Scale plan.",
      },
    ],
    plan: "Included in the Scale plan",
  },
  "/local-seo": {
    title: t("Local SEO And Google Business Profile Management"),
    description:
      "Local SEO, map pack rankings and Google Business Profile management for service businesses, fed by your review automation. Included in the Scale plan.",
    name: "Local SEO",
    image: `${ILLU}/local-seo.webp`,
    answer:
      "Local SEO gets your business into the Google map pack for searches in your service area. We rebuild your Google Business Profile, write real service and area pages, build citations, and feed your review automation into local ranking — then report on map positions and calls.",
    facts: [
      { label: "Focus", value: "Map pack and local search visibility" },
      { label: "Includes", value: "Profile, service pages, citations, posts" },
      { label: "Reported", value: "Map rankings and calls, monthly" },
      { label: "Plan", value: "Included in the Scale plan" },
    ],
    faqs: [
      {
        q: "How long does local SEO take to work?",
        a: "Profile improvements can move rankings within weeks; competitive map pack positions usually take three to six months of consistent work.",
      },
      {
        q: "Do reviews affect local rankings?",
        a: "Yes, strongly. Review volume, recency and rating are major map pack factors, which is why review automation is included in every plan.",
      },
      {
        q: "Do I need a physical address?",
        a: "No. Service-area businesses can rank without a storefront by defining the areas they serve on the profile.",
      },
      {
        q: "Can you rank me in multiple towns?",
        a: "Yes, with dedicated area pages and profile settings for each town you genuinely serve.",
      },
    ],
    plan: "Included in the Scale plan",
  },
  "/construction-website-design": {
    title: t("Construction Website Design For Contractors"),
    description:
      "Website design for construction companies, contractors and trades. Free custom design, then $297/mo for the growth system with missed-call text-back, review automation and follow-up.",
    name: "Construction Website Design",
    image: `${ILLU}/websites.webp`,
    answer:
      "Lavender Marketing & Co. designs and builds construction websites for contractors, roofers, electricians, plumbers and general trades. We create the site for free, then launch it under the $297/month growth system that includes missed-call text-back, automated Google review requests, online booking, follow-up and a monthly report.",
    facts: [
      { label: "Design cost", value: "$0 upfront" },
      { label: "Growth system", value: "$297/mo" },
      { label: "Built for", value: "Contractors & trades" },
      { label: "Key tools", value: "Text-back, reviews, booking" },
    ],
    faqs: [
      {
        q: "Do you only work with construction companies?",
        a: "No. We build sites for any local service business, but this page is tailored for contractors who need a site that turns estimates into booked jobs.",
      },
      {
        q: "Can customers request a quote from the site?",
        a: "Yes. Every construction site includes a quote form that triggers instant missed-call text-back and follow-up so no estimate request goes cold.",
      },
      {
        q: "How do the review requests work?",
        a: "After a job is marked complete, the system sends a short text and email with a one-tap Google review link. Happy customers leave public reviews; unhappy feedback is routed to you privately first.",
      },
      {
        q: "What if I am already busy and miss calls?",
        a: "Missed-call text-back sends an automatic reply within seconds, so the caller texts back instead of calling your competitor. It works after hours and on weekends too.",
      },
    ],
    plan: "Included in the $297/mo Essentials plan",
  },
};
