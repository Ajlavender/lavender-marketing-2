import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Owner.com-style rotating headline phrase: the outgoing phrase fades up and
 * softly blurs away while the incoming phrase rises in sharp — a true
 * crossfade with no layout jump (all phrases share one stable-width cell).
 * Stands still for visitors who prefer reduced motion.
 */
export function RotatingWord({
  words,
  interval = 3000,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [state, setState] = useState({ i: 0, prev: -1 });
  const [still] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (still) return;
    const id = setInterval(
      () => setState((s) => ({ i: (s.i + 1) % words.length, prev: s.i })),
      interval,
    );
    return () => clearInterval(id);
  }, [still, interval, words.length]);

  return (
    <span className={cn("relative inline-grid", className)}>
      {words.map((word, idx) => (
        <span
          key={word}
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap",
            idx === state.i && "animate-word-in",
            idx === state.prev && "animate-word-out",
            idx !== state.i && idx !== state.prev && "invisible",
          )}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
