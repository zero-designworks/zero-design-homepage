export const siteConfig = {
  name: "ZEROデザイン",
  nameEn: "ZERO DESIGN",
  concept: "ゼロからの挑戦に、伝える力を。",
  subCopy:
    "クラウドファンディング、デザイン、映像、SNSの力で、あなたの挑戦を伝わる形にします。",
  description:
    "ZEROデザインは、クラウドファンディング支援・SNS動画制作・AI動画・Web/LP制作を通じて、ゼロからの挑戦を「伝わる形」へ整えるクリエイティブ事業です。滋賀県長浜市を拠点に全国対応。",
  url: "https://zerodesign.example.com",
  ogImage: "/images/generated/hero.png",
  representative: "浅見 和貴",
  location: "滋賀県長浜市（全国対応）",
  email: "asami.kazuki1102@gmail.com",
  telDisclaimer: "お電話でのご相談はお問い合わせ後に日程調整いたします。",
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
