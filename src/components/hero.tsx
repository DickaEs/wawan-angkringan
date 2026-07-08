import { Coffee, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-cream-50 pt-10 dark:bg-stone-950 md:pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(246,159,62,0.18),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.72),transparent_42%)] dark:bg-[radial-gradient(circle_at_18%_20%,rgba(246,159,62,0.16),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-300/70 bg-white/75 px-4 py-2 text-sm font-medium text-orange-800 shadow-sm dark:border-orange-300/20 dark:bg-white/10 dark:text-orange-100">
            <Coffee size={16} />
            Hangat, sederhana, selalu ngangeni
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-stone-950 dark:text-white sm:text-5xl lg:text-6xl">
            Selamat Datang di Angkringan Mas Wawan
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700 dark:text-stone-300">
            Tempat singgah santai untuk menikmati nasi kucing, sate-satean,
            gorengan hangat, dan wedang jahe favorit dengan harga ramah.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:-translate-y-1 hover:bg-orange-700"
            >
              <Coffee size={18} />
              Lihat Menu
            </Link>
            <Link
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-900/20 bg-white px-6 py-3 text-sm font-semibold text-amber-950 shadow-sm transition hover:-translate-y-1 hover:border-orange-400 hover:text-orange-700 dark:border-white/10 dark:bg-stone-900 dark:text-amber-50"
            >
              <MessageCircle size={18} />
              Hubungi Kami
            </Link>
          </div>
          <div className="mt-8 flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
            <MapPin className="mt-0.5 shrink-0 text-orange-700 dark:text-orange-300" size={18} />
            <span>Jl. Angkringan Hangat No. 7, dekat perempatan kampung</span>
          </div>
        </div>

        <div className="animate-float relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/70 bg-stone-900 shadow-2xl shadow-amber-950/20 dark:border-white/10 md:min-h-[520px]">
          <Image
            src="/images/hero-angkringan.png"
            alt="Ilustrasi Angkringan Mas Wawan pada malam hari"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
