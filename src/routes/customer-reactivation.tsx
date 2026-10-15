import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/customer-reactivation')({
  head: () => catalogueHead('/customer-reactivation'),
  component: () => <CatalogueServicePage slug="/customer-reactivation" />,
});
