import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectGrid, RatingBar } from "@/components/site/sections";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { stats, ILLU } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Us? | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "See why 50+ local businesses choose Lavender Marketing & Co. — free design first, then $297/mo for hosting, review engine, missed-call text-back and follow-up.",
      },
      { property: "og:title", content: "Why Us? | Lavender Marketing & Co." },
      {
        property: "og:description",
        content: "See why 50+ local businesses choose Lavender Marketing & Co. — free design first, then $297/mo for hosting, review engine, missed-call text-back and follow-up.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://lavendermarketingco.com/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

const demoBtn =
  "h-11 rounded-full bg-[linear-gradient(90deg,#8b5cf6_0%,#6d33d6_100%)] px-7 text-[11px] font-bold uppercase tracking-[0.14em] text-background shadow-[0_12px_30px_-14px_rgba(109,51,214,0.9)] hover:opacity-90";

function DemoButton({
  label = "Get My Free Website Design",
  to,
  href = "https://api.scalesuitepro.com/widget/booking/sElYCoHQVkd1yhfDrM4l",
}: {
  label?: string;
  to?: string;
  href?: string;
}) {
  return (
    <Button asChild className={demoBtn}>
      {to ? (
        <Link to={to}>
          {label}
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {label}
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </a>
      )}
    </Button>
  );
}

const pageCounters = (yearsActive: number) => [
  { value: String(yearsActive), label: "Years Of Kicking A%*" },
  { value: "5", label: "Rockstars" },
  { value: "50", suffix: "+", label: "Local Businesses Served" },
  { value: "7", label: "States & Provinces" },
];

const videoTestimonials = [
  {
    name: "Client story – Foulk Consulting",
    poster: `${ILLU}/reporting.webp`,
  },
  {
    name: "Client story – Angel Host",
    poster: `${ILLU}/growth.webp`,
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

function WhyChooseUs() {
  const yearsActive = useMemo(() => new Date().getFullYear() - 2015, []);
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-secondary pb-20 pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal from="left">
            <img
              src={`${ILLU}/growth.webp`}
              alt="Businessman riding a rocket"
              className="mx-auto w-full max-w-md"
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
            <p className="text-sm text-muted-foreground">Storytime</p>
            <h1 className="mt-2 text-5xl font-bold sm:text-6xl">
              Why <span className="text-primary">Us?</span>
            </h1>
            <div className="mt-5 max-w-sm space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Let's say you hear about a new company. You'll probably not call them straight up.
                You'll probably Google them to check their website and reviews so you can compare them
                to their competitors.
              </p>
              <p>
                Based on what you find online, you will decide if you want to contact the company or
                not. That's the behaviour in 2025 and also probably why you are reading this.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-base text-primary">
              Do You Have Limited Time, Knowledge, and Budget?
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
              Many small businesses undervalue their website, leading to{" "}
              <span className="text-primary">lost opportunities worth millions.</span>
            </h2>
          </Reveal>
          <div className="mx-auto mt-20 grid max-w-5xl gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.slice(0, 3).map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                  <CountUp value={`${s.value}${s.suffix ?? ""}`} />
                </p>
                <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="col-span-full mt-4 flex justify-center">
            <div className="grid max-w-2xl grid-cols-2 gap-x-10 gap-y-20 sm:gap-x-16 lg:gap-x-24">
              {stats.slice(3).map((s) => (
                <div key={s.label}>
                  <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                    <CountUp value={`${s.value}${s.suffix ?? ""}`} />
                  </p>
                  <p className="mt-6 text-center text-base leading-relaxed text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal as="h3" className="mx-auto mt-20 max-w-3xl text-center text-3xl font-bold sm:text-4xl">
            We've analyzed thousands of websites to ensure this{" "}
            <span className="text-primary">won't happen to you.</span>
          </Reveal>
        </div>
      </section>

      {/* No strings attached + counters */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal from="left" scale>
              <img
                src={`${ILLU}/hosting-support.webp`}
                alt="Businessman doing work on working desk"
                loading="lazy"
                className="mx-auto w-full max-w-md"
              />
            </Reveal>
            <Reveal from="right" delay={120}>
              <h2 className="text-4xl font-bold sm:text-5xl">
                No Strings
                <br />
                Attached.
                <br />
                Seriously.
                <br />
                <span className="text-primary">0% risk.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                You will either love your new website or don't pay a dime! You've got nothing to lose.
              </p>
              <div className="mt-8">
                <DemoButton />
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {pageCounters(yearsActive).map((c, i) => (
              <Reveal key={c.label} delay={i * 110} scale>
                <div className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-card px-6 text-center shadow-[0_18px_40px_-24px_rgba(42,35,82,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-28px_rgba(42,35,82,0.5)]">
                  <p className="font-[family-name:var(--font-display)] text-6xl font-bold tracking-tight text-[#1f2150]">
                    <CountUp value={`${c.value}${c.suffix ?? ""}`} />
                  </p>
                  <p className="mt-4 text-base text-[#1f2150]">{c.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings */}
      <section className="bg-secondary pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm text-primary">Ready To Find Your Digital Soulmate?</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold sm:text-4xl">
              Our customers are raving about us like we're{" "}
              <span className="text-primary">the latest viral TikTok dance.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <RatingBar />
          </Reveal>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm text-muted-foreground">
              Don't Just Take Our Word For It
            </p>
            <h2 className="mt-3 text-center text-4xl font-bold sm:text-5xl">
              See Our
              <br />
              <span className="text-primary">Video Testimonials</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.name} delay={i * 130} scale>
                <button
                  type="button"
                  aria-label={`Play video: ${v.name}`}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-card shadow-[0_20px_50px_-30px_rgba(16,18,24,0.5)]"
                >
                  <img
                    src={v.poster}
                    alt={v.name}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-foreground/10 transition group-hover:bg-foreground/20">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 shadow-lg transition group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 fill-current text-foreground" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <DemoButton label="See all reviews" to="/reviews" />
          </div>
        </div>
      </section>

      {/* Cutting-Edge Creations */}
      <section className="relative bg-secondary py-24">
        <GhostWord text="What We Do" className="left-2 top-1/3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm text-primary">
              We've Got Black Belt In Websites. See For Yourself.
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Cutting-Edge Creations.</h2>
          </Reveal>
          <Reveal delay={140} className="mt-14">
            <ProjectGrid limit={3} />
          </Reveal>
          <div className="mt-14 text-center">
            <DemoButton label="See all projects" to="/projects" />
          </div>
        </div>
      </section>

      {/* We Simplify The Web */}
      <section className="bg-secondary pb-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal from="left">
            <img
              src={`${ILLU}/lead-gen.webp`}
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
                Almost every business has a website, and the majority of large and fast-growing
                companies depend on their websites. Despite the importance of a website, we couldn't
                find a single website or SEO agency that focused on helping small and mid-size
                businesses smoothly and efficiently.
              </p>
              <p>
                It seemed like the alternatives were either cheap freelancers with not enough
                experience or web agencies that just wanted to work with larger, higher-paying
                clients. There was nothing for us.
              </p>
              <p>
                <strong className="font-bold text-foreground">The solution?</strong> We decided to
                gather the best web developers, designers, SEO experts, and project managers to start
                a web and SEO agency that simplified web technology for busy executives. We started to
                build the web agency we had never found.
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

      {/* That's Why You Choose Us */}
      <section className="bg-secondary pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal from="left">
            <p className="text-sm text-primary">Simply Awesome Web Design: That's Us!</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              That's Why
              <br />
              <span className="text-primary">You Choose Us.</span>
            </h2>
            <div className="mt-5 max-w-md space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                We build websites with conversion and SEO best practices learned from over 2000
                clients. Then we continue to optimize your website with data from your own personal
                A/B tests.
              </p>
              <p>
                Now it's up to you – do you want to continue down the same path and pass up on new
                potential clients, or do you want to join the league of fast-growing businesses by
                letting your website help you grow based on data? The decision is yours.
              </p>
            </div>
            <div className="mt-7">
              <DemoButton />
            </div>
          </Reveal>
          <Reveal from="right" delay={120}>
            <img
              src={`${ILLU}/reviews.webp`}
              alt="Man showing dollar and bitcoin"
              loading="lazy"
              className="mx-auto w-full max-w-sm"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
