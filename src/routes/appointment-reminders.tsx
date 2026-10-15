import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { CatalogueServicePage } from '@/components/site/CatalogueServicePage';
export const Route = createFileRoute('/appointment-reminders')({
  head: () => catalogueHead('/appointment-reminders'),
  component: () => <CatalogueServicePage slug="/appointment-reminders" />,
});
