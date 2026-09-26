import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/sections";

const TITLE = "Privacy Policy | Lavender Marketing & Co.";
const DESC =
  "How Lavender Marketing & Co. collects, uses and protects the names, emails and phone numbers you share through our forms.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://lavendermarketingco.com/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

const sections: { h: string; p: string[] }[] = [
  {
    h: "Who we are",
    p: [
      "Lavender Marketing & Co. (\"we\", \"us\") is a marketing agency serving local businesses in Canada and the United States. This policy explains how we handle personal information collected through lavendermarketingco.com.",
    ],
  },
  {
    h: "What we collect",
    p: [
      "When you fill out a form on our site (for example to request a free website design, a Google & Local Visibility Report, or to book a call), we collect the details you choose to give us: your name, email address, phone number, business website and any message you write.",
      "We also collect basic technical information automatically, such as your browser type, device, pages visited and approximate location (country), to keep the site working and to show you the right country version.",
    ],
  },
  {
    h: "How we use it",
    p: [
      "We use your information to respond to your request, prepare your free design or report, schedule calls, send you follow-up messages about our services, and improve our website.",
      "If you give us your phone number, we may contact you by call or text about your request. You can reply STOP to any text or ask us to stop contacting you at any time.",
    ],
  },
  {
    h: "How we share it",
    p: [
      "We do not sell your personal information. We share it only with trusted service providers who help us run our business (such as our CRM, booking calendar, email and text messaging, and website hosting), and only as needed to provide our services. We may also disclose information if required by law.",
    ],
  },
  {
    h: "Cookies",
    p: [
      "We use a small number of cookies to remember your country preference and to understand how the site is used. You can block or delete cookies in your browser settings.",
    ],
  },
  {
    h: "How long we keep it",
    p: [
      "We keep your information for as long as needed to respond to you and provide our services, or as required by law. You can ask us to delete it at any time.",
    ],
  },
  {
    h: "Your choices and rights",
    p: [
      "You can ask to see, correct or delete the personal information we hold about you, or unsubscribe from our messages. Depending on where you live (including under Canada's PIPEDA and applicable U.S. state laws), you may have additional rights. Contact us and we'll respond promptly.",
    ],
  },
  {
    h: "Security",
    p: [
      "We use reasonable technical and organizational measures to protect your information. No method of transmission over the internet is 100% secure, but we work to keep your data safe.",
    ],
  },
  {
    h: "Changes to this policy",
    p: ["We may update this policy from time to time. The latest version will always be posted on this page."],
  },
  {
    h: "Contact us",
    p: ["Questions about your privacy? Email Aj@lavendermarketingco.com or call 519-671-6248."],
  },
];

function PrivacyPolicy() {
  return (
    <Section className="pt-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: September 26, 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-semibold">{s.h}</h2>
              {s.p.map((t) => (
                <p key={t} className="mt-3 leading-relaxed text-muted-foreground">
                  {t}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
