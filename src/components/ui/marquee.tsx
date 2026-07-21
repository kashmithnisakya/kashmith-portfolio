import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  duration?: string;
  className?: string;
  label?: string;
}

/**
 * Four copies keep the loop gapless on ultra-wide viewports; each copy
 * carries its own trailing gap (pr-6), so the track is exactly 4 periods
 * wide and the -50% keyframe shift lands on a seamless boundary.
 */
const COPIES = 4;

export function Marquee({
  children,
  reverse = false,
  duration = "40s",
  className,
  label = "Scrolling list",
}: MarqueeProps) {
  return (
    <div
      tabIndex={0}
      role="group"
      aria-label={`${label} (hover or focus to pause)`}
      className={cn(
        "group flex overflow-hidden rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
      style={{ "--marquee-duration": duration } as CSSProperties}
    >
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
        )}
      >
        {Array.from({ length: COPIES }, (_, copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex > 0 || undefined}
            className="flex shrink-0 items-center gap-6 pr-6"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
