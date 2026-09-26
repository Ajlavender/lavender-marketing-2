import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element travels in from. */
  from?: "up" | "down" | "left" | "right" | "none";
  /** Delay in ms. */
  delay?: number;
  /** Also scale in slightly. */
  scale?: boolean;
  as?: ElementType;
};

// On phones every direction resolves to a vertical rise: horizontal travel
// creates side-scroll and costs more to composite on mobile GPUs.
const hidden: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-y-8 md:translate-y-0 md:-translate-x-10",
  right: "translate-y-8 md:translate-y-0 md:translate-x-10",
  none: "",
};

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  scale = false,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        inView
          ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0"
          : cn("opacity-0 blur-[2px]", hidden[from], scale && "scale-95"),
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Splits "3,000+" into numeric part and suffix so we can animate the number. */
function parseValue(value: string) {
  const match = /^([^0-9]*)([\d.,]+)(.*)$/s.exec(value);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const numeric = Number(digits.replace(/,/g, ""));
  if (!Number.isFinite(numeric)) return null;
  const decimals = digits.includes(".") ? digits.split(".")[1].length : 0;
  const grouped = digits.includes(",");
  return { prefix, numeric, suffix, decimals, grouped };
}

export function CountUp({
  value,
  duration = 1800,
  className,
}: {
  value: string | number;
  duration?: number;
  className?: string;
}) {
  const raw = String(value);
  const parsed = parseValue(raw);
  const { ref, inView } = useInView<HTMLSpanElement>();
  // Start on the real value so it never shows "0" (SSR, no-JS, slow observers).
  const [display, setDisplay] = useState(parsed ? parsed.numeric : null);

  useEffect(() => {
    if (!inView || !parsed) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(parsed.numeric);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(parsed.numeric * eased);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, raw, duration]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {raw}
      </span>
    );
  }

  const shown = display ?? 0;
  const text = parsed.grouped
    ? shown.toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
      })
    : shown.toFixed(parsed.decimals);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {parsed.prefix}
      {text}
      {parsed.suffix}
    </span>
  );
}
