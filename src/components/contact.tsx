"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/section-heading";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: Errors = {};

    if (name.length < 3) nextErrors.name = "Nama minimal 3 karakter.";
    if (!/^[0-9+ -]{8,16}$/.test(phone)) {
      nextErrors.phone = "Nomor HP belum valid.";
    }
    if (message.length < 10) {
      nextErrors.message = "Pesan minimal 10 karakter.";
    }

    setErrors(nextErrors);
    setSent(Object.keys(nextErrors).length === 0);
  }

  return (
    <section id="kontak" className="bg-white py-20 dark:bg-stone-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kontak"
          title="Tanya menu atau pesan tempat"
          description="Form ini memakai validasi React di sisi client tanpa backend."
        />
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-amber-950/10 bg-cream-50 p-5 shadow-sm dark:border-white/10 dark:bg-stone-950 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                Nama
              </span>
              <input
                name="name"
                className="mt-2 w-full rounded-xl border border-amber-950/15 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-200 dark:border-white/10 dark:bg-stone-900 dark:text-white dark:focus:ring-orange-400/20"
                placeholder="Nama kamu"
              />
              {errors.name ? (
                <span className="mt-2 block text-sm text-red-600 dark:text-red-300">
                  {errors.name}
                </span>
              ) : null}
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-stone-800 dark:text-stone-100">
                Nomor HP
              </span>
              <input
                name="phone"
                inputMode="tel"
                className="mt-2 w-full rounded-xl border border-amber-950/15 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-200 dark:border-white/10 dark:bg-stone-900 dark:text-white dark:focus:ring-orange-400/20"
                placeholder="0812..."
              />
              {errors.phone ? (
                <span className="mt-2 block text-sm text-red-600 dark:text-red-300">
                  {errors.phone}
                </span>
              ) : null}
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-stone-800 dark:text-stone-100">
              Pesan
            </span>
            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-amber-950/15 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-200 dark:border-white/10 dark:bg-stone-900 dark:text-white dark:focus:ring-orange-400/20"
              placeholder="Tulis pesan kamu..."
            />
            {errors.message ? (
              <span className="mt-2 block text-sm text-red-600 dark:text-red-300">
                {errors.message}
              </span>
            ) : null}
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-900 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-900/20 transition hover:-translate-y-1 hover:bg-orange-700 sm:w-auto"
          >
            <Send size={18} />
            Kirim Pesan
          </button>

          {sent ? (
            <p className="mt-4 rounded-xl bg-emerald-100 px-4 py-3 text-sm font-medium text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200">
              Pesan valid. Integrasi backend atau WhatsApp bisa ditambahkan
              berikutnya.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
