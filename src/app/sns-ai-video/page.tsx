import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "SNS・AI動画",
  description:
    "クラウドファンディングのSNS発信をAI動画で加速。公開前から継続発信できるショート動画20本サービスと、地域文化・イベントPR・自己PRなどクラファン以外のAI動画活用パターン・料金の目安をご紹介します。",
  alternates: { canonical: "/sns-ai-video" },
};

/* SNS運用が重要な理由 */
const whySns = [
  {
    t: "支援は「開始直後」と「終了直前」に伸びる",
    d: "クラウドファンディングの支援額はU字を描きます。公開1週間前の予告から最終日のラストスパートまで、発信を切らさないことが結果を大きく左右します。",
    img: "/images/sns-ai/why-01.webp",
    alt: "支援額が開始直後と終了直前に伸びるU字カーブを表したイメージイラスト",
  },
  {
    t: "ページを公開しただけでは、誰にも気づかれない",
    d: "プラットフォームに掲載するだけで支援が集まることはありません。SNSで届けてはじめて、プロジェクトの存在が知られます。",
    img: "/images/sns-ai/why-02.webp",
    alt: "公開しただけでは人に気づかれないプロジェクトページを表したイメージイラスト",
  },
  {
    t: "動画は「想い」まで伝えられる",
    d: "文章や写真では伝わりにくい背景や熱量も、動画なら表情や声とともに届きます。共感が生まれ、支援の後押しになります。",
    img: "/images/sns-ai/why-03.webp",
    alt: "カメラに向かって想いを語り、聞き手の心が動く様子のイメージイラスト",
  },
];

/* ショート動画20本サービスの内容 */
const shortVideoPlan = [
  "公開前の予告・カウントダウン",
  "プロジェクトの背景・起案者の想い",
  "リターンの魅力紹介",
  "達成率の報告・ネクストゴール告知",
  "支援者への感謝・活動報告",
  "歴史・地域・商品のストーリー紹介",
];

/* クラファン以外のAI動画 活用パターン */
type Pattern = {
  eyebrow: string;
  title: string;
  problem: string;
  solution: string;
  example?: string;
  video?: { id: string; vertical?: boolean; caption: string };
};

const patterns: Pattern[] = [
  {
    eyebrow: "SNS動画",
    title: "SNS動画・広告ショート",
    problem: "毎日の投稿や広告用の動画を作り続けたいが、撮影も編集も手が回らない。",
    solution:
      "台本・企画から動画編集までをAIで効率化。撮影なしでも、店舗やサービスの魅力を伝えるショート動画を継続的に制作します。ReelsやYouTube Shorts、TikTokにそのまま活用できます。",
    example: "ペット火葬・ペットタクシーの広告動画、ペット霊園様のストーリー動画など",
    video: { id: "xUESjuJdLVk", vertical: true, caption: "ペット霊園様 ストーリー動画（SNSショート）" },
  },
  {
    eyebrow: "プロモーション動画",
    title: "イベント・団体のプロモーション動画",
    problem: "周年行事やイベントの動画を作りたいが、メンバーが多忙で撮影に集まれる日がない。",
    solution:
      "既存の写真・素材だけで構成でき、実写では難しい派手な演出もAIで表現できます。会場の空気を一気に引き上げるオープニング動画づくりが得意です。",
    example: "ZEROチャプター様 第二期オープニング動画、BIG Business meeting プロモーション動画",
    video: { id: "1P_vben3LZ4", caption: "ZEROチャプター様 第二期オープニング動画" },
  },
  {
    eyebrow: "AIアニメ",
    title: "地域文化・歴史を伝えるAIアニメ",
    problem: "歴史や文化の価値を伝えたいが、内容が難解で、場所の物語や想いが世間に伝わりにくい。",
    solution:
      "難解な歴史こそAIアニメの出番です。登場人物を動かし、物語として見せることで、地域を超えて全国に共感が広がります。「歴史を見える化」すれば、人の心は動きます。",
    example: "小谷寺 歴史PR動画（お市の方）ほか、本堂再建プロジェクトで約736万円の支援を達成",
    video: { id: "0WZN2Ob8USQ", caption: "小谷寺様 歴史PR動画（お市の方）" },
  },
  {
    eyebrow: "自己PR動画",
    title: "プレゼン・自己紹介のAIアニメ",
    problem: "自分の仕事や商品を短時間で分かりやすく伝えたいが、資料だけでは印象に残らない。",
    solution:
      "取り扱い商品や強み、実績を、キャラクターと図解でテンポよく見せるプレゼン動画を制作。名刺代わりに使え、初対面でも一目で伝わります。",
    example: "東京海上日動火災保険 吉川様、ボディファイトジャパン 内山様のプレゼンAIアニメ",
    video: { id: "j4HvNVL3SRo", caption: "プレゼンAIアニメ（東京海上日動火災保険 吉川様）" },
  },
];

/* 料金の目安 */
const priceGuide = [
  { t: "SNS広告ショート", d: "台本・企画・動画編集", p: "1本 2万円〜" },
  { t: "SNS動画（15分）", d: "SNS用の動画制作", p: "2万円〜" },
  { t: "プロモーション動画", d: "イベント・団体PRなど", p: "1本 3万円〜" },
  { t: "AIアニメ（5分）", d: "ストーリー・歴史・プレゼン", p: "1本 5万円〜" },
];

export default function SnsAiVideoPage() {
  return (
    <>
      <PageHero
        eyebrow="SNS & AI Movie"
        title={
          <>
            AIが、クラウドファンディングの
            <br className="hidden sm:block" />
            SNS投稿を加速させる。
          </>
        }
        lead="発信が止まると、支援も止まります。AIを活用した制作フローで、公開前からラストスパートまで“止まらない発信”をつくります。"
        image="/images/generated/svc-ai-video.webp"
      />

      {/* ① AIがクラウドファンディングのSNS投稿を加速させる */}
      <section className="py-16 md:py-20">
        <div className="container-brand">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <figure className="relative aspect-[3/2] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari/40">
                <Image
                  src="/images/sns-ai/accelerate.webp"
                  alt="AIが制作したショート動画を受け取り、本来の活動に集中できるようになった事業者のイメージイラスト"
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <p className="leading-loose text-sumi-soft md:text-[1.0625rem]">
                クラウドファンディング期間中、オーナー様は支援者へのお礼、イベント参加、地域への声掛け、メディア対応、商品づくりと、やるべきことが山積みです。そこへ毎日のSNS投稿と動画制作まで重なると、発信は必ずどこかで止まってしまいます。
              </p>
              <p className="mt-5 leading-loose text-sumi-soft md:text-[1.0625rem]">
                ZEROデザインは、AIを活用した効率的な制作フローで、投稿文・画像・ショート動画をまとめて制作します。人が時間をかけていた作業を圧縮することで、
                <strong className="font-semibold text-sumi">発信を止めずに走りきれる体制</strong>
                をつくります。あなたは、本当に大切な活動に集中してください。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ② クラウドファンディングにおけるSNS運用の重要性 */}
      <section className="bg-kinari/50 py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="Why SNS"
              title="クラウドファンディングにおけるSNS運用の重要性"
              align="center"
              className="mb-12"
            >
              <p>資金は「集まる」のではなく「届けた分だけ集まる」もの。発信量が結果を左右します。</p>
            </SectionHeading>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {whySns.map((w, i) => (
              <Reveal key={w.t} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white">
                  <div className="relative aspect-[3/2] w-full bg-kinari/40">
                    <Image
                      src={w.img}
                      alt={w.alt}
                      fill
                      sizes="(max-width: 768px) 92vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="font-serif text-3xl font-semibold text-kin/50">0{i + 1}</span>
                    <h3 className="mt-3 font-serif text-lg leading-snug text-sumi">{w.t}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-sumi-soft">{w.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ③ クラウドファンディング × ショート動画20本サービス */}
      <section className="py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading
              eyebrow="Main Service"
              title="クラウドファンディング × ショート動画20本"
              align="center"
              className="mb-12"
            >
              <p>公開前から終了まで、週3本ペースで継続発信。制作した動画は、終了後も“資産”として残ります。</p>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <div className="rounded-brand border border-sumi/10 bg-white p-7 md:p-9">
                <figure className="relative mb-7 aspect-[3/2] w-full overflow-hidden rounded-brand bg-kinari/40">
                  <Image
                    src="/images/sns-ai/short20.webp"
                    alt="制作したショート動画が積み重なり、クラウドファンディング後も資産として残ることを表したイメージイラスト"
                    fill
                    sizes="(max-width: 1024px) 92vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <h3 className="font-serif text-xl text-sumi">制作する動画の例</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {shortVideoPlan.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-sumi-soft">
                      <Check />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-brand bg-aka/5 px-6 py-5">
                  <p className="text-sm font-semibold text-aka">費用について</p>
                  <p className="mt-1.5 font-serif text-lg font-semibold text-sumi">
                    クラウドファンディング達成後の成功報酬10%
                  </p>
                  <p className="mt-1.5 text-sm text-sumi-soft">
                    先出しの費用負担なく始められます。「発信は大事だけれど、コストも人手もかけられない」という方にこそ最適です。
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="overflow-hidden rounded-brand border border-sumi/10 bg-white">
                <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/VKBgjPVEkJU"
                    title="小谷寺様 リターン品紹介動画"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <figcaption className="px-5 py-4 text-center text-sm text-sumi-soft">
                  実際に制作したショート動画（小谷寺様 リターン品紹介）
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <Button href={siteConfig.reservationUrl} external variant="primary" className="group">
              60分無料相談を予約する
              <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ④ クラファン以外のAI動画 活用パターン */}
      <section className="bg-sumi py-20 text-kinari md:py-28">
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow text-kin">Use Cases</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-white md:text-4xl">
              クラウドファンディング以外の、AI動画活用
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-kinari/75">
              AI動画は、クラウドファンディングだけのものではありません。SNS発信から、イベントPR、地域文化の継承、自己紹介まで。撮影なしでも「伝わる動画」をつくれます。
            </p>
          </Reveal>

          <div className="mt-14 space-y-8">
            {patterns.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <article className="grid gap-7 rounded-brand bg-white/5 p-7 ring-1 ring-white/10 md:grid-cols-[1fr_minmax(0,38%)] md:items-center md:p-9">
                  <div>
                    <span className="text-xs font-semibold tracking-widest text-kin">{p.eyebrow}</span>
                    <h3 className="mt-2 font-serif text-xl text-white md:text-2xl">{p.title}</h3>

                    <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                      <div>
                        <dt className="font-semibold text-kinari/60">課題</dt>
                        <dd className="mt-1 text-kinari/90">{p.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-kin">AI動画での解決</dt>
                        <dd className="mt-1 text-kinari/90">{p.solution}</dd>
                      </div>
                      {p.example && (
                        <div>
                          <dt className="font-semibold text-kinari/60">制作事例</dt>
                          <dd className="mt-1 text-kinari/90">{p.example}</dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  {p.video && (
                    <figure>
                      <div
                        className={`relative w-full overflow-hidden rounded-brand bg-black ${
                          p.video.vertical ? "mx-auto aspect-[9/16] max-w-[240px]" : "aspect-video"
                        }`}
                      >
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={`https://www.youtube-nocookie.com/embed/${p.video.id}`}
                          title={p.video.caption}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                      <figcaption className="mt-2 text-center text-xs text-kinari/60">
                        {p.video.caption}
                      </figcaption>
                    </figure>
                  )}
                </article>
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

      {/* ⑤ 料金の目安 */}
      <section className="py-20 md:py-28">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Price" title="料金の目安" align="center" className="mb-12">
              <p>内容・本数によって変わります。まずはご相談ください。</p>
            </SectionHeading>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {priceGuide.map((p, i) => (
              <Reveal key={p.t} delay={(i % 4) * 70}>
                <div className="flex h-full flex-col rounded-brand border border-sumi/10 bg-white p-6 text-center">
                  <h3 className="font-serif text-base text-sumi">{p.t}</h3>
                  <p className="mt-1 text-xs text-sumi-soft/80">{p.d}</p>
                  <p className="mt-4 font-serif text-xl font-semibold text-aka">{p.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-sumi-soft/70">
            ※上記は目安です。クラウドファンディングのSNS動画支援は、成功報酬型のプランもご用意しています。
          </p>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="group inline-flex items-center gap-2 font-semibold text-aka">
              料金ページを見る
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ⑥ CTA */}
      <section className="bg-aka py-20 text-center text-white md:py-24">
        <div className="container-brand">
          <Reveal>
            <h2 className="font-serif text-2xl text-white md:text-3xl">
              「どんな動画が合うか」から、ご相談ください。
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/85">
              撮影なし・全国対応。写真や資料をお送りいただくだけで制作できます。初回60分の無料相談を実施しています。
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-brand bg-white px-8 py-4 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
              >
                60分無料相談を予約する
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-brand border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                メールで問い合わせる
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
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
