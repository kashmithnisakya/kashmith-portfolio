import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
