import { lazy } from "react";

/**
 * Below-the-fold home page sections, each in its own chunk.
 * Factories are exported separately so they can be prefetched on idle.
 */
export const loadPainPointCards = () => import("@/components/site/PainPointCards");
export const loadSystemLoop = () => import("@/components/site/SystemLoop");
export const loadCatchSection = () => import("@/components/site/CatchSection");
export const loadBuyerPaths = () => import("@/components/site/BuyerPaths");
export const loadValueStack = () => import("@/components/site/ValueStack");
export const loadComparisonTable = () => import("@/components/site/ComparisonTable");
export const loadTestimonialCarousel = () => import("@/components/site/TestimonialCarousel");

export const PainPointCards = lazy(() =>
  loadPainPointCards().then((m) => ({ default: m.PainPointCards })),
);
export const SystemLoop = lazy(() => loadSystemLoop().then((m) => ({ default: m.SystemLoop })));
export const CatchSection = lazy(() =>
  loadCatchSection().then((m) => ({ default: m.CatchSection })),
);
export const BuyerPaths = lazy(() => loadBuyerPaths().then((m) => ({ default: m.BuyerPaths })));
export const ValueStack = lazy(() => loadValueStack().then((m) => ({ default: m.ValueStack })));
export const ComparisonTable = lazy(() =>
  loadComparisonTable().then((m) => ({ default: m.ComparisonTable })),
);
export const TestimonialCarousel = lazy(() =>
  loadTestimonialCarousel().then((m) => ({ default: m.TestimonialCarousel })),
);

export const homeSectionFactories = [
  loadPainPointCards,
  loadSystemLoop,
  loadCatchSection,
  loadBuyerPaths,
  loadValueStack,
  loadComparisonTable,
  loadTestimonialCarousel,
];
