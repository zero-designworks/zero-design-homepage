import Image from "next/image";
import Link from "next/link";
import { Button, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { services, reasons, flow } from "@/data/services";
import { profile } from "@/data/profile";

const cfFeatures = [
  "資金を集めながら認知を拡大できる",
  "商品や企画の需要（ニーズ）を事前に確認できる",
  "新しい挑戦を始める大きなきっかけになる",
  "融資や補助金獲得のための「実績」や「信用」に繋がる",
];

const useCases = [
  { label: "商品開発", desc: "新商品・地域商品", image: "/images/uses/uc-product.png" },
  { label: "店舗・施設づくり", desc: "開業・改装・再建", image: "/images/uses/uc-store.png" },
  { label: "イベント開催", desc: "マルシェ・上映会・展示会", image: "/images/uses/uc-event.png" },
  { label: "地域活性化", desc: "観光・空き家活用", image: "/images/uses/uc-region.png" },
  { label: "歴史・文化の継承", desc: "神社・寺院・城跡・祭り", image: "/images/uses/uc-history.png" },
  { label: "社会貢献活動", desc: "環境・福祉・動物・防災", image: "/images/uses/uc-social.png" },
  { label: "新規事業・起業", desc: "テストマーケティング", image: "/images/uses/uc-startup.png" },
];

const snsVideoTypes = [
  "クラファン開始告知",
  "プロジェクトの背景・起案者の想い",
  "歴史・文化・地域の紹介",
  "リターンの魅力紹介",
  "目標達成率の報告 / カウントダウン",
  "ネクストゴール告知 / 支援者への感謝",
];

export default function Home() {
  return (
    <>
      {/* ============ 5-1. ファーストビュー ============ */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-kinari via-kinari/85 to-kinari/40 md:to-transparent" />
        </div>

        <div className="container-brand flex min-h-[88vh] flex-col justify-center pt-28 pb-20 md:min-h-screen">
          <div className="max-w-2xl">
            <span className="eyebrow">ZERO DESIGN</span>
            <h1 className="mt-6 font-serif text-[2.5rem] font-semibold leading-[1.25] text-sumi sm:text-5xl md:text-6xl">
              ゼロからの挑戦に、
              <br />
              <span className="text-aka">伝える力</span>を。
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-sumi-soft md:text-lg">
              {siteConfig.subCopy}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary" className="group">
                クラウドファンディングの相談をする
                <Arrow />
              </Button>
              <Button href="/works" variant="secondary">
                制作実績を見る
              </Button>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-sumi-soft/60 md:flex">
          <span>SCROLL</span>
          <span className="h-8 w-px animate-pulse bg-sumi-soft/40" />
        </div>
      </section>

      {/* ============ 5-2. ZEROデザインについて ============ */}
      <section className="paper-texture py-24 md:py-32">
        <div className="container-narrow text-center">
          <Reveal>
            <span className="eyebrow justify-center">About</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-4xl">
              挑戦の原点を、<br className="hidden sm:block" />伝わる形へ。
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mx-auto mt-10 aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-brand">
              <Image
                src="/images/generated/home-about.png"
                alt="ゼロからの想いが「伝わる形」へと羽ばたくイメージイラスト"
                fill
                sizes="(max-width: 768px) 90vw, 42rem"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-2xl leading-relaxed text-sumi-soft md:text-[1.0625rem]">
              <p>
                「ZEROデザイン」という屋号には、ゼロから新しいことに挑戦する人を応援したいという想いを込めています。
              </p>
              <p className="mt-4">
                まだ形になっていないぼんやりとしたアイデアや、言葉にできない熱い想い。私たちは、その「挑戦の原点」を丁寧にお聞きし、デザイン、企画、映像、SNS、クラウドファンディングの力で、世の中にしっかりと「伝わる形」へと整えます。
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

      {/* ============ 5-3. クラウドファンディングとは ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">Crowdfunding</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-4xl">
                クラウドファンディングとは？
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mx-auto mt-10 aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-brand">
              <Image
                src="/images/generated/home-crowdfunding.png"
                alt="共感した人が集まり、挑戦を一緒に形にしていくクラウドファンディングのイメージイラスト"
                fill
                sizes="(max-width: 768px) 90vw, 42rem"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-sumi-soft md:text-[1.0625rem]">
              <p>
                インターネットを通じて、あなたのプロジェクトや商品、活動に共感してくれる人から資金を集める仕組みです。しかしその本質は、単なる「資金調達」ではありません。
              </p>
              <p className="mt-4">
                プロジェクトの背景にある想いを知ってもらい、一緒に挑戦を形にしていく「熱狂的な応援者（ファン）」や「仲間」を増やすための、最強の手段です。
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {cfFeatures.map((f, i) => (
              <Reveal key={f} delay={i * 80}>
                <div className="flex h-full items-start gap-4 rounded-brand border border-sumi/10 bg-kinari/40 p-6">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aka/10 text-sm font-semibold text-aka">
                    {i + 1}
                  </span>
                  <p className="text-sumi-soft">{f}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/crowdfunding" variant="secondary" className="group">
              クラウドファンディングについて詳しく見る
              <Arrow />
            </Button>
          </div>
        </div>
      </section>

      {/* ============ 5-4. どんな活用法があるか ============ */}
      <section className="bg-kon py-24 text-kinari md:py-28">
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow text-kin">Use Cases</span>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl leading-snug text-white md:text-4xl">
              クラウドファンディングは、
              <br className="hidden sm:block" />
              さまざまな挑戦に活用できます。
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.label} delay={(i % 4) * 70}>
                <div className="group flex h-full flex-col overflow-hidden rounded-brand bg-kinari shadow-sm">
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <Image
                      src={u.image}
                      alt={u.label}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-center px-3 py-4 text-center">
                    <h3 className="font-serif text-sm text-sumi md:text-base">{u.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-sumi-soft">{u.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/crowdfunding-uses" className="group inline-flex items-center gap-2 font-semibold text-kin">
              活用法をもっと見る
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 5-5. サービス紹介 ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Services" title="4つの力で、挑戦を伝わる形に。" align="center" className="mb-16">
              <p>企画から映像、デザイン、公開後の広報まで。必要な支援をワンストップでご提供します。</p>
            </SectionHeading>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 100}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-aka/30 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-kinari">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 90vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-xs font-semibold tracking-widest text-kin">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 text-lg text-sumi md:text-xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-sumi-soft">
                      {s.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aka">
                      詳しく見る
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5-6. クラファンSNS動画支援（特化） ============ */}
      <section className="paper-texture py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">SNS Video Support</span>
              <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-4xl">
                クラファンは、公開して<br className="hidden sm:block" />終わりではありません。
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mx-auto mt-10 aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-brand">
              <Image
                src="/images/generated/home-sns.png"
                alt="クラファン期間中のSNS発信・ショート動画制作を継続して支援するイメージイラスト"
                fill
                sizes="(max-width: 768px) 90vw, 42rem"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-sumi-soft md:text-[1.0625rem]">
              <p>
                成功の鍵は、公開期間中に「いかに継続して情報を発信し続けるか」。しかし、運営や問い合わせ対応、リターン準備をしながら、毎日の発信や動画編集まで行うのは現実的ではありません。
              </p>
              <p className="mt-4">
                ZEROデザインは、一番苦しいクラファン期間中の「SNS動画制作」を丸ごと支援し、あなたの<strong className="font-semibold text-aka">右腕</strong>となります。
              </p>
            </div>
            <ul className="mx-auto mt-8 grid max-w-2xl gap-x-6 gap-y-3 text-left sm:grid-cols-2">
              {snsVideoTypes.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-sumi-soft">
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-sumi-soft/80">
              <Tag>撮影なし・資料を送るだけ</Tag>
              <Tag>AI活用で低コスト・高品質</Tag>
              <Tag>Reels / Shorts / TikTok 対応</Tag>
            </div>
            <div className="mt-9 text-center">
              <Button href="/contact" variant="primary" className="group">
                SNS動画支援について相談する
                <Arrow />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 5-7. 選ばれる理由 ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <Reveal>
            <SectionHeading eyebrow="Why ZERO" title="ZEROデザインが選ばれる理由" align="center" className="mb-16" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 100}>
                <div className="flex h-full flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-kinari">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 inline-flex w-fit items-center rounded-full bg-aka px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      {r.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-lg leading-snug text-sumi">{r.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-sumi-soft">{r.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 制作・支援の流れ ============ */}
      <section className="bg-sumi py-24 text-kinari md:py-28">
        <div className="container-brand">
          <Reveal>
            <span className="eyebrow text-kin">Flow</span>
            <h2 className="mt-4 font-serif text-2xl text-white md:text-4xl">制作・支援の流れ</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={(i % 4) * 80}>
                <div className="relative">
                  <span className="font-serif text-4xl font-semibold text-kin/40">{f.step}</span>
                  <h3 className="mt-2 text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-kinari/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ プロフィール teaser ============ */}
      <section className="py-24 md:py-32">
        <div className="container-brand">
          <div className="grid items-center gap-12 rounded-brand border border-sumi/10 bg-kinari/40 p-8 md:grid-cols-[auto_1fr] md:gap-14 md:p-14">
            <Reveal>
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-white md:h-52 md:w-52">
                <Image
                  src={profile.photo}
                  alt={`${profile.name}のプロフィール写真`}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Profile</span>
              <h2 className="mt-4 text-2xl text-sumi md:text-3xl">
                {profile.name}
                <span className="ml-3 text-sm font-normal text-sumi-soft">{profile.nameKana}</span>
              </h2>
              <p className="mt-2 text-sm text-aka">{profile.title}</p>
              <p className="mt-5 leading-relaxed text-sumi-soft">
                頼れる檀家もなく知名度もゼロからのスタートだった「小谷寺 本堂再建プロジェクト」で、歴史の重みと未来へのビジョンを言語化し、
                <strong className="font-semibold text-sumi">目標を大幅に超える736万円</strong>
                の支援を達成。「想いが本物であれば、伝え方次第で必ず人は動く」——その確信を胸に、あなたの挑戦に伴走します。
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

      {/* ============ 5-11. お問い合わせ導線 ============ */}
      <section className="relative overflow-hidden bg-aka py-24 text-white md:py-32">
        <div className="absolute inset-0 -z-0 opacity-15">
          <Image src="/images/generated/cf-support.png" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="container-brand relative text-center">
          <Reveal>
            <span className="eyebrow justify-center text-white/80">Contact</span>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-2xl leading-snug text-white md:text-4xl">
              まだ形になっていない段階でも、
              <br className="hidden sm:block" />
              ご相談ください。
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/85">
              「何から始めればいいか分からない」「文章や構成が難しい」「継続して発信できない」——そのような「ゼロ」の段階から、一緒に考え、伴走します。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-brand bg-white px-8 py-4 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-brand border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                サービスを見る
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
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="9" cy="9" r="8.25" stroke="#9c2724" strokeOpacity="0.35" strokeWidth="1.2" />
      <path d="m5.5 9 2.3 2.3L12.5 6.5" stroke="#9c2724" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-sumi/15 bg-white px-3.5 py-1.5">{children}</span>
  );
}
