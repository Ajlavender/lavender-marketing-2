export const MEDIA = "https://www.trywebtec.com/wp-content/uploads";

export const LOGO = `${MEDIA}/2023/02/webtec.webp`;

export const services = [
  {
    slug: "/website-redesign",
    title: "Website Redesign",
    short: "A modern, conversion-focused redesign of your existing website.",
    image: `${MEDIA}/2023/02/web-design-1024x1024.png`,
  },
  {
    slug: "/conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    short: "Turn more of the traffic you already have into paying customers.",
    image: `${MEDIA}/2023/02/financial-growth-1024x1024.png`,
  },
  {
    slug: "/seo",
    title: "SEO",
    short: "Smart SEO that cuts the fluff and goes straight for the rankings that pay.",
    image: `${MEDIA}/2023/02/businessman-looking-for-growth-1024x1024.png`,
  },
  {
    slug: "/digital-ads",
    title: "Digital ADs",
    short: "Paid campaigns that behave like a shot of espresso for your brand.",
    image: `${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`,
  },
  {
    slug: "/developers",
    title: "Developers",
    short: "Dedicated developers for custom builds, integrations and maintenance.",
    image: `${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`,
  },
  {
    slug: "/shopify-website",
    title: "E-commerce Redesign",
    short: "Shopify and e-commerce storefronts built to sell, not just to look pretty.",
    image: `${MEDIA}/2023/12/smartphone-with-user-interface-concept-768x614.jpg`,
  },
  {
    slug: "/copywriting",
    title: "Copywriting",
    short: "Words that sound like you and convince like your best salesperson.",
    image: `${MEDIA}/2023/02/hand-hold-marker-1024x1024.png`,
  },
] as const;

export const nav = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/website-redesign",
    children: services.map((s) => ({ label: s.title, to: s.slug })),
  },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Company Motto", to: "/about/motto" },
      { label: "FAQ", to: "/faq" },
      { label: "Why Choose Us?", to: "/why-choose-us" },
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
    title: "My website isn't generating enough leads",
    body: "Don't leave your website redesign to chance – let us create a free demo design with suggestions to get you more leads! You'll love what you see.",
    image: `${MEDIA}/2023/02/businessman-launching-startup-1024x1024.png`,
  },
  {
    title: "I'm unsure who to hire to fix my online presence",
    body: "We have hundreds of 5-star reviews. We book 250 meetings for our sales team every month with Ads, SEO, and good conversion rates. We let you try us out for free. Don't decide on emotion, decide on data.",
    image: `${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`,
  },
  {
    title: "My website isn't getting enough traffic",
    body: "Our high-quality SEO gives you the most bang for the buck. We cut the fluff for maximum impact. We call it Smart SEO.",
    image: `${MEDIA}/2023/02/businessman-looking-for-growth-1024x1024.png`,
  },
  {
    title: "My marketing and sales data are disconnected",
    body: "Our digital advertising is like a shot of espresso for your brand – it'll give you the energy and buzz to power through the competition.",
    image: `${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`,
  },
];

export const stats = [
  { value: "88", suffix: "%", label: "of online consumers are less likely to return to a site after a bad experience" },
  { value: "75", suffix: "%", label: "of consumers admit to making judgements on a company's credibility based on the company's website design" },
  { value: "61", suffix: "%", label: "of users are unlikely to return to a site on mobile if they had trouble accessing it and 40% visit a competitor's site instead" },
  { value: "8", suffix: "/10", label: "customers would stop engaging with content that doesn't display well on their device" },
  { value: "94", suffix: "%", label: "of negative website feedback was design related" },
];


export const counters = [
  { value: "12", label: "Years of Wizardry" },
  { value: "60", label: "Rockstars" },
  { value: "3000", suffix: "+", label: "Customers" },
  { value: "24", label: "Countries" },
];

export const projects = [
  {
    name: "Cutting-Edge Creations",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/businessman-launching-startup-768x768.png`,
  },
  {
    name: "Elite Home London",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/web-design-1024x1024.png`,
  },
  {
    name: "Ternary Dev",
    type: "Website Redesign",
    image: `${MEDIA}/2023/05/representacion-3d-concepto-alojamiento-sitios-web-scaled.jpg`,
  },
  {
    name: "Patent Hacks",
    type: "Website Redesign",
    image: `${MEDIA}/2023/12/smartphone-with-user-interface-concept-scaled.jpg`,
  },
  {
    name: "Agile Search Inc.",
    type: "Website Redesign & SEO",
    image: `${MEDIA}/2023/02/businessman-giving-analysis-presentation-768x768.png`,
  },
  {
    name: "Foulk Consulting",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/hand-hold-marker-1024x1024.png`,
  },
];

export const testimonials = [
  {
    name: "Betsy Romeri",
    since: "With us since '19",
    quote:
      "We have used Webtec to build and maintain our website. We couldn't be more pleased with the speed and quality that they were able to deliver. We are in the process of refreshing our content on our website and the Webtec team has been very responsive and affordable! We would recommend them highly.",
  },
  {
    name: "Kojenwa Moitt",
    since: "With us since '20",
    quote:
      "I love this team! The process is so organized, everyone is super witty and the company specializes in website innovation and business development. They keep upgrading their host of services. I would definitely recommend this team and already have for my clients.",
  },
  {
    name: "Ben Cramer",
    since: "With us since '21",
    quote:
      "Great team of sales people, project managers, website designers, developers, customer service personnel, etc.! We're very grateful for everything they did to make our website look great!! Furthermore, the monthly business package is WORTH IT!!",
  },
  {
    name: "Daniel Droilet",
    since: "With us since '21",
    quote:
      "Webtec is fantastic and you should hire them. The thing that really separates Webtec from others is that Webtec really knows how to anticipate the needs of their clients, and then provides the necessary support needed – such that it always looks like magic.",
  },
  {
    name: "Moeed Amin",
    since: "With us since '19",
    quote:
      "Great support and experience from these guys. I was apprehensive about using a web developer, but they proved me wrong. They continue to support me with any website requests and they resolve things within 24 hours, which is great for a business like mine.",
  },
  {
    name: "Josh Johnston",
    since: "With us since '20",
    quote:
      "Working with this team has been incredible! Together we were able to recreate our entire website in a timely and seamless manner. Their support during and even after the completion of our website has been superb!",
  },
  {
    name: "Karsten Huttenhain",
    since: "With us since '22",
    quote:
      "Having spent a lot of time maintaining our websites through self-build sites like Wix, we wanted a professional web building company who could build a new site from scratch, advise on design and UX and complete SEO. We are beyond happy with Webtec's services.",
  },
  {
    name: "Omar Edwards",
    since: "With us since '22",
    quote:
      "From the minute we started with this group they have been excellent. Their knowledge on building our website was second to none, how patient they were with our whole team was incredible, and the finished product is better than we could have asked for.",
  },
  {
    name: "Gonzalo De la Barra",
    since: "With us since '22",
    quote:
      "I totally recommend working with Webtec. Very helpful staff, with management highly involved with supporting clients. We hired them long term for overseeing all our website updates and hosting.",
  },
  {
    name: "Nassim Joko",
    since: "With us since '20",
    quote:
      "Been a Webtec client for a while now and so far they're the best in what they do. They redesigned my website and improved my SEO, which has skyrocketed traffic to the website. I highly recommend their services.",
  },
  {
    name: "Diane Seymour",
    since: "With us since '22",
    quote:
      "Webtec has been great to work with. They redesigned our business site and made the experience very simple. Great company that values customer satisfaction above all else!",
  },
  {
    name: "Samm Smeltzer",
    since: "With us since '20",
    quote:
      "This company literally lifted a heavy website weight from my shoulders! They helped us simplify our website design, making it super user friendly, and they did it with amazing turnaround time.",
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
      "Our company utilized Webtec to be able to redesign our website and Bilha Njau and team was amazing to work with. They did a great job not just on the design but on the communication and updates.",
  },
  {
    name: "James Hinton",
    when: "4 months ago",
    rating: 5,
    initial: "J",
    color: "#166534",
    quote:
      "I was really happy with the results from Webtec. The website looks professional and received positive feedback from our customers. The process was very simple.",
  },
  {
    name: "Christine Davis",
    when: "4 months ago",
    rating: 4,
    initial: "C",
    color: "#b45309",
    quote:
      "Working with Bilha and her team at Webtec was a positive experience overall. From the start, she took the time to understand our business, our audience, and what we needed the site to accomplish.",
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
    a: "Most of our small and mid-sized business redesigns land between a few hundred and a few thousand dollars depending on page count, integrations and content needs. We quote a fixed price up front so there are no surprises.",
  },
  {
    q: "Do I really get a free demo design first?",
    a: "Yes. We design a real demo of your new homepage before you pay anything. If you don't love it, you walk away and owe us nothing.",
  },
  {
    q: "How long does a redesign take?",
    a: "A typical redesign takes 3 to 6 weeks from kick-off to launch. Larger e-commerce or custom builds take longer, and we give you a timeline in writing before we start.",
  },
  {
    q: "Will my new website be good for SEO?",
    a: "Every site we build ships with clean semantic markup, fast load times, mobile-first layouts and on-page SEO fundamentals. Our Smart SEO service goes further with content and link work.",
  },
  {
    q: "Do you host and maintain the website afterwards?",
    a: "We offer a monthly care plan covering hosting, backups, security updates and content changes. It is optional — the site is yours either way.",
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

export const clientLogos = [
  { name: "TrayAway", src: `${MEDIA}/2023/03/My-project-1-1.png` },
  { name: "Aftonbladet", src: `${MEDIA}/2023/07/logo-aftonbladet-svg.png` },
  { name: "Telia", src: `${MEDIA}/2023/07/Telia_logo_2022.svg-1.png` },
  { name: "HM", src: `${MEDIA}/2023/02/My-project-1-4.png` },
  { name: "FL Swimwear", src: `${MEDIA}/2023/02/My-project-1-2.png` },
  { name: "HM Group", src: `${MEDIA}/2023/02/My-project-1-3.png` },
  { name: "Varela Financial", src: `${MEDIA}/2023/02/My-project-1-5.png` },
  { name: "Ternary Dev", src: `${MEDIA}/2023/02/My-project-1-6.png` },
  { name: "The Career Lounge", src: `${MEDIA}/2023/03/My-project-1-2.png` },
  { name: "Live Nights", src: `${MEDIA}/2023/03/My-project-1-3.png` },
];
