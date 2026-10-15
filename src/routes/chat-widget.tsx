import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/chat-widget')({
  head: () => catalogueHead('/chat-widget'),
  component: () => <CatalogueServicePage slug="/chat-widget" />,
});
