import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { crowdfundingUses } from "@/data/crowdfundingUses";

export const metadata: Metadata = {
  title: "クラウドファンディングの活用法",
  description:
    "神社・寺院・文化財の保存、商品開発、店舗づくり、地域活性化、社会貢献など。挑戦の数だけ、クラウドファンディングの形があります。",
  alternates: { canonical: "/crowdfunding-uses" },
};

const rows: { key: keyof (typeof crowdfundingUses)[number]; label: string }[] = [
  { key: "projects", label: "向いているプロジェクト" },
  { key: "funds", label: "資金の用途" },
  { key: "returns", label: "考えられるリターン" },
  { key: "sns", label: "SNSで発信する内容" },
];

export default function CrowdfundingUsesPage() {
  return (
    <>
      <PageHero
        eyebrow="Use Cases"
        title={<>挑戦の数だけ、クラウドファンディングの形があります。</>}
        lead="あなたのプロジェクトに近いカテゴリーから、活かし方のヒントを見つけてください。"
      />

      <section className="py-12 md:py-16">
        <div className="container-brand grid gap-6 lg:grid-cols-2">
          {crowdfundingUses.map((u, i) => (
            <Reveal key={u.id} delay={(i % 2) * 100}>
              <article className="flex h-full flex-col rounded-brand border border-sumi/10 bg-white p-7 md:p-8">
                <span className="eyebrow">{`Case 0${i + 1}`}</span>
                <h2 className="mt-3 font-serif text-xl text-sumi md:text-2xl">{u.category}</h2>
                <p className="mt-2 text-sm text-aka">{u.summary}</p>
                <dl className="mt-6 space-y-4">
                  {rows.map((r) => (
                    <div key={r.key} className="grid gap-1 border-t border-sumi/10 pt-4 sm:grid-cols-[8rem_1fr] sm:gap-3">
                      <dt className="text-xs font-semibold tracking-wide text-kin">{r.label}</dt>
                      <dd className="text-sm leading-relaxed text-sumi-soft">{u[r.key]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="「うちの場合はどう活かせる？」をご相談ください。"
        body="カテゴリーに当てはまらない挑戦でも大丈夫。最適な活かし方を一緒に設計します。"
      />
    </>
  );
}
