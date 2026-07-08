import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angkringan-mas-wawan.local"),
  title: {
    default: "Angkringan Mas Wawan | Katalog Menu Angkringan",
    template: "%s | Angkringan Mas Wawan",
  },
  description:
    "Website promosi dan katalog menu Angkringan Mas Wawan dengan nasi kucing, sate, gorengan, minuman hangat, dan paket hemat.",
  keywords: [
    "Angkringan Mas Wawan",
    "angkringan",
    "nasi kucing",
    "sate angkringan",
    "wedang jahe",
  ],
  openGraph: {
    title: "Angkringan Mas Wawan",
    description:
      "Katalog menu online untuk angkringan hangat dengan harga terjangkau.",
    url: "https://angkringan-mas-wawan.local",
    siteName: "Angkringan Mas Wawan",
    images: [
      {
        url: "/images/hero-angkringan.png",
        width: 1200,
        height: 630,
        alt: "Ilustrasi suasana Angkringan Mas Wawan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff7ed" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable}`}
    >
      <body className="min-h-screen bg-cream-50 font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
