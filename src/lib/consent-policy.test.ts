import { describe, expect, it } from "vitest";
import { canCollectContact } from "./consent-policy";

describe("Temporary A2P consent restriction", () => {
  it("allows only the chat widget to collect contact information during review", () => {
    expect(canCollectContact("chat")).toBe(true);
    for (const surface of ["lead", "report", "qualification", "booking", "support"] as const) {
      expect(canCollectContact(surface)).toBe(false);
    }
  });
  it("can restore the existing contact surfaces after review", () => {
    for (const surface of ["lead", "report", "qualification", "booking", "support"] as const) {
      expect(canCollectContact(surface, false)).toBe(true);
    }
  });
});