import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand, Section } from "@/components/site/sections";
import { getPost, posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | Webtec" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Webtec Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "og:image", content: post.image },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Webtec" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <Section className="pb-0">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="text-sm font-semibold text-primary hover:underline">
              ← Back to blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary">
              <span>{post.category}</span>
              <span className="text-muted-foreground">{post.readTime}</span>
              <span className="text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            <img
              src={post.image}
              alt={post.title}
              className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover"
            />
            <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Section>
      </article>

      <Section muted>
        <h2 className="text-3xl">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {p.category}
              </span>
              <h3 className="mt-2 text-lg leading-snug">{p.title}</h3>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
