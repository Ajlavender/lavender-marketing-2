import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/ad-management")({
  head: () => serviceHead("/ad-management"),
  component: () => (
    <ServicePage
      slug="/ad-management"
      eyebrow="Add-on"
      title="Ad management that feeds the system"
      subtitle="Google and Meta campaigns pointed at the pages, follow-ups and booking flow we already built — so ad spend turns into booked jobs."
      image={`${ILLU}/lead-gen.png`}
      intro={[
        "Ads only work when everything behind them works. Most local businesses spend money sending clicks to a page that doesn't convert and a follow-up process that doesn't exist.",
        "Because we already run your site, CRM, follow-ups and booking, every dollar of ad spend lands in a system built to catch it — and we report on cost per booked job, not clicks.",
      ]}
      benefits={[
        { title: "Local intent first", body: "Search campaigns for people ready to buy in your area." },
        { title: "Wired into the CRM", body: "Every lead tracked from ad click to booked job." },
        { title: "Cost per job reporting", body: "You see what a customer actually costs to acquire." },
      ]}
      process={[
        { step: "01", title: "Plan", body: "Budget, service area and offers agreed." },
        { step: "02", title: "Build", body: "Campaigns, landing pages and tracking set up." },
        { step: "03", title: "Launch", body: "Spend starts small and scales on results." },
        { step: "04", title: "Optimise", body: "Weekly management, monthly reporting on cost per job." },
      ]}
    />
  ),
});
