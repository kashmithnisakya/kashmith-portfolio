import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { articles } from "@/data/articles";
import type { Article } from "@/types";

export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((article, index) => (
        <BlurFade key={article.href} delay={index * 0.06}>
          <Card className="h-full">
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex h-full flex-col rounded-[1.75rem] p-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <p className="font-mono text-xs text-muted-foreground">
                {article.date} · Medium
              </p>
              <h3 className="mt-3 flex items-start justify-between gap-3 font-semibold">
                {article.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 opacity-60 transition-opacity group-hover/link:opacity-100"
                />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {article.summary}
              </p>
            </a>
          </Card>
        </BlurFade>
      ))}
    </div>
  );
}

export function LatestWriting() {
  return (
    <Section id="latest-writing" tone="raised" title="Latest writing">
      <ArticleGrid items={articles.slice(0, 2)} />

      <div className="mt-8 flex justify-center">
        <Button asChild variant="soft">
          <Link href="/writing">
            All writing <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
