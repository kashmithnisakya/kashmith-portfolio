"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Staggered enter animation: blur + rise + fade once scrolled into view.
 * Must render the same motion element on server and client; branching to a
 * plain div for reduced motion caused a hydration mismatch that stranded the
 * whole page at opacity 0. Reduced-motion users get an instant reveal instead.
 */
export function BlurFade({ children, delay = 0, className }: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = useReducedMotion();

  const visible = inView || reducedMotion === true;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
      animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
