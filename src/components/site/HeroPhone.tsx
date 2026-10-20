import { PROJECTS } from "@/data/site";
import { HeroMockup } from "@/components/site/HeroMockup";

/** Phone showing a real client website, with live activity notifications beside it. */
export function HeroPhone() {
  return (
    <div className="relative mx-auto h-[34rem] w-full max-w-[30rem] sm:h-[38rem]">
      <div className="absolute right-2 top-0 w-[15.5rem] rounded-[2.6rem] border border-border bg-foreground p-2.5 shadow-[0_50px_100px_-40px_color-mix(in_oklab,var(--brand)_70%,transparent)] sm:right-6 sm:w-[17.5rem]">
        <div className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />
        <div className="overflow-hidden rounded-[2.1rem] bg-background">
          <img
            src={`${PROJECTS}/ta-construction-480.webp`}
            alt="A client website built by Lavender Marketing & Co. shown on a phone"
            width={480}
            height={900}
            fetchPriority="high"
            className="aspect-[9/19] w-full object-cover object-top"
          />
        </div>
      </div>
      <HeroMockup className="absolute bottom-10 left-0 z-20 w-64 sm:w-72" />
    </div>
  );
}
