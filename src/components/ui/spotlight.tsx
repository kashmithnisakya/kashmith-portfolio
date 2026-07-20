import { cn } from "@/lib/utils";

/**
 * Ambient radial glow used behind hero/section content.
 * Purely decorative; server-renderable, no JS.
 */
export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl",
        className,
      )}
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.765 0.153 163 / 0.5), oklch(0.765 0.153 163 / 0.12) 45%, transparent 70%)",
      }}
    />
  );
}
