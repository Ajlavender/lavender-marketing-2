import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Maximize2,
  Minimize2,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  SectionHeading,
  ServicesGrid,
} from "@/components/site/sections";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { MEDIA, stats } from "@/data/site";
import { PainPointCards } from "@/components/site/PainPointCards";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { CatchSection } from "@/components/site/CatchSection";
import { SystemLoop } from "@/components/site/SystemLoop";
import { BuyerPaths } from "@/components/site/BuyerPaths";
import { ValueStack } from "@/components/site/ValueStack";
import { ComparisonTable } from "@/components/site/ComparisonTable";

const HERO_POSTER = `${MEDIA}/2023/05/representacion-3d-concepto-alojamiento-sitios-web-scaled.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "We design your new website for free. If you love it, launch for $297/mo — hosting, review engine, missed-call text-back and follow-up included.",
      },
      { property: "og:title", content: "Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        property: "og:description",
        content:
          "We design your new website for free. If you love it, launch for $297/mo — hosting, review engine, missed-call text-back and follow-up included.",
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
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://assets.cdn.filesafe.space", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://assets.cdn.filesafe.space" },
      {
        rel: "preload",
        as: "image",
        href: HERO_POSTER,
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

const HERO_VIDEO =
  "https://assets.cdn.filesafe.space/LgG7iv4Yd7mh0USORTBt/media/6a7d44f562e9a426c0c5f1dd.mp4";


function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [showFloatBtn, setShowFloatBtn] = useState(false);
  const [floating, setFloating] = useState(false);
  // Tracks whether the current floating player was started automatically by scrolling.
  const autoFloatRef = useRef(false);
  // Tracks whether the user manually closed the floating player while scrolled down.
  const userDismissedRef = useRef(false);
  // Video source is attached only after hydration + when the card is in view,
  // so the poster paints first and the mp4 never blocks first render.
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const conn = (navigator as any).connection;
    const saveData = Boolean(conn?.saveData);
    const slow = /^(slow-2g|2g)$/.test(conn?.effectiveType ?? "");
    if (saveData || slow) return; // keep the poster only

    const attach = () => setVideoSrc(HERO_VIDEO);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          const ric = (window as any).requestIdleCallback;
          ric ? ric(attach, { timeout: 1200 }) : setTimeout(attach, 200);
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (videoSrc) videoRef.current?.load();
  }, [videoSrc]);




  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 400;
      setShowFloatBtn(scrolled);

      if (scrolled) {
        // Auto-float once when the user scrolls past the hero.
        if (!floating && !autoFloatRef.current && !userDismissedRef.current) {
          autoFloatRef.current = true;
          setFloating(true);
        }
      } else {
        // Back at the hero: reset dismissal so auto-float works on the next scroll down,
        // and return the video if it was floated automatically.
        userDismissedRef.current = false;
        if (floating && autoFloatRef.current) {
          setFloating(false);
          autoFloatRef.current = false;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [floating]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const toggleFloating = () => {
    setFloating((prev) => {
      const next = !prev;
      if (!next) {
        // Manual close while scrolled down — remember the choice.
        if (window.scrollY > 400) {
          userDismissedRef.current = true;
        }
        autoFloatRef.current = false;
      } else {
        userDismissedRef.current = false;
        autoFloatRef.current = false;
      }
      return next;
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-secondary">
        {/* atmosphere */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 hero-grid opacity-70" />
          <div
            className="aurora-blob left-[-10%] top-[-12%] h-[38rem] w-[38rem] opacity-40"
            style={{ background: "radial-gradient(circle, var(--brand-glow), transparent 65%)" }}
          />
          <div
            className="aurora-blob right-[-14%] top-[6%] h-[34rem] w-[34rem] opacity-35"
            style={{
              background: "radial-gradient(circle, var(--brand), transparent 65%)",
              animationDelay: "-6s",
            }}
          />
          <div
            className="aurora-blob bottom-[-20%] left-[35%] h-[30rem] w-[30rem] opacity-25"
            style={{
              background: "radial-gradient(circle, var(--brand-deep), transparent 65%)",
              animationDelay: "-11s",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-36">
          <div className="relative animate-fade-in">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-background/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-foreground shadow-sm backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" />
                Free design
              </span>
              <span className="text-muted-foreground">Automated review engine included</span>
            </span>
            <h1
              className="animate-fade-in text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
              style={{ animationDelay: "80ms", animationFillMode: "both" }}
            >
              We build your new website{" "}
              <span className="text-gradient-brand">for free.</span>
            </h1>
            <h2
              style={{ animationDelay: "180ms", animationFillMode: "both" }}
              className="animate-fade-in mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-[2.25rem]">
              You only pay $297/mo if you like it.
            </h2>
            <p
              style={{ animationDelay: "240ms", animationFillMode: "both" }}
              className="animate-fade-in mt-5 max-w-xl text-lg text-muted-foreground"
            >
              Built for local service businesses. The $297 covers hosting, the review engine that
              keeps you #1 on Google, missed-call text-back, follow-up and a monthly growth report
              delivered on the 1st of every month. No setup fee, no contract, no paying before you
              see the design.
            </p>

            <div
              className="animate-fade-in mt-10 max-w-xl rounded-2xl border border-white/60 bg-background/70 p-5 shadow-[0_30px_70px_-40px_color-mix(in_oklab,var(--brand)_60%,transparent)] backdrop-blur-xl"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <LeadForm submitLabel="Get My Free Website Design" />
              <p className="mt-3 text-xs text-muted-foreground">
                No card required · Design first, decide after · Cancel anytime
              </p>
            </div>

            {/* trust row */}
            <div
              className="animate-fade-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
              style={{ animationDelay: "380ms", animationFillMode: "both" }}
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-brand" /> No contracts
              </span>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-[#f4a62a] text-[#f4a62a]" /> 5.0 Google rating
              </span>
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand" /> Live in 7 days
              </span>
            </div>


            {/* curved connector line to the video card */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-[-9rem] top-[7.5rem] hidden h-24 w-40 text-foreground/25 xl:block"
              viewBox="0 0 160 96"
              fill="none"
            >
              <path
                d="M0 4C60 4 100 30 158 88"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Video card */}
          <div
            style={{ animationDelay: "220ms", animationFillMode: "both" }}
            className="animate-scale-in relative rounded-[1.75rem] p-[1.5px] shadow-[0_40px_90px_-45px_color-mix(in_oklab,var(--brand)_70%,transparent)]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-[1.75rem] bg-gradient-brand opacity-70 blur-[2px]"
            />

            {/* floating proof cards */}
            <div className="animate-float-soft pointer-events-none absolute -left-4 top-8 z-20 hidden rounded-2xl border border-white/60 bg-background/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="text-2xl font-bold leading-none text-brand">
                <CountUp value="312%" />
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">More Google reviews</p>
            </div>
            <div
              className="animate-float-soft pointer-events-none absolute -right-4 bottom-10 z-20 hidden rounded-2xl border border-white/60 bg-background/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
              style={{ animationDelay: "-2.5s" }}
            >
              <p className="text-2xl font-bold leading-none text-brand">
                <CountUp value="7 days" />
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">Design to launch</p>
            </div>

            <div className="relative overflow-hidden rounded-[1.65rem] bg-black">
              {!floating ? (
                <>
                  <VideoPlayer
                    videoRef={videoRef}
                    muted={muted}
                    canPlay={canPlay}
                    videoSrc={videoSrc}
                    floating={false}
                    onToggleMute={toggleMute}
                  />

                  {/* Pop-out button — appears on scroll */}
                  <button
                    type="button"
                    onClick={toggleFloating}
                    className={cn(
                      "group absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white backdrop-blur-md shadow-lg ring-1 transition-all duration-300 ease-out",
                      "bg-black/70 ring-white/10 hover:scale-110 hover:bg-black/85 hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.35)] hover:ring-white/25",
                      "active:scale-95",
                      showFloatBtn && !floating
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0",
                    )}
                    aria-label="Pop video out"
                    title="Pop video out"
                  >
                    <Minimize2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </button>
                </>
              ) : (
                /* Placeholder while the video is playing in the floating player */
                <div className="relative aspect-video w-full">
                  <img
                    src={HERO_POSTER}
                    alt=""
                    className="h-full w-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-xl">
                      <Maximize2 className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-white/80">Video playing in corner</span>
                  </div>
                </div>
              )}
            </div>

            {/* Custom floating player — no browser PiP chrome, so no favicon/logo appears. */}
            {floating &&
              createPortal(
                <div className="fixed bottom-4 right-4 z-[100] w-[min(22rem,92vw)] animate-scale-in">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)]">
                    <VideoPlayer
                      videoRef={videoRef}
                      muted={muted}
                      canPlay={canPlay}
                      videoSrc={videoSrc}
                      floating={true}
                      onToggleMute={toggleMute}
                    />
                    {/* Close floating player */}
                    <button
                      type="button"
                      onClick={toggleFloating}
                      className="absolute -top-2 -right-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-1 ring-border transition hover:scale-110 hover:bg-accent"
                      aria-label="Close floating video"
                      title="Close floating video"
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>,
                document.body,
              )}
          </div>
        </div>

        {/* scroll cue */}
        <div className="pointer-events-none flex justify-center pb-8">
          <span className="animate-float-soft inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
            Scroll to see how it works
            <ArrowRight className="h-3.5 w-3.5 rotate-90 text-brand" />
          </span>
        </div>
      </section>


      <LogoStrip />

      {/* Pain points — the four leak points */}
      <Section className="pt-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-12">
          <Reveal from="left" className="lg:sticky lg:top-32">
            <p className="max-w-sm text-base text-primary">The real issue</p>
            <h2 className="mt-4 max-w-md text-4xl font-bold leading-[1.1] sm:text-5xl">
              Most local businesses don&apos;t have a traffic problem. They have a{" "}
              <span className="text-primary">follow-up and conversion problem.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              You can have great work, referrals and word of mouth. But if your website is weak,
              your calls get missed, your follow-up is slow, or your reviews aren&apos;t being
              captured, good leads quietly disappear.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button asChild size="lg">
                <Link to="/contact">Get my free design</Link>
              </Button>
              <Link
                to="/pricing"
                className="border-b border-primary pb-1 text-sm font-medium text-primary"
              >
                See the $297 plan
              </Link>
            </div>
          </Reveal>

          <PainPointCards />
        </div>
      </Section>

      <SystemLoop />

      {/* Services grid */}
      <Section>
        <SectionHeading
          eyebrow="What you get"
          title="One growth system, built for local service businesses"
          subtitle="Every tool below is included in the $297/month Essentials Plan. No separate logins, no surprise bills."
        />
        <Reveal delay={120} className="mt-14">
          <ServicesGrid />
        </Reveal>
      </Section>

      {/* Reviews */}
      <Section muted className="py-24">
        <Reveal>
          <p className="text-center text-base font-semibold text-foreground">
            Rated by 50+ local business owners
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
            The review engine that turns happy customers into{" "}
            <span className="text-primary">Google rankings.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-16">
          <RatingBar />
        </Reveal>
        <Reveal delay={200} className="mt-16">
          <GoogleReviews />
        </Reveal>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">See all reviews</Link>
          </Button>
        </div>
      </Section>

      {/* Sexy and affordable */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal scale className="relative rounded-[2rem] bg-[linear-gradient(115deg,#1d1f4a_0%,#231f57_45%,#6d33d6_100%)] px-8 py-14 text-background sm:px-14 lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
              <div>
                <p className="text-xl font-medium text-[#a78bfa]">
                  LM&amp;C sets it up. Scale Suite Pro keeps it running.
                </p>
                <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                  One system instead of five disconnected tools.
                </h2>
                <p className="mt-8 max-w-xl text-background/85">
                  Your calls, texts, forms, bookings, reviews and follow-up all live in one place.
                  You see every lead, where it came from, and what happened next — without adding
                  front-desk work.
                </p>
                <p className="mt-6 font-bold">Already have a decent website?</p>
                <p className="mt-1 max-w-xl text-background/85">
                  Perfect. The review engine works on its own — more reviews, better local ranking,
                  more calls. We&apos;ll set it up either way.
                </p>
                <p className="mt-6 text-background/85">
                  Drop your details and we&apos;ll send your free design and review audit.
                </p>
                <div className="mt-6 max-w-xl">
                  <LeadForm variant="dark" fields="leadInline" submitLabel="go!" />
                </div>
              </div>

              <div className="relative">
                <img
                  src={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
                  alt="Businessman giving analysis presentation"
                  loading="lazy"
                  className="mx-auto w-full max-w-lg lg:absolute lg:-bottom-24 lg:left-1/2 lg:w-[125%] lg:max-w-none lg:-translate-x-1/2"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <Reveal>
          <p className="text-center text-base text-muted-foreground">
            Why this matters for a local business
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
            Customers decide fast — and they call{" "}
            <span className="text-primary">whoever answers first.</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-20 grid max-w-5xl gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {stats.slice(0, 3).map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                <CountUp value={`${s.value}${s.suffix ?? ""}`} />
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
          <Reveal delay={300} className="col-span-full mt-4 flex justify-center">
            <div className="grid max-w-2xl grid-cols-2 gap-x-10 gap-y-20 sm:gap-x-16 lg:gap-x-24">
              {stats.slice(3).map((s) => (
                <div key={s.label}>
                  <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                    <CountUp value={`${s.value}${s.suffix ?? ""}`} />
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal as="h3" className="mx-auto mt-16 max-w-3xl text-center text-3xl font-bold sm:text-4xl">
          We build the website and the system so this{" "}
          <span className="text-primary">doesn&apos;t happen to you.</span>
        </Reveal>
      </Section>

      {/* Projects */}
      <Section muted>
        <Reveal>
          <p className="text-lg font-semibold text-primary">Real websites we&apos;ve built</p>
          <h2 className="mt-3 text-5xl font-bold sm:text-6xl">Cutting-Edge Creations</h2>
        </Reveal>
        <Reveal delay={140} className="mt-14">
          <ProjectGrid limit={3} />
        </Reveal>
        <div className="mt-14 text-center">
          <Button asChild size="lg" className="px-10 uppercase tracking-wide">
            <Link to="/projects">
              See all projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      <CatchSection />

      <BuyerPaths />

      <ValueStack />

      {/* No strings attached */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="left" scale>
            <img
              src={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
              alt="Businessman doing work on working desk"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <h2 className="text-4xl font-bold sm:text-5xl">
              No strings attached. Seriously. <span className="text-primary">0% risk.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We design the site first. You look at it. If you love it, it&apos;s $297 a month and
              we launch it. If you don&apos;t, you walk away and it costs you nothing.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">Get my free design</Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-20">
          <Counters />
        </div>
      </Section>

      <ComparisonTable />

      {/* Testimonials */}
      <Section className="py-24">
        <Reveal>
          <p className="text-center text-lg text-foreground">
            Straight from <span className="text-primary">local owners.</span>
          </p>
          <h2 className="mt-3 text-center text-5xl font-bold text-[#1f2150] sm:text-6xl">
            What clients say after launch
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-14">
          <TestimonialCarousel />
        </Reveal>
      </Section>


      <CtaBand />
    </>

  );
}
