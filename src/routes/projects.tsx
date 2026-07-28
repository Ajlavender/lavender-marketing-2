import { createFileRoute } from "@tanstack/react-router";
import { ProjectGrid, Section } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Cutting-Edge Creations | Lavender Marketing & Co. Projects" },
      {
        name: "description",
        content:
          "We've got a black belt in websites. See a selection of website redesign, SEO and copywriting projects delivered by Lavender Marketing & Co..",
      },
      { property: "og:title", content: "Cutting-Edge Creations | Lavender Marketing & Co. Projects" },
      {
        property: "og:description",
        content: "See the websites Lavender Marketing & Co. has redesigned for businesses around the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Section className="bg-secondary pb-24 pt-40">
      <Reveal>
        <p className="text-sm font-semibold text-primary">
          We&apos;ve Got Black Belt In Websites. See For Yourself.
        </p>
        <h1 className="mt-3 bg-[linear-gradient(90deg,#1e2657_0%,#8548ec_100%)] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
          Cutting-Edge Creations
        </h1>
      </Reveal>
      <div className="mt-12">
        <ProjectGrid compact />
      </div>
    </Section>
  );
}
