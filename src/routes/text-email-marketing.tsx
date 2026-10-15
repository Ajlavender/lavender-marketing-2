import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/text-email-marketing')({
  head: () => catalogueHead('/text-email-marketing'),
  component: () => <CatalogueServicePage slug="/text-email-marketing" />,
});
