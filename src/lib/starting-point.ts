import { monthlyPrice, plans } from "@/data/pricing-plans";
import { questions, detailQuestions } from "./starting-point-questions";
import { capabilityBenefits, lowestPlan, needFeatures } from "./starting-point-capabilities";
import { findings } from "./starting-point-copy";
export { questions, detailQuestions, capabilityBenefits };
export { verifiedPlan } from "./starting-point-capabilities";
export type Answers = { stage?: string; need?: string; detail?: string; help?: string; followup?: string; selections?: string[] };
export type Channel = "meta" | "google";
export type Finding = { title: string; why: string; action: string; timing?: string; plan: string; capability: string };
export function changeAnswer(answers: Answers, key: keyof Answers, value: string): Answers {
  if (answers[key] === value) return answers;
  if (key === "help") return { ...answers, help: value };
  if (key === "followup") return { ...answers, followup: value, selections: undefined };
  const order = ["stage", "need", "detail"] as const;
  const index = order.findIndex((k) => k === key);
  return Object.fromEntries(order.slice(0, Math.max(0, index)).map((k) => [k, answers[k]]).concat([[key, value]]));
}
export function effectiveDetail(a: Answers) { return a.followup ?? a.detail ?? "all_good"; }
export function advertisingInterest(a: Answers) {
  return effectiveDetail(a) === "advertising" || (a.need === "customers" && ["managed", "managed_ads", "undecided"].includes(a.help ?? ""));
}
export function adGate(a: Answers): "cost" | "readiness" | null {
  if (!advertisingInterest(a)) return null;
  if (a.need !== "customers") return "readiness";
  if (a.detail !== "ready") return null;
  return a.stage === "full" ? "readiness" : "cost";
}
export const budgets: Record<Channel, { name: string; min: number; max: number; daily: string; example: string }> = {
  meta: { name: "Facebook & Instagram", min: 750, max: 1500, daily: "US$25–US$50", example: "Show your offer to people in your area. For example, a renovation company could show nearby homeowners photos of a bathroom it recently finished." },
  google: { name: "Google Search", min: 1500, max: 3000, daily: "US$50–US$100", example: "Reach people who are already searching for your service. For example, your business could appear when someone searches ‘emergency plumber near me.’" },
};
export function adTotals(channel: Channel, currency: string): [number, number] | null {
  if (currency !== "USD") return null;
  const fee = monthlyPrice("Scale");
  return [fee + budgets[channel].min, fee + budgets[channel].max];
}
export function breakEven(totals: [number, number] | null, amount: number): [number, number] | null {
  if (!totals || !Number.isFinite(amount) || amount <= 0) return null;
  return [Math.ceil(totals[0] / amount), Math.ceil(totals[1] / amount)];
}
function answerText(a: Answers) {
  const q = detailQuestions[a.need ?? ""];
  const selected = a.selections?.length ? detailQuestions.consolidate.options.filter(([id]) => a.selections?.includes(id)).map(([, text]) => text).join(" / ") : q?.options.find(([id]) => id === a.detail)?.[1];
  const followup = a.followup ? Object.values(detailQuestions).flatMap((question) => question.options).find(([id]) => id === a.followup)?.[1] : undefined;
  return followup ?? selected ?? "you’re looking ahead";
}
export function finding(a: Answers, readiness?: string, deferred = false): Finding {
  const detail = readiness && readiness !== "ready" && readiness !== "yes" ? readiness === "process" ? "reply_bottleneck" : readiness : effectiveDetail(a);
  const selected = a.selections ?? [];
  const features = selected.length ? selected.flatMap((id) => needFeatures[id] ?? []) : needFeatures[detail] ?? [];
  const plan = lowestPlan(features);
  const capability = features[0] ?? "Your new website, designed and built";
  const base = findings[detail] ?? findings.all_good;
  const stage = questions[0].options.find(([id]) => id === a.stage)?.[1] ?? "You’re comparing what would work for your business.";
  let why = `${stage} You told us: “${answerText(a)}” ${capabilityBenefits[capability] ?? "We’d confirm the setup for your exact workflow first."}`;
  let action = base.action;
  let timing = features.length ? "This is worth comparing now if this problem comes up each week. Keep what already works until you’ve compared the full coverage and costs." : "You haven’t identified a need that calls for a higher tier. If your current setup handles this at a lower total cost, keep it and revisit Essentials when a website or follow-up gap appears.";
  if (a.need === "consolidate" || a.detail === "tool_overlap" || detail === "connect_tools") {
    action = "List the tools you pay for, their monthly costs and the functions you actually use. Compare those with this plan, including any subscriptions you would still need to keep.";
    timing = "Compare coverage and costs before switching. We can’t promise savings or compatibility with every existing tool; don’t cancel anything yet.";
  }
  if (["website_setup", "followup_setup", "connect_tools", "unsure_setup"].includes(detail) || a.help === "setup_help") why += " Website design and implementation are included; confirm the scope of other workflow setup before switching. Setup help is not ongoing management of every task.";
  if (a.help === "managed" && !advertisingInterest(a)) timing += " This is a system you operate, not a promise that we’ll run every part of your business.";
  if (["capacity_limit", "capacity_unknown"].includes(detail)) {
    action = "Count the additional jobs you could comfortably complete over the next two weeks and decide who would reply to each new inquiry.";
    timing = "Hold off on advertising until you know you can fit the work in. Essentials is a foundation to compare, not a reason to buy while you’re already covered.";
  }
  if (detail === "reply_bottleneck") timing = "Get replies and quote follow-up working before paying for more inquiries. Revisit managed advertising when someone can respond promptly and you have room for the work.";
  if (deferred) timing = "Keep advertising as a future goal. Compare this plan with your current setup first; if there’s no gap, you can wait. Revisit advertising when the cost and workload feel comfortable.";
  if (a.help === "diy") timing += " Try the step above yourself first; the plan is a comparison point, not a requirement to act.";
  return { title: `Based on what you shared, I’d start with ${plan.name}.`, plan: plan.name, capability, why, action, timing };
}
export function scaleFinding(a: Answers, readiness: string | undefined, channel: Channel): Finding | null {
  const gate = adGate(a);
  if (!gate || (gate === "readiness" && !["ready", "yes"].includes(readiness ?? "")) || !plans.find((p) => p.name === "Scale")?.features.includes("Google & Meta ad management")) return null;
  return { title: "Based on what you shared, I’d start with Scale.", plan: "Scale", capability: "Google & Meta ad management", why: `You identified advertising or customer acquisition as a goal, and confirmed you can reply promptly and take on the work. ${channel === "meta" ? "Facebook and Instagram can show a specific offer to nearby people who may not know you yet." : "Google Search can reach people already looking for your service."} Scale adds managed advertising over Growth; a preference for help alone isn’t why we chose it.`, action: "Choose one service and one area to test. Write down how many extra jobs you can take on and agree on a monthly budget before starting.", timing: "You’ve said the full investment and workload look realistic. Confirm your agreed Scale fee, advertising budget and available capacity before starting; these estimates are not a promise of new jobs." };
}
