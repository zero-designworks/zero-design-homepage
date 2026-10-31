import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { lifeDramaOffer, sessionDetail, lifeDramaFaqs } from "@/data/lifeDrama";

const OG_IMAGE = "/images/life-drama/og-life-drama.jpg";

export const metadata: Metadata = {
  title: "『人生ストーリー発見』セッション（60分・3,000円）",
  description:
    "事前アンケート、30分のヒアリング、30分のストーリー作成で、1分で伝わるPRアニメのストーリーをつくる個別セッション。名刺アニメの設計図になるあらすじをお渡しします。撮影なし・顔出し不要・オンライン可。お申し込みはFacebookのメッセージから。",
  alternates: { canonical: "/life-drama/session" },
  openGraph: {
    title: "『人生ストーリー発見』セッション（60分・3,000円）｜ZEROデザイン",
    description:
      "30分のヒアリングと30分のストーリー作成で、1分で伝わるPRアニメのストーリーが手元に残ります。合わなければセッションで終わって構いません。",
    url: "/life-drama/session",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "『人生ストーリー発見』セッション" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

function FacebookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={lifeDramaOffer.reservationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-brand bg-aka px-8 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-aka-deep ${className}`}
    >
      {lifeDramaOffer.applyLabel}
      <Arrow />
    </a>
  );
}

export default function LifeDramaSessionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lifeDramaOffer.name,
    serviceType: "個別セッション（1分PRアニメのヒアリングとストーリー作成）",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "JP",
    url: `${siteConfig.url}/life-drama/session`,
    offers: {
      "@type": "Offer",
      price: lifeDramaOffer.priceNumber,
      priceCurrency: "JPY",
      url: `${siteConfig.url}/life-drama/session`,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 paper-texture" />
        <div className="container-brand">
          <div>
            <Link href="/life-drama" className="inline-flex items-center gap-1.5 text-xs font-semibold text-sumi-soft hover:text-aka">
              <span aria-hidden>←</span> 人生ドラマ制作（AIアニメ）に戻る
            </Link>
          </div>
          <div className="mt-6">
            <span className="eyebrow">Session</span>
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-[1.45rem] font-semibold leading-tight text-sumi sm:text-3xl md:text-5xl">
            {lifeDramaOffer.name}
          </h1>
          <p className="mt-4 font-serif text-lg text-aka md:text-2xl">60分で、1分で伝わるPRアニメのストーリーをつくる。</p>
          <p className="mt-6 max-w-2xl leading-loose text-sumi-soft md:text-lg">{sessionDetail.lead}</p>

          <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
            {[
              { k: "形式", v: "1対1" },
              { k: "時間", v: lifeDramaOffer.length },
              { k: "料金", v: lifeDramaOffer.price },
            ].map((x) => (
              <div key={x.k} className="rounded-brand border border-sumi/10 bg-white px-3 py-4">
                <dt className="text-[11px] font-semibold tracking-widest text-sumi-soft/70">{x.k}</dt>
                <dd className="mt-1 font-serif text-lg font-semibold text-sumi md:text-xl">{x.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <FacebookButton />
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-brand border border-sumi/25 bg-white px-6 py-3.5 text-sm font-semibold text-sumi transition-colors hover:border-aka hover:text-aka"
            >
              申し込み方法を見る
            </a>
          </div>
          <p className="mt-4 text-xs text-sumi-soft/70">
            撮影なし・顔出し不要・オンライン可。合わないと思えば、セッションで終わって構いません。
          </p>
        </div>
      </section>

      {/* ───── こんな方に ───── */}
      <section className="py-16 md:py-24">
        <div className="container-brand grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <SectionHeading eyebrow="For" title="こんな方のためのセッションです">
              <p>一つでも当てはまれば、お話を聴かせてください。</p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3">
              {sessionDetail.forWhom.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-brand border border-sumi/10 bg-white px-5 py-4 text-sm leading-relaxed text-sumi-soft md:text-base">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ───── セッションの流れ（事前アンケート → ヒアリング → 1分ストーリー作成 → 動画作成に進むか） ───── */}
      <section className="bg-kinari/60 py-16 md:py-24">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Flow" title="セッションの流れ" align="center" className="mb-12">
              <p>
                当日の60分は、ヒアリング30分とストーリー作成30分。聴き取った内容を物語の形に整えるのが、私の仕事です。
              </p>
            </SectionHeading>
          </Reveal>
          <ol className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sessionDetail.flow.map((f, i) => (
              <Reveal key={f.no} delay={(i % 4) * 80} as="li">
                <div className="flex h-full flex-col rounded-brand border border-sumi/10 bg-white p-6">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-2xl font-semibold text-kin/60">{f.no}</span>
                    <span className="rounded-full bg-aka/10 px-3 py-1 text-xs font-semibold tracking-widest text-aka">
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl leading-snug text-sumi">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-sumi-soft">{f.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {f.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm leading-relaxed text-sumi-soft">
                        <Check />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── お渡しするもの ───── */}
      <section className="py-16 md:py-24">
        <div className="container-brand grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <figure className="relative aspect-[1200/670] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari/40">
              <Image
                src="/images/life-drama/hearing-emaki.webp"
                alt="向かい合って人生を聴き取り、その内容が1分のアニメのあらすじになっていくイラスト"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sumi/85 to-transparent px-5 pb-4 pt-10 text-xs text-kinari/90">
                30分の聴き取りと30分のストーリー作成で、1分アニメのあらすじになる
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading eyebrow="Deliverables" title="セッション後に、手元に残るもの" />
            <ul className="mt-6 space-y-3">
              {sessionDetail.deliverables.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-sumi-soft md:text-base">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-brand bg-aka/5 px-5 py-4 text-sm leading-relaxed text-sumi-soft">
              <span className="font-semibold text-aka">その後は自由です。</span>
              {sessionDetail.after}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── 準備・料金 ───── */}
      <section className="bg-kinari/60 py-16 md:py-24">
        <div className="container-brand grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-brand border border-sumi/10 bg-white p-7 md:p-8">
              <span className="eyebrow">Preparation</span>
              <h2 className="mt-3 font-serif text-xl text-sumi md:text-2xl">準備していただくもの</h2>
              <ul className="mt-5 space-y-3">
                {sessionDetail.preparation.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-sumi-soft">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-brand border border-sumi/10 bg-white p-7 md:p-8">
              <span className="eyebrow">Price</span>
              <h2 className="mt-3 font-serif text-xl text-sumi md:text-2xl">料金とお支払い</h2>
              <p className="mt-5 font-serif text-3xl font-semibold text-aka">
                {lifeDramaOffer.price}
                <span className="ml-2 text-base font-normal text-sumi-soft">／ {lifeDramaOffer.length}・個別</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-sumi-soft">{sessionDetail.payment}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── 申し込み方法 ───── */}
      <section id="apply" className="scroll-mt-20 bg-aka py-20 text-white md:py-24">
        <div className="container-brand max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-white/70 md:tracking-[0.3em]">お申し込み方法</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-white md:text-4xl">
              Facebookのメッセージで、一言送るだけ。
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/85">
              専用の予約フォームはありません。友達申請のうえ、メッセージをお送りください。日程とお支払い方法を折り返しご案内します。
            </p>
            <ol className="mx-auto mt-8 max-w-xl space-y-3 rounded-brand bg-white/10 px-6 py-6 text-left text-sm leading-relaxed text-white/90 md:text-base">
              {lifeDramaOffer.applySteps.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="shrink-0 font-serif text-lg font-semibold leading-none text-kin-light">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mx-auto mt-6 max-w-xl rounded-brand border border-white/30 bg-white/5 px-5 py-4 text-left">
              <p className="text-[11px] font-semibold tracking-widest text-white/60">送っていただくメッセージ（コピーして使えます）</p>
              <p className="mt-2 font-serif text-base text-white md:text-lg">{lifeDramaOffer.applyMessage}</p>
            </div>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={lifeDramaOffer.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-brand bg-white px-8 py-4 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
              >
                浅見和貴のFacebookを開く
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-brand border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Facebookを使っていない方はこちら
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-16 md:py-24">
        <div className="container-brand max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="よくある質問" align="center" className="mb-10" />
          </Reveal>
          <div className="space-y-3">
            {lifeDramaFaqs.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) * 60}>
                <details className="group rounded-brand border border-sumi/10 bg-white px-6 py-4 open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-start gap-3 font-serif text-base text-sumi [&::-webkit-details-marker]:hidden">
                    <span className="mt-0.5 shrink-0 font-semibold text-aka">Q.</span>
                    <span className="flex-1">{f.q}</span>
                    <span aria-hidden className="ml-2 mt-1 text-kin transition-transform group-open:rotate-45">＋</span>
                  </summary>
                  <p className="mt-3 pl-7 text-sm leading-relaxed text-sumi-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/life-drama" className="group inline-flex items-center gap-2 text-sm font-semibold text-aka">
              制作実績の動画を見る（人生ドラマ制作のページへ）
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* スマホ用 固定CTA（このページ専用。共通の MobileCta は非表示） */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sumi/10 bg-white/95 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3 px-4 py-2.5">
          <p className="min-w-0 flex-1 text-[11px] leading-tight text-sumi-soft">
            <span className="block font-semibold text-sumi">{lifeDramaOffer.name}</span>
            {lifeDramaOffer.length}・{lifeDramaOffer.price}
          </p>
          <a
            href={lifeDramaOffer.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-brand bg-aka px-5 py-3 text-sm font-semibold text-white"
          >
            {lifeDramaOffer.applyLabel}
          </a>
        </div>
      </div>
      <div className="h-16 lg:hidden" aria-hidden />
    </>
  );
}

function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden>
      <circle cx="9" cy="9" r="8.25" stroke="#9c2724" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="m5.5 9 2.3 2.3L12.5 6.5" stroke="#9c2724" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
