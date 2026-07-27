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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p) => (
        <article key={p.name} className="overflow-hidden rounded-2xl border border-border bg-card">
          <img src={p.image} alt={p.name} loading="lazy" className="h-48 w-full object-cover" />
          <div className="p-5">
            <h3 className="text-xl">{p.name}</h3>
            <p className="mt-1 text-sm text-primary">{p.type}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Counters() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {counters.map((c) => (
        <div key={c.label} className="text-center">
          <p className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary">
            {c.value}
            {"suffix" in c ? c.suffix : ""}
          </p>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{c.label}</p>
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

export function RatingBar() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {ratingSources.map((r) => (
        <div key={r.label} className="rounded-xl border border-border bg-card p-5 text-center">
          <Stars className="justify-center" />
          <p className="mt-2 text-sm font-semibold">Rated 5 out of 5</p>
          <p className="text-xs text-muted-foreground">
            {r.count} on {r.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {googleReviews.map((r) => (
        <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Posted on Google</p>
          <Stars className="my-3" />
          <blockquote className="text-sm leading-relaxed text-muted-foreground">"{r.quote}"</blockquote>
          <figcaption className="mt-4 font-semibold">{r.name}</figcaption>
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

export function CtaBand({
  title = "Ready To Find Your Digital Soulmate?",
  subtitle = "Get a free website redesign demo by dropping your details below. No strings attached.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-foreground py-20 text-background">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80">{subtitle}</p>
        <div className="mx-auto mt-8 max-w-xl">
          <LeadForm variant="dark" submitLabel="go!" />
        </div>
      </div>
    </section>
  );
}
