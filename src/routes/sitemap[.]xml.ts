import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { posts } from "@/data/posts";

const BASE_URL = "https://lavendermarketingco.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticPaths: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/pricing", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/growth-report", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/about/motto", changefreq: "yearly", priority: "0.5" },
  { path: "/why-choose-us", changefreq: "monthly", priority: "0.7" },
  { path: "/projects", changefreq: "monthly", priority: "0.7" },
  { path: "/reviews", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/website-redesign", changefreq: "monthly", priority: "0.8" },
  { path: "/local-seo", changefreq: "monthly", priority: "0.8" },
  { path: "/ad-management", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-chat-widget", changefreq: "monthly", priority: "0.7" },
  { path: "/chat-widget", changefreq: "monthly", priority: "0.7" },
  { path: "/crm-pipeline", changefreq: "monthly", priority: "0.7" },
  { path: "/follow-up-automation", changefreq: "monthly", priority: "0.7" },
  { path: "/hosting-and-support", changefreq: "monthly", priority: "0.7" },
  { path: "/missed-call-text-back", changefreq: "monthly", priority: "0.7" },
  { path: "/online-booking", changefreq: "monthly", priority: "0.7" },
  { path: "/review-automation", changefreq: "monthly", priority: "0.7" },
  { path: "/unified-inbox", changefreq: "monthly", priority: "0.7" },
  { path: "/voice-ai-receptionist", changefreq: "monthly", priority: "0.7" },
  { path: "/construction-website-design", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...staticPaths,
          ...posts.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const loc = (l: string, path: string) => `${BASE_URL}/${l}${path === "/" ? "" : path}`;
        const urls = entries.flatMap((e) => ["en-ca", "en-us"].map((l) => ({ ...e, l }))).map((e) =>
          [
            `  <url>`,
            `    <loc>${loc(e.l, e.path)}</loc>`,
            `    <xhtml:link rel="alternate" hreflang="en-CA" href="${loc("en-ca", e.path)}"/>`,
            `    <xhtml:link rel="alternate" hreflang="en-US" href="${loc("en-us", e.path)}"/>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
