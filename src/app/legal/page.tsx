import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "ZEROデザインの特定商取引法に基づく表記。",
  alternates: { canonical: "/legal" },
  robots: { index: false, follow: true },
};

const rows: [string, string][] = [
  ["事業者名", "ZEROデザイン"],
  ["代表者", siteConfig.representative],
  ["所在地", "滋賀県長浜市（詳細はお問い合わせ時にお伝えします）"],
  ["連絡先", siteConfig.email],
  ["役務の対価", "各サービスページに記載、または個別のお見積もりによります。"],
  ["対価の支払時期・方法", "ご契約時にお伝えします（銀行振込等）。"],
  ["役務の提供時期", "ご契約後、別途取り決めた期日に提供します。"],
  ["キャンセル・返品", "役務の性質上、着手後のキャンセルは対応できない場合があります。詳細は個別契約に定めます。"],
];

export default function LegalPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>特定商取引法に基づく表記</>} />
      <section className="pb-20">
        <div className="container-narrow overflow-hidden rounded-brand border border-sumi/10">
          <dl className="divide-y divide-sumi/10">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 bg-white px-6 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-sumi">{k}</dt>
                <dd className="text-sm leading-relaxed text-sumi-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
