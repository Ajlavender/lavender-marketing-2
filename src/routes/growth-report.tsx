import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { LeadConnectorWidget } from "@/components/site/LeadConnectorWidget";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/sections";
import { MEDIA } from "@/data/site";

const valueChecks = [
  "One-page plain-English summary",
  "Leads by source, calls recovered, reviews earned",
  "Delivered by email on the 1st of every month",
  "No spam, no sales calls — just the numbers",
];

export const Route = createFileRoute("/growth-report")({
  head: () => serviceHead("/growth-report"),
  component: () => (
    <>
      <ServicePage
        slug="/growth-report"
        eyebrow="Monthly Growth Report"
        title="A plain-English report on the 1st of every month"
        subtitle="Where your leads came from, what converted, and what to fix next — so you always know if your marketing is paying off."
        image={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
        ctaTo="#growth-report-form"
        ctaLabel="Get your free growth report"
        intro={[
          "Most agencies send dashboards full of impressions. That doesn't tell you whether the phone rang more this month.",
          "Our report is one page of plain English: leads by source, calls recovered, reviews earned, bookings made, and the one or two things we're changing next month.",
        ]}
        benefits={[
          { title: "Leads, not vanity metrics", body: "Calls, forms, chats and bookings — the numbers that pay you." },
          { title: "Source attribution", body: "You see which channel actually produced the work." },
          { title: "A clear next step", body: "Every report ends with what we're improving next." },
        ]}
        process={[
          { step: "01", title: "Track", body: "Calls, forms, chats and bookings tracked from day one." },
          { step: "02", title: "Measure", body: "Monthly totals compared to the month before." },
          { step: "03", title: "Report", body: "One-page summary emailed on the 1st." },
          { step: "04", title: "Act", body: "We agree the next improvement and get on with it." },
        ]}
      />

      {/* Premium inline LeadConnector growth-report widget */}
      <Section id="growth-report-form" className="section-band text-nav-plum-foreground relative overflow-hidden">
        {/* ambient plum glow */}
        <div
          className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-white/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <Reveal from="up">
              <div className="text-center lg:text-left">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-nav-plum-foreground/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  Free report
                </p>
                <SectionHeading
                  title="Get your free growth report"
                  highlight="delivered monthly"
                  className="text-nav-plum-foreground [&_span]:text-primary lg:mx-0 lg:text-left"
                />
                <p className="mx-auto mt-4 max-w-md text-nav-plum-foreground/75 lg:mx-0">
                  Drop your details below. We&apos;ll run the numbers and send your first one-page report within 24 hours.
                </p>

                <ul className="mx-auto mt-8 inline-flex max-w-md flex-col gap-3 text-left lg:mx-0">
                  {valueChecks.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-nav-plum-foreground/85">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-sm text-nav-plum-foreground/55">
                  Prefer to talk?{" "}
                  <Link to="/contact" className="font-semibold text-primary hover:underline">
                    Contact us directly
                  </Link>
                  .
                </p>
              </div>
            </Reveal>

            <Reveal from="up" delay={120}>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/25 blur-3xl" aria-hidden="true" />
                <LeadConnectorWidget className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-6 shadow-[0_28px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8" />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  ),
});
