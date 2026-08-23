import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/growth-report")({
  head: () => serviceHead("/growth-report"),
  component: () => (
    <ServicePage
      slug="/growth-report"
      eyebrow="Monthly Growth Report"
      title="A plain-English report on the 1st of every month"
      subtitle="Where your leads came from, what converted, and what to fix next — so you always know if your marketing is paying off."
      image={`${ILLU}/reporting.png`}
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
  ),
});
