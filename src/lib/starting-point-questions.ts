export type Question = { title: string; options: readonly (readonly [string, string])[]; multiple?: boolean };
export const questions = [
  { key: "stage", title: "Where is your business right now?", options: [
    ["starting", "I’m getting ready to launch."], ["building", "I’m open and working on building a steady customer base."],
    ["steady", "We have steady business, and I’d like things to run more smoothly."], ["growing", "We have room to grow and can take on more customers."], ["full", "We’re busy enough that finding time to improve things is the hard part."],
  ] },
  { key: "need", title: "What brought you to our pricing page today?", options: [
    ["visibility", "I want people to find us online and know how to get in touch."], ["replies", "I want to keep better track of calls, messages, quotes, or bookings."],
    ["consolidate", "I’m paying for several tools and wonder if I could simplify."], ["setup", "I know something needs work, but I don’t have the time or know-how to set it up."],
    ["customers", "I want to bring in more customers."], ["exploring", "I’m mostly browsing and want to see what might be useful."],
  ] },
  { key: "detail", title: "", options: [] },
  { key: "help", title: "How would you prefer to handle this?", options: [
    ["diy", "I like doing things myself once I know where to start."], ["simple_system", "I’d like one straightforward system I can run myself."],
    ["setup_help", "I’d like help getting it set up, then I can take it from there."], ["managed", "I’d like someone to manage this part of the business for me."], ["undecided", "I’m still figuring that out. Show me what you’d suggest."],
  ] },
] as const;
export const readinessQuestion: Question = { title: "If five good inquiries came in next week, what would happen?", options: [
  ["ready", "We could reply quickly and take on the work."], ["reply_bottleneck", "We could do the work, but keeping up with replies would be tough."], ["capacity_limit", "We’d struggle to fit the work in right now."], ["capacity_unknown", "I’m not sure. We haven’t looked at it that way."],
] };
export const detailQuestions: Record<string, Question> = {
  visibility: { title: "If someone recommended your business to a friend today, what would that friend find?", options: [
    ["no_home", "We don’t have a good place to send them yet."], ["unclear", "They can find us, but our services or contact details aren’t clear."], ["finding_info", "They can find us, but calling, requesting a quote, or booking could be easier."], ["clear", "It looks pretty good already. I’d like to see whether I’m missing anything."],
  ] },
  replies: { title: "Think about the last few people who reached out. Where did it get difficult?", options: [
    ["slow_reply", "Someone waited longer for a reply than I wanted."], ["lost_followup", "I sent a quote and lost track of who needed a follow-up."], ["many_inboxes", "Everyone got a reply, but I had to check several places to stay on top of it."], ["manual_effort", "Our process works. I’d like to spend less time doing it manually."],
  ] },
  consolidate: { title: "What would you most like to bring into one place?", multiple: true, options: [
    ["web_booking", "Website, forms, or online booking."], ["messages", "Calls, texts, or customer messages."], ["records", "Customer records, quotes, or follow-up reminders."], ["reviews_social", "Review requests or social posting."], ["costs_only", "I want to compare what I’m paying before deciding what to move."],
  ] },
  setup: { title: "What keeps getting put off?", options: [
    ["website_setup", "Updating our website or making it easier for people to contact us."], ["followup_setup", "Setting up a reliable way to respond and follow up."], ["connect_tools", "Connecting tools we already pay for."], ["advertising", "Getting advertising up and running."], ["unsure_setup", "Figuring out what to fix first. I don’t know enough to choose yet."],
  ] },
  customers: readinessQuestion,
  exploring: { title: "Fair enough. What made you curious enough to look at pricing today?", options: [
    ["tool_overlap", "I wonder if I’m paying for tools that overlap."], ["followup_hard", "Something in our customer follow-up feels harder than it should."], ["website_booking", "We may need a better website or booking experience."], ["setup_ideas", "I have ideas, but no time or experience to set them up."], ["advertising", "I’m thinking about advertising and want to understand the cost."], ["all_good", "Nothing is urgent. I want to know which plan I’d start with if that changes."],
  ] },
};
export function followupQuestion(need?: string, detail?: string): Question | undefined {
  if (need !== "exploring") return undefined;
  if (detail === "tool_overlap") return detailQuestions.consolidate;
  if (detail === "followup_hard") return detailQuestions.replies;
  if (detail === "website_booking") return detailQuestions.visibility;
  if (detail === "setup_ideas") return detailQuestions.setup;
  return undefined;
}