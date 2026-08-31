import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CtaBand, Section, SectionHeading, TestimonialGrid } from "./sections";
import { Reveal } from "./Reveal";
import { GrowthReportWidget } from "./GrowthReportWidget";
import { serviceSeo } from "@/data/service-seo";
import { useIsMobile } from "@/hooks/use-mobile";

export type ServicePageProps = {
  /** Route path, e.g. "/chat-widget" — keys the SEO/answer content. */
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  intro: string[];
  benefits: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
};

export function ServicePage({
  slug,
  eyebrow,
  title,
  subtitle,
  image,
  intro,
  benefits,
  process,
}: ServicePageProps) {
  const seo = serviceSeo[slug];
  const isMobile = useIsMobile();

  return (
    <article>
      {/* Hero */}
      <header className="relative overflow-hidden bg-nav-plum pb-24 pt-40 text-nav-plum-foreground">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-white/10 blur-[110px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <Reveal from="up">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-nav-plum-foreground/80">
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
              </p>
              <h1 className="text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
              <p className="mt-5 max-w-xl text-lg text-nav-plum-foreground/75">{subtitle}</p>

              {seo && (
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-nav-plum-foreground">
                  <Check className="h-4 w-4 text-primary-foreground" />
                  {seo.plan}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg">Get your free growth report</Button>
                  </DialogTrigger>
                    <DialogContent className={`flex max-h-[92dvh] w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] flex-col overflow-hidden border-border/50 bg-card/95 p-0 shadow-2xl backdrop-blur-xl sm:w-full sm:max-w-[480px] [&>button]:text-nav-plum-foreground [&>button]:opacity-80 [&>button]:right-2 [&>button]:top-2 ${isMobile ? "" : "lg:max-h-[96dvh]"}`}>
                      <DialogTitle className="sr-only">Free growth report</DialogTitle>
                      <DialogHeader className="sr-only" />
                      <div className="min-h-0 flex-1 bg-background p-0">
                        <GrowthReportWidget
                          className="h-full min-h-[80dvh] w-full rounded-none border-0 lg:min-h-[90dvh]"
                          scale={isMobile ? 1 : 0.78}
                        />
                      </div>
                    </DialogContent>

                </Dialog>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-transparent text-nav-plum-foreground hover:bg-white/10 hover:text-nav-plum-foreground"
                >
                  <Link to="/pricing">See what's included</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal from="up" delay={120}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/25 blur-3xl" />
              <img
                src={image}
                alt={`${title} illustration`}
                width={512}
                height={512}
                loading="eager"
                className="w-full rounded-[2rem] border border-white/10 bg-white/[0.04] object-cover p-4"
              />
            </div>
          </Reveal>

        </div>
      </header>

      {/* Answer-first summary + key facts (built for AI answer engines) */}
      {seo && (
        <Section className="section-wash">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_1fr]">
            <Reveal from="up">
              <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[0_28px_70px_-45px_rgba(42,35,82,0.55)]">
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
                  In short
                </span>
                <p className="text-xl leading-relaxed text-ink">{seo.answer}</p>
              </div>
            </Reveal>
            <Reveal from="up" delay={100}>
              <dl className="grid gap-3">
                {seo.facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-baseline justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="text-right text-sm font-semibold text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          {intro.map((p, i) => (
            <Reveal key={p} from="up" delay={i * 80}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section muted>
        <SectionHeading eyebrow="What you get" title="Built to turn interest into" highlight="booked work" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} from="up" delay={i * 90}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_60px_-30px_rgba(42,35,82,0.45)]">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="text-xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process rail */}
      <Section className="section-wash text-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            How it works
          </p>
          <h2 className="text-4xl text-primary sm:text-5xl">
            Set up for you, start to finish
          </h2>
        </div>
        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent lg:block" />
          {process.map((p, i) => (
            <Reveal key={p.step} from="up" delay={i * 100}>
              <li className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-sm">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary">
                  {p.step}
                </span>
                <h3 className="mt-3 text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading title="What clients" highlight="say" />
        <div className="mt-12">
          <TestimonialGrid limit={3} />
        </div>
      </Section>

      {/* Page-specific FAQ */}
      {seo && (
        <Section muted>
          <SectionHeading
            eyebrow="FAQ"
            title={`${seo.name} —`}
            highlight="straight answers"
          />
          <Accordion type="single" collapsible className="mx-auto mt-12 max-w-3xl">
            {seo.faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mx-auto mt-10 flex max-w-3xl justify-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              See everything included for $297/mo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      )}

      <CtaBand />
    </article>
  );
}
