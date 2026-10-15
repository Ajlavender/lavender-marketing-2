import { describe, expect, it } from 'vitest';
import { catalogueService, serviceCatalogue, serviceCategories } from './service-catalogue';
describe('Approved services catalogue', () => {
 it('has 20 dedicated services across four categories of five', () => { expect(serviceCatalogue).toHaveLength(20); expect(new Set(serviceCatalogue.map(s => s.slug)).size).toBe(20); expect(serviceCategories).toHaveLength(4); for(const category of serviceCategories) expect(serviceCatalogue.filter(s=>s.category===category.title)).toHaveLength(5); });
 it('keeps both AI services in Growth', () => { expect(catalogueService('/ai-chat-widget')?.plan).toBe('Growth'); expect(catalogueService('/voice-ai-receptionist')?.plan).toBe('Growth'); });
 it('keeps starter and advanced local SEO together', () => { expect(catalogueService('/local-seo')?.plan).toBe('Growth & Scale'); });
 it('preserves Scale customer reactivation', () => { expect(catalogueService('/customer-reactivation')?.plan).toBe('Scale'); });
 it('does not assign unconfirmed capabilities to Essentials', () => { for(const slug of ['/instant-lead-response','/sales-calling','/appointment-reminders','/social-media-publishing','/text-email-marketing','/website-review-display','/estimates-invoices-payments','/business-automation']) expect(catalogueService(slug)?.plan).toBeNull(); });
});
