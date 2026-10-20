import { useEffect, useReducer, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Owner.com-style rotating headline word: cycles through phrases with a soft
 * rise-in. Stands still for visitors who prefer reduced motion.
 */
export function RotatingWord({
  words,
  interval = 2600,
  className,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [i, advance] = useReducer((n: number) => (n + 1) % words.length, 0);
  const [still] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (still) return;
    const id = setInterval(advance, interval);
    return () => clearInterval(id);
  }, [still, interval]);

  return (
    <span key={i} className={cn("inline-block animate-word-in", className)}>
      {words[i]}
    </span>
  );
}
