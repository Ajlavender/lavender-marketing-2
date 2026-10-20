import { Link } from "@tanstack/react-router";
import { LOGO } from "@/data/site";
import { cn } from "@/lib/utils";

const NAME = "Lavender Marketing & Co.";

type BrandProps = {
  className?: string;
  /** Tailwind size classes for the mark. The artwork is square, so keep w and h equal. */
  markClassName?: string;
  /** Colour + any extra classes for the wordmark. */
  nameClassName?: string;
  /** Render the company name next to the mark. */
  showName?: boolean;
  /** Hide the name below the `sm` breakpoint (header behaviour). */
  hideNameBelowSm?: boolean;
  /** Thin rule between mark and name so the gap always reads deliberate. */
  divider?: boolean;
  /** Load the mark ahead of other images (above-the-fold header). */
  priority?: boolean;
  loading?: "eager" | "lazy";
};

export function Brand({
  className,
  markClassName = "h-8 w-8",
  nameClassName = "text-white",
  showName = true,
  hideNameBelowSm = true,
  divider = true,
  priority = false,
  loading = "eager",
}: BrandProps) {
  return (
    <Link
      to="/"
      aria-label={`${NAME} home`}
      className={cn("group flex shrink-0 items-center", className)}
    >
      <img
        src={LOGO}
        alt=""
        width={64}
        height={64}
        className={cn("shrink-0 object-contain", markClassName)}
        {...(priority
          ? { fetchPriority: "high" as const }
          : { loading, decoding: "async" as const })}
      />
      {showName ? (
        <span
          className={cn(
            "items-center",
            hideNameBelowSm ? "hidden sm:inline-flex" : "inline-flex",
          )}
        >
          {divider ? (
            <span
              aria-hidden="true"
              className={cn(
                "mr-3 h-5 w-px shrink-0 bg-current opacity-20 transition-opacity duration-300 group-hover:opacity-35",
                nameClassName,
              )}
            />
          ) : null}
          <span
            className={cn(
              "whitespace-nowrap font-brand text-[1.2rem] leading-none tracking-[0.012em]",
              nameClassName,
            )}
          >
            {NAME}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
