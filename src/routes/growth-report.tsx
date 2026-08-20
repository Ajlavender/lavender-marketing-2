import { createFileRoute, Link } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { LeadConnectorWidget } from "@/components/site/LeadConnectorWidget";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/sections";
import { MEDIA } from "@/data/site";

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

      {/* Inline LeadConnector growth-report widget */}
      <Section id="growth-report-form" className="section-band text-nav-plum-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal from="up">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-nav-plum-foreground/80">
              Free report
            </p>
            <SectionHeading
              title="Get your free growth report"
              highlight="delivered monthly"
              className="text-nav-plum-foreground [&_span]:text-primary"
            />
            <p className="mx-auto mt-4 max-w-xl text-nav-plum-foreground/75">
              Drop your details below. We&apos;ll run the numbers and send your first one-page report within 24 hours.
            </p>
          </Reveal>

          <Reveal from="up" delay={120} className="mt-10">
            <LeadConnectorWidget />
          </Reveal>

          <Reveal from="up" delay={200} className="mt-8">
            <p className="text-sm text-nav-plum-foreground/55">
              Prefer to talk?{" "}
              <Link to="/contact" className="font-semibold text-primary hover:underline">
                Contact us directly
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  ),
});
