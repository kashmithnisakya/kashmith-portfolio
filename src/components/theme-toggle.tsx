"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "theme";

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Light/dark switch. The .dark class on <html> is the source of truth and the
 * icons swap through CSS, so the server and client render the same markup.
 * Until a visitor chooses, the site keeps following their system setting.
 */
export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      if (!readStoredTheme()) {
        document.documentElement.classList.toggle("dark", event.matches);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Private windows can block storage; the switch still works for this page.
    }
  }

  return (
    <Button
      type="button"
      variant="soft"
      size="icon"
      className="size-8"
      aria-label="Switch between light and dark theme"
      onClick={toggle}
    >
      <Moon className="dark:hidden" />
      <Sun className="hidden dark:block" />
    </Button>
  );
}
