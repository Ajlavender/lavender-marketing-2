import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/social-media-publishing')({
  head: () => catalogueHead('/social-media-publishing'),
  component: () => <CatalogueServicePage slug="/social-media-publishing" />,
});
