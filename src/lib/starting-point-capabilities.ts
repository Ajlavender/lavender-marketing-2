import { monthlyPrice, plans } from "@/data/pricing-plans";
export const needFeatures: Record<string, string[]> = {
  no_home: ["Your new website, designed and built"], unclear: ["Your new website, designed and built"], finding_info: ["Online booking"],
  slow_reply: ["Missed-call text-back"], lost_followup: ["Automatic follow-up sequences"], many_inboxes: ["Unified inbox (mobile app included)"], manual_effort: ["Automatic follow-up sequences"],
  reply_bottleneck: ["Automatic follow-up sequences"], website_setup: ["Your new website, designed and built"], followup_setup: ["Automatic follow-up sequences"],
  web_booking: ["Your new website, designed and built", "Online booking"], messages: ["Unified inbox (mobile app included)"], records: ["Lead pipeline + full CRM", "Automatic follow-up sequences"], reviews_social: ["Review automation"],
};
export const capabilityBenefits: Record<string, string> = {
  "Your new website, designed and built": "It gives referred customers a clear place to see your services and contact you.",
  "Online booking": "It gives customers a clear way to choose a time and book.",
  "Missed-call text-back": "A missed caller can get an automatic text with a next step; someone still needs to reply to other messages.",
  "Automatic follow-up sequences": "A specific follow-up can run automatically, so the next contact is less likely to be forgotten. We’d confirm your exact quote or booking workflow during setup.",
  "Unified inbox (mobile app included)": "Supported calls, texts and messages come together, reducing the places you check for the next reply.",
  "Lead pipeline + full CRM": "Customer records and next steps stay together so an open quote is easier to find.",
  "Review automation": "You can ask for honest reviews after completed work. Social posting is not a verified inclusion in these plans; compare that separately before cancelling a tool.",
};
export function coveredFeatures(index: number): string[] {
  return plans.slice(0, index + 1).flatMap((plan) => plan.features.filter((f) => !f.startsWith("Everything in ")));
}
export function verifiedPlan(feature: string) {
  return [...plans].sort((a, b) => monthlyPrice(a.name) - monthlyPrice(b.name)).find((plan) => coveredFeatures(plans.indexOf(plan)).includes(feature));
}
export function lowestPlan(features: string[]) {
  return [...plans].sort((a, b) => monthlyPrice(a.name) - monthlyPrice(b.name)).find((plan) => features.every((f) => coveredFeatures(plans.indexOf(plan)).includes(f))) ?? plans[0];
}