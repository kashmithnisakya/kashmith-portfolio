import { cn } from "@/lib/utils";
import type { ContributionWeek } from "@/lib/github";

const LEVEL_CLASSES = [
  "bg-foreground/[0.06]",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

export function ContributionGraph({
  weeks,
  total,
}: {
  weeks: ContributionWeek[] | null;
  total?: number;
}) {
  if (!weeks) return null;

  return (
    <div className="mt-4 rounded-2xl border border-border bg-card/60 p-5">
      {/* The grid is decorative for AT: the total is announced in text and
          in the stats tiles, and per-day counts remain as hover titles. */}
      <div aria-hidden="true" className="overflow-x-auto pb-1">
        <div className="flex w-full min-w-[640px] gap-[3px]">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-1 flex-col gap-[3px]">
              {week.days.map((day) => (
                <div
                  key={day.date}
                  className={cn(
                    "aspect-square w-full rounded-[2px]",
                    LEVEL_CLASSES[day.level],
                  )}
                  title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          Last 12 months of GitHub contributions
          {typeof total === "number" && (
            <span className="sr-only">
              : {Intl.NumberFormat("en-US").format(total)} total
            </span>
          )}
        </p>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="font-mono text-xs text-muted-foreground">Less</span>
          {LEVEL_CLASSES.map((levelClass) => (
            <span
              key={levelClass}
              className={cn("size-[10px] rounded-[2px]", levelClass)}
            />
          ))}
          <span className="font-mono text-xs text-muted-foreground">More</span>
        </div>
      </div>
    </div>
  );
}
