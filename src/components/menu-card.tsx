import { Utensils } from "lucide-react";
import type { MenuItem } from "@/types/menu";
import { cn } from "@/lib/utils";

const toneClass: Record<MenuItem["imageTone"], string> = {
  amber: "from-amber-200 via-orange-100 to-white dark:from-amber-950 dark:via-stone-900 dark:to-stone-800",
  cream: "from-cream-100 via-white to-amber-100 dark:from-stone-800 dark:via-stone-900 dark:to-amber-950",
  wood: "from-amber-950 via-amber-800 to-orange-500 dark:from-stone-950 dark:via-amber-950 dark:to-orange-900",
  orange: "from-orange-200 via-amber-100 to-white dark:from-orange-950 dark:via-stone-900 dark:to-stone-800",
  leaf: "from-emerald-100 via-cream-50 to-orange-100 dark:from-emerald-950 dark:via-stone-900 dark:to-amber-950",
};

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-950/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-950/12 dark:border-white/10 dark:bg-stone-900">
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br",
          toneClass[item.imageTone],
        )}
      >
        <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative grid size-20 place-items-center rounded-full bg-white/80 text-orange-700 shadow-lg backdrop-blur dark:bg-stone-950/75 dark:text-orange-300">
          <Utensils size={32} />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug text-stone-950 dark:text-white">
            {item.name}
          </h3>
          <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800 dark:bg-orange-400/15 dark:text-orange-200">
            {item.category}
          </span>
        </div>
        <p className="mt-3 min-h-12 text-sm leading-6 text-stone-600 dark:text-stone-300">
          {item.description}
        </p>
        <p className="mt-4 text-xl font-bold text-amber-900 dark:text-amber-200">
          {item.price}
        </p>
      </div>
    </article>
  );
}
