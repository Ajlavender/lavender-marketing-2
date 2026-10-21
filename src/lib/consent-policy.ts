/** Temporary carrier-review mode. Restore only at the owner's request. */
export const CHAT_WIDGET_ONLY_CONSENT = true;

export type ContactSurface = "chat" | "lead" | "report" | "qualification" | "booking" | "support";

export function canCollectContact(surface: ContactSurface, widgetOnly = CHAT_WIDGET_ONLY_CONSENT) {
  return !widgetOnly || surface === "chat";
}