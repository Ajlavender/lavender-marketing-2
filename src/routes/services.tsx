import { createFileRoute } from '@tanstack/react-router';
import { catalogueHead } from '@/lib/catalogue-seo';
import { ServicesCatalogue } from '@/components/site/ServicesCatalogue';
export const Route = createFileRoute('/services')({ head: () => catalogueHead('/services'), component: ServicesCatalogue });
