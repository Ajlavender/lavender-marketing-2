import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const BOOKING_URL = "https://links.lavendermarketingco.com/widget/booking/sElYCoHQVkd1yhfDrM4l";

export type BookingPrefill = {
  name?: string;
  email?: string;
  phone?: string;
};

export function bookingUrlWith(prefill: BookingPrefill = {}) {
  const params = new URLSearchParams();
  if (prefill.name) {
    const [first, ...rest] = prefill.name.trim().split(/\s+/);
    if (first) params.set("first_name", first);
    if (rest.length) params.set("last_name", rest.join(" "));
  }
  if (prefill.email) params.set("email", prefill.email);
  if (prefill.phone) params.set("phone", prefill.phone);
  const qs = params.toString();
  return qs ? `${BOOKING_URL}?${qs}` : BOOKING_URL;
}

/**
 * Booking calendar shown right after a lead is created in the CRM, so the
 * visitor can immediately grab a time to talk through their free design.
 */
export function BookingDialog({
  open,
  onOpenChange,
  prefill,
  offer = "report",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefill?: BookingPrefill;
  offer?: "report" | "design";
}) {
  useEffect(() => {
    if (!open) return;
    const id = "leadconnector-form-embed";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://links.lavendermarketingco.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] w-[calc(100vw-2rem)] max-w-3xl overflow-hidden p-0">
        <div className="bg-[linear-gradient(120deg,#150524_0%,#2c085d_100%)] px-6 py-5 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl text-white">
              You're in — now pick a time
            </DialogTitle>
            <DialogDescription className="text-white/70">
              {offer === "design"
                ? "Book a quick call so we can learn about your business and prepare your free website design."
                : "Book a quick call and we'll walk you through your free Google & Local Visibility Report."}
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="max-h-[70vh] overflow-y-auto bg-background">
          <iframe
            key={bookingUrlWith(prefill)}
            src={bookingUrlWith(prefill)}
            title="Book your design walkthrough"
            allow="payment"
            scrolling="no"
            className="h-[70vh] w-full border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
