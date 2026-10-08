import { describe, expect, it } from "vitest";
import { CARD_PRESETS, TAGS, isTransfer, tagsFor } from "./transition";

describe("account transition tags", () => {
  it("cancellation gets only the base and cancellation tags", () => {
    expect(tagsFor("cancellation", false)).toEqual([TAGS.base, TAGS.cancellation]);
  });

  it("both transfer options get the transfer tag", () => {
    expect(tagsFor("transfer_other_agency", false)).toContain(TAGS.transfer);
    expect(tagsFor("transfer_own_agency", false)).toContain(TAGS.transfer);
  });

  it("retention review only when the customer opts in", () => {
    expect(tagsFor("cancellation", false)).not.toContain(TAGS.retention);
    expect(tagsFor("cancellation", true)).toContain(TAGS.retention);
  });

  it("a service request never gets transfer or cancellation tags", () => {
    expect(tagsFor("service_assistance", false)).toEqual([TAGS.base]);
  });

  it("the transition card preselects a transfer request", () => {
    expect(isTransfer(CARD_PRESETS.transition)).toBe(true);
  });
});
