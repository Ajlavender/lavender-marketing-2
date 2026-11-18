import { describe, expect, it } from "vitest";
import { canCollectContact } from "./consent-policy";

const SURFACES = ["lead", "report", "qualification", "booking", "support"] as const;

describe("Contact consent policy", () => {
  it("allows on-site forms again now that texting approval is done", () => {
    for (const s of SURFACES) expect(canCollectContact(s)).toBe(true);
  });
  it("can switch back to chat-widget-only mode", () => {
    expect(canCollectContact("chat", true)).toBe(true);
    for (const s of SURFACES) expect(canCollectContact(s, true)).toBe(false);
  });
});
