import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/review-automation")({
  head: () => serviceHead("/review-automation"),
  component: () => (
    <ServicePage
      slug="/review-automation"
      eyebrow="Review Automation"
      title="More 5-star Google reviews, without asking awkwardly"
      subtitle="Automatic text and email follow-up to real customers after the job, pointing the happy ones straight to your Google profile."
      image={`${MEDIA}/2023/02/businessman-looking-for-growth-1024x1024.png`}
      intro={[
        "Reviews are the single cheapest way to rank higher and close easier — 9 out of 10 customers read them before choosing a local business. The problem is that happy customers forget, and nobody enjoys asking.",
        "We automate the ask. After a job is marked complete, your customer gets a short message asking how it went, with a one-tap link to your Google profile.",
      ]}
      benefits={[
        { title: "Real reviews only", body: "No fake reviews, no incentives — just consistent asking at the right moment." },
        { title: "One tap to leave one", body: "The link drops them right into the Google review box." },
        { title: "Alerts on unhappy replies", body: "If something went wrong you hear about it first, privately." },
      ]}
      process={[
        { step: "01", title: "Connect Google", body: "We link your Google Business Profile." },
        { step: "02", title: "Build the ask", body: "Text and email sequence written and timed after job completion." },
        { step: "03", title: "Turn on", body: "Requests start going out automatically." },
        { step: "04", title: "Report", body: "Review count and rating tracked in your monthly report." },
      ]}
    />
  ),
});
