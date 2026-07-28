import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";
import { PageHero, RatingBar, Section } from "@/components/site/sections";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lavender Marketing & Co. | Get Your Free Website Demo" },
      {
        name: "description",
        content:
          "Talk to Lavender Marketing & Co. about your website redesign, SEO or advertising. Request a free demo design — no cost, no obligation.",
      },
      { property: "og:title", content: "Contact Lavender Marketing & Co." },
      { property: "og:description", content: "Request your free website demo design today." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: "Email", value: "info@trywebtec.com", href: "mailto:info@trywebtec.com" },
  { icon: Phone, label: "Phone", value: "+1 (888) 123-4567", href: "tel:+18881234567" },
  { icon: MapPin, label: "Office", value: "Remote-first, worldwide" },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build a website that sells"
        subtitle="Tell us about your business and we'll design a free demo of your new homepage — no cost, no obligation."
        image={`${MEDIA}/2023/02/businessman-launching-startup-768x768.png`}
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
