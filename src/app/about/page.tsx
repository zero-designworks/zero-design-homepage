import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { Arrow } from "@/components/Button";

export const metadata: Metadata = {
  title: "ZEROデザインについて",
  description:
    "ゼロからの挑戦を、伝わる形へ。ZEROデザインの理念・ビジョンと、屋号に込めた想いをご紹介します。",
  alternates: { canonical: "/about" },
};

const message = [
  "「ZEROデザイン」という屋号には、文字通り「ゼロから新しいことに挑戦する人」を全力で応援したいという想いが込められています。",
  "世の中には、本当に素晴らしい技術を持つ職人や、命を削って本物を作っている不器用な経営者、そして次世代に残すべき歴史や文化がたくさんあります。しかし、それらが「伝えるのが苦手だから」「宣伝する資金がないから」という理由だけで埋もれ、淘汰されていくのを、私は何度も目撃してきました。",
  "口が上手い人や、資金力のある人だけが勝つ世の中でいいのか。私は、デザインや映像、そして最先端のAI技術を使うことで、その不条理な壁を壊せると信じています。",
  "AIの進化により、大企業しか持てなかった「圧倒的な映像表現」が、私たちの手の届くものになりました。撮影の予算がなくても、人前で話すのが苦手でも、あなたの頭の中にある情熱と本物のこだわりさえあれば、人の心を揺さぶるストーリーとして世界に届けることができます。",
  "クラウドファンディングは、資金を集めるだけでなく、あなたの想いを世に問い、共感してくれる仲間（ファン）と出会うための最高の舞台です。",
  "まだ言葉になっていない想いも、手探りのアイデアも、すべてお聞かせください。あなたの「ゼロ」からの挑戦を、私たちがデザイン、映像、SNSの力で「伝わる形」にいたします。",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>挑戦の原点を、伝わる形へ。</>}
        lead="ゼロから新しいことに挑戦する人を、企画・デザイン・映像・SNS・クラウドファンディングの力で応援します。"
      />

      {/* 理念・ビジョン */}
      <section className="py-16 md:py-20">
        <div className="container-brand grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-brand border border-sumi/10 bg-kinari/40 p-8 md:p-10">
              <span className="eyebrow">Philosophy</span>
              <p className="mt-4 font-serif text-2xl leading-relaxed text-sumi md:text-3xl">
                ゼロからの挑戦を、
                <br />
                伝わる形へ。
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-brand border border-sumi/10 bg-kinari/40 p-8 md:p-10">
              <span className="eyebrow">Vision</span>
              <p className="mt-4 font-serif text-xl leading-relaxed text-sumi md:text-2xl">
                挑戦する人や、未来へ残したい活動が、継続して応援される社会をつくる。
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* メッセージ */}
      <section className="paper-texture py-20 md:py-28">
        <div className="container-brand grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Message</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-3xl">
                挑戦の原点を、
                <br />
                伝わる形へ。
              </h2>
              <div className="relative mt-8 aspect-square w-full max-w-sm overflow-hidden rounded-brand">
                <Image src="/images/generated/about.png" alt="" fill sizes="40vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 leading-loose text-sumi-soft">
              {message.map((p, i) => (
                <p key={i} className={i === 2 ? "font-serif text-lg text-sumi" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* サービス紹介（要約＋リンク） */}
      <section className="py-20 md:py-24">
        <div className="container-brand">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Services</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-3xl">
                ZEROデザインができること
              </h2>
              <p className="mt-5 leading-relaxed text-sumi-soft">
                企画から映像、デザイン、公開後の広報まで。必要な支援をワンストップでご提供します。必要な部分だけのご依頼も可能です。
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Crowdfunding",
                title: "クラウドファンディング支援",
                body: "企画・ストーリー設計からリターン設計、ページ制作、公開後の広報まで一貫して伴走します。CAMPFIRE公式パートナー。",
                href: "/crowdfunding",
                cta: "クラウドファンディングを見る",
              },
              {
                label: "Movie",
                title: "SNS・AI動画制作",
                body: "撮影なしでも制作できるAI動画・ショート動画。クラファン期間中の発信から、イベントPR、地域文化の発信までお任せください。",
                href: "/sns-ai-video",
                cta: "SNS・AI動画を見る",
              },
              {
                label: "All Services",
                title: "サービス一覧",
                body: "クラファン支援、SNS動画支援、AI動画制作、Web・LP・デザイン制作。4つのサービスの詳細をまとめています。",
                href: "/services",
                cta: "サービス一覧を見る",
              },
            ].map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 80}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col rounded-brand border border-sumi/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-aka/25 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold tracking-widest text-kin">{s.label}</span>
                  <h3 className="mt-2 font-serif text-lg leading-snug text-sumi">{s.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-sumi-soft">{s.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aka">
                    {s.cta}
                    <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
