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
          "Our journey began in Canada in 2015, and we went all-in in 2019. We built the web agency we never found – a 5-star web, SEO & growth partner for Canadian small businesses.",
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
    title: "Free Design",
    body:
      "We create a demo design with suggestions for free, so you don't need to guess. You can see the design before you decide.",
    image: `${MEDIA}/2023/02/web-design-1024x1024.png`,
    offset: "lg:mt-14",
  },
  {
    title: "Guaranteed ROI",
    body:
      "We are building all our designs from conversion best practices, so you don't need to worry if it will give return of investment or not.",
    image: `${MEDIA}/2023/02/financial-growth-1024x1024.png`,
    offset: "lg:mt-0",
  },
  {
    title: "Data Based Decisions",
    body:
      "We A/B testing the website after launch to optimize further. In fact, the only way to be sure that you are improving your website is to optimize it based on data. Otherwise, you're just guessing.",
    image: `${MEDIA}/2023/02/ab-testing-1024x1024.png`,
    offset: "lg:mt-6",
  },
  {
    title: "Optimized communication",
    body:
      "Besides this, we've optimized our processes for busy executives in small and mid-sized businesses. Working with us takes very little time, and communicating with us is done by a live chat for faster replies.",
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
                Our Journey began in Sweden in 2016, with another Startup that relied heavily on its
                website to generate revenue.
              </p>
              <p>We were quite successful but had one big problem that took up most of our time.</p>
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
                  Well, building and optimizing a website wasn't a walk in the park. There were too
                  many website companies, too many choices and it was too costly – and at the end of
                  they day, no one really knew what worked anyway.
                </p>
                <p>
                  <strong className="font-bold text-background">Worst of all?</strong>
                  <br />
                  No one ever showed us what the website they wanted us to buy would look like. They
                  urged us to spend $ 10 000 + and "trust them". We needed to make the decision based
                  on gut feeling. Not a very easy decision to make, if you ask me.
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
                Almost every business out there has a website. The majority of large and fast-growing
                companies depend on their websites. Despite the importance of a website, we couldn't
                find a single website or SEO agency that focused on helping small and mid-size
                business in a smooth and efficient way.
              </p>
              <p>
                It seemed like the alternatives out there were either cheap freelancers with not
                enough experience, or web agencies that just wanted to work with larger, higher paying
                clients. There was nothing for us.
              </p>
              <p>
                <strong className="font-bold text-foreground">The solution?</strong>
                <br />
                We decided to gather the best web developers, designers, SEO-experts and project
                managers that we could find to start a web &amp; SEO agency that simplified web
                technology for busy executives. We started to build the web agency we never found.
                <br />
                We are Lavender Marketing & Co..
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
                A 5-Star SEO &amp; Web Agency For Small &amp; Medium Businesses
              </p>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                We Built the Web Agency
                <br />
                <span className="text-[#c4b5fd]">We Never Found.</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-background/85">
                <p>
                  We're on a mission to be the coolest cats in the web game. We whip up websites so
                  sexy you'll want to marry them and SEO so affordable you can keep your second
                  mortgage.
                </p>
                <p>
                  <strong className="font-bold text-background">The best part?</strong>
                  <br />
                  We make sure your site is a love magnet for customers who can't resist your charm.
                  So if you're a small or mid-sized biz who wants to look good, get found, and rule
                  the online jungle, we're your go-to team!
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
            <p className="text-sm text-primary">Chillax And Let Us Do The Heavy Lifting!</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              We Make it <span className="text-primary">Easy.</span>
            </h2>
            <div className="mt-5 max-w-md space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We have finally made the decision easy for busy people in the United States and United
                Kingdom. We're specialized to work with people that don't know too much about websites
                and don't want to spend a lot of time nor money on a project.
              </p>
              <p>
                We're nuts about creating cost-effective websites that are as stunning as they are
                functional!
              </p>
              <p className="font-bold text-foreground">
                Still not sure? Well, try us out. We create a free design for you, remember?
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
