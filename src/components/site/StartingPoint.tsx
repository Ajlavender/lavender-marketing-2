import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { LOCALE_INFO, spell, useLocale } from "@/lib/locale";
import { monthlyPrice } from "@/data/pricing-plans";
import { SCALE_CALENDAR_URL } from "./BookingDialog";
import { adGate, adTotals, breakEven, budgets, changeAnswer, detailQuestions, finding, questions, scaleFinding, type Answers, type Channel } from "@/lib/starting-point";

type Screen = number | "readiness" | "ads" | "calculator" | "result";
export function StartingPoint() {
  const locale = useLocale();
  const currency = LOCALE_INFO[locale].currency;
  const [started, setStarted] = useState(false);
  const [screen, setScreen] = useState<Screen>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [readiness, setReadiness] = useState<string>();
  const [channel, setChannel] = useState<Channel>("meta");
  const [costChoice, setCostChoice] = useState("");
  const [amount, setAmount] = useState("");
  const [calcChoice, setCalcChoice] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const t = (value: string) => spell(value, locale);
  const money = (value: number, cur = currency) => `${cur === "USD" ? "US" : "CA"}$${value.toLocaleString("en-CA", { maximumFractionDigits: 2 })}`;
  const totals = adTotals(channel, currency);
  const jobs = breakEven(totals, Number(amount));
  const range = (values: [number, number]) => values[0] === values[1] ? `${values[0]}` : `${values[0]}–${values[1]}`;
  const totalText = totals ? `${money(totals[0])}–${money(totals[1])}/month` : undefined;
  const move = (next: Screen) => { setScreen(next); requestAnimationFrame(() => heading.current?.focus()); };
  const resetExtras = () => { setReadiness(undefined); setCostChoice(""); setAmount(""); setCalcChoice(""); setChannel("meta"); };
  const retake = () => { setAnswers({}); resetExtras(); move(0); };
  const question = typeof screen === "number" ? (screen === 2 ? detailQuestions[answers.need ?? ""] : questions[screen]) : undefined;
  const key = typeof screen === "number" ? questions[screen].key : undefined;
  const choose = (value: string) => {
    if (!key) return;
    if (answers[key] !== value) { setAnswers(changeAnswer(answers, key, value)); resetExtras(); }
  };
  const finishQuestions = () => {
    const gate = adGate(answers);
    move(gate === "readiness" ? "readiness" : gate === "cost" ? "ads" : "result");
  };
  const declined = costChoice === "too_much";
  const wantsScale = costChoice === "meta_ready" || costChoice === "google_ready" || (costChoice === "compare_cost" && calcChoice === "yes" && Boolean(jobs));
  const result = wantsScale ? scaleFinding(answers, readiness, channel) ?? finding(answers, readiness) : declined ? {
    title: "Start without another advertising expense.", why: "The full monthly advertising cost is more than you want to put toward this right now. That’s a useful boundary, not a reason to buy a different plan.", action: "Look at your last five customers and write down how each one found you. That’s a good place to look for your next customer before adding another monthly expense.",
  } : costChoice === "compare_cost" ? {
    title: calcChoice === "capacity" ? "Keep the workload within your capacity." : "Take the numbers away and think it through.", why: "Your calculation is a way to check the commitment, not a promise of new jobs.", action: calcChoice === "capacity" ? "Count the additional jobs your team can comfortably complete each month before deciding whether advertising makes sense." : "Compare the extra jobs needed with your available time and recent completed jobs before making a decision.",
  } : finding(answers, readiness);
  const back = () => {
    if (typeof screen === "number") move(Math.max(0, screen - 1));
    else if (screen === "readiness") move(3);
    else if (screen === "ads") move(adGate(answers) === "readiness" ? "readiness" : 3);
    else if (screen === "calculator") move("ads");
    else move(costChoice === "compare_cost" ? "calculator" : costChoice ? "ads" : readiness ? "readiness" : 3);
  };
  const choices = (name: string, options: readonly (readonly string[])[], value: string, onChange: (v: string) => void) => (
    <RadioGroup aria-label={name} value={value} onValueChange={onChange} className="mt-6 gap-3">
      {options.map(([id, text]) => <label key={id} className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-4 text-sm leading-relaxed transition-colors focus-within:ring-2 focus-within:ring-ring ${value === id ? "border-brand bg-lavender-wash text-ink" : "border-border bg-background text-foreground hover:border-brand/50"}`}>
        <RadioGroupItem value={id} className="mt-0.5 shrink-0" />{t(text)}
      </label>)}
    </RadioGroup>
  );
  const calculatorText = jobs ? `At about ${money(Number(amount))} left per job, you’d need roughly ${range(jobs)} additional completed jobs per month to cover the plan and advertising together. This is a break-even estimate. It doesn’t predict how many inquiries or jobs the ads will bring in.` : "";
  return <section className="bg-secondary px-4 pb-16 pt-36 sm:px-6 lg:px-8" id="starting-point">
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-deep">Find your starting point</p>
      {!started ? <>
        <h1 className="mt-5 text-5xl font-bold leading-tight text-ink sm:text-6xl">Not sure where to start?</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Tell us a little about your business and where things tend to get stuck. We’ll help you figure out what to work on first and whether there’s a way Lavender can help.</p>
        <Button size="lg" className="mt-8" onClick={() => { setStarted(true); move(0); }}>Help Me Find My Starting Point</Button>
        <p className="mt-3 text-sm text-muted-foreground">4 quick questions. Get your answer right here. No email needed.</p>
        <a href="#compare-plans" className="mt-6 inline-block text-sm font-semibold text-brand-deep underline underline-offset-4">Compare All Plans</a>
      </> : <div className="mt-6">
        {typeof screen === "number" ? <>
          <p className="text-sm text-muted-foreground">Question {screen + 1} of 4</p>
          <div className="mt-3 flex gap-2" aria-hidden>{questions.map((_, i) => <span key={i} className={`h-1 flex-1 rounded-full ${i <= screen ? "bg-brand" : "bg-border"}`} />)}</div>
          <h1 ref={heading} tabIndex={-1} className="mt-8 text-3xl font-bold leading-tight outline-none sm:text-4xl">{question?.title}</h1>
          {question && key && choices(question.title, question.options, answers[key] ?? "", choose)}
          <div className="mt-6 flex justify-between gap-3"><Button variant="outline" onClick={back} disabled={screen === 0}>Back</Button><Button disabled={!key || !answers[key]} onClick={() => screen === 3 ? finishQuestions() : move(screen + 1)}>{screen === 3 ? "Get My Starting Point" : "Continue"}</Button></div>
        </> : screen === "readiness" ? <>
          <p className="text-sm text-muted-foreground">A quick readiness check</p>
          <h1 ref={heading} tabIndex={-1} className="mt-5 text-3xl font-bold outline-none">If several people contacted you next week, could someone reply promptly and get them booked?</h1>
          {choices("Response readiness", [["yes", "Yes"], ["process", "We’d need a better follow-up process"], ["unsure", "I’m not sure"]], readiness ?? "", (value) => { setReadiness(value); setCostChoice(""); setAmount(""); setCalcChoice(""); })}
          <div className="mt-6 flex justify-between"><Button variant="outline" onClick={back}>Back</Button><Button disabled={!readiness} onClick={() => move(readiness === "yes" ? "ads" : "result")}>Continue</Button></div>
        </> : screen === "ads" ? <>
          <p className="text-sm text-muted-foreground">One last thing about advertising.</p>
          <h1 ref={heading} tabIndex={-1} className="mt-5 text-4xl font-bold outline-none">What would running ads actually cost?</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">There are two parts to the monthly cost. One is your Lavender Scale plan. The other is the money you set aside for Facebook, Instagram, or Google to show your ads. Here’s what starting on one channel could look like.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">{(["meta", "google"] as const).map((ch) => {
            const b = budgets[ch]; const combined = adTotals(ch, currency);
            return <div key={ch} className={`rounded-lg border bg-card p-5 ${channel === ch ? "border-brand" : "border-border"}`}>
              <h2 className="text-xl font-semibold">{b.name}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.example}</p>
              <dl className="mt-5 space-y-3 text-sm"><div><dt>Lavender Scale starts at</dt><dd className="font-semibold">{money(monthlyPrice("Scale"))}/month</dd></div><div><dt>Budget for {b.name}</dt><dd className="font-semibold">{money(b.min, "USD")}–{money(b.max, "USD")}/month</dd><dd className="text-muted-foreground">Roughly {b.daily} per day</dd></div></dl>
              {combined && <p className="mt-5 border-t border-border pt-4 text-lg font-bold text-ink">Estimated monthly total<br />{money(combined[0])}–{money(combined[1])}</p>}
              <Button variant={channel === ch ? "default" : "outline"} className="mt-5 w-full" aria-pressed={channel === ch} onClick={() => { setChannel(ch); setCostChoice(""); setCalcChoice(""); }}>Select {b.name}</Button>
            </div>;
          })}</div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">These are starting estimates for testing one service in one area. You can start with one channel. The right budget depends on where you work, how competitive the service is, and what a new customer is worth to you. Scale is a starting fee; your agreed plan price may be higher.</p>
          {currency !== "USD" && <p className="mt-4 border-l-2 border-brand pl-4 text-sm">Your Scale price is in CAD. These advertising examples are in USD, so we haven’t combined them or enabled a break-even calculation. Talk it through with us for a budget in the same currency.</p>}
          <h2 className="mt-8 text-2xl">Looking at the full monthly cost, where are you at?</h2>
          {choices("Advertising cost preference", [["meta_ready", "Facebook or Instagram looks realistic for us."], ["google_ready", "Google Search looks realistic for us."], ...(currency === "USD" ? [["compare_cost", "I’d want to know how many new customers we’d need to cover that."]] : []), ["too_much", "That’s more than I want to put toward advertising right now."]], costChoice, (value) => { setCostChoice(value); setCalcChoice(""); if (value === "meta_ready") setChannel("meta"); if (value === "google_ready") setChannel("google"); })}
          <div className="mt-6 flex justify-between"><Button variant="outline" onClick={back}>Back</Button><Button disabled={!costChoice} onClick={() => move(costChoice === "compare_cost" ? "calculator" : "result")}>Continue</Button></div>
        </> : screen === "calculator" ? <>
          <h1 ref={heading} tabIndex={-1} className="text-3xl font-bold outline-none">How many completed jobs would cover the cost?</h1>
          {choices("Advertising channel", [["meta", "Facebook & Instagram"], ["google", "Google Search"]], channel, (v) => { setChannel(v as Channel); setCalcChoice(""); })}
          <p className="mt-5 text-xl font-semibold">Estimated monthly total: {totalText}</p>
          <label htmlFor="job-value" className="mt-6 block text-lg leading-relaxed">{t("After paying for the materials, labour, or other direct costs of one additional job, roughly how much does that job leave your business?")}</label>
          <div className="mt-3 flex items-center gap-3"><span>{currency}</span><Input id="job-value" type="number" min="0.01" step="any" inputMode="decimal" value={amount} onChange={(e) => { setAmount(e.target.value); setCalcChoice(""); }} className="max-w-xs" /></div>
          <Button variant="link" className="mt-2 px-0" onClick={() => { setAmount("1000"); setCalcChoice(""); }}>Use a sample: {money(1000)} left per job</Button>
          {amount && !jobs && <p role="alert" className="mt-3 text-destructive">Enter an amount greater than zero.</p>}
          {jobs && <><p role="status" className="mt-5 border-l-2 border-brand pl-4 leading-relaxed">{calculatorText}</p><h2 className="mt-6 text-xl">Could you comfortably take on that many additional jobs each month?</h2>{choices("Capacity after calculation", [["yes", "Yes, show me Scale"], ["think", "I want to think it over"], ["capacity", "That’s more work than we can take on"]], calcChoice, setCalcChoice)}</>}
          <div className="mt-6 flex justify-between"><Button variant="outline" onClick={back}>Back</Button><Button disabled={!jobs || !calcChoice} onClick={() => move("result")}>See My Result</Button></div>
        </> : <>
          <p className="text-sm text-muted-foreground">Your starting point</p>
          <h1 ref={heading} tabIndex={-1} className="mt-5 text-4xl font-bold leading-tight outline-none">{result.title}</h1>
          <h2 className="mt-7 text-lg font-semibold">Why we’d start here</h2><p className="mt-2 leading-relaxed text-muted-foreground">{result.why}</p>
          <h2 className="mt-7 text-lg font-semibold">One thing to try this week</h2><p className="mt-2 leading-relaxed text-muted-foreground">{result.action}</p>
          {costChoice === "compare_cost" && jobs && <p className="mt-6 border-l-2 border-brand pl-4 leading-relaxed">{calculatorText}</p>}
          {result.plan && <div className="mt-8 border-t border-border pt-6"><h2 className="text-lg font-semibold">Where Lavender can help</h2><p className="mt-2 leading-relaxed text-muted-foreground">{result.plan} includes {t(result.capability ?? "").toLowerCase()}. {result.plan === "Essentials" ? "It can help you keep customer details and next steps together, without needing the AI or advertising plans. We’d confirm the setup for your exact workflow first." : result.plan === "Growth" ? "For website questions that need a prompt answer, this adds a chat assistant trained on your business. Essentials offers pre-loaded FAQs and missed-call text-back, not this trained assistant. We’d confirm where your replies are getting held up before changing your setup." : "We manage your selected channel and help you track the cost per booked job."}</p><p className="mt-4 text-2xl font-bold">{result.plan === "Scale" ? "Starting at " : ""}{money(monthlyPrice(result.plan))}/month{result.plan === "Scale" ? " plus advertising" : ""}</p>{result.plan === "Scale" && <p className="mt-3 text-lg font-semibold">{budgets[channel].name}: {totalText ? `estimated total ${totalText}` : `${money(budgets[channel].min, "USD")}–${money(budgets[channel].max, "USD")} advertising/month, separately from the CAD plan fee.`}</p>}<Button asChild className="mt-5"><a href={`#plan-${result.plan.toLowerCase()}`}>{answers.help === "undecided" ? "See how this could help" : `See ${result.plan} Details`}</a></Button><p className="mt-3 text-xs text-muted-foreground">Monthly pricing shown. Compare annual billing and all inclusions below.</p></div>}
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="outline"><a href="#compare-plans">Compare All Plans</a></Button><Button variant="outline" onClick={retake}>Retake the Check-In</Button><Button asChild variant="link"><a href={SCALE_CALENDAR_URL}>Talk it through with us</a></Button></div>
          <Button variant="link" className="mt-4 px-0" onClick={back}>Back</Button>
        </>}
      </div>}
    </div>
  </section>;
}