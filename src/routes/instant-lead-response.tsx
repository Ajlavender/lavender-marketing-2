import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/instant-lead-response')({
  head: () => catalogueHead('/instant-lead-response'),
  component: () => <CatalogueServicePage slug="/instant-lead-response" />,
});
