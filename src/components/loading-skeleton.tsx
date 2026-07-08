"use client";

import { useEffect, useState } from "react";

export function LoadingSkeleton() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-amber-950/10 bg-white dark:border-white/10 dark:bg-stone-900"
        >
          <div className="aspect-[4/3] animate-pulse bg-amber-100 dark:bg-stone-800" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-3/4 animate-pulse rounded bg-stone-200 dark:bg-stone-700" />
            <div className="h-3 w-full animate-pulse rounded bg-stone-100 dark:bg-stone-800" />
            <div className="h-3 w-2/3 animate-pulse rounded bg-stone-100 dark:bg-stone-800" />
          </div>
        </div>
      ))}
    </div>
  );
}
