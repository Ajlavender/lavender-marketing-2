import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/follow-up-automation")({
  head: () => serviceHead("/follow-up-automation"),
  component: () => (
    <ServicePage
      slug="/follow-up-automation"
      eyebrow="Follow-Up Automation"
      title="Every lead followed up with, until they book or say no"
      subtitle="Automatic text and email sequences that keep working after you've gone back to the job site."
      image={`${ILLU}/automations.png`}
      intro={[
        "Most leads aren't lost to competitors, they're lost to silence. One message goes unanswered, the week gets busy, and a good lead quietly goes cold.",
        "We build the follow-up you'd send if you had time: a handful of short, friendly messages spread over the first two weeks, stopping the moment they reply or book.",
      ]}
      benefits={[
        { title: "Persistent, not annoying", body: "Spaced, short and easy to opt out of — the way you'd actually follow up." },
        { title: "Stops when they reply", body: "The sequence ends the second the conversation becomes real." },
        { title: "Reactivates old leads", body: "We can run the same system across your existing contact list." },
      ]}
      process={[
        { step: "01", title: "Map the journey", body: "What happens after a form, a call and a chat." },
        { step: "02", title: "Write", body: "Message copy written in your voice and approved by you." },
        { step: "03", title: "Automate", body: "Sequences wired into your CRM triggers." },
        { step: "04", title: "Optimise", body: "We review reply rates monthly and adjust." },
      ]}
    />
  ),
});
