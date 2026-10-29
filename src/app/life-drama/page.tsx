import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { instagramEmbedUrl } from "@/data/videos";
import {
  lifeDramaOffer,
  storyVideos,
  meishiIntroVideo,
  meishiVideos,
  historyVideos,
  adVideos,
  reasons,
  storyboard,
  steps,
  stats,
  lifeDramaFaqs,
  type LpVideo,
} from "@/data/lifeDrama";

const OG_IMAGE = "/images/life-drama/og-life-drama.jpg";

export const metadata: Metadata = {
  title: "人生ドラマ制作（AIアニメ）｜あなたの人生を、大河ドラマに",
  description:
    "コーチ・コンサル・士業・講師など「想いはあるのに伝わらない」方の人生を、60分の聴き取りから大河ドラマ風のAIアニメに。撮影なし・顔出し不要。まずは3,000円の『人生ストーリー発見』セッションから。制作実績の動画を多数掲載。",
  alternates: { canonical: "/life-drama" },
  openGraph: {
    title: "人生ドラマ制作（AIアニメ）｜あなたの人生を、大河ドラマに",
    description:
      "撮影なし・顔出し不要。写真と資料を送るだけで、あなたの人生が大河ドラマ風アニメに。まずは60分3,000円の『人生ストーリー発見』セッションから。",
    url: "/life-drama",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "あなたの人生を、大河ドラマに。人生ドラマ制作（AIアニメ）" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function LifeDramaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "人生ドラマ制作（AIアニメ）",
    serviceType: "AIアニメーション制作",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "JP",
    url: `${siteConfig.url}/life-drama`,
    offers: {
      "@type": "Offer",
      name: lifeDramaOffer.name,
      price: lifeDramaOffer.priceNumber,
      priceCurrency: "JPY",
      url: `${siteConfig.url}${lifeDramaOffer.detailPath}`,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───── Hero：ダイジェスト動画 → 大見出し ───── */}
      <section className="relative overflow-hidden bg-sumi pt-24 pb-16 text-kinari md:pt-32 md:pb-24">
        <div className="container-brand">
          {/* ファーストビューは Reveal で遅延させず、即表示する */}
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-[1.55rem] font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              あなたの人生ストーリーで
              <br />
              出会った瞬間ファンにする
            </h1>
          </div>

          <div className="relative mx-auto mt-8 aspect-video w-[80%] overflow-hidden rounded-brand bg-black ring-1 ring-kin/30 md:mt-10">
            <HeroVideo
              src="/videos/life-drama/hero-digest.mp4"
              poster="/videos/life-drama/hero-digest-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto mt-10 max-w-4xl text-center md:mt-12">
            <p className="mx-auto max-w-2xl leading-loose text-kinari/85 md:text-lg">
              コーチ・コンサル・士業・講師など「想いはあるのに伝わらない」方の人生を、
              60分の聴き取りから大河ドラマ風のAIアニメに。
              <strong className="font-semibold text-white">撮影なし・顔出し不要。写真と資料を送るだけ。</strong>
            </p>
            <ul className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-semibold tracking-wide">
              {["撮影なし", "顔出し不要", "全国対応（オンライン可）", "合わなければセッションで終了OK"].map((t) => (
                <li key={t} className="rounded-full border border-kin/40 px-3.5 py-1.5 text-kin">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={lifeDramaOffer.detailPath} variant="primary" className="group">
                {lifeDramaOffer.length}・{lifeDramaOffer.price}のセッションを見る
                <Arrow />
              </Button>
              <a
                href="#stories"
                className="inline-flex items-center justify-center gap-2 rounded-brand border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                実績動画をもっと見る
              </a>
            </div>
            <p className="mt-4 text-xs text-kinari/60">
              ※ セッションの内容・流れ・申し込み方法をまとめたページが開きます。
            </p>
          </div>
        </div>
      </section>

      {/* ───── ① 心を動かすストーリー動画 ───── */}
      <section id="stories" className="scroll-mt-20 py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Stories" title="まず、ご覧ください。" align="center" className="mb-12">
              <p>
                説明より先に、物語を。実際に制作した「心を動かすストーリー動画」です。
                <br className="hidden md:block" />
                音声ありでご覧いただくと、伝わり方が変わります。
              </p>
            </SectionHeading>
          </Reveal>

          <Reveal>
            <VideoFigure v={storyVideos[0]} featured />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {storyVideos.slice(1).map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 80}>
                <VideoFigure v={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ② なぜ、人生ドラマなのか ───── */}
      <section className="bg-kinari/60 py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="Why Story"
              title={
                <>
                  名刺は翌日捨てられる。
                  <br />
                  物語は、忘れられない。
                </>
              }
              align="center"
              className="mb-12"
            >
              <p>あなたの人生ストーリーこそ、最大の武器です。</p>
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal key={r.no} delay={(i % 4) * 80}>
                <article className="flex h-full flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white">
                  <div className="relative aspect-[4/3] w-full bg-kinari/40">
                    <Image src={r.image} alt={r.alt} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw" className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-serif text-sm font-semibold tracking-widest text-aka">{r.no}</span>
                    <h3 className="mt-2 font-serif text-lg leading-snug text-sumi">{r.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-sumi-soft">{r.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ③ 第1話：60秒 名刺アニメ ───── */}
      <section className="py-20 md:py-28">
        <div className="container-brand">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <span className="eyebrow">Episode 1</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-4xl">
                まずは60秒の名刺アニメ
              </h2>
              <div className="mt-6 max-w-[300px]">
                <VideoFigure v={meishiIntroVideo} />
              </div>
              <p className="mt-6 leading-loose text-sumi-soft md:text-[1.0625rem]">
                交流会で名刺代わりにスマホを見せる「人生の予告編」です。
                「私の人生の第1話です」と60秒のアニメを見せた瞬間、その場の全員が前のめりになります。
              </p>
              <blockquote className="mt-6 border-l-2 border-kin pl-5 font-serif text-lg leading-relaxed text-sumi">
                名刺は翌日捨てられても、物語は忘れられません。
              </blockquote>
            </Reveal>
            <Reveal delay={120}>
              <figure className="relative aspect-[1200/670] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari/40">
                <Image
                  src="/images/life-drama/meishi-koryukai.webp"
                  alt="交流会でスマホの名刺アニメを見せ、周囲の人が前のめりになっているアニメ風イラスト"
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {meishiVideos.map((v, i) => (
              <Reveal key={v.id} delay={(i % 4) * 80}>
                <VideoFigure v={v} />
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-sumi-soft/70">
            ※ 自社ホスティングの動画です。再生ボタンを押すと音声ありで再生されます。
          </p>
        </div>
      </section>

      {/* ───── ④ 本編：24話の一代記 ───── */}
      <section className="bg-sumi py-20 text-kinari md:py-28">
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow text-kin">Main Story</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-white md:text-4xl">
              本編は、24話連載の一代記。
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-kinari/80">
              60分の聴き取りが、あらすじ（絵巻）になり、原点・挫折・転機・使命をたどる24話のショートドラマになります。
              セールス動画（VSL）も合わせて納品。SNS・講演・LP・出版に、一生使える資産です。
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <figure className="relative aspect-[1200/670] w-full overflow-hidden rounded-brand ring-1 ring-white/10">
                <Image
                  src="/images/life-drama/hearing-emaki.webp"
                  alt="向かい合って人生を聴き取り、その内容が絵巻のあらすじになっていくアニメ風イラスト"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sumi/90 to-transparent px-5 pb-4 pt-10 text-xs text-kinari/85">
                  60分の聴き取りが、一代記の絵巻（あらすじ）になる
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <p className="mb-4 text-xs font-semibold tracking-widest text-kin">制作例：パン屋の創業物語（全24話より）</p>
              <ol className="grid grid-cols-3 gap-3">
                {storyboard.map((s, i) => (
                  <li key={s.src} className="overflow-hidden rounded-brand bg-white/5 ring-1 ring-white/10">
                    <div className="relative aspect-[800/387] w-full">
                      <Image src={s.src} alt={s.alt} fill sizes="(max-width: 1024px) 30vw, 18vw" className="object-cover" />
                    </div>
                    <p className="px-2.5 py-2 text-[11px] text-kinari/80">
                      <span className="mr-1.5 font-serif text-kin">{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <Button href={lifeDramaOffer.detailPath} variant="primary" className="group">
              まずは{lifeDramaOffer.length}の聴き取りから（{lifeDramaOffer.price}）
              <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ───── ⑤ 歴史を大切にする者が描く ───── */}
      <section className="py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="History"
              title={
                <>
                  歴史を大切にする者が、
                  <br />
                  あなたの物語も大切に描く。
                </>
              }
              align="center"
              className="mb-12"
            >
              <p>
                大学は日本史専攻、歴史コミュニティを運営。史実と人物への敬意を持って脚本を書けるのが強みです。
                滋賀・小谷寺の歴史AIアニメは、檀家ゼロのお寺の1300年を物語にして全国へ届けました。
              </p>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <Reveal>
              <VideoFigure v={historyVideos[0]} featured />
            </Reveal>
            <Reveal delay={120}>
              <VideoFigure v={historyVideos[1]} />
            </Reveal>
          </div>

          <Reveal>
            <dl className="mt-12 grid gap-4 rounded-brand border border-sumi/10 bg-kinari/50 p-6 sm:grid-cols-2 lg:grid-cols-4 md:p-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dd className="font-serif text-3xl font-semibold text-aka md:text-4xl">{s.value}</dd>
                  <dt className="mt-1.5 text-xs leading-relaxed text-sumi-soft">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-center text-xs text-sumi-soft/70">
              滋賀・小谷寺 本堂再建クラウドファンディング（CAMPFIRE）の実績。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───── ⑥ 物語は、その先の発信にも ───── */}
      <section className="bg-kinari/60 py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Beyond" title="物語は、その先の発信にも使えます。" align="center" className="mb-12">
              <p>一度つくった物語とキャラクターは、SNS広告・名刺リール・漫画広告へ展開できます。</p>
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3 md:items-start">
            {adVideos.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 80}>
                <VideoFigure v={v} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/works" className="group inline-flex items-center gap-2 font-semibold text-aka">
              その他の制作事例を見る
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── ⑦ ご依頼の流れ ───── */}
      <section id="flow" className="scroll-mt-20 py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Flow" title="ご依頼の流れ" align="center" className="mb-12">
              <p>
                まずは、あなたの「第一話」から。いきなり本編ではありません。
                60分のセッションで「見せ場」を見つけるところから始めます。
              </p>
            </SectionHeading>
          </Reveal>
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => {
              const featured = i === 0;
              return (
                <Reveal key={s.step} delay={(i % 4) * 80} as="li">
                  <div
                    className={`flex h-full flex-col rounded-brand border p-7 ${
                      featured ? "border-aka bg-aka text-white shadow-md" : "border-sumi/10 bg-white"
                    }`}
                  >
                    <div className="flex items-baseline justify-between">
                      <span className={`font-serif text-3xl font-semibold ${featured ? "text-white/70" : "text-kin/60"}`}>
                        {s.step}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-widest ${
                          featured ? "bg-white/15 text-white" : "bg-aka/10 text-aka"
                        }`}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <h3 className={`mt-3 font-serif text-lg leading-snug ${featured ? "text-white" : "text-sumi"}`}>{s.title}</h3>
                    <p className={`mt-3 flex-1 text-sm leading-relaxed ${featured ? "text-white/85" : "text-sumi-soft"}`}>{s.body}</p>
                    <p className={`mt-5 font-serif text-xl font-semibold ${featured ? "text-white" : "text-aka"}`}>{s.price}</p>
                    <p className={`mt-0.5 text-xs ${featured ? "text-white/70" : "text-sumi-soft/70"}`}>{s.sub}</p>
                    {featured && (
                      <Link
                        href={lifeDramaOffer.detailPath}
                        className="mt-5 inline-flex items-center justify-center rounded-brand bg-white px-5 py-3 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
                      >
                        {lifeDramaOffer.detailLabel}
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </ol>
          <p className="mt-6 text-center text-sm text-sumi-soft">
            撮影なし・顔出し不要。写真と資料を送るだけ。合わないと思えば、セッションで終わって構いません。
          </p>
        </div>
      </section>

      {/* ───── ⑧ FAQ ───── */}
      <section className="bg-kinari/60 py-20 md:py-28">
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
        </div>
      </section>

      {/* ───── ⑨ 制作者 ───── */}
      <section className="py-20 md:py-28">
        <div className="container-brand">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal>
              <figure className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-brand border border-sumi/10 bg-kinari/40">
                <Image
                  src="/images/profile/asami.jpg"
                  alt={`${siteConfig.name} 代表 ${siteConfig.representative}`}
                  fill
                  sizes="(max-width: 1024px) 360px, 30vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Creator</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-3xl">
                口下手だった私を救ったのは、物語づくりでした。
              </h2>
              <p className="mt-5 leading-loose text-sumi-soft md:text-[1.0625rem]">
                名前の「和貴」は、聖徳太子の「和を以て貴しとなす」から。互いの声を聴き合い、ひとつの事を成す。
                その心で、一人ひとりの人生の物語を聴き、次の人へ手渡すことが私の志です。
                「伝えるのが苦手」という理由だけで埋もれる挑戦を、伝わる形にしています。
              </p>
              <p className="mt-5 text-sm text-sumi-soft">
                {siteConfig.name} 代表　{siteConfig.representative}（AI動画クリエイター／人生ドラマ制作）
                <br />
                滋賀県長浜市・全国対応　｜　CAMPFIRE公式パートナー　｜　大学は日本史専攻
              </p>
              <Link href="/profile" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aka">
                プロフィールを見る
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───── ⑩ 最終CTA ───── */}
      <section id="session" className="scroll-mt-20 bg-aka py-20 text-center text-white md:py-24">
        <div className="container-brand">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-white/70 md:tracking-[0.3em]">
              まずは、あなたの「第一話」を見つける作戦会議を。
            </span>
            <h2 className="mt-4 font-serif text-[1.4rem] leading-snug text-white sm:text-2xl md:text-4xl">{lifeDramaOffer.name}</h2>
            <p className="mt-3 font-serif text-lg text-white/90">
              個別開催｜{lifeDramaOffer.length}｜<span className="text-2xl font-semibold">{lifeDramaOffer.price}</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/85">{lifeDramaOffer.note}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={lifeDramaOffer.detailPath}
                className="inline-flex items-center justify-center rounded-brand bg-white px-8 py-4 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
              >
                {lifeDramaOffer.detailLabel}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-brand border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                先に質問したい方はこちら
              </Link>
            </div>
            <p className="mt-5 text-xs text-white/70">
              ご紹介は「一度、浅見さんに人生の話をしてみたら？」の一言で十分です。
            </p>
          </Reveal>
        </div>
      </section>

      {/* スマホ用 固定CTA（このLP専用。共通の MobileCta は非表示） */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sumi/10 bg-white/95 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3 px-4 py-2.5">
          <p className="min-w-0 flex-1 text-[11px] leading-tight text-sumi-soft">
            <span className="block font-semibold text-sumi">{lifeDramaOffer.name}</span>
            {lifeDramaOffer.length}・{lifeDramaOffer.price}
          </p>
          <Link
            href={lifeDramaOffer.detailPath}
            className="shrink-0 rounded-brand bg-aka px-5 py-3 text-sm font-semibold text-white"
          >
            詳細・申し込み
          </Link>
        </div>
      </div>
      <div className="h-16 lg:hidden" aria-hidden />
    </>
  );
}

/* ───────────────────────────────────────────── */

const ytAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

function VideoFigure({ v, featured = false }: { v: LpVideo; featured?: boolean }) {
  const igUrl = v.instagramUrl ? instagramEmbedUrl(v.instagramUrl) : null;
  const frame = v.vertical ? "mx-auto aspect-[9/16] w-full max-w-[300px]" : "aspect-video w-full";

  return (
    <figure className="overflow-hidden rounded-brand border border-sumi/10 bg-white">
      {igUrl ? (
        <div className="mx-auto w-full max-w-[360px] bg-white">
          <iframe src={igUrl} title={v.title} loading="lazy" scrolling="no" allowFullScreen className="h-[640px] w-full" />
        </div>
      ) : v.mp4 ? (
        <div className={`relative overflow-hidden bg-sumi ${frame}`}>
          <video
            src={v.mp4.src}
            poster={v.mp4.poster}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-contain"
          >
            お使いのブラウザは動画の再生に対応していません。
          </video>
        </div>
      ) : v.youtubeId ? (
        <div className={`relative overflow-hidden bg-sumi ${frame}`}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
            title={v.title}
            loading="lazy"
            allow={ytAllow}
            allowFullScreen
          />
        </div>
      ) : null}
      <figcaption className={`px-5 ${featured ? "py-5" : "py-4"}`}>
        <p className={`font-serif text-sumi ${featured ? "text-lg" : "text-base"}`}>{v.title}</p>
        {v.caption && <p className="mt-1 text-xs leading-relaxed text-sumi-soft">{v.caption}</p>}
      </figcaption>
    </figure>
  );
}
