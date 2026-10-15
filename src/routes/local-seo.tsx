import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/local-seo')({
  head: () => catalogueHead('/local-seo'),
  component: () => <CatalogueServicePage slug="/local-seo" />,
});
