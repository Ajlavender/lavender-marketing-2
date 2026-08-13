import logoAsset from "@/assets/lavender-logo.png.asset.json";
import { CLAY } from "@/data/clay";

export const MEDIA = "https://www.trywebtec.com/wp-content/uploads";

export const LOGO = logoAsset.url;

export const services = [
  {
    slug: "/website-redesign",
    title: "Website Redesign",
    short: "A modern, conversion-focused redesign of your existing website.",
    image: CLAY.webDesign,
  },
  {
    slug: "/conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    short: "Turn more of the traffic you already have into paying customers.",
    image: CLAY.growth,
  },
  {
    slug: "/seo",
    title: "SEO",
    short: "Smart SEO that cuts the fluff and goes straight for the rankings that pay.",
    image: CLAY.seo,
  },
  {
    slug: "/digital-ads",
    title: "Digital ADs",
    short: "Paid campaigns that behave like a shot of espresso for your brand.",
    image: CLAY.ads,
  },
  {
    slug: "/developers",
    title: "Developers",
    short: "Dedicated developers for custom builds, integrations and maintenance.",
    image: CLAY.developer,
  },
  {
    slug: "/shopify-website",
    title: "E-commerce Redesign",
    short: "Shopify and e-commerce storefronts built to sell, not just to look pretty.",
    image: CLAY.webDesign,
  },
  {
    slug: "/copywriting",
    title: "Copywriting",
    short: "Words that sound like you and convince like your best salesperson.",
    image: CLAY.copywriting,
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
    title: "Visitors leave without calling",
    body: "Your site looks fine — but the next step isn't obvious, so they bounce and call someone else.",
    image: CLAY.rocket,
  },
  {
    title: "Missed calls turn into missed jobs",
    body: "If nobody texts back fast, that customer is already calling the next listing. Missed-call text-back fixes it automatically.",
    image: CLAY.analytics,
  },
  {
    title: "Reviews aren't collected consistently",
    body: "Happy customers forget to leave one. Your reputation stops compounding and your ranking slides.",
    image: CLAY.seo,
  },
  {
    title: "Leads fall through the cracks",
    body: "The first message goes unanswered, follow-up never happens, and a good lead quietly goes cold.",
    image: CLAY.ads,
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
    name: "Build Warranty",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/buildwarrenty.png`,
  },
  {
    name: "Angel Host",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/myangelhost.png`,
  },
  {
    name: "Canopy Aerospace",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/canopyaerospace.png`,
  },
  {
    name: "Dops Digital",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/dops.png`,
  },
  {
    name: "Toovio",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/toovio.png`,
  },
  {
    name: "Code Of Talent",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/codetalent.png`,
  },
  {
    name: "Optimum Debt Relief",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/optimum.png`,
  },
  {
    name: "Bloomtrak",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/bloomtrak.png`,
  },
  {
    name: "Software Italiani",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/softwareitaliani.png`,
  },
  {
    name: "Betr Health",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/betrhealth.png`,
  },
  {
    name: "Black Sheep Tequila",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/blacksheep.png`,
  },
  {
    name: "The Robot Mower",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/therobotmower.png`,
  },
  {
    name: "EDO Sthlm",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/edosthim.png`,
  },
  {
    name: "I Am Kooky",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/iamkooky.png`,
  },
  {
    name: "Charity Miles",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/charitymiles.png`,
  },
  {
    name: "Ternary Dev",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/ternary.png`,
  },
  {
    name: "Dwellist",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/dwellist.webp`,
  },
  {
    name: "Yes, You Deserve",
    type: "Website Redesign",
    image: `${MEDIA}/2025/05/yes-you-deserve-1.png`,
  },
  {
    name: "Jason Redman",
    type: "Website Redesign/Copywriting",
    image: `${MEDIA}/2025/05/jason-redman-mockup-new.webp`,
  },
  {
    name: "Tremble Group",
    type: "SEO",
    image: `${MEDIA}/2024/01/TribleGroup-Webtec-SEO-1.png`,
  },
  {
    name: "Elite Home London",
    type: "Website Redesign/SEO/Copywriting",
    image: `${MEDIA}/2023/02/elitehomemockup-scaled.jpg`,
  },
  {
    name: "FL Swimwear",
    type: "Website Redesign/SEO",
    image: `${MEDIA}/2023/02/flswimbig-scaled.jpg`,
  },
  {
    name: "Patent Hacks",
    type: "Website Redesign",
    image: `${MEDIA}/2023/03/patenthacksdemo1.webp`,
  },
  {
    name: "Varela Financial",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/varelastart.png`,
  },
  {
    name: "Ternary Dev",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/ternarymockup.png`,
  },
  {
    name: "Oakline Studio",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/oaklinestudios.png`,
  },
  {
    name: "Citizen HQ",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/citizenfulldone-scaled.jpg`,
  },
  {
    name: "H&M Group",
    type: "Website Redesign",
    image: `${MEDIA}/2023/02/HM-scaled.jpg`,
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
      "Our company utilized Lavender Marketing & Co. to be able to redesign our website and Bilha Njau and team was amazing to work with. They did a great job not just on the design but on the communication and updates.",
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
      "Working with Bilha and her team at Lavender Marketing & Co. was a positive experience overall. From the start, she took the time to understand our business, our audience, and what we needed the site to accomplish.",
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
