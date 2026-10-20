import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { INTAKE_URL } from "@/data/pricing";

const leaks = [
  {
    problem: "Missed calls and slow replies",
    fix: "Every missed call gets an instant text back, and every lead gets followed up automatically.",
    result: "Jobs you used to lose to the next listing come back to you.",
  },
  {
    problem: "Visitors who look and leave",
    fix: "A clear website that tells people exactly how to call, book or ask for a quote.",
    result: "More calls from the same people already finding you.",
  },
  {
    problem: "Not enough reviews",
    fix: "Every finished job gets a polite request for an honest Google review.",
    result: "More people pick you over the business down the street.",
  },
];

export function MoneySection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="rail-eyebrow text-primary">The bottom line</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">
            So how does this <span className="text-primary">make you money?</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Simple: more of the people who already find you turn into paying jobs. We plug the
            three places local businesses lose money every week.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {leaks.map((l, i) => (
            <Reveal key={l.problem} delay={i * 90}>
              <div className="flex h-full flex-col rounded-3xl border border-primary/10 bg-card p-8 shadow-[0_24px_60px_-40px_rgba(31,33,80,0.45)]">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  The leak
                </p>
                <h3 className="mt-2 text-xl font-semibold">{l.problem}</h3>
                <p className="mt-4 mb-6 text-base leading-relaxed text-muted-foreground">{l.fix}</p>
                <p className="mt-auto border-t border-primary/10 pt-5 text-base font-semibold text-primary">
                  {l.result}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <div className="flex flex-col gap-6 rounded-3xl bg-gradient-brand p-8 text-primary-foreground sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
                Example math
              </p>
              <p className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
                If one job is worth $500 and the system saves just one extra job a month, the
                $297 plan has already paid for itself.
              </p>
              <p className="mt-3 text-sm opacity-80">
                An illustration, not a promise. Your numbers depend on your business.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="shrink-0">
              <a href={INTAKE_URL}>Get My Free Website Design</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
