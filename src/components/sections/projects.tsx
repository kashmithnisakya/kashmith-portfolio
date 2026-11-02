import { ExternalLink } from "lucide-react";

import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
            {project.category}
          </p>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-4" />
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} website`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.highlight && (
          <Badge variant="accent" className="mt-4 whitespace-normal">
            {project.highlight}
          </Badge>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
