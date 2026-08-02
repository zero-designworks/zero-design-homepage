import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { siteConfig } from "@/data/siteConfig";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}｜ゼロからの挑戦に、伝える力を。`,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "クラウドファンディング",
    "クラファン支援",
    "SNS動画",
    "AI動画",
    "ショート動画",
    "Web制作",
    "LP制作",
    "滋賀県長浜市",
    "ZEROデザイン",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.name,
    title: `${siteConfig.name}｜ゼロからの挑戦に、伝える力を。`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}｜ゼロからの挑戦に、伝える力を。`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#9c2724",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    founder: { "@type": "Person", name: siteConfig.representative },
    areaServed: "JP",
    address: {
      "@type": "PostalAddress",
      addressRegion: "滋賀県",
      addressLocality: "長浜市",
      addressCountry: "JP",
    },
  };

  return (
    <html lang="ja" className={`${notoSans.variable} ${notoSerif.variable}`}>
      <body className="min-h-screen antialiased pb-14 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
