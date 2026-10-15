import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/review-automation')({
  head: () => catalogueHead('/review-automation'),
  component: () => <CatalogueServicePage slug="/review-automation" />,
});
