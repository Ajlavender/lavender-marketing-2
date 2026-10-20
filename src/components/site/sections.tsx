import { INTAKE_URL } from "@/data/pricing";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LeadForm } from "./LeadForm";
import { CountUp, Reveal } from "./Reveal";
import {
  ILLU,
  clientLogos,
  counters,
  faqs,
  googleReviews,
  projects,
  ratingSources,
  services,
  testimonials,
} from "@/data/site";

export function Section({
  children,
  className,
  muted,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={cn("py-20", muted && "bg-secondary", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      )}
      <h2 className="text-4xl sm:text-5xl">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  portrait,
  portraitCaption,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  portrait?: boolean;
  portraitCaption?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:grid-cols-2 lg:px-8">
        <div>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          )}
          <h1 className="text-[2.15rem] leading-[1.08] sm:text-6xl">{title}</h1>
          <p className="mt-4 text-base text-muted-foreground sm:mt-5 sm:text-lg">{subtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={INTAKE_URL}>Get My Free Website Design</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/projects">See our work</Link>
            </Button>
          </div>
        </div>
        {image && !portrait && (
          <img
            src={image}
            alt={imageAlt ?? title}
            loading="lazy"
            className="mx-auto max-h-[16rem] w-full max-w-md rounded-2xl object-contain sm:max-h-none sm:object-cover"
          />
        )}

        {image && portrait && (
          <div className="mx-auto w-full max-w-md">
            <div className="relative rounded-[2.5rem] border border-primary/15 bg-card/80 p-3 shadow-[0_40px_90px_-45px_rgba(31,33,80,0.55)] backdrop-blur-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(120%_90%_at_50%_0%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_55%)]">
                <img
                  src={image}
                  alt={imageAlt ?? title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              {portraitCaption && (
                <div className="relative mt-3 flex items-center justify-between gap-3 rounded-[1.25rem] bg-secondary/70 px-4 py-3">
                  <p className="text-sm font-semibold">{portraitCaption}</p>
                  <Stars />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function FounderPortrait({
  src,
  alt,
  caption,
  className,
  captionClassName,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  captionClassName?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-md", className)}>
      <div className="relative rounded-[2.5rem] border border-primary/15 bg-card/80 p-3 shadow-[0_40px_90px_-45px_rgba(31,33,80,0.55)] backdrop-blur-sm">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(120%_90%_at_50%_0%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
        />
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_55%)]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </div>
        {caption && (
          <div className={cn("relative mt-3 flex items-center justify-between gap-3 rounded-[1.25rem] bg-secondary/70 px-4 py-3", captionClassName)}>
            <p className="text-sm font-semibold">{caption}</p>
            <Stars />
          </div>
        )}
      </div>
    </div>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5 text-primary", className)} aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={s.slug}
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
        >
          <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/15 via-secondary to-primary/5 p-4 sm:p-5">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-[0_14px_30px_-18px_rgba(42,35,82,0.45)] transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-1.5 border-b border-border/60 bg-muted/50 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
              </div>
              <img
                src={s.card}
                srcSet={`${s.card.replace(/\.jpg$/, "-480.webp")} 480w, ${s.card.replace(/\.jpg$/, "-800.webp")} 800w, ${s.card} 1440w`}
                sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 400px"
                alt={s.title}
                loading="lazy"
                width={1440}
                height={900}
                className="min-h-0 w-full flex-1 object-contain"
              />
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl group-hover:text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit, compact }: { limit?: number; compact?: boolean }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <div className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", compact && "gap-x-6 gap-y-10")}>
      {items.map((p, i) => {
        const Card = (
          <article className={cn("group", p.href && "cursor-pointer")}>
            <div className="overflow-hidden rounded-2xl bg-card shadow-[0_18px_50px_-30px_rgba(16,18,24,0.45)]">
              <img
                src={p.image}
                srcSet={`${p.image.replace(/\.jpg$/, "-480.webp")} 480w, ${p.image.replace(/\.jpg$/, "-800.webp")} 800w, ${p.image} 1200w`}
                sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2rem), 400px"
                alt={p.name}
                loading="lazy"
                width={1200}
                height={900}
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className={cn("text-muted-foreground", compact ? "mt-4 text-xs" : "mt-6 text-base")}>
              {p.type}
            </p>
            <h3
              className={cn(
                "mt-1 font-bold text-[#1f2150] transition-colors group-hover:text-primary",
                compact ? "text-xl" : "text-3xl",
              )}
            >
              {p.name}
            </h3>
          </article>
        );
        return (
          <Reveal key={`${p.name}-${i}`} delay={(i % 3) * 90} from="up">
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${p.name} live site`}
              >
                {Card}
              </a>
            ) : (
              Card
            )}
          </Reveal>
        );
      })}
    </div>
  );
}


export function Counters() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {counters.map((c, i) => (
        <Reveal key={c.label} delay={i * 110} scale>
          <div className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-card px-6 text-center shadow-[0_18px_40px_-24px_rgba(42,35,82,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-28px_rgba(42,35,82,0.5)]">
            <p className="font-[family-name:var(--font-display)] text-6xl font-bold tracking-tight text-[#1f2150]">
              <CountUp value={`${c.value}${"suffix" in c ? c.suffix : ""}`} />
            </p>
            <p className="mt-4 text-base text-[#1f2150]">{c.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TestimonialGrid({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
          <Stars className="mb-4" />
          <blockquote className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</blockquote>
          <figcaption className="mt-4">
            <span className="block font-semibold">{t.name}</span>
            <span className="text-xs text-muted-foreground">{t.since}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ReviewStars({ rating = 5, size = "h-4 w-4" }: { rating?: number; size?: string }) {
  const full = Math.floor(rating);
  const frac = rating - full;
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return <Star key={i} className={cn(size, "fill-current text-[#f4a62a]")} />;
        }
        if (i === full && frac > 0) {
          return (
            <span key={i} className={cn("relative inline-block", size)}>
              <Star className={cn(size, "fill-current text-muted")} />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${frac * 100}%` }}
                aria-hidden
              >
                <Star className={cn(size, "fill-current text-[#f4a62a]")} />
              </span>
            </span>
          );
        }
        return <Star key={i} className={cn(size, "fill-current text-muted")} />;
      })}
    </div>
  );
}

export function RatingBar() {
  return (
    <Reveal scale>
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-brand/15 bg-card px-8 py-10 text-center shadow-[0_30px_70px_-35px_rgba(42,35,82,0.45)] sm:px-14 sm:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="relative flex flex-col items-center gap-3">
          <p className="font-[family-name:var(--font-display)] text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
            4.8
          </p>
          <ReviewStars rating={4.8} size="h-6 w-6" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            50+ Google reviews
          </p>
        </div>
        <div
          aria-hidden
          className="relative mx-auto my-8 h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent"
        />
        <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {ratingSources.map((r) => (
            <div
              key={r.label}
              className="group flex items-center gap-3 rounded-full border border-border/70 bg-background/60 px-5 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-card hover:shadow-[0_16px_34px_-22px_rgba(42,35,82,0.5)]"
            >
              <img
                src={r.logo}
                alt={r.label}
                loading="lazy"
                className={cn("object-contain", r.square ? "h-5 w-5" : "h-4 w-12")}
              />
              <span
                aria-hidden
                className="h-4 w-px shrink-0 bg-border"
              />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition duration-300 group-hover:text-foreground">
                {r.count}
              </span>
            </div>
          ))}
        </div>

      </div>
    </Reveal>
  );
}

export function GoogleReviews() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {googleReviews.map((r) => (
        <figure
          key={r.name}
          className="rounded-lg border border-border bg-card p-5 shadow-[0_1px_4px_rgba(16,18,24,0.08)]"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
              style={{ backgroundColor: r.color }}
              aria-hidden
            >
              {r.initial}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.when}</p>
            </div>
            <svg viewBox="0 0 24 24" role="img" aria-label="Google" className="h-5 w-5 shrink-0">
              <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.41Z" />
              <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.36l-3.24-2.54c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.62A10 10 0 0 0 12 22Z" />
              <path fill="#FBBC05" d="M6.39 13.93A6 6 0 0 1 6.08 12c0-.67.11-1.32.31-1.93V7.45H3.04A10 10 0 0 0 2 12c0 1.61.39 3.14 1.04 4.55l3.35-2.62Z" />
              <path fill="#EA4335" d="M12 5.94c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.64 9.64 0 0 0 12 2a10 10 0 0 0-8.96 5.45l3.35 2.62C7.18 7.7 9.39 5.94 12 5.94Z" />
            </svg>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <ReviewStars rating={r.rating} />
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1a73e8]" aria-hidden>
              <path
                fill="currentColor"
                d="M12 1.5 14.3 4l3.4-.4 1 3.3 3 1.6-1.3 3.2 1.3 3.2-3 1.6-1 3.3-3.4-.4L12 22.5 9.7 20l-3.4.4-1-3.3-3-1.6L3.6 12 2.3 8.8l3-1.6 1-3.3 3.4.4z"
              />
              <path fill="#fff" d="m10.9 15.3-2.6-2.6 1.1-1.1 1.5 1.5 3.7-3.7 1.1 1.1z" />
            </svg>
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">
            {r.quote}
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted-foreground">Read more</figcaption>
        </figure>
      ))}
    </div>
  );
}


export function FaqAccordion({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`item-${i}`}>
          <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {f.a}
            {f.link && (
              <Link to={f.link.to} className="mt-3 block font-medium text-primary underline underline-offset-2">
                {f.link.label}
              </Link>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function LogoStrip() {
  const row = [...clientLogos, ...clientLogos];
  return (
    <section className="relative isolate overflow-hidden border-t border-brand/10 bg-lavender-wash py-14 sm:py-20">
      {/* Ambient top sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
      />
      {/* Seamless white gradient transition into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent sm:h-56"
      />
      {/* Soft radial glow behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 bg-gradient-radial from-brand/10 via-transparent to-transparent opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/60 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-orange text-orange" />
            <span className="text-xs font-semibold uppercase tracking-widest text-ink/70">
              Trusted by local businesses across Canada & the US
            </span>
          </div>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Companies we&apos;ve worked with
          </h2>
          <p className="mt-3 max-w-xl text-base text-ink/60">
            Real brands, real results — from boutiques and contractors to entertainment and professional services.
          </p>
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden sm:mt-14">
        {/* Left fade mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-lavender-wash to-transparent sm:w-28"
        />
        {/* Right fade mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-lavender-wash to-transparent sm:w-28"
        />

        <div className="marquee-premium flex w-max items-center gap-10 px-8 sm:gap-14">
          {row.map((l, i) => (
            <div key={`${l.name}-${i}`} className="group flex items-center gap-10 sm:gap-14">
              <span className="shrink-0 whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-ink/70 transition-all duration-300 group-hover:text-brand sm:text-2xl">
                {l.name}
              </span>
              <span className="shrink-0 text-brand/20 transition-colors duration-300 group-hover:text-brand/50" aria-hidden>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl justify-center px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 rounded-2xl border border-brand/10 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex -space-x-1.5">
            {["bg-brand", "bg-brand-glow", "bg-brand-deep", "bg-ink"].map((c, i) => (
              <div
                key={i}
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white ${c}`}
              >
                <span className="text-[10px] font-bold text-white">{String.fromCharCode(65 + i)}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-ink">50+ reviews</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-orange text-orange" />
                ))}
              </div>
            </div>
            <span className="text-xs text-ink/50">Across Google &amp; Facebook</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  eyebrow = "Don't Be Shy.",
  title = "Ask Away!",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 rounded-[2rem] bg-[linear-gradient(100deg,#191b3f_0%,#221f5a_45%,#6d33d6_100%)] px-8 py-14 text-background sm:px-14 lg:flex-row lg:items-center lg:gap-12 lg:pl-14">
          <div className="w-full max-w-xl lg:flex-1">
            <p className="text-lg text-[#a78bfa]">
              Don't Be <span className="text-[#8b5cf6]">Shy.</span>
            </p>
            <h2 className="mt-2 text-5xl font-bold sm:text-6xl">{title}</h2>
            <p className="mt-3 text-lg text-[#c4b5fd]/80">
              Talk to AJ directly &mdash; he reads every message.
            </p>
            <div className="mt-8">
              <LeadForm variant="dark" fields="message" submitLabel="Send Message" />
            </div>
          </div>
          <div className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-center lg:pl-4">
            <div className="relative w-full max-w-[18rem] rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.7)] backdrop-blur-md sm:max-w-[20rem]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.16),transparent_70%)]"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(160deg,rgba(167,139,250,0.25),transparent_55%)]">
                <img
                  src="https://assets.cdn.filesafe.space/IyiCTBDPcxyW5GC333Qt/media/6a21a3a9c6d915cec1d4b37a.png"
                  alt="AJ, founder of Lavender Marketing & Co."
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="relative mt-2.5 flex items-center justify-between gap-3 rounded-[1.1rem] bg-white/8 px-4 py-3">
                <p className="text-sm font-semibold text-white">AJ &mdash; Founder</p>
                <Stars className="text-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const previewSteps = [
  "Tell us your current website URL. We design a brand-new homepage for your business, completely free.",
  "You get 7 days to look it over. Click through it, show your team, picture it as your live site.",
  "Love it? It becomes your new website at $297/mo, live within 14 days, with missed-call text-back, review automation, online booking, and follow-up switched on.",
  "Not for you? We take the preview down. You owe nothing.",
];

export function PreviewSteps() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold sm:text-5xl">
          Try your new website <span className="text-primary">free for 7 days.</span>
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">Here's exactly how it works:</p>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewSteps.map((step, i) => (
            <li key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const nextSteps = [
  "We look at your current website, usually within one business day.",
  "We design your new homepage. Free. No card required.",
  "You get 7 days to review it before you decide anything.",
  "Love it? Your full site goes live within 14 days at $297/mo. Don't? The preview comes down and you owe nothing.",
];

export function NextSteps({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl bg-secondary p-5", className)}>
      <p className="font-semibold">Here's what happens after you submit:</p>
      <ol className="mt-4 space-y-3">
        {nextSteps.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
