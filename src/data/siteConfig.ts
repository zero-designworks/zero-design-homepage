export const siteConfig = {
  name: "ZEROデザイン",
  nameEn: "ZERO DESIGN",
  concept: "ゼロからの挑戦に、伝える力を。",
  subCopy:
    "クラウドファンディング、デザイン、映像、SNSの力で、あなたの挑戦を伝わる形にします。",
  description:
    "ZEROデザインは、クラウドファンディング支援・SNS動画制作・AI動画・Web/LP制作を通じて、ゼロからの挑戦を「伝わる形」へ整えるクリエイティブ事業です。滋賀県長浜市を拠点に全国対応。",
  // ▼▼ 本番の独自ドメイン（末尾スラッシュなし）▼▼
  url: "https://zerodesign-works.jp",
  ogImage: "/images/og.png",
  representative: "浅見 和貴",
  representativeEn: "Kazuki Asami",
  location: "滋賀県長浜市（全国対応）",
  addressRegion: "滋賀県",
  addressLocality: "長浜市",
  email: "asami.kazuki1102@gmail.com",
  telDisclaimer: "お電話でのご相談はお問い合わせ後に日程調整いたします。",
  foundingYear: "2024",
  // ▼ Google Search Console「HTMLタグ」認証のコードをここに貼るだけで有効化されます
  //   例: <meta name="google-site-verification" content="xxxxxxxx"> の xxxxxxxx の部分
  googleSiteVerification: "",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "ZEROデザインについて", href: "/about" },
  { label: "クラウドファンディングとは", href: "/crowdfunding" },
  { label: "活用法", href: "/crowdfunding-uses" },
  { label: "サービス", href: "/services" },
  { label: "実績", href: "/works" },
  { label: "プロフィール", href: "/profile" },
  { label: "料金", href: "/pricing" },
  { label: "お問い合わせ", href: "/contact" },
];
