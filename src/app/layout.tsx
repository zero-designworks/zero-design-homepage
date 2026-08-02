import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/socialLinks";

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

const titleDefault = `${siteConfig.name}｜ゼロからの挑戦に、伝える力を。`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: titleDefault,
    template: `%s｜${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.representative }],
  creator: siteConfig.representative,
  publisher: siteConfig.name,
  category: "business",
  keywords: [
    "クラウドファンディング",
    "クラウドファンディング支援",
    "クラファン",
    "クラファン ページ制作",
    "SNS動画",
    "AI動画",
    "ショート動画",
    "リール制作",
    "Web制作",
    "LP制作",
    "滋賀県長浜市",
    "ZEROデザイン",
  ],
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: titleDefault,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1536,
        height: 1024,
        alt: `${siteConfig.name}｜${siteConfig.concept}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  // Google Search Console の「HTMLタグ」認証。siteConfig に値を入れると自動で有効化。
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#9c2724",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const base = siteConfig.url;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.nameEn,
        url: base,
        logo: `${base}/icon.svg`,
        image: `${base}${siteConfig.ogImage}`,
        description: siteConfig.description,
        email: siteConfig.email,
        slogan: siteConfig.concept,
        foundingDate: siteConfig.foundingYear,
        founder: {
          "@type": "Person",
          name: siteConfig.representative,
          alternateName: siteConfig.representativeEn,
        },
        areaServed: "JP",
        address: {
          "@type": "PostalAddress",
          addressRegion: siteConfig.addressRegion,
          addressLocality: siteConfig.addressLocality,
          addressCountry: "JP",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.email,
          areaServed: "JP",
          availableLanguage: ["Japanese"],
        },
        sameAs: socialLinks.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "ja",
        publisher: { "@id": `${base}/#organization` },
      },
    ],
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
