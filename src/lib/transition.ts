/**
 * Shared, browser-safe rules for the Customer Success & Account Transition form.
 * The server function and the form both read from here so options never drift.
 */

export const REQUEST_TYPES = [
  { value: "review_subscription", label: "Review my current subscription" },
  { value: "explore_plan", label: "Explore a different plan" },
  { value: "service_assistance", label: "Request assistance with my service" },
  { value: "transfer_other_agency", label: "Transfer to another HighLevel agency" },
  { value: "transfer_own_agency", label: "Move to my own HighLevel agency" },
  { value: "cancellation", label: "Request subscription cancellation" },
  { value: "other", label: "Something else" },
] as const;

export const REASONS = [
  { value: "cost", label: "Subscription cost" },
  { value: "low_usage", label: "Not using enough of the platform" },
  { value: "need_feature", label: "Need a different feature or service" },
  { value: "technical", label: "Technical or implementation concerns" },
  { value: "support", label: "Customer support experience" },
  { value: "self_manage", label: "Want to manage the platform myself" },
  { value: "other_provider", label: "Moving to another provider" },
  { value: "circumstances", label: "Business circumstances have changed" },
  { value: "other", label: "Other" },
  { value: "prefer_not", label: "Prefer not to say" },
] as const;

export type RequestType = (typeof REQUEST_TYPES)[number]["value"];
export type Reason = (typeof REASONS)[number]["value"];

/** Which request type each of the three intro cards preselects. */
export const CARD_PRESETS = {
  options: "explore_plan",
  improve: "service_assistance",
  transition: "transfer_other_agency",
} as const satisfies Record<string, RequestType>;

export const TAGS = {
  base: "LSP - Customer Success Request",
  retention: "LSP - Retention Review",
  transfer: "LSP - Transfer Request",
  cancellation: "LSP - Cancellation Request",
} as const;

export function isTransfer(type: RequestType | "" | undefined): boolean {
  return type === "transfer_other_agency" || type === "transfer_own_agency";
}

/**
 * CRM tags for one request. Only the tags that apply — never all of them.
 * Retention Review is added only when the customer opted in to a conversation,
 * so declining it is always respected.
 */
export function tagsFor(type: RequestType, openToDiscuss: boolean): string[] {
  const tags: string[] = [TAGS.base];
  if (isTransfer(type)) tags.push(TAGS.transfer);
  if (type === "cancellation") tags.push(TAGS.cancellation);
  if (openToDiscuss) tags.push(TAGS.retention);
  return tags;
}

/** Private, internal handling hint passed to the CRM workflow (never shown publicly). */
export function handlingFor(type: RequestType, reason: Reason | undefined): string {
  if (type === "cancellation") return "Record cancellation and route for processing under the customer's terms.";
  if (type === "transfer_own_agency") return "Assess authorized transfer to the customer's own agency.";
  if (type === "transfer_other_agency") return "Coordinate with receiving agency; verify authorization and contract.";
  switch (reason) {
    case "cost":
      return "Retention review: evaluate whether a different service arrangement fits.";
    case "low_usage":
      return "Usage and onboarding review.";
    case "technical":
      return "Open customer-success case for investigation.";
    default:
      return "General customer-success review.";
  }
}
