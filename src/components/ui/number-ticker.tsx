"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  delay?: number;
  className?: string;
}

export function NumberTicker({
  value,
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 45, stiffness: 120 });
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay, motionValue]);

  useEffect(
    () =>
      spring.on("change", (latest: number) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Math.round(latest),
          );
        }
      }),
    [spring],
  );

  return (
    <span ref={ref} className={cn("tabular-nums tracking-tight", className)}>
      0
    </span>
  );
}
