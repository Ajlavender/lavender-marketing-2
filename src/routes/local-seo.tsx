import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/local-seo")({
  head: () => serviceHead("/local-seo"),
  component: () => (
    <ServicePage
      slug="/local-seo"
      eyebrow="Add-on"
      title="Local SEO and Google Business Profile"
      subtitle="Get found in the map pack for the searches that turn into phone calls in your service area."
      image={`${ILLU}/local-seo.webp`}
      intro={[
        "Most local buying decisions start with a map. If you're not in the top three, you're competing for scraps of attention.",
        "We optimise your Google Business Profile, build the service and area pages that rank, and keep the review flow going — because reviews and local relevance are what move you up the map.",
      ]}
      benefits={[
        { title: "Google Business Profile", body: "Categories, services, photos, posts and Q&A handled." },
        { title: "Service and area pages", body: "Real pages for the work you do and the towns you serve." },
        { title: "Reviews that rank", body: "Your review automation feeds directly into local ranking." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Profile, citations, competitors and current rankings." },
        { step: "02", title: "Optimise", body: "Profile rebuilt and key pages written." },
        { step: "03", title: "Build", body: "Citations, links and ongoing posts." },
        { step: "04", title: "Track", body: "Map rankings and calls reported monthly." },
      ]}
    />
  ),
});
