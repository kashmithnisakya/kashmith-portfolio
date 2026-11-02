import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { focusItems } from "@/data/now";

export function FocusGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {focusItems.map((item, index) => (
        <BlurFade key={item.title} delay={index * 0.06}>
          <Card className="h-full">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex h-full flex-col rounded-[1.75rem] p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <h3 className="flex items-start justify-between gap-3 font-semibold">
                {item.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 opacity-60 transition-opacity group-hover/link:opacity-100"
                />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </a>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}

export function CurrentFocus() {
  return (
    <Section id="focus" title="Current focus">
      <FocusGrid />

      <div className="mt-8 flex justify-center">
        <Button asChild variant="soft">
          <Link href="/now">
            What I&apos;m doing now <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
