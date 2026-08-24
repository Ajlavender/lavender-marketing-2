import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, CtaBand } from "@/components/site/sections";
import { posts } from "@/data/posts";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Practical advice on free website design, review engines, local SEO, copywriting and conversion for small and mid-sized businesses.",
      },
      { property: "og:title", content: "Blog | Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        property: "og:description",
        content: "Practical advice on free website design, review engines, local SEO, copywriting and conversion for small and mid-sized businesses.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas that make websites work harder"
        subtitle="Redesign, SEO, copywriting and conversion advice — written by the team that does the work."
        image={`${ILLU}/reporting.webp`}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary">
                    <span>{post.category}</span>
                    <span className="text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl leading-snug">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
