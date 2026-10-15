import { catalogueService } from '@/data/service-catalogue';
const site = 'https://lavendermarketingco.com';
export function catalogueHead(slug: string) {
  const service = catalogueService(slug);
  const title = service ? `${service.title} | Lavender Marketing & Co.` : 'Explore Our Services | Lavender Marketing & Co.';
  const description = service?.short ?? 'Explore 20 services for local businesses: websites, local visibility, customer service, reviews, AI and automation. Choose the right setup for your business.';
  const url = `${site}${slug}`;
  return {
    meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: url }, { name: 'twitter:card', content: 'summary_large_image' }],
    links: [{ rel: 'canonical', href: url }],
    scripts: service ? [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description, url, provider: { '@type': 'Organization', name: 'Lavender Marketing & Co.' }, areaServed: ['Canada', 'United States'] }) }] : [],
  };
}
