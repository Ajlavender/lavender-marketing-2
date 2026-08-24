import { ILLU } from "./site";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "7 Signs Your Website Needs a Redesign (Not Just a Facelift)",
    excerpt:
      "A slow, dated website quietly costs you leads every single day. Here are the seven signals that it's time for a full redesign.",
    category: "Website Redesign",
    date: "2026-06-18",
    readTime: "6 min read",
    image: `${ILLU}/websites.webp`,
    body: [
      "Most business owners know something is off with their website long before they do anything about it. Traffic is flat, the phone rings less, and the site feels embarrassing to send to a prospect. The question is whether you need a coat of paint or a proper redesign.",
      "Sign one: your bounce rate on mobile is above 70%. Sign two: your site takes longer than three seconds to load. Sign three: you can't update a page without calling a developer. Sign four: your branding has moved on but the site hasn't. Sign five: your competitors look modern and you don't.",
      "Sign six: you have no clear call to action above the fold. Visitors should never have to hunt for the next step. Sign seven: your analytics show visitors arriving and leaving without ever reaching a contact or pricing page.",
      "If three or more of those apply, patching won't help. Structure, messaging and conversion paths all need rethinking together — which is exactly what a redesign is for.",
    ],
  },
  {
    slug: "smart-seo-cutting-the-fluff",
    title: "Smart SEO: How We Cut the Fluff and Focus on Rankings That Pay",
    excerpt:
      "Most SEO retainers are padded with busywork. Here's the leaner approach we use to get small businesses ranking on the terms that actually convert.",
    category: "SEO",
    date: "2026-05-30",
    readTime: "8 min read",
    image: `${ILLU}/reviews.webp`,
    body: [
      "Search engine optimization has a reputation problem, and agencies earned it. Monthly reports full of impressions and 'keyword movement' rarely translate into revenue. Smart SEO is our answer: fewer deliverables, tied tightly to commercial intent.",
      "It starts with intent mapping. We split your keyword universe into research terms, comparison terms and buying terms, then we build pages for the buying terms first. Those pages are where the money is, and they're usually the least competitive because everyone else chases traffic volume.",
      "Next comes technical hygiene: crawlable structure, fast Core Web Vitals, clean internal linking and schema markup. None of it is glamorous, but it's what lets your best pages rank.",
      "Finally, we measure the only two numbers that matter — qualified enquiries and revenue attributed to organic search. Everything else is a diagnostic, not a goal.",
    ],
  },
  {
    slug: "conversion-rate-optimization-basics",
    title: "Conversion Rate Optimization Basics Every Small Business Should Know",
    excerpt:
      "You don't need more traffic. You need more of your existing traffic to take action. Start with these CRO fundamentals.",
    category: "Conversion",
    date: "2026-05-08",
    readTime: "7 min read",
    image: `${ILLU}/crm-pipeline.webp`,
    body: [
      "Doubling your traffic is expensive. Doubling your conversion rate is usually cheaper, faster and compounds with every marketing dollar you spend afterwards.",
      "Start with the offer. If your homepage's main call to action is 'Contact Us', you're asking for a commitment before you've given a reason. Swap it for something specific and low-risk — a free demo, an audit, a sample.",
      "Then reduce friction. Every extra form field costs you submissions. Ask for the minimum you need to start a conversation, and collect the rest later.",
      "Finally, add proof next to the decision points. Reviews, logos, guarantees and numbers belong beside your buttons, not buried on a separate testimonials page.",
    ],
  },
  {
    slug: "how-much-should-a-website-cost",
    title: "How Much Should a Small Business Website Actually Cost?",
    excerpt:
      "Quotes range from $500 to $50,000 for what looks like the same thing. Here's what actually drives the price.",
    category: "Pricing",
    date: "2026-04-21",
    readTime: "5 min read",
    image: `${ILLU}/unified-inbox.webp`,
    body: [
      "Website pricing is confusing because you're not buying one thing. You're buying design, content, development, integrations and ongoing support — and agencies bundle them differently.",
      "Page count matters far less than people expect. A ten-page brochure site with a single template costs less than a five-page site with five bespoke layouts.",
      "Integrations are the real variable. CRM sync, booking systems, payment flows and custom calculators all add engineering time.",
      "Our advice: get quotes broken down by line item, and be suspicious of any proposal that won't show you a design before you commit.",
    ],
  },
  {
    slug: "ecommerce-redesign-checklist",
    title: "The E-commerce Redesign Checklist We Use Before Every Launch",
    excerpt:
      "Redesigning a store is riskier than redesigning a brochure site. This is the checklist that keeps revenue safe through launch.",
    category: "E-commerce",
    date: "2026-03-27",
    readTime: "9 min read",
    image: `${ILLU}/hosting-support.webp`,
    body: [
      "A store redesign can tank revenue overnight if the URL structure, product data or checkout flow changes without care. We treat launch day as an engineering event, not a design reveal.",
      "Before launch we freeze the URL map and set 301 redirects for every changed product and category path. We re-verify structured data so rich results survive the move.",
      "We test checkout on real devices with real payment methods, then run a soft launch to a fraction of traffic while watching add-to-cart and completion rates.",
      "Only when the numbers hold do we cut over fully. Boring, but it's the difference between a good quarter and a bad one.",
    ],
  },
  {
    slug: "website-copy-that-converts",
    title: "Website Copy That Converts: Say What You Do, Then Prove It",
    excerpt:
      "Clever headlines lose to clear ones. A simple framework for writing homepage copy that sells.",
    category: "Copywriting",
    date: "2026-02-14",
    readTime: "6 min read",
    image: `${ILLU}/automations.webp`,
    body: [
      "The most common homepage mistake is writing for your industry peers instead of your customers. Your visitors don't know your jargon and they won't work to decode it.",
      "Use a simple structure: what you do, who it's for, what changes for them, and proof it works. If a stranger can't answer those four questions in ten seconds, rewrite.",
      "Write in the voice you'd use on a sales call. Read it out loud. If you'd never say it, delete it.",
      "Then back every claim with a number, a review, or a case study. Claims without proof read as noise.",
    ],
  },
];

export const categories = Array.from(new Set(posts.map((p) => p.category)));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
