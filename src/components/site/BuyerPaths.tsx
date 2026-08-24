import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ILLU } from "@/data/site";

const paths = [
  {
    label: "Home services",
    title: "Stop losing jobs when you miss a call.",
    body: "For contractors, trades, roofers, plumbers, landscapers, electricians and renovation companies where one missed call can cost hundreds or thousands.",
    image: `${ILLU}/websites.webp`,
    points: [
      "Auto text-back the second you miss a call",
      "Quote request page that actually converts",
      "More 5-star reviews from happy customers",
      "Show up when locals search Google",
      "One place to track every lead",
      "Automatic follow-up texts and reminders",
    ],
  },
  {
    label: "Appointment businesses",
    title: "Fill more appointments without more front-desk work.",
    body: "For barbers, salons, dog groomers, tattoo shops, detailers, med spas and busy appointment businesses that need fewer gaps in the calendar.",
    image: `${ILLU}/growth.webp`,
    points: [
      "Easier online booking, 24/7",
      "Automatic confirmations and reminders",
      "More reviews from happy clients",
      "Win-back texts for clients who haven't been in",
      "Promo texts and emails for slow days",
      "One place to see every client and booking",
    ],
  },
];

export function BuyerPaths() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <p className="rail-eyebrow text-primary">Two buyer paths</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-bold sm:text-5xl">
            Built for two kinds of <span className="text-primary">local businesses.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.label} from={i === 0 ? "left" : "right"} delay={i * 120}>
              <div className="flex h-full flex-col rounded-3xl border border-primary/10 bg-card p-8 shadow-[0_28px_70px_-45px_rgba(31,33,80,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_36px_80px_-40px_rgba(109,51,214,0.45)] sm:p-10">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="mx-auto h-40 w-40 object-contain"
                />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary">
                  {p.label}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">{p.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {p.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 self-start border-b border-primary pb-1 text-sm font-medium text-primary"
                >
                  Get My Free Website Design
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
