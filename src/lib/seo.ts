import { serviceSeo } from "@/data/service-seo";

export const SITE_URL = "https://project--e08a8ecc-293c-4c66-a4a0-c6c4458e6186.lovable.app";
export const BRAND = "Lavender Marketing & Co.";

/**
 * Head metadata for a service page: title/description, Open Graph, Twitter,
 * canonical, plus Service + FAQPage + BreadcrumbList JSON-LD so search engines
 * and AI answer engines can extract the offer, price and answers directly.
 */
export function serviceHead(slug: string) {
  const s = serviceSeo[slug];
  if (!s) return { meta: [], links: [] };

  const url = `${SITE_URL}${slug}`;

  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: BRAND },
      { property: "og:image", content: s.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: s.title },
      { name: "twitter:description", content: s.description },
      { name: "twitter:image", content: s.image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: s.name,
              serviceType: s.name,
              description: s.answer,
              url,
              image: s.image,
              provider: {
                "@type": "ProfessionalService",
                name: BRAND,
                url: SITE_URL,
                priceRange: "$$",
              },
              audience: {
                "@type": "BusinessAudience",
                name: "Local service businesses",
              },
              areaServed: { "@type": "Country", name: ["Canada", "United States"] },
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: s.plan.includes("297") ? "297" : undefined,
                description: s.plan,
                url: `${SITE_URL}/pricing`,
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: s.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/pricing` },
                { "@type": "ListItem", position: 3, name: s.name, item: url },
              ],
            },
          ],
        }),
      },
    ],
  };
}
