import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/website-redesign')({
  head: () => catalogueHead('/website-redesign'),
  component: () => <CatalogueServicePage slug="/website-redesign" />,
});
