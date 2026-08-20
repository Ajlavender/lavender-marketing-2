import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/construction-website-design")({
  head: () => serviceHead("/construction-website-design"),
  component: () => (
    <ServicePage
      slug="/construction-website-design"
      eyebrow="Construction Website Design"
      title="A website that turns estimates into booked jobs"
      subtitle="Website design for contractors, roofers, electricians, plumbers and general trades — with missed-call text-back, review automation and follow-up built in."
      image={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
      intro={[
        "Most construction companies have a website that looks fine but does not close. Visitors browse photos, then leave and call the next contractor because there is no fast way to request a quote, no instant reply, and no follow-up after they leave.",
        "We design your construction website for free and build it around the tools that actually win jobs: a quote form that triggers missed-call text-back, automatic Google review requests after every completed job, online booking for estimates, and follow-up sequences that keep you in front of the lead until they book.",
      ]}
      benefits={[
        { title: "Free custom design first", body: "We design your homepage before you pay anything. You only start the $297/month plan once you love it and want it live." },
        { title: "Missed-call text-back", body: "When you are on a job site and miss a call, the system texts the caller instantly so they reply instead of calling a competitor." },
        { title: "Automated review engine", body: "Every completed job triggers a text and email asking happy customers for a Google review, so your reputation and map ranking keep climbing." },
      ]}
      process={[
        { step: "01", title: "Discovery", body: "We learn your trade, service area, ideal jobs and what makes customers choose you." },
        { step: "02", title: "Free design", body: "You get a custom homepage design to review before any commitment or payment." },
        { step: "03", title: "Build & connect", body: "We build the site, connect missed-call text-back, review automation, booking and follow-up." },
        { step: "04", title: "Launch & optimize", body: "The site goes live, and we tune the follow-up and review flow based on real leads." },
      ]}
    />
  ),
});