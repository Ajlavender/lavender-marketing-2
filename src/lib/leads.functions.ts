import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  source: z.string().trim().max(100),
  name: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  website: z.string().trim().max(255).optional(),
  message: z.string().trim().max(2000).optional(),
  answers: z.record(z.string(), z.string().max(255)).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const webhookUrl = process.env["GHL_WEBHOOK_URL"];
    if (!webhookUrl) {
      console.error("GHL_WEBHOOK_URL is not configured; lead was not delivered");
      return { ok: false as const, error: "Lead destination is not configured yet." };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`Lead webhook failed [${response.status}]: ${body}`);
      return { ok: false as const, error: "We couldn't submit that just now." };
    }

    return { ok: true as const };
  });
