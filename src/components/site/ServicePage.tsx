import { Check } from "lucide-react";
import { CtaBand, FaqAccordion, PageHero, Section, SectionHeading, TestimonialGrid } from "./sections";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  intro: string[];
  benefits: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
};

export function ServicePage({
  eyebrow,
  title,
  subtitle,
  image,
  intro,
  benefits,
  process,
}: ServicePageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={image} />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg text-muted-foreground">
          {intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading title="What you get" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
              <Check className="mb-4 h-6 w-6 text-primary" />
              <h3 className="text-xl">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="How it" highlight="works" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary">
                {p.step}
              </span>
              <h3 className="mt-3 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading title="What clients" highlight="say" />
        <div className="mt-12">
          <TestimonialGrid limit={3} />
        </div>
      </Section>

      <Section>
        <SectionHeading title="Frequently asked" highlight="questions" />
        <div className="mt-12">
          <FaqAccordion limit={4} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
