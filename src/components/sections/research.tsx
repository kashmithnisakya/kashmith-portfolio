import { BadgeCheck, Clock, ExternalLink, Trophy } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { GlowCard } from "@/components/ui/glow-card";
import { certifications } from "@/data/certifications";
import { publications } from "@/data/publications";

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research & credentials"
      title="Publications"
      description="Peer-reviewed work on self-adaptive deep learning for non-intrusive load monitoring."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {publications.map((publication, index) => (
          <BlurFade key={publication.title} delay={index * 0.08}>
            <GlowCard className="h-full">
              <div className="flex h-full flex-col p-6">
                <p className="font-mono text-xs tracking-[0.15em] text-primary uppercase">
                  {publication.venue} · {publication.year}
                </p>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-3 inline-flex items-start gap-2 font-semibold transition-colors hover:text-primary"
                >
                  {publication.title}
                  <ExternalLink className="mt-1 size-4 shrink-0 opacity-60 transition-opacity group-hover/link:opacity-100" />
                </a>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {publication.authors}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {publication.summary}
                </p>
                {publication.award && (
                  <Badge variant="accent" className="mt-4">
                    <Trophy /> {publication.award}
                  </Badge>
                )}
              </div>
            </GlowCard>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.15}>
        <h3 className="mt-14 mb-6 font-mono text-xs tracking-[0.2em] text-primary uppercase">
          Certifications
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card/60 p-4"
            >
              <div>
                <p className="text-sm font-medium">{certification.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {certification.issuer}
                </p>
              </div>
              {certification.status === "completed" ? (
                <Badge variant="accent" className="shrink-0">
                  <BadgeCheck /> Completed
                </Badge>
              ) : (
                <Badge variant="outline" className="shrink-0">
                  <Clock /> In progress
                </Badge>
              )}
            </div>
          ))}
        </div>
      </BlurFade>
    </Section>
  );
}
