import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { ArticleGrid } from "@/components/sections/writing";
import { Button } from "@/components/ui/button";
import { articles, mediumProfile } from "@/data/articles";

const description = "Notes on Jac, Jaseci, and building AI applications.";

export const metadata: Metadata = {
  title: "Writing",
  description,
};

export default function WritingPage() {
  return (
    <Section
      id="writing"
      titleAs="h1"
      title="Writing"
      description={description}
      className="pt-28 sm:pt-32"
    >
      <ArticleGrid items={articles} />

      <div className="mt-8 flex justify-center">
        <Button asChild variant="soft">
          <a href={mediumProfile} target="_blank" rel="noopener noreferrer">
            All articles on Medium <ArrowUpRight />
          </a>
        </Button>
      </div>
    </Section>
  );
}
