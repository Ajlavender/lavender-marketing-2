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
  /** Below `sm`, show a short form of the name instead of hiding it. */
  shortNameBelowSm?: boolean;
  /** Size classes for the wordmark (keep one text-size utility here). */
  nameTextClass?: string;
  /** Thin rule between mark and name so the gap always reads deliberate. */
  divider?: boolean;
  /** Load the mark ahead of other images (above-the-fold header). */
  priority?: boolean;
  loading?: "eager" | "lazy";
  onClick?: () => void;
};

export function Brand({
  className,
  markClassName = "h-8 w-8",
  nameClassName = "text-white",
  showName = true,
  hideNameBelowSm = true,
  shortNameBelowSm = false,
  nameTextClass = "text-[1.25rem]",
  divider = false,
  priority = false,
  loading = "eager",
  onClick,
}: BrandProps) {
  return (
    <Link
      to="/"
      aria-label={`${NAME} home`}
      onClick={onClick}
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
        <>
          {shortNameBelowSm ? (
            <span
              className={cn(
                "whitespace-nowrap font-brand font-medium leading-none tracking-[0.03em] sm:hidden",
                nameTextClass,
                nameClassName,
              )}
            >
              Lavender
            </span>
          ) : null}
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
              "whitespace-nowrap font-brand font-medium leading-none tracking-[0.03em]",
              nameTextClass,
              nameClassName,
            )}
          >
            {NAME}
          </span>
          </span>
        </>
      ) : null}
    </Link>
  );
}
