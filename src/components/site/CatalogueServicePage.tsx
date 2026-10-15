import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { catalogueService, serviceCatalogue } from '@/data/service-catalogue';
import { INTAKE_URL } from '@/data/pricing';
import { useSpell } from '@/lib/locale';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BeforeAfterCompare, transformations } from './BeforeAfterShowcase';

export function CatalogueServicePage({ slug }: { slug: string }) {
  const s = catalogueService(slug);
  const t = useSpell();
  if (!s) return null;
  const website = slug === '/website-redesign';
  const related = serviceCatalogue.filter(item => item.category === s.category && item.slug !== slug).slice(0, 3);
  return <>
    <section className="bg-secondary px-5 pb-12 pt-40 sm:px-8 sm:pt-44">
      <div className="mx-auto max-w-7xl">
        <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">{t('Services')} / {t(s.category)}</Link>
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold text-primary">{t(s.planText)}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">{t(s.title)}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t(s.short)}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">{website ? <a href={INTAKE_URL}>Get My Free Website Design <ArrowUpRight className="size-4" /></a> : <Link to="/contact">Talk About This Service <ArrowUpRight className="size-4" /></Link>}</Button>
              <Button asChild variant="outline" size="lg"><Link to="/pricing">View Plans <ArrowRight className="size-4" /></Link></Button>
            </div>
            {website && <p className="mt-5 text-sm text-muted-foreground">Free custom design. A 7-day preview. Launch with Essentials for $297/month if you love it.</p>}
          </div>
          <img src={s.image} alt={t(s.title)} width={600} height={600} fetchPriority="high" className="mx-auto aspect-square w-full max-w-[340px] object-contain sm:max-w-[400px]" />
        </div>
      </div>
    </section>
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div><p className="text-sm font-semibold text-primary">The everyday problem</p><h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t(s.title)}</h2></div>
        <div><p className="text-lg leading-relaxed text-muted-foreground">{t(s.problem)}</p><ul className="mt-7 space-y-4">{s.benefits.map(b => <li key={b} className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" /><span>{t(b)}</span></li>)}</ul></div>
      </div>
    </section>
    <section className="bg-nav-plum px-5 py-16 text-nav-plum-foreground sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div><p className="text-sm text-nav-plum-foreground/65">An example in practice</p><h2 className="mt-3 font-display text-3xl font-bold">{t('A clearer next step for your customer')}</h2></div>
        <p className="text-xl leading-relaxed">{t(s.example)}</p>
      </div>
    </section>
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl"><h2 className="font-display text-3xl font-bold sm:text-4xl">What we set up with you</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{s.setup.map((step,i) => <li key={step} className="border-t border-border pt-5"><span className="font-display text-3xl text-primary">0{i+1}</span><h3 className="mt-4 text-lg font-semibold leading-snug">{t(step)}</h3></li>)}</ol>
        {slug === '/local-seo' && <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2"><div><h3 className="text-xl font-semibold">Growth — starter setup</h3><p className="mt-3 text-muted-foreground">{t('Local SEO starter: business listings set up across key directories, plus Google Business Profile optimisation.')}</p></div><div><h3 className="text-xl font-semibold">Scale — ongoing management</h3><p className="mt-3 text-muted-foreground">{t('Advanced local SEO: ongoing optimisation, regular content updates, and full Google Business Profile management.')}</p></div></div>}
        <div className="mt-12 border-l-2 border-primary pl-5"><h3 className="text-base font-semibold">Before we switch it on</h3><p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted-foreground">{t(s.note)}</p></div>
      </div>
    </section>
    {website && <section className="bg-secondary px-5 py-16 sm:px-8"><div className="mx-auto max-w-7xl"><h2 className="font-display text-3xl font-bold sm:text-4xl">Real businesses. Real website transformations.</h2><div className="mt-8 grid gap-10 lg:grid-cols-2">{transformations.map(item => <div key={item.client}><h3 className="mb-4 text-lg font-semibold">{item.client}</h3><BeforeAfterCompare item={item} priority={false} /></div>)}</div><Button asChild variant="outline" className="mt-8"><Link to="/projects">See Our Work <ArrowUpRight className="size-4" /></Link></Button></div></section>}
    <section className="bg-secondary px-5 py-16 sm:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.3fr]"><h2 className="font-display text-3xl font-bold sm:text-4xl">A few questions, answered</h2><Accordion type="single" collapsible>{s.faqs.map((faq,i) => <AccordionItem value={String(i)} key={faq.q}><AccordionTrigger className="text-left text-base">{t(faq.q)}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{t(faq.a)}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <section className="px-5 py-16 sm:px-8"><div className="mx-auto max-w-7xl"><h2 className="font-display text-3xl font-bold">Related services</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map(item => <Link key={item.slug} to={item.slug} className="group border-t border-border pt-5"><h3 className="flex items-start justify-between gap-3 text-lg font-semibold">{t(item.title)}<ArrowUpRight className="size-5 shrink-0 text-primary" /></h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(item.short)}</p></Link>)}</div><div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8"><div><h2 className="font-display text-3xl font-bold">Let's find the right setup for your business.</h2><p className="mt-2 text-muted-foreground">{t('We confirm the scope, plan and any usage charges before you decide.')}</p></div><Button asChild size="lg"><Link to="/contact">Talk to Us <ArrowUpRight className="size-4" /></Link></Button></div></div></section>
  </>;
}
