import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { PageHero, RatingBar, Section } from "@/components/site/sections";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Talk to Lavender Marketing & Co. about your free website design and $297/mo growth system. Request a free demo — no cost, no obligation.",
      },
      { property: "og:title", content: "Contact | Lavender Marketing & Co." },
      { property: "og:description", content: "Talk to Lavender Marketing & Co. about your free website design and $297/mo growth system. Request a free demo — no cost, no obligation." },
      { property: "og:url", content: "https://lavendermarketingco.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/contact" }],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: "Email", value: "Aj@lavendermarketingco.com", href: "mailto:Aj@lavendermarketingco.com" },
  { icon: Phone, label: "Phone", value: "519-671-6248", href: "tel:5196716248" },
  { icon: MapPin, label: "Office", value: "Canada & US" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build a website that sells"
        subtitle="Tell us about your business and we'll design a free demo of your new homepage — no cost, no obligation."
        image={`${ILLU}/founder.webp`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-3xl">Get in touch</h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk it through first? Reach us any way you like — we usually reply the same
              working day.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{label}</span>
                    {href ? (
                      <a href={href} className="text-muted-foreground hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <RatingBar />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-2xl">Request your free demo</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll design your new homepage first. Love it and we continue — if not, you owe nothing.
            </p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
