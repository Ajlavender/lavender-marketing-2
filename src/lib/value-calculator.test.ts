import { describe, expect, it } from "vitest";
import { jobsToCover, profitPerJob } from "./value-calculator";

describe("value calculator", () => {
  it("a $500 job at 60% margin covers Essentials ($297) with 1 job", () => {
    expect(jobsToCover(297, 500, 60)).toBe(1);
  });
  it("rounds up partial jobs: $300 job at 50% needs 2 jobs for $297", () => {
    expect(jobsToCover(297, 300, 50)).toBe(2);
  });
  it("Scale ($997) with a $500 job at 40% margin needs 5 jobs", () => {
    expect(jobsToCover(997, 500, 40)).toBe(5);
  });
  it("exact cover does not round up an extra job", () => {
    expect(jobsToCover(300, 600, 50)).toBe(1);
  });
  it("returns null for zero or invalid inputs", () => {
    expect(jobsToCover(297, 0, 50)).toBeNull();
    expect(jobsToCover(297, 500, 0)).toBeNull();
    expect(jobsToCover(297, Number.NaN, 50)).toBeNull();
  });
  it("caps margin at 100%", () => {
    expect(profitPerJob(400, 150)).toBe(400);
  });
});
