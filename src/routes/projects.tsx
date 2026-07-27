import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ProjectGrid, Section } from "@/components/site/sections";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Website Redesign Projects | Webtec" },
      {
        name: "description",
        content:
          "A selection of website redesign projects delivered by Webtec for small and mid-sized businesses around the world.",
      },
      { property: "og:title", content: "Our Website Redesign Projects | Webtec" },
      { property: "og:description", content: "See the websites we've redesigned." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A website redesign agency with a black belt in style"
        subtitle="A snapshot of recent redesigns across professional services, e-commerce, SaaS and property."
        image={`${MEDIA}/2023/05/representacion-3d-concepto-alojamiento-sitios-web-scaled.jpg`}
      />
      <Section>
        <ProjectGrid />
      </Section>
      <CtaBand />
    </>
  );
}
