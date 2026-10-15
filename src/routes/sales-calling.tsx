import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/sales-calling')({
  head: () => catalogueHead('/sales-calling'),
  component: () => <CatalogueServicePage slug="/sales-calling" />,
});
