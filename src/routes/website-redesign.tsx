import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  Clock,
  Database,
  Infinity as InfinityIcon,
  Monitor,
  Star,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";
import { Section } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { MEDIA } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/website-redesign")({
  head: () => ({
    meta: [
      { title: "Website Redesign Services That Convert Visitors | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "High quality, affordable website redesign for busy executives. See the new website redesign before you buy it — no upfront costs, unlimited changes.",
      },
      {
        property: "og:title",
        content: "Website Redesign Services That Convert Visitors | Lavender Marketing & Co.",
      },
      {
        property: "og:description",
        content:
          "See the new website redesign before you buy it. Conversion optimized, SEO ready and delivered in about 45 days.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/website-redesign" },
      {
        property: "og:image",
        content: `${MEDIA}/2023/02/business-team-doing-discussion-1024x768.png`,
      },
      {
        name: "twitter:image",
        content: `${MEDIA}/2023/02/business-team-doing-discussion-1024x768.png`,
      },
    ],
    links: [{ rel: "canonical", href: "/website-redesign" }],
  }),
  component: WebsiteRedesign,
});

const cards = [
  {
    title: "Conversion Optimized",
    body: "We take advantage of Conversion Optimization when constructing your website, and once it's live, we run A/B tests to identify further improvements based on your individual results.",
    image: `${MEDIA}/2023/02/ab-testing-600x600.png`,
    alt: "ab testing",
  },
  {
    title: "SEO Ready",
    body: "Our websites will make the Google gods smile. We've got the basics covered for you to go wild with SEO later.",
    image: `${MEDIA}/2023/02/seo-process-600x600.png`,
    alt: "seo process",
  },
  {
    title: "Easy To Edit",
    body: "Our visual editor ensures that making minor tweaks is a piece of cake. If you need a refresher after we finish your site, we'll provide you with a helpful video tutorial so you'll never be in the dark.",
    image: `${MEDIA}/2023/02/edit-photo-600x600.png`,
    alt: "edit photo",
  },
  {
    title: "Smooth Process",
    body: "We're all about saving time for executives with our optimized web development process. Time is the biggest obstacle to creating a website, but our streamlined process makes it a breeze – usually within 45 days!",
    image: `${MEDIA}/2023/02/time-is-money-1-600x600.png`,
    alt: "time is money",
  },
  {
    title: "Relationship",
    body: "Once your project is wrapped up, our Customer Success Team will be at your beck and call. Whether you're stumped, need answers or something's gone awry, they'll be there for you at the drop of a hat!",
    image: `${MEDIA}/2023/03/handshake-hand-gesture-600x600.png`,
    alt: "handshake hand gesture",
  },
];

const loveUs = [
  { label: "No Upfront Costs", Icon: Tag },
  { label: "Smooth Process Built For Busy Executives", Icon: Clock },
  { label: "Get A Personalized Redesign Before Decision", Icon: Monitor },
  { label: "Dedicated Designer To Support You After Completion", Icon: Star },
  { label: "Ideas Based On Data From 2000 Websites", Icon: Database },
  { label: "Piece Of Cake To Modify. Tutorial Included", Icon: BadgeCheck },
  { label: "Fixed Price To Prevent Incentive To Lengthen The Project", Icon: InfinityIcon },
  { label: "Unlimited Changes Included", Icon: Brush },
];

/** column offsets that create the staggered "waterfall" grid */
const cardOffset = ["lg:mt-0", "lg:mt-16", "lg:mt-32", "lg:-mt-10", "lg:mt-6", "lg:mt-4"];

function WebsiteRedesign() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-36 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
          <div className="animate-fade-in">
            <p className="text-base text-muted-foreground">
              Establish Yourself As The Undisputed Leader In Your Niche
            </p>
            <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[1.08] sm:text-6xl">
              Website Redesign Services{" "}
              <span className="text-primary">That Convert Visitors.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base text-muted-foreground">
              Our team of experts utilize the latest trends and conversion best practices to ensure
              your site is the best it can be.
            </p>
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              Once the site is finished, we don't stop there. We use A/B testing and SEO
              optimization to make sure your results are maximized.
            </p>
            <div
              className="animate-fade-in mt-8 max-w-xl"
              style={{ animationDelay: "220ms", animationFillMode: "both" }}
            >
              <LeadForm fields="leadInline" submitLabel="go!" />
            </div>
          </div>

          <div
            className="animate-scale-in relative"
            style={{ animationDelay: "160ms", animationFillMode: "both" }}
          >
            <img
              src={`${MEDIA}/2023/02/business-team-doing-discussion-1024x768.png`}
              alt="Business team doing discussion about a website redesign"
              className="mx-auto w-full max-w-xl"
            />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 bottom-4 hidden h-40 w-72 text-foreground/25 lg:block"
              viewBox="0 0 288 160"
              fill="none"
            >
              <path
                d="M2 8C40 90 140 150 286 150"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* See the new website redesign */}
      <Section className="pb-0 pt-24">
        <Reveal>
          <p className="text-center text-base text-muted-foreground">
            High Quality, Affordable WordPress Websites For Busy Executives
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold leading-tight sm:text-5xl">
            See the New Website Redesign{" "}
            <span className="text-primary">Before You Buy It</span>
          </h2>
          <p className="mt-6 text-center">
            <Link
              to="/contact"
              className="border-b border-primary pb-1 text-sm font-medium text-primary"
            >
              Download 5 tips to convert more visitors PDF 📩
            </Link>
          </p>
        </Reveal>
      </Section>

      {/* Why choose Lavender Marketing & Co. — staggered cards */}
      <Section className="relative pt-16">
        <h2 className="sr-only">Why Choose Lavender Marketing & Co.?</h2>
        <img
          src={`${MEDIA}/2023/03/rocket-1-300x300.png`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute -left-4 bottom-16 hidden w-28 -rotate-[25deg] xl:block"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              className={cn(cardOffset[i])}
            >
              <article className="h-full rounded-2xl bg-card p-8 shadow-[0_24px_60px_-40px_rgba(16,18,24,0.45)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-24 w-24 object-contain"
                />
                <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={540} className={cn(cardOffset[5])}>
            <article className="flex h-full flex-col items-center justify-center rounded-2xl bg-card p-8 text-center shadow-[0_24px_60px_-40px_rgba(16,18,24,0.45)]">
              <img
                src={`${MEDIA}/2023/02/question-mark-300x300.png`}
                alt="question mark"
                loading="lazy"
                className="h-24 w-24 object-contain"
              />
              <h3 className="mt-6 text-xl font-bold">Get In Touch</h3>
              <Button asChild className="mt-5 uppercase tracking-wider">
                <Link to="/contact">
                  Contact <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* No hassle, no fuss */}
      <Section className="pt-24">
        <Reveal scale>
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(115deg,#1d1f4a_0%,#231f57_45%,#6d33d6_100%)] px-8 py-14 text-background sm:px-14">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
              <div>
                <p className="text-sm font-medium text-[#a78bfa]">
                  Achieve Epic Success With Our Acclaimed Process
                </p>
                <h2 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
                  No Hassle.
                  <br />
                  <span className="text-[#c4b5fd]">No Fuss.</span>
                </h2>
                <ol className="mt-8 space-y-3 text-sm text-background/85">
                  <li>1. Get a Free Design – We'll Show You The Latest Trends</li>
                  <li>2. Tweak Back and Forth Until You're Completely Satisfied</li>
                  <li>3. Ready for Launch – We Push Your New Website Live 🚀</li>
                </ol>
                <Button asChild size="lg" className="mt-8 uppercase tracking-wider">
                  <a
                    href="https://calendly.com/webtec-website/free-webdesign-sketch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Schedule a demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <img
                src={`${MEDIA}/2023/03/ui-ux-team-1024x1024.png`}
                alt="UI UX team building a website redesign"
                loading="lazy"
                className="mx-auto w-full max-w-md"
              />
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Why do people love us */}
      <Section className="relative pt-24">
        <Reveal>
          <p className="text-center text-base text-muted-foreground">Our Secret Sauce</p>
          <h2 className="mt-3 text-center text-4xl font-bold leading-tight sm:text-5xl">
            Why Do People <span className="text-primary">Love Us?</span>
          </h2>
        </Reveal>

        <img
          src={`${MEDIA}/2023/02/Hand-03-L-300x279.png`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute left-0 top-56 hidden w-32 xl:block"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {loveUs.map((item, i) => (
            <Reveal key={item.label} delay={i * 60}>
              <div className="flex h-full items-center gap-3 rounded-xl bg-card px-6 py-5 shadow-[0_18px_45px_-38px_rgba(16,18,24,0.5)]">
                <item.Icon className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-medium text-primary">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="pt-24">
        <Reveal>
          <p className="text-center text-base text-muted-foreground">
            Our Experience Is Your Advantage
          </p>
          <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">
            Join Thousands Of Happy Customers
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-14">
          <TestimonialCarousel />
        </Reveal>
      </Section>
    </>
  );
}
