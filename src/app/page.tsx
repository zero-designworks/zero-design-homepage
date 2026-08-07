import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroBelowBand } from "@/components/HeroBelowBand";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";
import { homeCases } from "@/data/homeCases";
import { posts } from "@/data/posts";
import { instagramEmbedUrl } from "@/data/videos";

type StrengthMedia =
  | { type: "youtube"; id: string; vertical?: boolean; caption?: string }
  | { type: "instagram"; url: string; caption?: string };

// トップページのタイトル。全ページ共通の「○○｜ZEROデザイン」形式に統一。
// absolute指定でテンプレートによる二重付与を防いでいます。
const homeTitle = "クラウドファンディング・SNS・AI動画支援｜ZEROデザイン";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  openGraph: { title: homeTitle },
  twitter: { title: homeTitle },
};

/* ===== コンテンツ定義（追加・編集しやすいようデータ化） ===== */

const strengths: {
  icon: React.ReactNode;
  title: string;
  body: string;
  list?: string[];
  body2?: string;
  media?: StrengthMedia;
}[] = [
  {
    icon: <IconTime />,
    title: "SNS発信は、ZEROデザインにお任せ。",
    body: "クラウドファンディング期間中は、SNS投稿に追われるのではなく、本当に大切な活動へ集中してください。",
    list: ["支援者へのお礼", "イベント参加", "地域への声掛け", "メディア対応", "商品づくり"],
    body2:
      "AIを活用した効率的な制作フローで、継続的にSNS動画を制作・発信します。さらに、制作した約20本の動画はクラウドファンディング終了後も会社の“資産”として残り、InstagramやYouTubeで発信を続けられます。",
    media: {
      type: "instagram",
      url: "https://www.instagram.com/p/DbnMTAfPvte/",
      caption: "AIを活用して制作した、実際のリール動画（クラージュデザイン様）",
    },
  },
  {
    icon: <IconFilm />,
    title: "実写 × AIアニメで、想いまで伝える。",
    body: "商品や人物のリアルな魅力は実写で。プロジェクト誕生の背景、創業者の想い、地域の歴史、未来へのビジョンはAIアニメで表現します。",
    body2:
      "「実写のみ」「AIアニメのみ」ではなく、実写＋AIアニメの組み合わせも制作可能。情報を伝えるだけでなく、“支援したくなる共感”を映像で届けます。",
    media: {
      type: "youtube",
      id: "2CNthQ-K52c",
      caption: "AIアニメで想いをストーリーに（クラージュデザイン様）",
    },
  },
  {
    icon: <IconRoute />,
    title: "クラウドファンディング支援",
    body: "企画から公開後の情報発信まで、一貫して伴走します。必要な部分だけのご依頼も可能です。",
    list: ["企画整理", "リターン設計", "SNS運用", "AI動画制作", "公開後サポート"],
    media: {
      type: "youtube",
      id: "HMgFuCOXQNA",
      caption: "住職インタビュー動画（小谷寺 本堂再建プロジェクト）",
    },
  },
  {
    icon: <IconBadge />,
    title: "CAMPFIREパートナー",
    body: "CAMPFIRE公式パートナーとして、初めてのクラウドファンディングでも安心してご相談いただけます。「何から始めればいいか分からない」という段階から伴走します。",
  },
];

const worries = [
  "クラウドファンディングをやるべきか迷っている",
  "支援者が集まるか不安",
  "SNS投稿まで手が回らない",
  "動画制作が難しい",
  "何から始めればいいか分からない",
];

const popularColumns = [
  { badge: "人気記事", slug: "shrine-temple-crowdfunding-cases" },
  { badge: "初心者向け", slug: "how-to-crowdfunding-beginner" },
  { badge: "SNS集客", slug: "crowdfunding-sns-ai-posts" },
  { badge: "神社・文化財", slug: "temple-shrine-crowdfunding-returns" },
  { badge: "最新記事", slug: "crowdfunding-youtube-long-video" },
]
  .map((c) => ({ ...c, post: posts.find((p) => p.slug === c.slug) }))
  .filter((c) => c.post);

const consultLead = [
  "クラウドファンディングをやるべきか迷っている",
  "企画内容を整理したい",
  "支援者を集める方法を相談したい",
];

const consultNotes = [
  "オンライン対応",
  "企画書作成無料",
  "営業目的の相談も歓迎",
  "契約は必須ではありません",
];

export default function Home() {
  const base = siteConfig.url;
  // トップページの構造化データ（Organization / WebSite は layout.tsx で定義済み）
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: "クラウドファンディング成功を、SNS・AI動画で加速。",
        description: siteConfig.description,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#organization` },
        primaryImageOfPage: `${base}/images/generated/hero.webp`,
        inLanguage: "ja",
      },
      {
        "@type": "Service",
        "@id": `${base}/#service`,
        name: "クラウドファンディング支援・SNS/AI動画制作",
        serviceType: "クラウドファンディング支援",
        provider: { "@id": `${base}/#organization` },
        areaServed: { "@type": "Country", name: "日本" },
        description:
          "企画整理・リターン設計・SNS運用・AI動画制作・公開後サポートまで、クラウドファンディングを一貫して支援します。CAMPFIRE公式パートナー。",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "支援メニュー",
          itemListElement: [
            "クラウドファンディング企画・伴走",
            "リターン設計",
            "SNS運用支援",
            "AI動画・ショート動画制作",
            "公開後の広報サポート",
          ].map((n) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: n },
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ============ ① ファーストビュー（ビジュアル重視・情報は最小限） ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-kinari/35 to-kinari/70">
        <div className="container-brand">
          <div className="grid min-h-[84svh] items-center gap-8 pt-24 pb-14 md:gap-12 md:pt-28 md:pb-20 lg:min-h-[88vh] lg:grid-cols-2 lg:gap-16 lg:pb-24">
            {/* 世界観ビジュアル（スマホは上、PCは右） */}
            <div className="order-1 mx-auto w-full max-w-[30rem] lg:order-2 lg:max-w-none">
              <Image
                src="/images/generated/hero-fv.webp"
                alt="ひとりの挑戦から、やわらかな光が地域のお店・イベント・職人・神社へと広がり、応援する人々へつながっていくイメージイラスト"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="h-auto w-full"
              />
            </div>

            {/* コピー＋CTA（1つに集約） */}
            <div className="order-2 lg:order-1">
              <span className="eyebrow">ZERO DESIGN</span>

              <h1 className="mt-5 font-serif text-[1.75rem] font-semibold leading-[1.35] text-sumi sm:text-4xl lg:text-[3.25rem] lg:leading-[1.3]">
                挑戦は、伝わってこそ
                <br />
                <span className="text-aka">応援される。</span>
              </h1>

              <p className="mt-5 text-sm tracking-wide text-sumi-soft sm:text-base">
                クラウドファンディング × SNS・AI動画
              </p>
              <p className="mt-2 text-sm text-sumi-soft/80 sm:text-base">
                ゼロからの挑戦を、伝わる形へ。
              </p>

              <div className="mt-8 lg:mt-10">
                <Button
                  href={siteConfig.reservationUrl}
                  external
                  variant="primary"
                  className="group w-full sm:w-auto sm:px-10"
                >
                  無料相談はこちら
                  <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* スクロール導線 */}
        <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] tracking-[0.3em] text-sumi-soft/50 lg:flex">
          <span>SCROLL</span>
          <span className="h-10 w-px bg-gradient-to-b from-sumi-soft/40 to-transparent" />
        </div>
      </section>

      {/* ============ ファーストビュー直下：最新のお知らせ・実績への導線 ============ */}
      <HeroBelowBand />

      {/* ============ 「ZEROデザイン」に込めた想い ============ */}
      <section className="paper-texture py-24 md:py-32">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow justify-center">About</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-4xl">
              「ZEROデザイン」という
              <br className="hidden sm:block" />
              名前に込めた想い。
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <figure className="relative mx-auto mt-10 aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-brand">
              <Image
                src="/images/generated/home-about.webp"
                alt="ゼロからの想いが「伝わる形」へと羽ばたくイメージイラスト"
                fill
                sizes="(max-width: 768px) 90vw, 42rem"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-2xl leading-relaxed text-sumi-soft md:text-[1.0625rem]">
              <p>
                「ZEROデザイン」という屋号には、
                <strong className="font-semibold text-sumi">
                  ゼロから新しいことに挑戦する人を全力で応援したい
                </strong>
                という想いを込めています。
              </p>
              <p className="mt-4">
                まだ形になっていないぼんやりとしたアイデアや、言葉にできない熱い想い。私たちは、その「挑戦の原点」を丁寧にお聞きし、クラウドファンディング、映像、デザイン、SNSの力で、世の中にしっかりと「伝わる形」へと整えます。
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="group inline-flex items-center gap-2 font-semibold text-aka">
                ZEROデザインについて詳しく見る
                <Arrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ② ZEROデザインだけの強み（最重要） ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="Our Strength"
              title="ZEROデザインだけの、強み。"
              align="center"
              className="mb-14"
            >
              <p>他社との違いは、「発信」まで丸ごと任せられること。あなたの時間を、本当に大切な活動へ。</p>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 100}>
                <article className="flex h-full flex-col rounded-brand border border-sumi/10 bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-aka/25 hover:shadow-lg md:p-9">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-aka/10 text-aka">
                      {s.icon}
                    </span>
                    <span className="font-serif text-sm font-semibold text-kin">
                      強み 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-sumi md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-sumi-soft">{s.body}</p>
                  {s.list && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.list.map((it) => (
                        <li
                          key={it}
                          className="inline-flex items-center gap-1.5 rounded-full bg-kinari px-3 py-1.5 text-xs font-medium text-sumi-soft"
                        >
                          <Check />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.body2 && (
                    <p className="mt-5 leading-relaxed text-sumi-soft">{s.body2}</p>
                  )}
                  {s.media && <StrengthMediaView media={s.media} />}
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="group inline-flex items-center gap-2 font-semibold text-aka">
              サービスの詳細を見る
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ③ 支援事例 ============ */}
      <section id="cases" className="scroll-mt-24 bg-kinari/50 py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Works" title="支援事例" align="center" className="mb-14">
              <p>ひとつひとつのプロジェクトに、企画から情報発信まで丁寧に伴走しています。</p>
            </SectionHeading>
          </Reveal>

          <div className="space-y-8">
            {homeCases.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 100}>
                <article className="overflow-hidden rounded-brand border border-sumi/10 bg-white md:grid md:grid-cols-[minmax(0,42%)_1fr]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-kinari md:aspect-auto md:h-full md:min-h-[320px]">
                    {c.projectUrl ? (
                      // 画像クリックでクラウドファンディングのプロジェクトページへ
                      <a
                        href={c.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${c.title}のクラウドファンディングページを見る（外部サイト）`}
                        className="group/img absolute inset-0 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-aka"
                      >
                        <Image
                          src={c.image}
                          alt={`${c.title}のメイン画像`}
                          fill
                          sizes="(max-width: 768px) 92vw, 42vw"
                          className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <span className="absolute inset-0 bg-sumi/0 transition-colors duration-300 group-hover/img:bg-sumi/25" />
                        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-aka shadow-sm transition-opacity duration-300 md:opacity-0 md:group-hover/img:opacity-100">
                          プロジェクトページを見る
                          <span aria-hidden>↗</span>
                        </span>
                      </a>
                    ) : (
                      <Image
                        src={c.image}
                        alt={`${c.title}のメイン画像`}
                        fill
                        sizes="(max-width: 768px) 92vw, 42vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col p-7 md:p-9">
                    <p className="text-sm font-medium text-aka">{c.subtitle}</p>
                    <h3 className="mt-2 font-serif text-xl text-sumi md:text-2xl">{c.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-sumi-soft">{c.overview}</p>
                    {c.result && (
                      <p className="mt-4 w-fit rounded-brand bg-aka/8 px-4 py-2 text-sm font-semibold text-aka">
                        {c.result}
                      </p>
                    )}

                    <div className="mt-6">
                      <p className="text-xs font-semibold tracking-wide text-sumi">支援内容</p>
                      <ul className="mt-2.5 flex flex-wrap gap-2">
                        {c.supports.map((s) => (
                          <li
                            key={s}
                            className="rounded-full border border-sumi/12 bg-white px-3 py-1 text-xs text-sumi-soft"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-semibold tracking-wide text-sumi">制作物</p>
                      <ul className="mt-2.5 flex flex-wrap gap-2">
                        {c.deliverables.map((d) => (
                          <li
                            key={d}
                            className="inline-flex items-center gap-1.5 rounded-full bg-kinari px-3 py-1 text-xs text-sumi-soft"
                          >
                            <IconPlay />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7">
                      <Link
                        href={c.href}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-aka"
                      >
                        詳細を見る
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/works" variant="secondary" className="group">
              制作・支援実績をもっと見る
              <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ============ ④ お客様のお悩み ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Worries" title="こんなお悩み、ありませんか？" align="center" className="mb-14" />
          </Reveal>
          <Reveal delay={80}>
            <figure className="mx-auto max-w-3xl overflow-hidden rounded-brand border border-sumi/10 bg-kinari/40">
              <Image
                src="/images/home/home-worries.webp"
                alt={`クラウドファンディングでよくあるお悩み：${worries.join("／")}`}
                width={1280}
                height={760}
                sizes="(max-width: 768px) 92vw, 48rem"
                className="h-auto w-full"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 text-center">
              <p className="text-sm text-sumi-soft/70" aria-hidden>
                ▼
              </p>
              <p className="mt-3 font-serif text-xl text-sumi md:text-2xl">
                そのお悩み、<span className="text-aka">ZEROデザイン</span>が解決します。
              </p>
              <div className="mt-8">
                <Button href={siteConfig.reservationUrl} external variant="primary" className="group">
                  60分無料相談を予約する
                  <Arrow />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ クラウドファンディングの活用事例 ============ */}
      <section className="bg-kinari/50 py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title="クラウドファンディングの活用事例"
              align="center"
              className="mb-12"
            >
              <p>商品開発から地域活性化、歴史・文化の継承まで。さまざまな挑戦に活用できます。</p>
            </SectionHeading>
          </Reveal>
          <Reveal delay={80}>
            <figure className="mx-auto max-w-3xl overflow-hidden rounded-brand border border-sumi/10 bg-white">
              <Image
                src="/images/home/home-usecases.webp"
                alt="クラウドファンディングの活用事例：商品開発／店舗・施設づくり／イベント開催／地域活性化／歴史・文化の継承／社会貢献活動"
                width={1280}
                height={853}
                sizes="(max-width: 768px) 92vw, 48rem"
                className="h-auto w-full"
              />
              <figcaption className="px-5 py-4 text-center text-sm text-sumi-soft">
                商品開発／店舗・施設づくり／イベント開催／地域活性化／歴史・文化の継承／社会貢献活動 など
              </figcaption>
            </figure>
          </Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/crowdfunding-uses" variant="secondary" className="group">
              活用法をもっと見る
              <Arrow />
            </Button>
            <Link href="/crowdfunding" className="group inline-flex items-center gap-2 font-semibold text-aka">
              クラウドファンディングとは？
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ⑥ 人気コラム ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Column" title="人気のお役立ちコラム" align="center" className="mb-14">
              <p>クラウドファンディングやSNS発信のヒントになる記事をお届けします。</p>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularColumns.map((c, i) => {
              const post = c.post!;
              return (
                <Reveal key={c.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/column/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-aka/25 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-kinari">
                      {post.eyecatch && (
                        <Image
                          src={post.eyecatch}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 92vw, 30vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-aka px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        {c.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-base leading-snug text-sumi">{post.title}</h3>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-sumi-soft">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-aka">
                        続きを読む
                        <Arrow />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button href="/column" variant="secondary" className="group">
              お役立ちコラムをもっと見る
              <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ============ ⑦ プロフィール ============ */}
      <section className="bg-kinari/50 py-24 md:py-28">
        <div className="container-brand">
          <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-brand border border-sumi/10 bg-white p-8 text-center md:grid-cols-[auto_1fr] md:gap-14 md:p-12 md:text-left">
            <Reveal>
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-kinari md:h-44 md:w-44">
                <Image
                  src={profile.photo}
                  alt={`${profile.name}のプロフィール写真`}
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow justify-center md:justify-start">Profile</span>
              <h2 className="mt-4 font-serif text-2xl text-sumi md:text-3xl">浅見 和貴</h2>
              <p className="mt-2 text-sm font-medium text-aka">ZEROデザイン ／ CAMPFIREパートナー</p>
              <p className="mt-5 leading-relaxed text-sumi-soft">
                「ZEROデザイン」という屋号には、
                <strong className="font-semibold text-sumi">ゼロからの挑戦を応援したい</strong>
                という想いを込めています。まだ形になっていないアイデアや、言葉にできない想いを丁寧にお聞きし、クラウドファンディング・映像・SNSの力で「伝わる形」へ整えます。
              </p>
              <div className="mt-7">
                <Link href="/profile" className="group inline-flex items-center gap-2 font-semibold text-aka">
                  代表プロフィールを見る
                  <Arrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ ⑧ 無料相談（最重要CTA） ============ */}
      <section className="border-t border-sumi/10 bg-kinari-deep py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Free Consultation</span>
              <h2 className="mt-4 font-serif text-[1.75rem] leading-snug text-sumi md:text-4xl">
                クラウドファンディング
                <br className="sm:hidden" />
                無料相談受付中
              </h2>
              <p className="mt-6 leading-relaxed text-sumi-soft">
                {consultLead.map((t) => (
                  <span key={t} className="mb-1 block">
                    「{t}」
                  </span>
                ))}
                <span className="mt-3 block">
                  そんな方へ、<strong className="font-semibold text-aka">初回60分の無料相談</strong>
                  を実施しています。
                </span>
              </p>
            </div>
          </Reveal>

          {/* 企画書サンプル */}
          <Reveal delay={100}>
            <figure className="mx-auto mt-12 max-w-4xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {["/images/proposal/proposal-01.webp", "/images/proposal/proposal-02.webp"].map(
                  (src, i) => (
                    <div
                      key={src}
                      className="relative aspect-[16/9] overflow-hidden rounded-brand border border-sumi/10 bg-white shadow-sm"
                    >
                      <Image
                        src={src}
                        alt={`クラウドファンディング企画書の見本（${i + 1}）`}
                        fill
                        sizes="(max-width: 640px) 92vw, 42vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-sumi/70 px-3 py-1 text-[11px] font-semibold text-white">
                        企画書サンプル
                      </span>
                    </div>
                  )
                )}
              </div>
              <figcaption className="mt-4 text-center text-sm text-sumi-soft">
                無料相談後、あなたのプロジェクトに合わせて、このような企画書をご提案します。
                <span className="mt-1 block text-xs text-sumi-soft/70">
                  ※イメージ見本です。内容は伏せています。
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-12 text-center">
              <Button href={siteConfig.reservationUrl} external variant="primary" className="group px-9 py-4">
                60分無料相談を予約する
                <Arrow />
              </Button>
              <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-sumi-soft">
                {consultNotes.map((n) => (
                  <li key={n} className="inline-flex items-center gap-1.5">
                    <Check />
                    {n}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row">
                <Link href="/contact" className="group inline-flex items-center gap-2 font-semibold text-aka">
                  メールでお問い合わせ
                  <Arrow />
                </Link>
                <span className="hidden text-sumi/20 sm:inline" aria-hidden>
                  ｜
                </span>
                <Link href="/pricing" className="group inline-flex items-center gap-2 font-semibold text-aka">
                  料金の目安を見る
                  <Arrow />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ===== 強みカード内の実例メディア ===== */

function StrengthMediaView({ media }: { media: StrengthMedia }) {
  if (media.type === "instagram") {
    const ig = instagramEmbedUrl(media.url);
    return (
      <figure className="mt-6">
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-brand border border-sumi/10 bg-white">
          {ig && (
            <iframe
              src={ig}
              title="制作事例：リール動画"
              loading="lazy"
              scrolling="no"
              allowFullScreen
              className="h-[540px] w-full"
            />
          )}
        </div>
        {media.caption && (
          <figcaption className="mt-2 text-center text-xs text-sumi-soft/70">{media.caption}</figcaption>
        )}
      </figure>
    );
  }
  return (
    <figure className="mt-6">
      <div
        className={`relative w-full overflow-hidden rounded-brand border border-sumi/10 bg-black ${
          media.vertical ? "mx-auto aspect-[9/16] max-w-[260px]" : "aspect-video"
        }`}
      >
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${media.id}`}
          title="制作事例：動画"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {media.caption && (
        <figcaption className="mt-2 text-center text-xs text-sumi-soft/70">{media.caption}</figcaption>
      )}
    </figure>
  );
}

/* ===== アイコン・小要素 ===== */

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden>
      <circle cx="9" cy="9" r="8.25" stroke="#9c2724" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="m5.5 9 2.3 2.3L12.5 6.5" stroke="#9c2724" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTime() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFilm() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5.5" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 9.5h16M8 5.5v13M16 5.5v13" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconRoute() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.3 6H14a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h5.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBadge() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3.5l6.5 2.3v5.2c0 4-2.7 6.9-6.5 8.2-3.8-1.3-6.5-4.2-6.5-8.2V5.8L12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m9 12 2.2 2.2L15 10.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="#b8945a" strokeWidth="1.2" />
      <path d="M6.5 5.5v5l4-2.5-4-2.5z" fill="#b8945a" />
    </svg>
  );
}
