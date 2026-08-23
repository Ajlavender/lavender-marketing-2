import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA, ILLU } from "@/data/site";

export const Route = createFileRoute("/chat-widget")({
  head: () => serviceHead("/chat-widget"),
  component: () => (
    <ServicePage
      slug="/chat-widget"
      eyebrow="Website Chat Widget"
      title="A chat widget that answers before they leave"
      subtitle="A bottom-right chat box pre-loaded with your most common questions, so visitors get an answer instantly instead of bouncing to the next business."
      image={`${ILLU}/chat-widget.png`}
      intro={[
        "Most people who land on your site have one question standing between them and calling you. Do you service my area? How much roughly? Can you come this week? If the answer isn't right there, they leave and ask someone else.",
        "We load the widget with your real answers and route every conversation to your phone, so a quiet visit turns into a conversation you can close.",
      ]}
      benefits={[
        { title: "Pre-loaded with your FAQs", body: "We write the answers to the questions you get asked all day, in your words." },
        { title: "Straight to your phone", body: "Every chat lands in your unified inbox so you can reply from anywhere." },
        { title: "Captures the lead either way", body: "Name and number are captured up front, so even an abandoned chat is a follow-up." },
      ]}
      process={[
        { step: "01", title: "Question list", body: "We pull the questions you actually get asked on the phone." },
        { step: "02", title: "Write answers", body: "Plain-language answers written and approved by you." },
        { step: "03", title: "Install", body: "Widget goes live on every page, styled to your brand." },
        { step: "04", title: "Tune", body: "We review real chats monthly and improve the answers." },
      ]}
    />
  ),
});
