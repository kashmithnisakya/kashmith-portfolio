import Image from "next/image";
import { ArrowUpRight, FileDown } from "lucide-react";

import { CopyEmail } from "@/components/copy-email";
import { SocialLinks } from "@/components/layout/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="grain scroll-mt-24 rounded-panel bg-panel px-6 pt-6 pb-20 ring-1 ring-border ring-inset sm:px-10 sm:pt-8 sm:pb-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="mr-1 rounded-sm text-sm underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
          <Button asChild variant="soft" size="sm">
            <a href={profile.resumeUrl} download>
              Resume <FileDown />
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center text-center sm:mt-20">
        <BlurFade>
          <div className="relative">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={640}
              priority
              className="size-32 rounded-full object-cover ring-4 ring-card sm:size-36"
            />
            <p className="absolute -bottom-3 left-1/2 -translate-x-1/2 -rotate-6 rounded-full bg-card px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-md ring-1 ring-border sm:top-5 sm:bottom-auto sm:left-[78%] sm:translate-x-0">
              {profile.name}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="mt-10 flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            {profile.eyebrow}
          </p>
          <h1 className="text-gradient mx-auto mt-5 w-fit pb-1 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            <span className="sr-only">{profile.name}: </span>
            {profile.headline}
          </h1>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
            {profile.bio}
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                See my work <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
