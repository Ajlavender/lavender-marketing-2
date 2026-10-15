import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/ai-chat-widget')({
  head: () => catalogueHead('/ai-chat-widget'),
  component: () => <CatalogueServicePage slug="/ai-chat-widget" />,
});
