import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/site";

function Stars() {
  return (
    <div className="mt-8 flex justify-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#f5b60d] text-[#f5b60d]" />
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => window.clearInterval(id);
  }, [total]);

  const at = (offset: number) => testimonials[(index + offset + total) % total];

  const cards = [
    { item: at(-1), key: "prev" as const },
    { item: at(0), key: "active" as const },
    { item: at(1), key: "next" as const },
  ];

  return (
    <div>
      <div className="grid items-center gap-6 md:grid-cols-3">
        {cards.map(({ item, key }) => {
          const active = key === "active";
          return (
            <figure
              key={`${key}-${item.name}`}
              className={cn(
                "rounded-3xl px-8 py-10 text-center transition-all duration-500",
                active
                  ? "z-10 bg-card shadow-[0_30px_70px_-40px_rgba(42,35,82,0.5)] md:scale-105"
                  : "hidden bg-secondary/60 opacity-40 md:block",
              )}
            >
              <figcaption className="text-2xl font-medium text-foreground">{item.name}</figcaption>
              <p className="mt-2 text-base text-muted-foreground">{item.since}</p>
              <blockquote className="mt-7 text-lg leading-relaxed text-muted-foreground">
                {item.quote}
              </blockquote>
              <Stars />
            </figure>
          );
        })}
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Show review from ${t.name}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              i === index ? "bg-foreground" : "bg-muted-foreground/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
