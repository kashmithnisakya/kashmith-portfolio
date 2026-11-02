import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "raised" | "flat";
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "flat",
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-24",
        tone === "raised" &&
          "grain rounded-panel bg-panel ring-1 ring-border ring-inset",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {(eyebrow || title) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-gradient mx-auto w-fit pb-1 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted-foreground">
                {description}
              </p>
            )}
            {eyebrow && (
              <div className="relative mx-auto mt-8 flex max-w-4xl items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 h-px bg-border"
                />
                <p className="relative rounded-full bg-card px-4 py-1.5 text-xs font-medium shadow-sm ring-1 ring-border">
                  {eyebrow}
                </p>
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
