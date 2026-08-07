import type { Metadata } from "next";
import Link from "next/link";
import { Button, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "クラウドファンディングとは？",
  description:
    "クラウドファンディングの仕組み・メリット・主な方式（購入型／寄付型）から、成功に必要な準備、向いているプロジェクト、注意点までを分かりやすく解説します。",
  alternates: { canonical: "/crowdfunding" },
};

const merits = [
  { t: "資金を集められる", d: "挑戦に必要な資金を、共感してくれる人から直接集められます。" },
  { t: "需要を確認できる", d: "公開前・公開中に、商品や企画のニーズを実際の支援で検証できます。" },
  { t: "活動を広く知ってもらえる", d: "拡散を通じて、これまで届かなかった層にも認知が広がります。" },
  { t: "応援者・ファンを増やせる", d: "資金だけでなく、一緒に挑戦してくれる仲間との出会いが生まれます。" },
  { t: "挑戦のきっかけになる", d: "「まず一歩を踏み出す」ための後押しと締め切りになります。" },
  { t: "実績・信用につながる", d: "達成実績は、融資・補助金・今後の事業の信用材料になります。" },
];

const types = [
  {
    name: "購入型クラウドファンディング",
    body: "支援者は、支援と引き換えに商品・サービス・体験などの「リターン」を受け取ります。もっとも一般的で、商品開発・店舗・イベント・地域プロジェクトなど幅広い挑戦に向いています。",
  },
  {
    name: "寄付型クラウドファンディング",
    body: "支援者は原則リターンを求めず、活動そのものを応援します。文化財の保護、社会貢献、災害復興など、公益性の高いプロジェクトで選ばれます。",
  },
];

const prep = [
  "誰に届けたいか（ターゲット）を明確にする",
  "「何のためにやるのか」という目的・想いを言語化する",
  "共感を生むストーリーとページ構成を設計する",
  "魅力的で無理のないリターンを設計する",
  "公開前から発信を始め、応援してくれる初速の仲間を集める",
  "公開期間中に継続発信する体制（SNS・動画）を整える",
];

const cautions = [
  "公開すれば自動的に集まるわけではなく、発信し続ける努力が必要です。",
  "リターンの原価・送料・手数料を踏まえた資金計画が欠かせません。",
  "達成後のリターン履行（製造・発送）まで見据えた準備が重要です。",
];

export default function CrowdfundingPage() {
  return (
    <>
      <PageHero
        eyebrow="Crowdfunding"
        title={<>クラウドファンディングとは？</>}
        lead={
          <>
            インターネットを通じて、あなたのプロジェクトや活動に共感してくれる人から資金を集める仕組みです。
            けれどその本質は、単なる「資金調達」ではありません。想いを届け、
            <strong className="font-semibold text-sumi">一緒に挑戦を形にする仲間（ファン）</strong>
            を増やすための舞台です。
          </>
        }
        image="/images/generated/cf-hero.png"
      />

      {/* 資金調達以外のメリット */}
      <section className="py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Merits" title="資金調達だけではない、6つの価値" className="mb-14" />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {merits.map((m, i) => (
              <Reveal key={m.t} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col rounded-brand border border-sumi/10 bg-kinari/30 p-7">
                  <span className="font-serif text-3xl font-semibold text-kin/50">0{i + 1}</span>
                  <h3 className="mt-3 text-lg text-sumi">{m.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sumi-soft">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 主な方式 */}
      <section className="paper-texture py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Types" title="主な方式" className="mb-12" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {types.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full rounded-brand border border-sumi/10 bg-white p-8">
                  <h3 className="text-xl text-aka">{t.name}</h3>
                  <div className="mt-4 hairline" />
                  <p className="mt-4 leading-relaxed text-sumi-soft">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 成功に必要な準備 + SNSが重要な理由 */}
      <section className="py-20 md:py-28">
        <div className="container-brand grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Preparation" title="成功のために準備すること" className="mb-8" />
            <ol className="space-y-4">
              {prep.map((p, i) => (
                <li key={p} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aka text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed text-sumi-soft">{p}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-brand bg-kon p-8 text-kinari md:p-10">
              <span className="eyebrow text-kin">Why SNS matters</span>
              <h3 className="mt-4 font-serif text-2xl text-white">
                なぜ、SNS発信が
                <br />
                成否を分けるのか
              </h3>
              <p className="mt-5 leading-relaxed text-kinari/80">
                クラウドファンディングは「公開して終わり」ではありません。期間中にどれだけ想いを発信し続けられるかで、支援の伸びは大きく変わります。
              </p>
              <p className="mt-4 leading-relaxed text-kinari/80">
                とはいえ、運営やリターン準備をしながら毎日発信するのは大きな負担。ZEROデザインは、その一番苦しい時期の
                <strong className="font-semibold text-white">SNS動画制作</strong>
                を丸ごと支援します。
              </p>
              <Link
                href="/services#sns-video"
                className="group mt-7 inline-flex items-center gap-2 font-semibold text-kin"
              >
                SNS動画支援を見る
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 向いているプロジェクト・注意点 */}
      <section className="paper-texture py-20 md:py-28">
        <div className="container-brand grid gap-12 md:grid-cols-2">
          <Reveal>
            <h3 className="font-serif text-xl text-sumi md:text-2xl">向いているプロジェクト</h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["商品開発", "店舗・施設づくり", "イベント・上映会", "地域活性化", "歴史・文化の継承", "社会貢献・環境", "新規事業・起業"].map(
                (c) => (
                  <span key={c} className="rounded-full border border-sumi/15 bg-white px-4 py-2 text-sm text-sumi-soft">
                    {c}
                  </span>
                )
              )}
            </div>
            <Link href="/crowdfunding-uses" className="group mt-8 inline-flex items-center gap-2 font-semibold text-aka">
              活用法を詳しく見る
              <Arrow />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="font-serif text-xl text-sumi md:text-2xl">注意点</h3>
            <ul className="mt-6 space-y-4">
              {cautions.map((c) => (
                <li key={c} className="flex items-start gap-3 leading-relaxed text-sumi-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aka" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 関連ページ（要約＋リンク） */}
      <section className="py-20 md:py-24">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="More"
              title="クラウドファンディングをもっと知る"
              align="center"
              className="mb-12"
            >
              <p>「自分の場合はどう活かせる？」を、活用法や事例からご覧いただけます。</p>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "活用法",
                title: "クラウドファンディングの活用法",
                body: "商品開発、店舗づくり、イベント開催、地域活性化、神社仏閣の保存、社会貢献など。挑戦の種類ごとに、資金の使い道・リターン・発信のポイントをまとめています。",
                href: "/crowdfunding-uses",
                cta: "活用法を見る",
              },
              {
                label: "支援の進め方",
                title: "SNS・AI動画で発信まで支援",
                body: "公開して終わりではありません。企画・リターン設計から、SNS運用やAI動画による情報発信まで、ZEROデザインが一貫して伴走します。",
                href: "/services",
                cta: "支援内容を見る",
              },
              {
                label: "実績",
                title: "支援したプロジェクト",
                body: "目標500万円に対し約736万円を達成した小谷寺 本堂再建をはじめ、実際に伴走したプロジェクトと制作物をご紹介します。",
                href: "/works",
                cta: "実績を見る",
              },
            ].map((c, i) => (
              <Reveal key={c.href} delay={(i % 3) * 80}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-brand border border-sumi/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-aka/25 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold tracking-widest text-kin">{c.label}</span>
                  <h3 className="mt-2 font-serif text-lg leading-snug text-sumi">{c.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-sumi-soft">{c.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aka">
                    {c.cta}
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aka py-20 text-center text-white md:py-24">
        <div className="container-brand">
          <Reveal>
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              「うちの活動でもできる？」から、ご相談ください。
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/85">
              企画が固まっていなくても大丈夫。あなたのプロジェクトに合った活用法を、一緒に考えます。
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-brand bg-white px-8 py-4 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
              >
                無料相談を申し込む
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
