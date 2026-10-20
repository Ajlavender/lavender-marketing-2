import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in | Lavender Marketing & Co." },
      { name: "description", content: "Sign in or create your Lavender Marketing & Co. account." },
      { property: "og:title", content: "Sign in | Lavender Marketing & Co." },
      { property: "og:description", content: "Sign in or create your Lavender Marketing & Co. account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(8, "Use at least 8 characters").max(72),
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && event === "SIGNED_IN") navigate({ to: "/account" });
    });
    supabase.auth.getSession().then(({ data: d }) => d.session && navigate({ to: "/account" }));
    return () => data.subscription.unsubscribe();
  }, [navigate]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setNotice(null);
    if (mode === "forgot") {
      const r = z.string().trim().email().safeParse(email);
      if (!r.success) return toast.error("Enter a valid email");
      setBusy(true);
      const { error } = await supabase.auth.resetPasswordForEmail(r.data, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      return setNotice("Check your email for a link to reset your password.");
    }
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) return toast.error(parsed.error.issues[0]!.message);
    setBusy(true);
    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        ...parsed.data,
        options: { emailRedirectTo: window.location.origin },
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      if (!data.session) setNotice("Check your email to confirm your account, then sign in.");
    } else {
      const { error } = await supabase.auth.signInWithPassword(parsed.data);
      setBusy(false);
      if (error) return toast.error(error.message);
    }
  }

  async function social(provider: "google" | "lovable") {
    const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: window.location.origin + "/auth" });
    if (result.error) toast.error("Sign in didn't work. Please try again.");
  }

  const title = mode === "signup" ? "Create your account" : mode === "forgot" ? "Reset your password" : "Welcome back";

  return (
    <section className="mx-auto flex max-w-md flex-col px-4 pb-20 pt-36">
      <h1 className="text-3xl font-semibold text-foreground">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {mode === "signup" ? "Sign up with your email or Google." : mode === "forgot" ? "We'll email you a reset link." : "Sign in to your account."}
      </p>

      {mode !== "forgot" && (
        <div className="mt-8 grid gap-3">
          <Button type="button" variant="outline" onClick={() => social("google")}>Continue with Google</Button>
          <Button type="button" variant="outline" onClick={() => social("lovable")}>Continue with Lovable</Button>
          <div className="my-2 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px flex-1 bg-border" />or<span className="h-px flex-1 bg-border" />
          </div>
        </div>
      )}

      <form onSubmit={submit} className={mode === "forgot" ? "mt-8 grid gap-4" : "grid gap-4"}>
        <div className="grid gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        {mode !== "forgot" && (
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" autoComplete={mode === "signup" ? "new-password" : "current-password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
        )}
        <Button type="submit" disabled={busy}>
          {busy ? "Please wait…" : mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Sign in"}
        </Button>
      </form>

      {notice && <p className="mt-4 rounded-md bg-muted p-3 text-sm text-foreground">{notice}</p>}

      <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
        {mode === "signin" && (
          <>
            <button className="text-left hover:text-primary" onClick={() => setMode("forgot")}>Forgot your password?</button>
            <button className="text-left hover:text-primary" onClick={() => setMode("signup")}>New here? Create an account</button>
          </>
        )}
        {mode !== "signin" && (
          <button className="text-left hover:text-primary" onClick={() => setMode("signin")}>Already have an account? Sign in</button>
        )}
      </div>
    </section>
  );
}
