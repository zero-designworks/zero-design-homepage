import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "料金・支援プラン",
  description:
    "クラウドファンディング相談・伴走支援、クラファンSNS動画支援、AIショート動画、Web・LP制作の料金の目安と、よくある質問。",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "クラファン相談",
    items: ["初回相談", "企画診断", "ページ改善相談"],
    note: "まず話してみたい方へ。",
  },
  {
    name: "クラファン伴走支援",
    items: ["着手金＋成功報酬", "最低報酬あり", "企画〜公開後まで対応"],
    note: "成功まで一緒に走り抜けます。",
    featured: true,
  },
  {
    name: "クラファンSNS動画支援",
    items: ["動画4本／8本／12本", "期間中の複数本制作", "継続広報プラン"],
    note: "一番苦しい時期の右腕に。",
  },
  {
    name: "AIショート動画",
    items: ["単発制作", "月4本／8本／12本以上", "投稿文・タイトル込み"],
    note: "撮影なしで量産できます。",
  },
  {
    name: "Web・LP制作",
    items: ["簡易LP", "クラファン特設ページ", "サービスサイト"],
    note: "世界観を伝えるページを。",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>料金・支援プラン</>}
        lead="以下は目安です。プロジェクトの規模や内容に応じて、最適なプランを個別にご提案します。まずはお気軽にご相談ください。"
      />

      <section className="py-12 md:py-16">
        <div className="container-brand grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <div
                className={`flex h-full flex-col rounded-brand border p-8 ${
                  p.featured
                    ? "border-aka bg-aka text-white shadow-md"
                    : "border-sumi/10 bg-white"
                }`}
              >
                <h2 className={`font-serif text-xl ${p.featured ? "text-white" : "text-sumi"}`}>
                  {p.name}
                </h2>
                <p className={`mt-1 text-sm ${p.featured ? "text-white/85" : "text-aka"}`}>{p.note}</p>
                <div className={`my-5 h-px ${p.featured ? "bg-white/25" : "bg-sumi/10"}`} />
                <ul className="space-y-2.5">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className={`flex items-start gap-2.5 text-sm ${
                        p.featured ? "text-white/90" : "text-sumi-soft"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          p.featured ? "bg-kin" : "bg-aka"
                        }`}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className={`mt-6 text-xs ${p.featured ? "text-white/70" : "text-sumi-soft/70"}`}>
                  料金は個別見積もり
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="paper-texture scroll-mt-24 py-20 md:py-28">
        {/* 構造化データ：ページ上に表示しているFAQと一致 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-serif text-2xl text-sumi md:text-3xl">よくある質問</h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-sumi/10 overflow-hidden rounded-brand border border-sumi/10 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-sumi">
                  <span>{f.q}</span>
                  <span className="mt-1 shrink-0 text-aka transition-transform duration-300 group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-sumi-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="ご予算に合わせて、最適なプランをご提案します。" />
    </>
  );
}
