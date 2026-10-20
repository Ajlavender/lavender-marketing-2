import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSessionUser } from "@/hooks/use-session";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/account")({
  head: () => ({
    meta: [
      { title: "Your account | Lavender Marketing & Co." },
      { name: "description", content: "Your Lavender Marketing & Co. account." },
      { property: "og:title", content: "Your account | Lavender Marketing & Co." },
      { property: "og:description", content: "Your Lavender Marketing & Co. account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Account,
});

function Account() {
  const user = useSessionUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function signOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <section className="mx-auto max-w-xl px-4 pb-20 pt-36">
      <h1 className="text-3xl font-semibold text-foreground">Your account</h1>
      <p className="mt-3 text-muted-foreground">Signed in as <span className="font-medium text-foreground">{user?.email ?? "…"}</span></p>
      <Button className="mt-8" variant="outline" onClick={signOut}>Sign out</Button>
    </section>
  );
}
