import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/crm-pipeline')({
  head: () => catalogueHead('/crm-pipeline'),
  component: () => <CatalogueServicePage slug="/crm-pipeline" />,
});
