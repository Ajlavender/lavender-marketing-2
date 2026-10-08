import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { REASONS, REQUEST_TYPES, handlingFor, tagsFor } from "./transition";

const typeValues = REQUEST_TYPES.map((t) => t.value) as [string, ...string[]];
const reasonValues = REASONS.map((r) => r.value) as [string, ...string[]];

const schema = z.object({
  fullName: z.string().trim().min(1).max(120),
  businessName: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+()\-.\s0-9]*$/, "Invalid phone")
    .optional()
    .or(z.literal("")),
  requestType: z.enum(typeValues),
  reason: z.enum(reasonValues).optional().or(z.literal("")),
  details: z.string().trim().max(2000).optional(),
  improve: z.string().trim().max(2000).optional(),
  openToDiscuss: z.boolean(),
  authorized: z.literal(true),
  locale: z.enum(["en-ca", "en-us"]),
  /** Honeypot — real people never fill this. */
  company: z.string().max(0).optional().or(z.literal("")),
  /** ms since the form rendered; bots submit instantly. */
  elapsedMs: z.number().int().min(0),
});

// Best-effort, per-isolate protection against bursts and double-submits.
const recent = new Map<string, { at: number; ref: string }>();
const DEDUPE_MS = 10 * 60 * 1000;

function makeRef() {
  const d = new Date();
  const date = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  const rand = crypto.getRandomValues(new Uint32Array(1))[0]!.toString(36).toUpperCase().padStart(6, "0").slice(0, 6);
  return `LSP-${date}-${rand}`;
}

/** Whether live submission is wired up. The page disables the form until it is. */
export const getTransitionStatus = createServerFn({ method: "GET" }).handler(async () => ({
  configured: Boolean(process.env["GHL_TRANSITION_WEBHOOK_URL"]),
}));

export const submitTransitionRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const webhookUrl = process.env["GHL_TRANSITION_WEBHOOK_URL"];
    if (!webhookUrl) {
      return { ok: false as const, error: "Online requests aren't switched on yet." };
    }

    // Spam: honeypot filled or submitted faster than a human could.
    if (data.company || data.elapsedMs < 3000) {
      return { ok: false as const, error: "Please take a moment and try again." };
    }

    const now = Date.now();
    for (const [k, v] of recent) if (now - v.at > DEDUPE_MS) recent.delete(k);
    const key = `${data.email.toLowerCase()}|${data.requestType}`;
    const prior = recent.get(key);
    if (prior) {
      // Same request already recorded — return the original reference, don't create a second case.
      return { ok: true as const, reference: prior.ref, duplicate: true };
    }

    const reference = makeRef();
    const submittedAt = new Date(now).toISOString();
    const typeLabel = REQUEST_TYPES.find((t) => t.value === data.requestType)!.label;
    const reasonLabel = REASONS.find((r) => r.value === data.reason)?.label ?? "";

    const payload = {
      source: "account-transition",
      reference,
      submittedAt,
      locale: data.locale,
      fullName: data.fullName,
      firstName: data.fullName.split(/\s+/)[0],
      businessName: data.businessName,
      email: data.email,
      phone: data.phone || "",
      requestType: data.requestType,
      requestTypeLabel: typeLabel,
      reason: data.reason || "",
      reasonLabel,
      details: data.details ?? "",
      improve: data.improve ?? "",
      openToDiscuss: data.openToDiscuss,
      authorizedConfirmed: true,
      tags: tagsFor(data.requestType as never, data.openToDiscuss),
      internalHandling: handlingFor(data.requestType as never, (data.reason || undefined) as never),
      pipeline: "Lavender Suite Pro — Customer Success",
      stage: "New Request",
    };

    let response: Response;
    try {
      response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      console.error("Transition webhook unreachable");
      return { ok: false as const, error: "We couldn't record that just now." };
    }

    if (!response.ok) {
      // Status only — never log the customer's form contents.
      console.error(`Transition webhook failed [${response.status}]`);
      return { ok: false as const, error: "We couldn't record that just now." };
    }

    recent.set(key, { at: now, ref: reference });
    return { ok: true as const, reference, duplicate: false };
  });
