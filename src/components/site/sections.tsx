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
import {
  MEDIA,
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
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          )}
          <h1 className="text-4xl sm:text-6xl">{title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Get a Free Website Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">See our work</Link>
            </Button>
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-2xl object-cover"
          />
        )}
      </div>
    </section>
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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={s.slug}
          className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
        >
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="mb-5 h-40 w-full rounded-xl object-cover"
          />
          <h3 className="text-2xl group-hover:text-primary">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
        </Link>
      ))}
    </div>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <article key={p.name}>
          <div className="overflow-hidden rounded-2xl bg-card shadow-[0_18px_50px_-30px_rgba(16,18,24,0.45)]">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
          <p className="mt-6 text-base text-muted-foreground">{p.type}</p>
          <h3 className="mt-1 text-3xl font-bold">{p.name}</h3>
        </article>
      ))}
    </div>
  );
}

export function Counters() {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
      {counters.map((c) => (
        <div
          key={c.label}
          className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-card px-6 text-center shadow-[0_18px_40px_-24px_rgba(42,35,82,0.35)]"
        >
          <p className="font-[family-name:var(--font-display)] text-6xl font-bold tracking-tight text-[#1f2150]">
            {c.value}
            {"suffix" in c ? c.suffix : ""}
          </p>
          <p className="mt-4 text-base text-[#1f2150]">{c.label}</p>
        </div>
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
  return (
    <div className="flex gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(size, "fill-current", i < rating ? "text-[#f4a62a]" : "text-muted")}
        />
      ))}
    </div>
  );
}

export function RatingBar() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {ratingSources.map((r) => (
        <div key={r.label} className="flex flex-col items-center gap-6 text-center">
          <img src={r.logo} alt={r.label} loading="lazy" className="h-10 w-auto object-contain" />
          <ReviewStars size="h-6 w-6" />
          <p className="text-sm text-muted-foreground">{r.count}</p>
        </div>
      ))}
    </div>
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
            <img
              src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
              alt="Google"
              loading="lazy"
              className="h-5 w-5"
            />
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
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function LogoStrip() {
  const row = [...clientLogos, ...clientLogos];
  return (
    <div className="overflow-hidden bg-background py-12">
      <div className="marquee flex w-max items-center gap-16 px-8">
        {row.map((l, i) => (
          <img
            key={`${l.name}-${i}`}
            src={l.src}
            alt={l.name}
            loading="lazy"
            className="h-10 w-auto shrink-0 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
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
    <section className="bg-ink py-20 text-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-lg font-semibold text-background/70">{eyebrow}</p>
          <h2 className="text-5xl sm:text-6xl">{title}</h2>
          <div className="mt-8 max-w-md">
            <LeadForm variant="dark" fields="message" submitLabel="Send Message" />
          </div>
        </div>
        <img
          src={`${MEDIA}/2023/02/businessman-launching-startup-1024x1024.png`}
          alt="Launch your redesign"
          loading="lazy"
          className="mx-auto hidden w-full max-w-md lg:block"
        />
      </div>
    </section>
  );
}
