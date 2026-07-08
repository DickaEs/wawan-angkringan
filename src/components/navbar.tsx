"use client";

import { Menu, X, Utensils } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-950/10 bg-cream-50/85 backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3 font-semibold text-stone-950 dark:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-amber-900 text-amber-50 shadow-sm">
            <Utensils size={19} />
          </span>
          <span className="leading-tight">
            Angkringan
            <span className="block text-sm text-orange-700 dark:text-orange-300">
              Mas Wawan
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-white hover:text-orange-700 dark:text-stone-200 dark:hover:bg-white/10 dark:hover:text-orange-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-amber-900/15 bg-white/80 text-stone-900 shadow-sm lg:hidden dark:border-white/10 dark:bg-stone-950/70 dark:text-white"
            aria-label="Buka menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl border border-amber-950/10 bg-white p-2 shadow-xl shadow-amber-950/10 dark:border-white/10 dark:bg-stone-900">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-stone-700 hover:bg-amber-50 dark:text-stone-100 dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
