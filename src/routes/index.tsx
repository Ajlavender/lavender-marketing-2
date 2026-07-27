import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";
import { cn } from "@/lib/utils";
import {
  Counters,
  CtaBand,
  GoogleReviews,
  LogoStrip,
  ProjectGrid,
  RatingBar,
  Section,
  TestimonialGrid,
} from "@/components/site/sections";
import { MEDIA, painPoints, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webtec | Website Redesign & SEO Services" },
      {
        name: "description",
        content:
          "Website redesign agency specializing in web redesign & SEO for small and medium-sized businesses. Get a free website demo before you decide.",
      },
      { property: "og:title", content: "Webtec | Website Redesign & SEO Services" },
      {
        property: "og:description",
        content:
          "Get a free website redesign demo before you decide. Web design, SEO and paid ads for small and mid-sized businesses.",
      },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content:
          "https://www.trywebtec.com/wp-content/uploads/2023/02/man-seating-on-beanbag-and-work-on-laptop.png",
      },
      {
        name: "twitter:image",
        content:
          "https://www.trywebtec.com/wp-content/uploads/2023/02/man-seating-on-beanbag-and-work-on-laptop.png",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const painLinks = [
  "/website-redesign",
  "/copywriting",
  "/seo",
  "/digital-ads",
] as const;

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 text-base text-muted-foreground">
              Web Development, SEO &amp; Paid Ads Agency
            </p>
            <h1 className="text-6xl font-bold sm:text-7xl">Website Redesign</h1>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Get a <span className="text-primary">Free</span> Website Redesign Before You Decide
            </h2>
            <div className="mt-10 max-w-xl">
              <LeadForm submitLabel="Book Free Consultation" />
            </div>
          </div>

          {/* Video card */}
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <p className="px-6 py-5 text-2xl font-bold text-white sm:text-3xl">
              Up for a whole new experience? 🌹
            </p>
            <div className="relative">
              <img
                src={`${MEDIA}/2023/05/representacion-3d-concepto-alojamiento-sitios-web-scaled.jpg`}
                alt="Webtec intro video"
                className="h-[22rem] w-full object-cover"
              />
              <button
                type="button"
                aria-label="Play Webtec intro video"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-105">
                  <Play className="ml-1 h-8 w-8 fill-black text-black" />
                </span>
              </button>
            </div>
            <p className="px-6 py-6 text-center text-lg font-medium text-white">
              Webtec is a unique five ⭐️ rated web agency
            </p>
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* Pain points */}
      <Section className="pt-4">
        <p className="text-center text-base text-muted-foreground">
          Our services rely on insights gained from 3000+ customers' data.
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
          Website Redesign so you <span className="text-primary">Thrive Online.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <a
              href="https://calendly.com/webtec-website/free-webdesign-sketch"
              target="_blank"
              rel="noreferrer"
            >
              Free Lead Boost Tips
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Download CRO guide PDF</Link>
          </Button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p, i) => (
            <Link
              key={p.title}
              to={painLinks[i]}
              className={cn(
                "group rounded-3xl bg-card p-8 shadow-[0_10px_40px_-20px_rgba(16,18,24,0.35)] transition-transform hover:-translate-y-1",
                i % 2 === 1 && "lg:translate-y-10",
              )}
            >
              <img src={p.image} alt="" loading="lazy" className="h-28 w-28 object-contain" />
              <h3 className="mt-6 text-xl font-bold group-hover:text-primary">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section muted className="py-24">
        <p className="text-center text-base font-semibold text-foreground">
          Ready To Find Your Digital Soulmate?
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
          Our customers are raving about us like we're{" "}
          <span className="text-primary">the latest viral TikTok dance.</span>
        </h2>
        <div className="mt-16">
          <RatingBar />
        </div>
        <div className="mt-16">
          <GoogleReviews />
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">See all reviews</Link>
          </Button>
        </div>
      </Section>

      {/* Sexy and affordable */}
      <section className="bg-ink py-24 text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-background/70">
            The Quality of Marketing Giants At The Price of Freelancers.
          </p>
          <div className="mt-12 grid items-center gap-14 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold sm:text-5xl">Sexy And Affordable.</h2>
              <p className="mt-6 text-background/80">
                We're on a mission to be the coolest cats in the web game. We whip up website
                redesigns so sexy you'll want to marry them with services so affordable you can keep
                your second mortgage.
              </p>
              <p className="mt-4 font-bold">The best part?</p>
              <p className="mt-2 text-background/80">
                We make sure your site is a love magnet for customers who can't resist your charm. So
                if you're a small or mid-sized biz who wants to look good, get found, and rule the
                online jungle, we're your go-to team!
              </p>
              <p className="mt-8 font-semibold">
                Get a free website redesign by dropping your details below.
              </p>
              <div className="mt-5 max-w-md">
                <LeadForm variant="dark" submitLabel="go!" />
              </div>
            </div>
            <img
              src={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
              alt="Businessman giving analysis presentation"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <p className="text-center text-base text-muted-foreground">
          Do You Have Limited Time, Knowledge, and Budget?
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
          Many small businesses undervalue their website, leading to{" "}
          <span className="text-primary">lost opportunities worth millions.</span>
        </h2>
        <div className="mx-auto mt-20 grid max-w-5xl gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className={cn(i === 3 && "lg:col-start-2")}>
              <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <h3 className="mx-auto mt-16 max-w-3xl text-center text-3xl font-bold sm:text-4xl">
          We've analyzed thousands of websites to ensure this{" "}
          <span className="text-primary">won't happen to you.</span>
        </h3>
      </Section>

      {/* Projects */}
      <Section muted>
        <p className="text-lg font-semibold text-primary">
          A Website Redesign Agency With A Black Belt In Style
        </p>
        <h2 className="mt-3 text-5xl font-bold sm:text-6xl">Cutting-Edge Creations</h2>
        <div className="mt-14">
          <ProjectGrid limit={3} />
        </div>
        <div className="mt-14 text-center">
          <Button asChild size="lg" className="px-10 uppercase tracking-wide">
            <Link to="/projects">
              See all projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* No strings attached */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <img
            src={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
            alt="Businessman doing work on working desk"
            loading="lazy"
            className="mx-auto w-full max-w-md"
          />
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">
              No Strings Attached. Seriously. <span className="text-primary">0% risk.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              You will either love your new website redesign or don't pay a dime! You've got nothing
              to lose.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/webtec-website/free-webdesign-sketch"
                target="_blank"
                rel="noreferrer"
              >
                Free Lead Boost Tips
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <Counters />
        </div>
      </Section>

      {/* Testimonials */}
      <Section muted className="py-24">
        <p className="text-center text-lg text-foreground">
          Our Experience Is <span className="text-primary">Your Advantage.</span>
        </p>
        <h2 className="mt-3 text-center text-5xl font-bold text-[#1f2150] sm:text-6xl">
          Join Thousands Of Happy Customers
        </h2>
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
      </Section>


      <CtaBand />
    </>
  );
}
