"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";

export function ThemeToggle() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Ganti mode warna"
      title="Ganti mode warna"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center rounded-full border border-amber-900/15 bg-white/80 text-amber-950 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-700 dark:border-white/10 dark:bg-stone-950/70 dark:text-amber-100"
    >
      {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
