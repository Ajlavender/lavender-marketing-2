import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/estimates-invoices-payments')({
  head: () => catalogueHead('/estimates-invoices-payments'),
  component: () => <CatalogueServicePage slug="/estimates-invoices-payments" />,
});
