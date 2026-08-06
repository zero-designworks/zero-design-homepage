import Image from "next/image";
import Link from "next/link";
import { Button, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { profile } from "@/data/profile";
import { homeCases } from "@/data/homeCases";
import { posts } from "@/data/posts";

/* ===== コンテンツ定義（追加・編集しやすいようデータ化） ===== */

const heroBadges = ["CAMPFIREパートナー", "クラウドファンディング支援", "無料相談受付中"];

const strengths: {
  icon: React.ReactNode;
  title: string;
  body: string;
  list?: string[];
  body2?: string;
}[] = [
  {
    icon: <IconTime />,
    title: "SNS発信は、ZEROデザインにお任せ。",
    body: "クラウドファンディング期間中は、SNS投稿に追われるのではなく、本当に大切な活動へ集中してください。",
    list: ["支援者へのお礼", "イベント参加", "地域への声掛け", "メディア対応", "商品づくり"],
    body2:
      "AIを活用した効率的な制作フローで、継続的にSNS動画を制作・発信します。さらに、制作した約20本の動画はクラウドファンディング終了後も会社の“資産”として残り、InstagramやYouTubeで発信を続けられます。",
  },
  {
    icon: <IconFilm />,
    title: "実写 × AIアニメで、想いまで伝える。",
    body: "商品や人物のリアルな魅力は実写で。プロジェクト誕生の背景、創業者の想い、地域の歴史、未来へのビジョンはAIアニメで表現します。",
    body2:
      "「実写のみ」「AIアニメのみ」ではなく、実写＋AIアニメの組み合わせも制作可能。情報を伝えるだけでなく、“支援したくなる共感”を映像で届けます。",
  },
  {
    icon: <IconRoute />,
    title: "クラウドファンディング支援",
    body: "企画から公開後の情報発信まで、一貫して伴走します。必要な部分だけのご依頼も可能です。",
    list: ["企画整理", "リターン設計", "SNS運用", "AI動画制作", "公開後サポート"],
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

const videoShowcase = [
  { label: "実写：住職インタビュー", id: "HMgFuCOXQNA", vertical: false },
  { label: "AIアニメ：想いをストーリーで", id: "2CNthQ-K52c", vertical: false },
  { label: "SNSリール：リターン紹介", id: "VKBgjPVEkJU", vertical: true },
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
  return (
    <>
      {/* ============ ① ファーストビュー ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/generated/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kinari via-kinari/90 to-kinari/45 md:to-transparent" />
        </div>

        <div className="container-brand flex min-h-[86vh] flex-col justify-center pt-28 pb-20 md:min-h-screen">
          <div className="max-w-2xl">
            <span className="eyebrow">ZERO DESIGN</span>
            <h1 className="mt-6 font-serif text-[2.1rem] font-semibold leading-[1.3] text-sumi sm:text-4xl md:text-5xl">
              クラウドファンディング成功を、
              <br />
              <span className="text-aka">SNS・AI動画</span>で加速。
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sumi-soft md:text-lg">
              企画からSNS・AI動画による情報発信まで、一貫して支援します。
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {heroBadges.map((b) => (
                <li
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-aka/20 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-aka backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-aka" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={siteConfig.reservationUrl} external variant="primary" className="group">
                60分無料相談を予約する
                <Arrow />
              </Button>
              <Button href="#cases" variant="secondary">
                支援事例を見る
              </Button>
            </div>
          </div>
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
                </article>
              </Reveal>
            ))}
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
                    <Image
                      src={c.image}
                      alt={`${c.title}のメイン画像`}
                      fill
                      sizes="(max-width: 768px) 92vw, 42vw"
                      className="object-cover"
                    />
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
        </div>
      </section>

      {/* ============ ④ お客様のお悩み ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Worries" title="こんなお悩み、ありませんか？" align="center" className="mb-14" />
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {worries.map((w, i) => (
              <Reveal key={w} delay={(i % 3) * 80}>
                <div className="flex h-full items-start gap-3 rounded-brand border border-sumi/10 bg-white p-6">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kin/12 text-kin">
                    <IconQuestion />
                  </span>
                  <p className="text-sm leading-relaxed text-sumi-soft">{w}</p>
                </div>
              </Reveal>
            ))}
          </div>
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

      {/* ============ ⑤ AI動画紹介 ============ */}
      <section className="bg-sumi py-24 text-kinari md:py-28">
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow text-kin">Movie</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-white md:text-4xl">
              AI動画・制作事例
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-kinari/75">
              実写、AIアニメ、SNSリール——目的に合わせて、想いが伝わる動画を制作します。
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoShowcase.map((v, i) => (
              <Reveal key={v.id} delay={(i % 3) * 80}>
                <figure className="overflow-hidden rounded-brand bg-white/5 ring-1 ring-white/10">
                  <div
                    className={`relative w-full bg-black ${
                      v.vertical ? "mx-auto aspect-[9/16] max-w-[280px]" : "aspect-video"
                    }`}
                  >
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                      title={v.label}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-kinari/85">{v.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/works" className="group inline-flex items-center gap-2 font-semibold text-kin">
              制作事例をもっと見る
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
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

function IconQuestion() {
  return (
    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.7 7.6a2.3 2.3 0 1 1 3 2.2c-.7.3-.9.7-.9 1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9.8" cy="14" r="0.9" fill="currentColor" />
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
