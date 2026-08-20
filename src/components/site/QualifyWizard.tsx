import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Step = {
  key: string;
  label: string;
  type: "text" | "email" | "tel" | "choice";
  placeholder?: string;
  options?: string[];
};

const steps: Step[] = [
  { key: "website", label: "Business website", type: "text", placeholder: "yourwebsite.com" },
  {
    key: "revenue",
    label: "What's your approximate monthly revenue?",
    type: "choice",
    options: ["Under $10k", "$10k – $50k", "$50k – $250k", "$250k+"],
  },
  {
    key: "goal",
    label: "What do you want the Growth plan to do for you?",
    type: "choice",
    options: ["Answer leads 24/7", "Book appointments automatically", "Follow up faster", "All of the above"],
  },
  { key: "email", label: "Where should we send your Growth plan qualification?", type: "email", placeholder: "hello@youremail.com" },
];

export function QualifyWizard({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const send = useServerFn(submitLead);
  const step = steps[index];
  const value = values[step.key] ?? "";

  async function next(v?: string) {
    const val = v ?? value;
    if (!val) {
      toast.error("Please answer this question to continue.");
      return;
    }
    const updated = { ...values, [step.key]: val };
    setValues(updated);
    if (index === steps.length - 1) {
      setDone(true);
      toast.success("You're eligible for special Growth plan pricing — check your email within 24 hours.");
      try {
        const res = await send({
          data: {
            source: "QualifyWizard",
            email: updated["email"] ?? "",
            website: updated["website"] || undefined,
            answers: { revenue: updated["revenue"] ?? "", goal: updated["goal"] ?? "" },
          },
        });
        if (!res.ok) console.error("Lead not delivered");
      } catch {
        console.error("Lead not delivered");
      }
      return;
    }
    setIndex((i) => i + 1);
  }


  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <div
      className={cn(
        "rounded-3xl bg-[#4b4b73] p-7 shadow-[0_40px_80px_-30px_rgba(30,25,70,0.55)] sm:p-9",
        className,
      )}
    >
      {/* progress */}
      <div className="flex items-center">
        {steps.map((s, i) => (
          <div key={s.key} className="flex flex-1 items-center last:flex-none">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                i <= index || done
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-[#4b4b73]",
              )}
            >
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span
                className={cn(
                  "mx-2 h-px flex-1 transition-colors",
                  i < index || done ? "bg-primary" : "bg-white/40",
                )}
              />
            )}
          </div>
        ))}
      </div>

      {done ? (
        <div className="mt-8">
          <p className="text-xl font-bold text-white">You're eligible for special Growth plan pricing 🎉</p>
          <p className="mt-3 text-sm text-white/80">
            Based on your answers, your business qualifies for reduced pricing on our flagship
            Growth plan. We'll email your custom quote and next steps within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8">
          <label className="block text-base font-semibold text-white" htmlFor={step.key}>
            {step.label}
          </label>

          {step.type === "choice" ? (
            <div className="mt-4 grid gap-3">
              {step.options?.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => next(opt)}
                  className="rounded-full bg-white/95 px-6 py-3.5 text-left text-base text-foreground transition-transform hover:scale-[1.01] hover:bg-white"
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <>
              <Input
                id={step.key}
                type={step.type}
                required
                placeholder={step.placeholder}
                value={value}
                onChange={(e) => setValues((s) => ({ ...s, [step.key]: e.target.value }))}
                className="mt-4 h-14 rounded-full border-0 bg-white px-6 text-base shadow-sm"
              />
              <Button
                type="submit"
                size="lg"
                className="mt-5 h-14 w-full rounded-full text-sm font-bold uppercase tracking-wider"
              >
                {index === steps.length - 1 ? "See if I qualify" : "Next"}
              </Button>
            </>
          )}

          {index > 0 && (
            <button
              type="button"
              onClick={() => setIndex((i) => i - 1)}
              className="mt-4 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Back
            </button>
          )}
        </form>
      )}
    </div>
  );
}
