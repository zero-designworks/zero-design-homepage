import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ZEROデザインの個人情報の取り扱いについて。",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "1. 個人情報の取得",
    b: "当サイトでは、お問い合わせの際に、お名前・会社団体名・メールアドレス・電話番号・ご相談内容などをお預かりする場合があります。",
  },
  {
    h: "2. 利用目的",
    b: "取得した個人情報は、お問い合わせへの回答、ご依頼内容の確認・ご連絡、サービス提供のためにのみ利用します。",
  },
  {
    h: "3. 第三者提供",
    b: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    h: "4. 安全管理",
    b: "個人情報の漏えい・滅失・毀損を防ぐため、適切な安全管理措置を講じます。",
  },
  {
    h: "5. 開示・訂正・削除",
    b: "ご本人からの求めに応じ、保有する個人情報の開示・訂正・削除に適切に対応します。",
  },
  {
    h: "6. お問い合わせ窓口",
    b: `個人情報の取り扱いに関するお問い合わせは、${siteConfig.email} までご連絡ください。`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title={<>プライバシーポリシー</>} />
      <section className="pb-20">
        <div className="container-narrow space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-serif text-lg text-sumi">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-sumi-soft">{s.b}</p>
            </div>
          ))}
          <p className="pt-4 text-sm text-sumi-soft/70">
            本ポリシーは、法令の改正やサービス内容の変更に応じて改定することがあります。
          </p>
        </div>
      </section>
    </>
  );
}
