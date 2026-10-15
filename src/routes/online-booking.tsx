import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/online-booking')({
  head: () => catalogueHead('/online-booking'),
  component: () => <CatalogueServicePage slug="/online-booking" />,
});
