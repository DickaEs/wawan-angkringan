import Image from "next/image";
import { HeartHandshake, Sparkles, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const values = [
  {
    icon: Sparkles,
    title: "Rasa Rumahan",
    text: "Bumbu sederhana yang akrab di lidah dan dibuat untuk dinikmati tiap malam.",
  },
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    text: "Menu kecil yang bisa dipilih sesuai selera tanpa membuat kantong berat.",
  },
  {
    icon: HeartHandshake,
    title: "Suasana Nyaman",
    text: "Tempat singgah untuk ngobrol, istirahat, dan menikmati malam dengan santai.",
  },
];

export function About() {
  return (
    <section id="tentang" className="bg-white py-20 dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tentang Kami"
          title="Angkringan sederhana dengan rasa yang dekat"
          description="Angkringan Mas Wawan lahir dari keinginan menyajikan makanan malam yang hangat, jujur, dan mudah dinikmati siapa saja."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-amber-950/10 bg-[linear-gradient(135deg,#f6ead4,#ffffff_42%,#e98b3a)] shadow-xl shadow-amber-950/10 dark:border-white/10 dark:bg-[linear-gradient(135deg,#2b2118,#111827_55%,#8a4b20)] sm:min-h-[460px] lg:min-h-[520px]">
            <Image
              src="/images/pemilik.jpg"
              alt="Foto Mas Wawan, pemilik Angkringan Mas Wawan"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[50%_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-stone-950/5 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/55 bg-white/72 p-4 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-stone-950/60 sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                Pemilik Angkringan
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-stone-950 dark:text-white">
                Mas Wawan
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                Selalu menghidangkan menu dengan senyum dan obrolan ringan khas
                angkringan.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {values.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-amber-950/10 bg-cream-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/10 dark:border-white/10 dark:bg-stone-950"
              >
                <item.icon className="mb-5 text-orange-700 transition group-hover:scale-110 dark:text-orange-300" />
                <h3 className="text-lg font-semibold text-stone-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
