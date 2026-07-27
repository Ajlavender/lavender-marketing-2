import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type SliderReview = {
  name: string;
  when: string;
  rating: number;
  quote: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-3.5 w-3.5 fill-current", i < rating ? "text-[#f4a62a]" : "text-muted")}
        />
      ))}
    </div>
  );
}

export function ReviewSlider({ reviews }: { reviews: SliderReview[] }) {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const at = (o: number) => reviews[(index + o + total) % total];

  const cards = [
    { item: at(-1), key: "prev" as const },
    { item: at(0), key: "active" as const },
    { item: at(1), key: "next" as const },
  ];

  return (
    <div className="relative px-10">
      <button
        type="button"
        aria-label="Previous review"
        onClick={() => setIndex((i) => (i - 1 + total) % total)}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-muted-foreground transition hover:text-foreground"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="grid grid-cols-3 items-center gap-3">
        {cards.map(({ item, key }) => {
          const active = key === "active";
          return (
            <figure
              key={`${key}-${item.name}`}
              className={cn(
                "rounded-md bg-card px-5 py-6 text-center transition-all duration-500",
                active
                  ? "z-10 scale-105 opacity-100 shadow-[0_18px_45px_-25px_rgba(42,35,82,0.5)]"
                  : "scale-95 opacity-30 shadow-[0_10px_30px_-25px_rgba(42,35,82,0.5)]",
              )}
            >
              <figcaption className="text-sm font-bold text-foreground">{item.name}</figcaption>
              <p className="mt-1 text-[11px] text-muted-foreground">{item.when}</p>
              <blockquote className="mt-4 line-clamp-[10] text-[12px] leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <div className="mt-5">
                <Stars rating={item.rating} />
              </div>
            </figure>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Next review"
        onClick={() => setIndex((i) => (i + 1) % total)}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full p-2 text-muted-foreground transition hover:text-foreground"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
