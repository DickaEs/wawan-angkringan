import { Clock, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export function Location() {
  return (
    <section id="lokasi" className="bg-cream-50 py-20 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lokasi"
          title="Mampir saat malam mulai ramai"
          description="Gunakan detail ini sebagai placeholder dan ganti dengan alamat, pin maps, serta nomor WhatsApp asli."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-amber-950/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-stone-900">
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-orange-700 dark:text-orange-300" />
                <div>
                  <h3 className="font-semibold text-stone-950 dark:text-white">
                    Alamat
                  </h3>
                  <p className="mt-1 text-stone-600 dark:text-stone-300">
                    Jalan Jawa, Blok 2 No. A7, Gamping, Ponowaren, Nogotirto, Sleman, Kabupaten Sleman, Yogyakarta
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="shrink-0 text-orange-700 dark:text-orange-300" />
                <div>
                  <h3 className="font-semibold text-stone-950 dark:text-white">
                    Jam Buka
                  </h3>
                  <p className="mt-1 text-stone-600 dark:text-stone-300">
                    Senin - Sabtu, 16.00 - 20.00 WIB
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="shrink-0 text-orange-700 dark:text-orange-300" />
                <div>
                  <h3 className="font-semibold text-stone-950 dark:text-white">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/6281234567890"
                    className="mt-1 inline-block text-stone-600 underline-offset-4 hover:text-orange-700 hover:underline dark:text-stone-300"
                  >
                    0812-3456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[360px] overflow-hidden rounded-2xl border border-amber-950/10 bg-white shadow-sm dark:border-white/10 dark:bg-stone-900">
            <div className="grid h-full min-h-[360px] place-items-center bg-[linear-gradient(135deg,#f8efe1,#ffffff_45%,#f29b46)] p-6 text-center dark:bg-[linear-gradient(135deg,#111827,#1c1917_50%,#7c3f16)]">
              <div>
                <MapPin className="mx-auto mb-4 text-orange-700 dark:text-orange-300" size={42} />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
                  Google Maps Placeholder
                </p>
                <p className="mx-auto mt-3 max-w-sm text-stone-700 dark:text-stone-200">
                  Area ini siap diganti dengan embed Google Maps asli dari
                  lokasi Angkringan Mas Wawan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
