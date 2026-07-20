import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  duration?: string;
  className?: string;
}

/**
 * Infinite horizontal marquee. Content is rendered twice; the track
 * translates by exactly one copy's width for a seamless loop.
 */
export function Marquee({
  children,
  reverse = false,
  duration = "40s",
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
      style={{ "--marquee-duration": duration } as CSSProperties}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-6 pr-6",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
