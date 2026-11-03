import { describe, expect, it } from "vitest";
import { adGate, adTotals, breakEven, changeAnswer, finding, scaleFinding } from "./starting-point";
import { monthlyPrice } from "@/data/pricing-plans";

describe("Starting-point rules", () => {
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
  it("matches a trained immediate chat response to Growth", () => {
    expect(finding({ need: "replies", detail: "slow_reply", help: "setup_help" }).plan).toBe("Growth");
  });
  it("DIY always omits paid recommendations", () => {
    for (const detail of ["no_home", "slow_reply", "lost_followup", "capacity_limit"]) expect(finding({ detail, help: "diy" }).plan).toBeUndefined();
  });
  it("healthy and untested setups do not get a fallback plan", () => {
    for (const detail of ["clear", "working", "all_good", "untested"]) expect(finding({ detail, help: "setup_help" }).plan).toBeUndefined();
  });
  it("capacity concerns prevent advertising", () => {
    for (const detail of ["capacity_limit", "capacity_unknown", "reply_bottleneck"]) expect(adGate({ stage: "growing", need: "customers", detail, help: "managed_ads" })).toBeNull();
    expect(adGate({ stage: "full", need: "customers", detail: "ready", help: "managed_ads" })).toBeNull();
  });
  it("being full does not block existing follow-up help", () => {
    expect(finding({ stage: "full", need: "quotes", detail: "lost_followup", help: "setup_help" }).plan).toBe("Essentials");
  });
  it("requires explicit managed-ad interest and ready responses", () => {
    expect(adGate({ stage: "growing", need: "customers", detail: "ready", help: "simple_system" })).toBeNull();
    expect(adGate({ stage: "growing", need: "customers", detail: "ready", help: "managed_ads" })).toBe("cost");
  });
  it("exploring requires the extra readiness confirmation", () => {
    const a = { stage: "building", need: "exploring", detail: "need_inquiries", help: "managed_ads" };
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