import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set a new password | Lavender Marketing & Co." },
      { name: "description", content: "Choose a new password for your Lavender Marketing & Co. account." },
      { property: "og:title", content: "Set a new password | Lavender Marketing & Co." },
      { property: "og:description", content: "Choose a new password for your account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 8) return toast.error("Use at least 8 characters");
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Password updated");
    navigate({ to: "/account" });
  }

  return (
    <section className="mx-auto max-w-md px-4 pb-20 pt-36">
      <h1 className="text-3xl font-semibold text-foreground">Set a new password</h1>
      <form onSubmit={submit} className="mt-8 grid gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="pw">New password</Label>
          <Input id="pw" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button type="submit" disabled={busy}>{busy ? "Saving…" : "Save password"}</Button>
      </form>
    </section>
  );
}
