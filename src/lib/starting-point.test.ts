import { describe, expect, it } from "vitest";
import { adGate, adTotals, breakEven, changeAnswer, finding, scaleFinding } from "./starting-point";
import { monthlyPrice } from "@/data/pricing-plans";
import { detailQuestions, followupQuestion } from "./starting-point-questions";
import { lowestPlan } from "./starting-point-capabilities";

describe("Starting-point rules", () => {
  it("consolidation recommends the lowest plan covering booking and messages", () => {
    expect(finding({ stage: "steady", need: "consolidate", selections: ["web_booking", "messages"], help: "simple_system" }).plan).toBe("Essentials");
  });
  it("matches website setup work without escalating for lack of time", () => {
    expect(finding({ need: "setup", detail: "website_setup", help: "managed" }).plan).toBe("Essentials");
  });
  it("management preference without advertising interest never opens ad costs", () => {
    expect(adGate({ need: "replies", detail: "lost_followup", help: "managed" })).toBeNull();
  });
  it("setup advertising interest requires capacity confirmation", () => {
    expect(adGate({ need: "setup", detail: "advertising", help: "setup_help" })).toBe("readiness");
    expect(scaleFinding({ need: "setup", detail: "advertising", help: "setup_help" }, "capacity_limit", "google")).toBeNull();
  });
  it("declined advertising still returns one current-stage foundation plan", () => {
    expect(finding({ need: "customers", detail: "ready", help: "managed" }, undefined, true).plan).toBe("Essentials");
  });
  it("browsing follows actual consolidation and follow-up needs", () => {
    expect(followupQuestion("exploring", "tool_overlap")).toBe(detailQuestions.consolidate);
    expect(finding({ need: "exploring", detail: "followup_hard", followup: "lost_followup", help: "diy" }).capability).toBe("Automatic follow-up sequences");
  });
  it("capability matching supports inherited plans and Growth-specific features", () => {
    expect(lowestPlan(["AI chat widget trained on your business", "Online booking"])?.name).toBe("Growth");
  });
  it("every main detail returns one plan and a concrete action", () => {
    for (const [need, question] of Object.entries(detailQuestions)) {
      for (const [detail] of question.options) {
        const result = finding({ stage: "steady", need, detail, help: "diy" });
        expect(["Essentials", "Growth", "Scale"]).toContain(result.plan);
        expect(result.action.length).toBeGreaterThan(20);
      }
    }
  });
  it("uses current monthly prices", () => {
    expect([monthlyPrice("Essentials"), monthlyPrice("Growth"), monthlyPrice("Scale")]).toEqual([297, 497, 997]);
  });
  it("matches a new online home to Essentials", () => {
    expect(finding({ stage: "starting", need: "visibility", detail: "no_home", help: "simple_system" }).plan).toBe("Essentials");
  });
  it("keeps follow-up in the lowest verified plan", () => {
    expect(finding({ stage: "steady", need: "quotes", detail: "lost_followup", help: "setup_help" }).plan).toBe("Essentials");
  });
  it("matches manual inbox effort to Essentials, not AI by default", () => {
    expect(finding({ need: "replies", detail: "manual_effort", help: "setup_help" }).capability).toBe("Unified inbox (mobile app included)");
  });
  it("uses Essentials first for slow replies rather than assuming an AI need", () => {
    expect(finding({ need: "replies", detail: "slow_reply", help: "setup_help" }).plan).toBe("Essentials");
  });
  it("DIY still gets exactly one foundation plan", () => {
    for (const detail of ["no_home", "slow_reply", "lost_followup", "capacity_limit"]) expect(finding({ detail, help: "diy" }).plan).toBe("Essentials");
  });
  it("healthy and untested setups get Essentials as a comparison point", () => {
    for (const detail of ["clear", "working", "all_good", "untested"]) expect(finding({ detail, help: "setup_help" }).plan).toBe("Essentials");
  });
  it("capacity concerns prevent advertising", () => {
    for (const detail of ["capacity_limit", "capacity_unknown", "reply_bottleneck"]) expect(adGate({ stage: "growing", need: "customers", detail, help: "managed_ads" })).toBeNull();
    expect(adGate({ stage: "full", need: "customers", detail: "ready", help: "managed_ads" })).toBe("readiness");
  });
  it("being full does not block existing follow-up help", () => {
    expect(finding({ stage: "full", need: "quotes", detail: "lost_followup", help: "setup_help" }).plan).toBe("Essentials");
  });
  it("requires explicit managed-ad interest and ready responses", () => {
    expect(adGate({ stage: "growing", need: "customers", detail: "ready", help: "simple_system" })).toBeNull();
    expect(adGate({ stage: "growing", need: "customers", detail: "ready", help: "managed_ads" })).toBe("cost");
  });
  it("exploring requires the extra readiness confirmation", () => {
    const a = { stage: "building", need: "exploring", detail: "advertising", help: "managed" };
    expect(adGate(a)).toBe("readiness");
    expect(scaleFinding(a, "process", "meta")).toBeNull();
    expect(scaleFinding(a, "yes", "meta")?.plan).toBe("Scale");
  });
  it("computes both advertising ranges from live USD Scale", () => {
    expect(adTotals("meta", "USD")).toEqual([1747, 2497]);
    expect(adTotals("google", "USD")).toEqual([2497, 3997]);
  });
  it("never combines USD advertising with CAD or unknown currency", () => {
    expect(adTotals("meta", "CAD")).toBeNull();
    expect(adTotals("google", "unknown")).toBeNull();
    expect(breakEven(null, 1000)).toBeNull();
  });
  it("rounds each job estimate upward and rejects invalid amounts", () => {
    expect(breakEven(adTotals("meta", "USD"), 1000)).toEqual([2, 3]);
    expect(breakEven(adTotals("google", "USD"), 1000)).toEqual([3, 4]);
    expect(breakEven([5747, 6497], 1000)).toEqual([6, 7]);
    expect(breakEven([6497, 7997], 1000)).toEqual([7, 8]);
    expect(breakEven([100, 110], 1000)).toEqual([1, 1]);
    for (const value of [0, -1, Infinity, NaN]) expect(breakEven([1, 2], value)).toBeNull();
  });
  it("changing an earlier answer clears all affected branch answers", () => {
    expect(changeAnswer({ stage: "steady", need: "quotes", detail: "lost_followup", help: "managed_ads" }, "need", "visibility")).toEqual({ stage: "steady", need: "visibility" });
  });
});