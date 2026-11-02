import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Server,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/layout/section";
import { BlurFade } from "@/components/ui/blur-fade";
import { skillGroups } from "@/data/skills";

const GROUP_ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  "AI & GenAI": BrainCircuit,
  "ML Frameworks": Layers,
  "MLOps & Infra": Server,
  "Backend & Data": Database,
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & technologies">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = GROUP_ICONS[group.category] ?? Code2;
          return (
            <BlurFade key={group.category} delay={index * 0.06}>
              <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
              <h3 className="mt-4 text-sm font-semibold">{group.category}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </BlurFade>
          );
        })}
      </div>
    </Section>
  );
}
