import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const galleryItems = [
  "Gerobak malam",
  "Nasi kucing",
  "Sate bakar",
  "Wedang jahe",
  "Gorengan hangat",
  "Suasana ngobrol",
];

export function Gallery() {
  return (
    <section id="galeri" className="bg-white py-20 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galeri"
          title="Suasana Angkringan Mas Wawan"
          description="Placeholder foto dibuat responsif dan siap diganti dengan dokumentasi asli kapan saja."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <figure
              key={item}
              className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-amber-950/10 bg-[linear-gradient(135deg,#7c4a22,#f4c16d_48%,#f8efe1)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/10 dark:border-white/10 dark:bg-[linear-gradient(135deg,#111827,#5f381d_55%,#d87931)]"
            >
              <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_25%_25%,white_0_2px,transparent_3px)] [background-size:28px_28px]" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/82 p-4 backdrop-blur dark:bg-stone-950/72">
                <Camera className="text-orange-700 dark:text-orange-300" size={20} />
                <figcaption className="font-semibold text-stone-950 dark:text-white">
                  {item}
                </figcaption>
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-amber-950 dark:bg-stone-950/70 dark:text-amber-100">
                Foto {index + 1}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
