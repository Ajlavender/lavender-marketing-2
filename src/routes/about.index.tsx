import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About Us | Lavender Marketing & Co. Web & SEO Agency" },
      {
        name: "description",
        content:
          "Our journey began in Canada in 2015, and we went all-in in 2019. We built the web agency we never found – a 5-star web, SEO & growth partner for Canadian and American small businesses.",
      },
      { property: "og:title", content: "About Us | Lavender Marketing & Co. Web & SEO Agency" },
      {
        property: "og:description",
        content: "The Quality of Marketing Giants. At The Price of Freelancers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const demoBtn =
  "h-11 rounded-full bg-[linear-gradient(90deg,#8b5cf6_0%,#6d33d6_100%)] px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-background shadow-[0_12px_30px_-14px_rgba(109,51,214,0.9)] hover:opacity-90";

function DemoButton({ label = "Schedule a demo", to = "/contact" }: { label?: string; to?: string }) {
  return (
    <Button asChild className={demoBtn}>
      <Link to={to}>
        {label}
        <ArrowRight className="ml-2 h-3.5 w-3.5" />
      </Link>
    </Button>
  );
}

const missionCards = [
  {
    title: "Free Design First",
    body:
      "We build your demo design for free, so you see exactly what you're getting before you spend a dollar or sign anything.",
    image: `${MEDIA}/2023/02/web-design-1024x1024.png`,
    offset: "lg:mt-14",
  },
  {
    title: "Built to Convert",
    body:
      "Every page is designed around one goal: more calls, bookings, and reviews. No fluff. No guesswork. Just a site that works.",
    image: `${MEDIA}/2023/02/financial-growth-1024x1024.png`,
    offset: "lg:mt-0",
  },
  {
    title: "Follow-Up on Autopilot",
    body:
      "Missed calls get texted back instantly. Leads are chased by text and email until they book or say no. Nothing falls through the cracks.",
    image: `${MEDIA}/2023/02/ab-testing-1024x1024.png`,
    offset: "lg:mt-6",
  },
  {
    title: "Made for Busy Owners",
    body:
      "We know you're running a business, not a website project. Our process is fast, simple, and built for owners who don't have time to babysit tech.",
    image: `${MEDIA}/2023/02/time-is-money-1-1024x1024.png`,
    offset: "lg:-mt-6",
  },
];

function GhostWord({ text, className }: { text: string; className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute hidden select-none whitespace-nowrap font-[family-name:var(--font-display)] text-6xl font-bold uppercase tracking-tight text-foreground/[0.06] [writing-mode:vertical-rl] lg:block ${className ?? ""}`}
    >
      {text}
    </span>
  );
}

function About() {
  return (
    <div className="overflow-hidden bg-secondary">
      {/* Hero */}
      <section className="relative pb-16 pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal from="left" className="relative">
            <img
              src={`${MEDIA}/2023/03/man-launching-startup-1024x1024.png`}
              alt="Man launching a startup from his desk"
              className="mx-auto w-full max-w-lg"
            />
            <img
              src={`${MEDIA}/2023/02/computer-1-1024x1024.png`}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute -bottom-6 left-1/2 w-40 -translate-x-1/4"
            />
          </Reveal>
          <Reveal from="right" delay={120} className="relative">
            <svg
              viewBox="0 0 120 80"
              aria-hidden
              className="absolute -left-24 top-2 hidden h-24 w-32 text-foreground/40 lg:block"
            >
              <path
                d="M2 6 C 60 -6, 108 22, 96 66"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-sm text-muted-foreground">The Story</p>
            <h1 className="mt-2 text-5xl font-bold sm:text-6xl">
              About <span className="text-primary">Us.</span>
            </h1>
            <div className="mt-5 max-w-sm space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Our journey began in Canada in 2015, helping run my mother's clothing boutique shop —
                a local business that relied heavily on its website to bring in customers.
              </p>
              <p>
                Around the same time, we were also working on my father's media & entertainment
                company in Michigan — building sites, managing online presence, and learning what
                service businesses need to win online.
              </p>
              <p>
                We were doing well, but one problem kept eating up our time and costing us sales. By
                2019, we went all-in on fixing it — for ourselves first, then for other Canadian and
                American business owners.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Website Jungle */}
      <section className="relative px-4 py-10 sm:px-6 lg:px-8">
        <GhostWord text="We Do" className="left-2 top-24" />
        <Reveal scale className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(115deg,#3b1f8f_0%,#5b2bc4_50%,#7c3aed_100%)] px-8 py-12 text-background sm:px-12">
            <div className="max-w-lg">
              <p className="text-sm text-background/70">Our Pain</p>
              <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
                The Website <span className="text-[#c4b5fd]">Jungle.</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-background/85">
                <p>
                  <strong className="font-bold text-background">The problem?</strong>
                  <br />
                  Building and optimizing a website wasn't a walk in the park. There were too many
                  agencies, too many choices, and it was too expensive — and at the end of the day,
                  no one could show us what actually worked.
                </p>
                <p>
                  <strong className="font-bold text-background">Worst of all?</strong>
                  <br />
                  No one ever showed us what the website they wanted us to buy would look like. They
                  urged us to spend $10,000+ and "trust them". We had to make the decision based on
                  gut feeling — not exactly easy when you're running a small business.
                </p>
              </div>
              <div className="mt-8">
                <DemoButton />
              </div>
            </div>
            <img
              src={`${MEDIA}/2023/02/man-feeling-stress-due-to-work-1024x1024.png`}
              alt="Man feeling stressed at work"
              loading="lazy"
              className="pointer-events-none absolute -right-6 bottom-0 hidden w-[24rem] lg:block"
            />
          </div>
        </Reveal>
      </section>

      {/* We Simplify The Web */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <GhostWord text="What We Do" className="left-2 top-10" />
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <img
              src={`${MEDIA}/2023/02/man-doing-online-marketing-1024x1024.png`}
              alt="Man doing online marketing"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
          <Reveal from="right" delay={100}>
            <p className="text-sm text-primary">The Quality of Marketing Giants</p>
            <p className="text-sm text-muted-foreground">At The Price of Freelancers.</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              We Simplify
              <br />
              <span className="text-primary">The Web.</span>
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Almost every local business in Canada has a website — but most aren't built to turn
                visitors into calls, bookings, and reviews. The big agencies only want high-paying
                enterprise clients. The cheap freelancers disappear after launch. And the DIY tools
                leave you guessing.
              </p>
              <p>
                We couldn't find a single team that combined great design, fast follow-up, review
                automation, and local SEO into one simple, affordable package for small business
                owners.
              </p>
              <p>
                <strong className="font-bold text-foreground">The solution?</strong>
                <br />
                We built it ourselves. Lavender Marketing &amp; Co. is the web, automation, and growth
                partner we wish we'd had — designed for busy Canadian and American business owners who
                want results without the $10,000+ price tag.
              </p>
            </div>
            <div className="mt-7">
              <DemoButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* We Built the Web Agency We Never Found */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
          <Reveal scale className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(115deg,#3b1f8f_0%,#5b2bc4_50%,#7c3aed_100%)] px-8 py-12 text-background sm:px-12">
              <div className="max-w-lg">
                <p className="text-sm text-[#c4b5fd]">
                  A 5-Star Web, SEO &amp; Growth Partner For Canadian &amp; American Small Businesses
                </p>
                <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                  We Built the Agency
                  <br />
                  <span className="text-[#c4b5fd]">We Never Found.</span>
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-background/85">
                  <p>
                    We design your website completely free. You only pay $297/mo if you like it — and
                    that includes hosting, the review engine, missed-call text-back, automatic
                    follow-up, online booking, a unified inbox, CRM, and a monthly growth report.
                  </p>
                  <p>
                    <strong className="font-bold text-background">The best part?</strong>
                    <br />
                    Everything is built to convert. Your site looks premium, ranks better, responds
                    faster, and follows up automatically — so you stop losing leads to the next
                    listing.
                  </p>
                </div>
                <div className="mt-8">
                  <DemoButton label="Get in touch" />
                </div>
              </div>
            <img
              src={`${MEDIA}/2023/03/man-drawing-on-tablet-1024x1024.png`}
              alt="Man drawing on a tablet"
              loading="lazy"
              className="pointer-events-none absolute -right-4 bottom-0 hidden w-[22rem] lg:block"
            />
            <img
              src={`${MEDIA}/2023/02/rocket-1024x1024.png`}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute right-64 top-4 hidden w-24 lg:block"
            />
          </div>
        </Reveal>
      </section>

      {/* Our Mission + cards */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <GhostWord text="About Us" className="left-2 top-24" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]">
          <Reveal from="left" className="lg:self-center">
            <p className="text-sm text-primary">Our Mission</p>
            <h2 className="mt-3 text-4xl font-bold">
              We Are Here to
              <br />
              Make You <span className="text-primary">Thrive</span>
              <br />
              <span className="text-primary">Online.</span>
            </h2>
            <div className="mt-7">
              <DemoButton />
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {missionCards.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 110}
                scale
                className={c.offset}
              >
                <article className="h-full rounded-lg bg-card p-6 shadow-[0_20px_50px_-30px_rgba(16,18,24,0.45)]">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-24 w-24 object-contain"
                  />
                  <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* We Make it Easy */}
      <section className="px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <p className="text-sm text-primary">Built for Canadian &amp; American Business Owners</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              We Make it <span className="text-primary">Easy.</span>
            </h2>
            <div className="mt-5 max-w-md space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We've made the decision easy for busy business owners across Canada and the United
                States. You don't need to know code, marketing, or design. We handle the website,
                the follow-up, the reviews, and the reporting — all in one simple $297/mo package.
              </p>
              <p>
                Whether you're a contractor, clinic, consultant, or local shop, you get a premium site
                and a growth engine that actually brings in customers.
              </p>
              <p className="font-bold text-foreground">
                Still not sure? Try us out. Your first design is completely free — no contract, no
                setup fee, no payment until you love it.
              </p>
            </div>
            <div className="mt-7">
              <DemoButton />
            </div>
          </Reveal>
          <Reveal from="right" delay={100}>
            <img
              src={`${MEDIA}/2023/02/happy-business-man-with-money-1024x1024.png`}
              alt="Happy business man throwing money in the air"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
