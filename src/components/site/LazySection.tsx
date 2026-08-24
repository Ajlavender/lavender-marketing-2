import { Suspense, useEffect, type ReactNode } from "react";

/**
 * Placeholder that reserves vertical space while a split chunk hydrates,
 * so lazy sections never cause layout shift.
 */
function SectionSkeleton({ minHeight }: { minHeight: number }) {
  return (
    <div
      aria-hidden="true"
      className="w-full animate-pulse bg-gradient-to-b from-transparent via-muted/20 to-transparent"
      style={{ minHeight }}
    />
  );
}

/**
 * Wraps a code-split, below-the-fold section. Content is still server-rendered
 * (streamed through the Suspense boundary), so SEO copy stays in the HTML while
 * the JS for the section ships in its own chunk.
 */
export function LazySection({
  children,
  minHeight = 420,
}: {
  children: ReactNode;
  minHeight?: number;
}) {
  return <Suspense fallback={<SectionSkeleton minHeight={minHeight} />}>{children}</Suspense>;
}

type Factory = () => Promise<unknown>;

/**
 * Smart prefetch: warms the dynamic chunks for below-the-fold sections once the
 * browser is idle (and the connection isn't metered/slow), so scrolling and
 * hydration never wait on a network round trip.
 */
export function usePrefetchOnIdle(factories: Factory[]) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;

    let cancelled = false;
    const run = () => {
      if (cancelled) return;
      for (const factory of factories) {
        void factory().catch(() => {});
      }
    };

    const ric = (window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    }).requestIdleCallback;

    let idleId: number | undefined;
    let timeoutId: number | undefined;
    if (ric) idleId = ric(run, { timeout: 2500 });
    else timeoutId = window.setTimeout(run, 1200);

    return () => {
      cancelled = true;
      const cic = (window as Window & { cancelIdleCallback?: (id: number) => void })
        .cancelIdleCallback;
      if (idleId !== undefined && cic) cic(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
