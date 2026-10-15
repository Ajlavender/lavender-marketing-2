import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/unified-inbox')({
  head: () => catalogueHead('/unified-inbox'),
  component: () => <CatalogueServicePage slug="/unified-inbox" />,
});
