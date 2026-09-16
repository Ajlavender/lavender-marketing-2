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
    body: "After every completed job, customers automatically receive a request for an honest Google review while the experience is still fresh.",
  },
  {
    title: "The cycle repeats",
    body: "More reviews can strengthen your local visibility. More visibility creates more opportunities to get found and chosen.",
  },
];

export function SystemLoop() {
  return (
    <section className="section-wash py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="rail-eyebrow text-primary">The mechanism</p>
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
              <div className="group relative h-full overflow-hidden rounded-3xl border border-primary/10 bg-card/80 p-8 shadow-[0_24px_60px_-40px_rgba(31,33,80,0.45)] backdrop-blur-sm transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-gradient-brand before:opacity-0 before:transition-opacity hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-32px_rgba(109,51,214,0.45)] hover:before:opacity-100">
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
