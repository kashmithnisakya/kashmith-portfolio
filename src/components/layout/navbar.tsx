"use client";

import { useEffect, useState } from "react";
import { FileDown, MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "GitHub", id: "github" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Research", id: "research" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto mx-auto flex w-full max-w-3xl items-center justify-between rounded-full border border-border bg-background/70 py-1.5 pr-1.5 pl-4 shadow-lg shadow-black/20 backdrop-blur-xl"
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight"
          onClick={() => setActive(null)}
        >
          kashmith<span className="text-primary">.</span>com
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                active === item.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={profile.resumeUrl} download>
              Resume <FileDown />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <SheetTitle className="font-mono text-sm">
                kashmith<span className="text-primary">.</span>com
              </SheetTitle>
              <div className="mt-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base transition-colors",
                      active === item.id
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href={profile.resumeUrl} download>
                    Download Resume <FileDown />
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
