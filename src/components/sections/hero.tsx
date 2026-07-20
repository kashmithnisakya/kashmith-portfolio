import Image from "next/image";
import { ArrowRight, FileDown } from "lucide-react";

import { socialIcons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_30%,black,transparent)]"
      />
      <Spotlight />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <BlurFade>
            <Badge variant="accent" className="mb-6 gap-2 px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.eyebrow}
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              <span className="text-gradient block">Kashmith</span>
              <span className="text-gradient-accent block">Samaranayaka</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              {profile.headline}
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.bio}
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button asChild size="lg">
                <a href={profile.resumeUrl} download>
                  Download Resume <FileDown />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  Get in touch <ArrowRight />
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-1 lg:justify-start">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.15} className="shrink-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 140deg, transparent, oklch(0.765 0.153 163 / 0.55), transparent 55%)",
              }}
            />
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={640}
              priority
              className="relative size-56 rounded-full object-cover ring-1 ring-border sm:size-72 lg:size-80"
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
