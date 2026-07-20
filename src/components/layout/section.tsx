import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
