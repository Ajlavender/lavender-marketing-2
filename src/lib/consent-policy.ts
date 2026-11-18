/** Carrier review is complete (owner confirmed); set true to restore chat-widget-only consent. */
export const CHAT_WIDGET_ONLY_CONSENT = false;

export type ContactSurface = "chat" | "lead" | "report" | "qualification" | "booking" | "support";

export function canCollectContact(surface: ContactSurface, widgetOnly = CHAT_WIDGET_ONLY_CONSENT) {
  return !widgetOnly || surface === "chat";
}