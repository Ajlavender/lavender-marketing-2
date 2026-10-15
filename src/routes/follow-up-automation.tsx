import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/follow-up-automation')({
  head: () => catalogueHead('/follow-up-automation'),
  component: () => <CatalogueServicePage slug="/follow-up-automation" />,
});
