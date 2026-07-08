import { Facebook, Instagram, MessageCircle, Utensils } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#tentang", label: "Tentang" },
  { href: "#menu", label: "Menu" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

export function Footer() {
  return (
    <footer className="bg-stone-950 py-10 text-amber-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-orange-600 text-white">
              <Utensils size={20} />
            </span>
            <div>
              <p className="font-bold">Angkringan Mas Wawan</p>
              <p className="text-sm text-amber-100/70">
                Promosi dan katalog menu online.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-amber-100/75 transition hover:text-orange-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-amber-100/65">
            © {new Date().getFullYear()} Angkringan Mas Wawan. All rights
            reserved.
          </p>
          <div className="flex gap-2">
            {[Instagram, Facebook, MessageCircle].map((Icon, index) => (
              <a
                key={index}
                href="#kontak"
                aria-label="Media sosial Angkringan Mas Wawan"
                className="grid size-10 place-items-center rounded-full border border-white/10 text-amber-100 transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
