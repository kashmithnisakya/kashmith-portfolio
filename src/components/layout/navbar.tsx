"use client";

import { useEffect, useState } from "react";
import { FileDown, MenuIcon } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
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
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The hero has its own top bar, so the pill slides in once that scrolls away.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...NAV_ITEMS.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "home" ? null : entry.target.id);
          }
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
        className={cn(
          "mx-auto flex w-full max-w-4xl items-center justify-between rounded-full border border-border bg-background/80 py-1.5 pr-1.5 pl-4 shadow-lg shadow-black/10 backdrop-blur-xl transition-[opacity,translate] duration-300",
          scrolled || open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 focus-within:pointer-events-auto focus-within:translate-y-0 focus-within:opacity-100",
        )}
      >
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight"
          onClick={() => setActive(null)}
        >
          kashmith.com
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
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
          <ThemeToggle />
          <Button asChild size="sm" className="hidden lg:inline-flex">
            <a href={profile.resumeUrl} download>
              Resume <FileDown />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <SheetTitle className="font-mono text-sm">
                kashmith.com
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
