import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Each word swipes through its own mask with a staggered entrance.
 * All phrases share one stable-width cell, including room for descenders.
 * Stands still for visitors who prefer reduced motion.
 */
export function RotatingWord({
  words,
  interval = 3000,
  className,
  wordClassName,
}: {
  words: readonly string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
}) {
  const [state, setState] = useState({ i: 0, prev: -1 });
  const [still, setStill] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStill(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (still || words.length < 2) return;
    const id = setInterval(
      () => setState((s) => ({ i: (s.i + 1) % words.length, prev: s.i })),
      interval,
    );
    return () => clearInterval(id);
  }, [still, interval, words.length]);

  return (
    <span className={cn("relative inline-grid", className)} aria-label={words[state.i]}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${state.i}`}
          aria-hidden="true"
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap",
            idx !== state.i && (still || idx !== state.prev) && "invisible",
          )}
        >
          {word.split(" ").map((part, partIndex) => (
            <span key={partIndex}>
              {partIndex > 0 && " "}
              <span className="headline-word-mask">
                <span
                  className={cn(
                    "headline-word-glyph",
                    wordClassName,
                    !still && idx === state.i && "animate-word-in",
                    !still && idx === state.prev && "animate-word-out",
                  )}
                  style={{ "--word-delay": `${partIndex * 65}ms` } as CSSProperties}
                >
                  {part}
                </span>
              </span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
