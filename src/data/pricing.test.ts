import { describe, expect, it } from "vitest";
import { checkoutLink, hasTrial } from "./pricing";

describe("Checkout links", () => {
  it("has 12 distinct links, one per plan, billing and country", () => {
    const links = ["Essentials", "Growth", "Scale"].flatMap((p) =>
      (["en-us", "en-ca"] as const).flatMap((l) => (["monthly", "annual"] as const).map((b) => checkoutLink(p, l, b))),
    );
    expect(links.every(Boolean)).toBe(true);
    expect(new Set(links).size).toBe(12);
  });
  it("sends US Essentials monthly to the Black Friday trial link", () => {
    expect(checkoutLink("Essentials", "en-us", "monthly")).toMatch(/6afce9e121a48a3872d2704a$/);
    expect(checkoutLink("Scale", "en-ca", "annual")).toMatch(/6afcea41906a8b62055d765f$/);
  });
  it("sends Canadian Essentials monthly to the supplied trial checkout", () => {
    expect(checkoutLink("Essentials", "en-ca", "monthly")).toBe("https://links.lavendersuitepro.com/payment-link/6afd4aa7906a8b62055d77c6");
  });
  it("offers the trial on Canadian Essentials monthly", () => {
    expect(hasTrial("Essentials", "en-ca", "monthly")).toBe(true);
  });
  it("shows the trial note only on Essentials monthly in both countries", () => {
    expect(hasTrial("Essentials", "en-us", "monthly")).toBe(true);
    expect(hasTrial("Essentials", "en-us", "annual")).toBe(false);
    expect(hasTrial("Essentials", "en-ca", "annual")).toBe(false);
    expect(hasTrial("Growth", "en-us", "monthly")).toBe(false);
    expect(hasTrial("Growth", "en-ca", "monthly")).toBe(false);
    expect(hasTrial("Scale", "en-ca", "monthly")).toBe(false);
  });
});
