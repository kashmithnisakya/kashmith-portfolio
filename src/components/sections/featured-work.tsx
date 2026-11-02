import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/sections/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section
      id="featured"
      title="Featured work"
      description="Open-source infrastructure, live products, and what I'm building now."
      className="pt-4 sm:pt-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project, index) => (
          <BlurFade key={project.title} delay={index * 0.06}>
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="soft">
          <Link href="/projects">
            All projects <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
