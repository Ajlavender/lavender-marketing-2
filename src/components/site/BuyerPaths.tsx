import { INTAKE_URL } from "@/data/pricing";
import {
  Check,
  Hammer,
  Wrench,
  Home,
  Trees,
  Zap,
  PaintRoller,
  Scissors,
  Dog,
  Sparkles,
  Car,
  Flower2,
  Stethoscope,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ILLU } from "@/data/site";

const industryGroups = [
  {
    label: "Home services",
    blurb: "One missed call can cost a job worth hundreds or thousands.",
    items: [
      { name: "Roofing", icon: Home },
      { name: "Plumbing", icon: Wrench },
      { name: "Electrical", icon: Zap },
      { name: "General contracting", icon: Hammer },
      { name: "Landscaping", icon: Trees },
      { name: "Painting & renovation", icon: PaintRoller },
    ],
  },
  {
    label: "Appointment businesses",
    blurb: "Every empty slot on the calendar is revenue you can't get back.",
    items: [
      { name: "Barbers & salons", icon: Scissors },
      { name: "Dog grooming", icon: Dog },
      { name: "Tattoo studios", icon: Sparkles },
      { name: "Auto detailing", icon: Car },
      { name: "Med spas", icon: Flower2 },
      { name: "Clinics & wellness", icon: Stethoscope },
    ],
  },
];


const paths = [
  {
    label: "Home services",
    title: "Stop losing jobs when you miss a call.",
    body: "For contractors, trades, roofers, plumbers, landscapers, electricians and renovation companies where one missed call can cost hundreds or thousands.",
    image: `${ILLU}/websites.webp`,
    points: [
      "Auto text-back the second you miss a call",
      "Quote request page that actually converts",
      "More honest Google reviews from real customers",
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
      "More honest reviews from real clients",
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
                <a
                  href={INTAKE_URL}
                  className="mt-8 self-start border-b border-primary pb-1 text-sm font-medium text-primary"
                >
                  Get My Free Website Design
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal className="flex flex-col items-center">
            <p className="rail-eyebrow text-primary">Industries we serve</p>
            <h3 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold sm:text-4xl">
              Find your <span className="text-primary">business type.</span>
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {industryGroups.map((group, gi) => (
              <Reveal key={group.label} from={gi === 0 ? "left" : "right"} delay={gi * 120}>
                <div className="h-full rounded-3xl border border-primary/10 bg-secondary/60 p-6 backdrop-blur-sm sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {group.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{group.blurb}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {group.items.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="group flex items-center gap-3 rounded-2xl border border-primary/10 bg-card p-4 shadow-[0_18px_45px_-38px_rgba(31,33,80,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_26px_60px_-35px_rgba(109,51,214,0.45)]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't see your trade?{" "}
            <Link to="/contact" className="border-b border-primary pb-0.5 font-medium text-primary">
              Ask us — we probably build for it.
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
