import { Reveal } from "@/components/site/Reveal";

const steps = [
  {
    title: "Visitor lands on your website",
    body: "A clear page built to get one thing done: get the customer to call, book, or request a quote.",
  },
  {
    title: "Lead gets captured",
    body: "Their details are saved from the form, the call, or the text — nothing gets scribbled on a sticky note.",
  },
  {
    title: "Call or booking happens",
    body: "They book straight into your calendar, or the call comes through with reminders attached.",
  },
  {
    title: "Follow-up starts automatically",
    body: "Texts and emails go out so no lead sits there cold while they shop your competitor.",
  },
  {
    title: "Review gets requested",
    body: "Every happy customer is asked for a Google review at the moment they're happiest.",
  },
  {
    title: "The cycle repeats",
    body: "More reviews means better ranking. Better ranking means more visitors. Same system, every month.",
  },
];

export function SystemLoop() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-base font-semibold text-primary">The mechanism</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">
            Pretty websites are nice.{" "}
            <span className="text-primary">Systems make them profitable.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We don&apos;t just design pages. We set up the system behind the website — lead capture,
            missed-call text-back, booking, review requests and follow-up — so the same visitor
            turns into a booked job.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group h-full rounded-3xl bg-card p-8 shadow-[0_24px_60px_-40px_rgba(31,33,80,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-32px_rgba(109,51,214,0.45)]">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary/25 transition-colors group-hover:text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
