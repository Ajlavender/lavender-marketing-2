import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/missed-call-text-back')({
  head: () => catalogueHead('/missed-call-text-back'),
  component: () => <CatalogueServicePage slug="/missed-call-text-back" />,
});
