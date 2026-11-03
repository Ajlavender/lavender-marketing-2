import { monthlyPrice, plans } from "@/data/pricing-plans";

export type Answers = { stage?: string; need?: string; detail?: string; help?: string };
export type Channel = "meta" | "google";
export const questions = [
  { key: "stage", title: "Which sounds most like your business right now?", options: [
    ["starting", "I’m getting ready to open."], ["building", "We’re open and still building a steady customer base."],
    ["steady", "Business is steady. I’d like things to run a little more smoothly."], ["growing", "We’re busy and have room to take on more work."], ["full", "We’re about as busy as we can handle."],
  ] },
  { key: "need", title: "What would you most like a hand with?", options: [
    ["visibility", "Making it easier for people to find us and know how to reach us."], ["replies", "Keeping up with calls, texts, and messages."],
    ["quotes", "Following up after someone asks for a quote or wants to book."], ["customers", "Bringing in more customers."], ["exploring", "I’m looking around and want to see what would actually help."],
  ] },
  { key: "detail", title: "", options: [] },
  { key: "help", title: "What kind of help would feel useful right now?", options: [
    ["diy", "Give me a practical step I can try myself."], ["simple_system", "I’d like a simple system I can run myself."],
    ["setup_help", "I’d like help setting something up or improving what we already use."], ["managed_ads", "I’m interested in someone managing advertising for us."], ["undecided", "I’d like to understand my options before deciding."],
  ] },
] as const;
export const detailQuestions: Record<string, { title: string; options: string[][] }> = {
  visibility: { title: "If someone heard about you from a friend today, what would they find online?", options: [
    ["no_home", "We don’t really have a place to send them yet."], ["unclear", "They can find us, but our services or contact details aren’t clear."], ["clear", "They can see what we do and easily call, message, or book."], ["untested", "I haven’t checked it from a customer’s point of view."],
  ] },
  replies: { title: "Think about the last few people who reached out. What happened?", options: [
    ["slow_reply", "Someone waited longer for a reply than I wanted."], ["lost_followup", "I replied or sent a quote, then lost track of who needed a follow-up."], ["manual_effort", "Everyone got a reply, but checking everything took more time than I’d like."], ["working", "Everyone got a reply and I knew exactly who needed a follow-up."],
  ] },
  customers: { title: "If five good inquiries came in next week, what would happen?", options: [
    ["ready", "We could respond quickly and take on the work."], ["reply_bottleneck", "We could do the work, but keeping up with replies would be tough."], ["capacity_limit", "We’d struggle to fit the work in right now."], ["capacity_unknown", "I’m honestly not sure."],
  ] },
  exploring: { title: "Which of these do you actually notice during a normal week?", options: [
    ["finding_info", "People ask where to find our services or how to book."], ["many_inboxes", "I check several places to see who still needs a reply."], ["need_inquiries", "We could take on more customers, but the inquiries aren’t coming in."], ["all_good", "Things are working pretty well. I’m mostly browsing."],
  ] },
};
detailQuestions.quotes = detailQuestions.replies;

// Features are matched against the same commitments shown on the pricing cards.
export const needFeatures: Record<string, string> = {
  no_home: "Your new website, designed and built", unclear: "Your new website, designed and built", finding_info: "Online booking",
  slow_reply: "AI chat widget trained on your business", lost_followup: "Automatic follow-up sequences", many_inboxes: "Unified inbox (mobile app included)",
  manual_effort: "Unified inbox (mobile app included)", reply_bottleneck: "Automatic follow-up sequences",
};
export function verifiedPlan(feature: string) {
  return [...plans].sort((a, b) => monthlyPrice(a.name) - monthlyPrice(b.name)).find((plan) => plan.features.includes(feature));
}
export function changeAnswer(answers: Answers, key: keyof Answers, value: string): Answers {
  if (answers[key] === value) return answers;
  const order: (keyof Answers)[] = ["stage", "need", "detail", "help"];
  return Object.fromEntries(order.slice(0, order.indexOf(key)).map((k) => [k, answers[k]]).concat([[key, value]]));
}
export function adGate(a: Answers): "cost" | "readiness" | null {
  if (a.help !== "managed_ads" || a.stage === "full") return null;
  if (a.need === "customers" && a.detail === "ready") return "cost";
  if (a.need === "exploring" && a.detail === "need_inquiries") return "readiness";
  return null;
}
export const budgets: Record<Channel, { name: string; min: number; max: number; daily: string; example: string }> = {
  meta: { name: "Facebook & Instagram", min: 750, max: 1500, daily: "US$25–US$50", example: "Show your offer to people in your area. For example, a renovation company could show photos of a recent bathroom remodel to nearby homeowners." },
  google: { name: "Google Search", min: 1500, max: 3000, daily: "US$50–US$100", example: "Reach people who are already looking for your service. For example, your business could appear when someone searches ‘emergency plumber near me.’" },
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
export type Finding = { title: string; why: string; action: string; plan?: string; capability?: string };
const findings: Record<string, Finding> = {
  no_home: { title: "Give referred customers a place to find you.", why: "You don’t have a clear online home yet. Start with your services and a simple way to get in touch, rather than paying for more traffic.", action: "Write down your three main services, the area you serve, and one way to contact you. Ask someone to check whether that tells them enough to call." },
  unclear: { title: "Make it easier for a referred customer to call you.", why: "People can find you, but your services or contact details aren’t clear. Fix that next step before adding more visitors.", action: "Ask someone to find your business on their phone, confirm you offer the service they need, and find your phone number. Write down the first place they hesitate and fix it." },
  finding_info: { title: "Make services and booking easier to find.", why: "People are asking where to find your services or how to book. Give them one clear destination and one next step.", action: "Ask someone to find one of your services and how to book on their phone. Make the first missing detail easy to find." },
  untested: { title: "Check what a customer sees first.", why: "You haven’t checked your online presence from a customer’s point of view. That doesn’t mean you need a new website.", action: "On a phone, find your business, check one service, and try the call or booking link. Note any confusing or broken step." },
  slow_reply: { title: "Make the first reply easier to keep up with.", why: "Someone waited longer than you wanted. Start by finding which call or message took longest, rather than assuming every inquiry is slipping away.", action: "Review your last five inquiries. Mark how each arrived and when you replied, then set one daily reply check for the channel with the longest wait." },
  lost_followup: { title: "Start with the quotes you’ve already sent.", why: "People are reaching out, but once a quote goes out, it’s easy to lose track of who needs a reply.", action: "Pull up your last five quotes and write one next step beside each: call them Friday, send the revised price, or mark the job closed." },
  manual_effort: { title: "Save time without changing what’s working.", why: "Customers are getting replies. The issue is the time you spend checking, not evidence that you’re losing customers.", action: "For three working days, note how many minutes you spend checking each inbox. Pick one place to keep your next-reply list and compare the time." },
  many_inboxes: { title: "Put the next reply in one place.", why: "Checking several inboxes makes it harder to see who needs your attention. A single reply list can make that work calmer.", action: "List your active conversations from each inbox in one place. Give each a next action and check that list at the end of tomorrow." },
  reply_bottleneck: { title: "Get replies ready before bringing in more inquiries.", why: "You can do the work, but keeping up with replies would be tough. Fix the reply process before paying to make the inbox busier.", action: "Choose who checks new inquiries, set two check-in times each day, and write a short first reply with a clear booking step. Try it on your next five inquiries." },
  working: { title: "Your follow-up sounds like it’s working.", why: "Everyone got a reply, and you knew who needed another call. I’d keep using what you have.", action: "Look at last week’s inquiries and check whether any are still waiting on you. If none are, keep your current routine." },
  clear: { title: "Your online next step sounds clear.", why: "Customers can see what you do and easily call, message, or book. Your current setup sounds like a good fit for now.", action: "Ask one person to find a service and use your contact link on their phone. If both are easy, leave the setup as it is." },
  all_good: { title: "Your current setup sounds like a good fit for now.", why: "Things are working pretty well and you’re mostly browsing. There’s no need to add another system just because one exists.", action: "Check last week’s inquiries for any unfinished next steps. If the list is clear, keep doing what’s working." },
  ready: { title: "Find out where your best customers come from.", why: "You have room for more work and can reply promptly. That’s useful readiness, but it doesn’t mean you need managed advertising.", action: "Look at your last five customers and write down how each one found you. Pick the strongest source and one way to build on it this week." },
  need_inquiries: { title: "Start with how customers already find you.", why: "You could take on more customers, but inquiries aren’t coming in. Start with evidence from the customers you already have.", action: "Look at your last five customers and write down how each one found you. Pick one source to test again this week." },
};
export function finding(a: Answers, readiness?: string): Finding {
  if (["capacity_limit", "capacity_unknown"].includes(a.detail ?? "") || (a.stage === "full" && ["ready", "need_inquiries"].includes(a.detail ?? ""))) {
    return { title: "Check the calendar before paying for more inquiries.", why: a.stage === "full" ? "You mentioned you’re already pretty busy, and also suggested room to grow. Before paying for more inquiries, check how many additional jobs you could realistically book over the next two weeks." : "More inquiries won’t help if you can’t fit the work in. Check your capacity before adding advertising.", action: "Count the jobs you could realistically add over the next two weeks. If there aren’t any openings, hold off on advertising for now." };
  }
  const detail = readiness && readiness !== "yes" ? "reply_bottleneck" : a.detail ?? "";
  const base = findings[detail] ?? { title: "Start with one useful check.", why: "There isn’t a clear paid fit in what you’ve shared yet.", action: "Review your last five inquiries and write down one next step for each." };
  if (a.help === "diy" || readiness === "unsure") return { ...base };
  const feature = needFeatures[detail];
  const plan = feature ? verifiedPlan(feature) : undefined;
  return plan ? { ...base, plan: plan.name, capability: feature } : { ...base };
}
export function scaleFinding(a: Answers, readiness: string | undefined, channel: Channel): Finding | null {
  const gate = adGate(a);
  const scale = plans.find((p) => p.name === "Scale");
  if (!gate || (gate === "readiness" && readiness !== "yes") || !scale?.features.includes("Google & Meta ad management")) return null;
  return { title: channel === "meta" ? "Test a local offer where people discover new businesses." : "Reach people already searching for your service.", why: channel === "meta" ? "You can reply promptly and have room for more work. Facebook and Instagram can show a specific offer to people nearby who may not know you yet." : "You can reply promptly and take on more work. Google Search can put your service in front of people actively looking for a business like yours.", action: "Choose one service and one area to test. Check how many extra jobs you can take on, and agree on a monthly budget before starting.", plan: "Scale", capability: "Google & Meta ad management" };
}