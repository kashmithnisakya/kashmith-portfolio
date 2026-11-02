"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "copied" | "failed";

const LABELS: Record<Status, string> = {
  idle: "Copy",
  copied: "Copied",
  failed: "Copy failed",
};

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <Button
      type="button"
      variant="soft"
      size="sm"
      onClick={copy}
      aria-label={status === "idle" ? `Copy ${email}` : undefined}
      aria-live="polite"
    >
      {LABELS[status]}
    </Button>
  );
}
