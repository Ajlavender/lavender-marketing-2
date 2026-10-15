import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/website-review-display')({
  head: () => catalogueHead('/website-review-display'),
  component: () => <CatalogueServicePage slug="/website-review-display" />,
});
