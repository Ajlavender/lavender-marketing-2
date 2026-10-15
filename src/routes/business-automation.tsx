import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/business-automation')({
  head: () => catalogueHead('/business-automation'),
  component: () => <CatalogueServicePage slug="/business-automation" />,
});
