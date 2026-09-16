import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "cards" | "split" | "table" | "carousel" | "loop" | "plain";

function Bar({ className }: { className?: string }) {
  return <div className={cn("skeleton-block h-4 w-full rounded-full", className)} />;
}

function HeaderBlock() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Bar className="h-3 w-28" />
      <Bar className="h-8 w-[min(28rem,80%)] rounded-2xl" />
      <Bar className="h-4 w-[min(20rem,60%)]" />
    </div>
  );
}

function CardBlock({ lines = 3 }: { lines?: number }) {
  return (
    <div className="rounded-3xl border border-primary/10 bg-card/70 p-8 shadow-[0_24px_60px_-45px_rgba(31,33,80,0.4)]">
      <div className="skeleton-block h-16 w-16 rounded-2xl" />
      <Bar className="mt-6 h-5 w-2/3 rounded-xl" />
      <div className="mt-4 space-y-2.5">
        {Array.from({ length: lines }).map((_, i) => (
          <Bar key={i} className={i === lines - 1 ? "w-3/5" : undefined} />
        ))}
      </div>
    </div>
  );
}

/**
 * Premium, layout-matched placeholder shown while a split chunk loads.
 * Reserves vertical space so lazy sections never cause layout shift.
 */
function SectionSkeleton({ minHeight, variant }: { minHeight: number; variant: Variant }) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ minHeight }}
    >
      <div className="mx-auto max-w-7xl">
        {variant !== "plain" && <HeaderBlock />}

        {variant === "cards" && (
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <CardBlock key={i} />
            ))}
          </div>
        )}

        {variant === "split" && (
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <CardBlock lines={5} />
            <CardBlock lines={5} />
          </div>
        )}

        {variant === "loop" && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="skeleton-block h-20 w-20 rounded-full" />
                <Bar className="h-4 w-24" />
                <Bar className="h-3 w-32" />
              </div>
            ))}
          </div>
        )}

        {variant === "table" && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-primary/10 bg-card/70 p-6">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 18 }).map((_, i) => (
                <Bar key={i} className={i % 3 === 0 ? "h-4 w-4/5" : "h-4 w-2/3"} />
              ))}
            </div>
          </div>
        )}

        {variant === "carousel" && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={cn(i === 1 ? "sm:scale-[1.03]" : "opacity-70")}>
                <CardBlock lines={4} />
              </div>
            ))}
          </div>
        )}

        {variant === "plain" && <div className="skeleton-block h-64 w-full rounded-3xl" />}
      </div>
    </div>
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
  variant = "cards",
}: {
  children: ReactNode;
  minHeight?: number;
  variant?: Variant;
}) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || ready) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div ref={hostRef} style={{ minHeight: ready ? undefined : minHeight }}>
      {ready ? (
        <Suspense fallback={<SectionSkeleton minHeight={minHeight} variant={variant} />}>
          {children}
        </Suspense>
      ) : (
        <SectionSkeleton minHeight={minHeight} variant={variant} />
      )}
    </div>
  );
}
