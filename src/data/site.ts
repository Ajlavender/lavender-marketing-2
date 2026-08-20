import logoAsset from "@/assets/lavender-logo.png.asset.json";

export const MEDIA = "https://www.trywebtec.com/wp-content/uploads";

export const LOGO = logoAsset.url;

export const services = [
  {
    slug: "/website-redesign",
    title: "Your Website, Designed & Built",
    short: "We design it free. You only pay if you like it.",
    value: "$500/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/web-design-1024x1024.png`,
  },
  {
    slug: "/chat-widget",
    title: "Website Chat Widget",
    short: "Pre-loaded with your FAQs so visitors get answers instantly.",
    value: "$300/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/businessman-launching-startup-1024x1024.png`,
  },
  {
    slug: "/missed-call-text-back",
    title: "Missed-Call Text-Back",
    short: "Can't pick up? They get a text in seconds and stay with you.",
    value: "$300/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`,
  },
  {
    slug: "/review-automation",
    title: "Review Automation",
    short: "Automatic text and email asks that turn jobs into 5-star reviews.",
    value: "$400/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/businessman-looking-for-growth-1024x1024.png`,
  },
  {
    slug: "/online-booking",
    title: "Online Booking",
    short: "Customers book a real free slot instead of playing phone tag.",
    value: "$300/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`,
  },
  {
    slug: "/follow-up-automation",
    title: "Automatic Follow-Up",
    short: "Every lead chased by text and email until they book or say no.",
    value: "$300/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`,
  },
  {
    slug: "/unified-inbox",
    title: "Unified Inbox (Mobile App)",
    short: "Email, texts, DMs, Google and chat in one inbox on your phone.",
    value: "$400/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/hand-hold-marker-1024x1024.png`,
  },
  {
    slug: "/crm-pipeline",
    title: "Lead Pipeline + CRM",
    short: "Every contact, note and stage in one place you can act on.",
    value: "$400/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/financial-growth-1024x1024.png`,
  },
  {
    slug: "/hosting-and-support",
    title: "Hosting, Security & Edits",
    short: "Hosting, domain, SSL and unlimited small edits — just message us.",
    value: "$200/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/12/smartphone-with-user-interface-concept-768x614.jpg`,
  },
  {
    slug: "/growth-report",
    title: "Monthly Growth Report",
    short: "One plain-English page on the 1st: leads, calls, reviews, bookings.",
    value: "$250/mo value",
    group: "Included in $297/mo",
    image: `${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`,
  },
  {
    slug: "/ai-chat-widget",
    title: "AI Chat Widget",
    short: "Trained on your business — qualifies and books leads 24/7.",
    value: "Growth plan",
    group: "Add-ons (Growth & Scale)",
    image: `${MEDIA}/2023/02/businessman-launching-startup-1024x1024.png`,
  },
  {
    slug: "/voice-ai-receptionist",
    title: "Voice AI Receptionist",
    short: "Answers every call you can't and books it into your calendar.",
    value: "Growth plan",
    group: "Add-ons (Growth & Scale)",
    image: `${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`,
  },
  {
    slug: "/ad-management",
    title: "Ad Management",
    short: "Google and Meta campaigns wired into your CRM and booking flow.",
    value: "Scale plan",
    group: "Add-ons (Growth & Scale)",
    image: `${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`,
  },
  {
    slug: "/local-seo",
    title: "Local SEO",
    short: "Map pack rankings and a Google Business Profile that converts.",
    value: "Scale plan",
    group: "Add-ons (Growth & Scale)",
    image: `${MEDIA}/2023/02/businessman-looking-for-growth-1024x1024.png`,
  },
  {
    slug: "/construction-website-design",
    title: "Construction Website Design",
    short: "A site built for contractors — with missed-call text-back and review automation included.",
    value: "$297/mo",
    group: "Industry Solutions",
    image: `${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`,
  },
] as const;

export const nav = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/website-redesign",
    children: services.map((s) => ({ label: s.title, to: s.slug, group: s.group, short: s.short })),
  },

  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about", short: "Who we are and how we work." },
      { label: "Company Motto", to: "/about/motto", short: "What we stand for." },
      { label: "FAQ", to: "/faq", short: "Straight answers, no fine print." },
      { label: "Why Choose Us?", to: "/why-choose-us", short: "What makes us different." },
    ],
  },

  { label: "Reviews", to: "/reviews" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const painPoints = [
  {
    title: "Visitors leave without calling",
    body: "Your site looks fine — but the next step isn't obvious, so they bounce and call someone else.",
    image: `${MEDIA}/2023/02/businessman-launching-startup-1024x1024.png`,
  },
  {
    title: "Missed calls turn into missed jobs",
    body: "If nobody texts back fast, that customer is already calling the next listing. Missed-call text-back fixes it automatically.",
    image: `${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`,
  },
  {
    title: "Reviews aren't collected consistently",
    body: "Happy customers forget to leave one. Your reputation stops compounding and your ranking slides.",
    image: `${MEDIA}/2023/02/businessman-looking-for-growth-1024x1024.png`,
  },
  {
    title: "Leads fall through the cracks",
    body: "The first message goes unanswered, follow-up never happens, and a good lead quietly goes cold.",
    image: `${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`,
  },
];

export const stats = [
  { value: "88", suffix: "%", label: "of people won't come back to a business's website after one bad experience" },
  { value: "75", suffix: "%", label: "judge how trustworthy a business is purely on its website" },
  { value: "60", suffix: "%", label: "of customers won't call back after a missed call — they call the next business" },
  { value: "9", suffix: "/10", label: "customers read reviews before choosing a local business" },
  { value: "5", suffix: "min", label: "is the window to respond before a lead's interest drops off a cliff" },
];


export const counters = [
  { value: "50", suffix: "+", label: "Local Owners Served" },
  { value: "48", suffix: "hr", label: "Report Turnaround" },
  { value: "14", label: "Days To Launch" },
  { value: "0", label: "Long-Term Contracts" },
];


export const projects = [
  {
    name: "Portuguese Canadian Club of Strathroy",
    type: "Website Redesign",
    href: "https://www.strathroyportugueseclub.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Portuguese+Canadian+Club",
  },
  {
    name: "AMG & Associates",
    type: "Website Redesign",
    href: "https://www.amg-associates.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=AMG+%26+Associates",
  },
  {
    name: "Busy Bee Virtual Solutions Corp",
    type: "Website Redesign",
    href: "https://busybeesolutionscorp.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Busy+Bee+Solutions",
  },
  {
    name: "People First Group Realty",
    type: "Website Redesign",
    href: "https://peoplefirst321.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=People+First+Realty",
  },
  {
    name: "7Steps™ Insurance Coaching",
    type: "Website Redesign",
    href: "https://eric7steps.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=7Steps+Coaching",
  },
  {
    name: "Scale Suite Pro",
    type: "Website Redesign + Automations",
    href: "https://www.scalesuitepro.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Scale+Suite+Pro",
  },
  {
    name: "Soccerfice Apparel",
    type: "E-commerce Redesign",
    href: "https://www.soccerfice.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Soccerfice+Apparel",
  },
  {
    name: "Summit of Strength ALS Gala",
    type: "Website Redesign",
    href: "https://summitofstrength.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Summit+of+Strength",
  },
  {
    name: "Strathroy Lobster Fest",
    type: "Website Redesign",
    href: "https://strathroylobsterfest.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Strathroy+Lobster+Fest",
  },
  {
    name: "Uncommon Delights Cashew Nuts",
    type: "Website Redesign",
    href: "https://uncommondelights.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Uncommon+Delights",
  },
  {
    name: "Ward Holdings International",
    type: "Website Redesign",
    href: "https://ward.holdings/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Ward+Holdings",
  },
  {
    name: "T&A Construction Contractors LLC",
    type: "Website Redesign",
    href: "https://ta.lavendermarketingco.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=T%26A+Construction",
  },
  {
    name: "Broken Together Story",
    type: "Website Redesign",
    href: "https://brokentogetherstory.com/",
    image: "https://placehold.co/600x600/2a2352/ffffff?text=Broken+Together+Story",
  },
];

export const testimonials = [
  {
    name: "Preciosa",
    since: "Local business owner",
    quote:
      "Our website is PERFECT, WOW! You are such a rockstar. I love and appreciate you AJ!",
  },
  {
    name: "Dina",
    since: "Local business owner",
    quote: "AJ I just had a quick look at the website and it's beautiful. Thank you!",
  },
  {
    name: "Mena",
    since: "Local business owner",
    quote:
      "AJ wow you did an amazing job we are so blessed to have you! Thank you for all you do. I'm very grateful.",
  },
];


export const googleReviews = [
  {
    name: "Sandy Zeldes",
    when: "3 months ago",
    rating: 5,
    initial: "S",
    color: "#8e44ad",
    quote: "This user only left a rating.",
  },
  {
    name: "Brian Fontenot",
    when: "3 months ago",
    rating: 5,
    initial: "B",
    color: "#0f766e",
    quote:
      "Our company utilized Lavender Marketing & Co. to be able to redesign our website and AJ and team was amazing to work with. They did a great job not just on the design but on the communication and updates.",
  },
  {
    name: "James Hinton",
    when: "4 months ago",
    rating: 5,
    initial: "J",
    color: "#166534",
    quote:
      "I was really happy with the results from Lavender Marketing & Co.. The website looks professional and received positive feedback from our customers. The process was very simple.",
  },
  {
    name: "Christine Davis",
    when: "4 months ago",
    rating: 4,
    initial: "C",
    color: "#b45309",
    quote:
      "Working with AJ and his team at Lavender Marketing & Co. was a positive experience overall. From the start, he took the time to understand our business, our audience, and what we needed the site to accomplish.",
  },
];

export const ratingSources = [
  {
    label: "Bark",
    count: "100+ reviews",
    logo: "https://www.trywebtec.com/wp-content/uploads/2023/03/Bark_Logo800-200-300x90.png",
  },
  {
    label: "Google",
    count: "160+ reviews",
    logo: "https://www.trywebtec.com/wp-content/uploads/2023/03/Google_2015_logo.svg-300x101.png",
  },
  {
    label: "Facebook",
    count: "40+ reviews",
    logo: "https://www.trywebtec.com/wp-content/uploads/2025/08/Facebook-Logo-e1755785128175-300x100.png",
  },
  {
    label: "Glassdoor",
    count: "30+ reviews",
    logo: "https://www.trywebtec.com/wp-content/uploads/2023/03/Glassdoor-Logo2-300x96.png",
  },
  {
    label: "Trustpilot",
    count: "70+ reviews",
    logo: "https://www.trywebtec.com/wp-content/uploads/2025/08/Trustpilot_logo-e1755785128175-300x100.png",
  },
];



export const faqs = [
  {
    q: "How much does a website redesign cost?",
    a: "Traditional website redesigns can easily cost $2,500 to $10,000+ upfront, often with additional hosting, maintenance, and service fees after launch.\n\nWith us, your custom website design is completely free. We’ll build it and show it to you first. If you love it and want us to launch it, it’s just $297/month for the Essentials Plan.\n\nThat includes your website along with the ongoing tools, hosting, support, and business systems built around it.",
  },
  {
    q: "Do I really get a free demo design first?",
    a: "Yes. We design a real demo of your new homepage before you pay anything. If you don't love it, you walk away and owe us nothing.",
  },
  {
    q: "How long does a redesign take?",
    a: "You’ll typically receive your first design demo within 48 hours, and most redesigns are fully launched within 14 days. Larger e-commerce or custom projects may take longer, and we’ll give you a clear timeline upfront before we begin.",
  },
  {
    q: "Will my new website be good for SEO?",
    a: "Every site we build ships with clean semantic markup, fast load times, mobile-first layouts and on-page SEO fundamentals. Our Smart SEO service goes further with content and link work.",
  },
  {
    q: "Do you host and maintain the website afterwards?",
    a: "Yes. Hosting, maintenance, backups, security updates, and ongoing support are all included in your $297/month Essentials Plan.\n\nThere’s no separate hosting bill or maintenance package to worry about — we keep the site running, secure, and up to date for you.",
  },
  {
    q: "What platforms do you build on?",
    a: "Mostly WordPress and Shopify, plus custom builds when a project calls for it. We pick the platform that fits your team, not the other way round.",
  },
  {
    q: "Who owns the website when it's done?",
    a: "You do. Full ownership of the design, content and files, with no lock-in.",
  },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
];

export const clientLogos: { name: string; src?: string }[] = [
  { name: "Portuguese Canadian Club of Strathroy" },
  { name: "AMG & Associates" },
  { name: "Busy Bee Virtual Solutions Corp" },
  { name: "People First Group Realty" },
  { name: "7Steps™ Insurance Coaching" },
  { name: "Scale Suite Pro" },
  { name: "Soccerfice Apparel" },
  { name: "Summit of Strength ALS Gala" },
  { name: "Strathroy Lobster Fest" },
  { name: "Uncommon Delights Cashew Nuts" },
  { name: "Ward Holdings International" },
  { name: "T&A Construction Contractors LLC" },
  { name: "Broken Together Story" },
  { name: "The Miles Group (TMG)" },
  { name: "RCM Plumbing" },
  { name: "Colemat Industries" },
  { name: "Neva Say Neva Entertainment" },
  { name: "Communities Reimagined" },
  { name: "Tanza Nutz™" },
  { name: "Spartan Financial" },
  { name: "Couto's Cleaning" },
  { name: "Authentic Customs General Contracting" },
  { name: "NCP Realty" },
  { name: "New Canaan Real Estate Leads" },
  { name: "The Chambers Group" },
  { name: "Romulus Enterprises" },
];
