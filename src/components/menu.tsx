import { menuItems } from "@/data/menu";
import { MenuCard } from "@/components/menu-card";
import { SectionHeading } from "@/components/section-heading";
import { LoadingSkeleton } from "@/components/loading-skeleton";

export function MenuSection() {
  return (
    <section id="menu" className="bg-cream-50 py-20 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu Favorit"
          title="Pilihan sederhana, lengkap untuk malam yang hangat"
          description="Data menu disimpan terpisah agar mudah ditambah, diedit, atau dikembangkan menjadi katalog dinamis."
        />
        <LoadingSkeleton />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
