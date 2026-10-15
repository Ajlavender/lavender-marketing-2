import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/voice-ai-receptionist')({
  head: () => catalogueHead('/voice-ai-receptionist'),
  component: () => <CatalogueServicePage slug="/voice-ai-receptionist" />,
});
