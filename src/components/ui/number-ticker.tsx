"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

const format = (value: number) => Intl.NumberFormat("en-US").format(value);

interface NumberTickerProps {
  value: number;
  delay?: number;
  className?: string;
}

/**
 * Count-up number. Server-renders the final value so crawlers and no-JS
 * visitors see real numbers; after mount it rewinds to 0 and springs up when
 * scrolled into view. Reduced-motion users keep the static value.
 */
export function NumberTicker({
  value,
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 45, stiffness: 120 });
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    if (!inView) {
      ref.current.textContent = "0";
      return;
    }
    const timeout = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, reducedMotion, value, delay, motionValue]);

  useEffect(
    () =>
      spring.on("change", (latest: number) => {
        if (ref.current) {
          ref.current.textContent = format(Math.round(latest));
        }
      }),
    [spring],
  );

  return (
    <span ref={ref} className={cn("tabular-nums tracking-tight", className)}>
      {format(value)}
    </span>
  );
}
