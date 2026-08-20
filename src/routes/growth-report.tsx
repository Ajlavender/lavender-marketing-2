import { useEffect, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";

function LeadConnectorWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existing = document.querySelector(
      'script[data-widget-id="69913d5dd2dae6c8487503d5"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
    script.async = true;
    script.defer = true;
    script.dataset.widgetId = "69913d5dd2dae6c8487503d5";
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="relative bg-nav-plum pb-16 pt-4 text-nav-plum-foreground">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal from="up">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_70px_-45px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:p-10">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nav-plum-foreground/60">
                Free monthly growth report
              </p>
              <h2 className="mt-2 text-3xl font-bold text-nav-plum-foreground sm:text-4xl">
                Get your report in 24 hours
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-nav-plum-foreground/75">
                Fill out the form below and we’ll send you a one-page breakdown of where your leads are coming from and what to fix next.
              </p>
            </div>
            <div ref={containerRef} className="min-h-[320px]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/growth-report")({
  head: () => serviceHead("/growth-report"),
  component: () => (
    <ServicePage
      slug="/growth-report"
      eyebrow="Monthly Growth Report"
      title="A plain-English report on the 1st of every month"
      subtitle="Where your leads came from, what converted, and what to fix next — so you always know if your marketing is paying off."
      image={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
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
    >
      <LeadConnectorWidget />
    </ServicePage>
  ),
});
