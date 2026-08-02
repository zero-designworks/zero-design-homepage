import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { works } from "@/data/works";
import { videos, youtubeId } from "@/data/videos";

export const metadata: Metadata = {
  title: "制作・支援実績",
  description:
    "ZEROデザインのクラウドファンディング支援・YouTube動画・SNSショート動画・AI動画・デザイン・Web制作の実績をご紹介します。",
  alternates: { canonical: "/works" },
};

const categories = [
  "すべて",
  "クラウドファンディング支援",
  "クラウドファンディングPR動画",
  "SNS運用",
  "広告動画",
  "プロモーション動画",
  "自己PR動画",
  "デザイン",
];

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Works"
        title={<>制作・支援実績</>}
        lead="ゼロから伴走したプロジェクトの一部をご紹介します。実績は随時追加していきます。"
      />

      <section className="pb-8">
        <div className="container-brand">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`rounded-full border px-4 py-2 text-sm ${
                  i === 0
                    ? "border-aka bg-aka text-white"
                    : "border-sumi/15 text-sumi-soft"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* クラウドファンディング実績 */}
      <section className="py-8 md:py-12">
        <div className="container-brand">
          <h2 className="mb-8 font-serif text-xl text-sumi md:text-2xl">クラウドファンディング</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {works.map((w, i) => (
              <Reveal key={w.id} delay={(i % 2) * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white">
                  {w.image &&
                    (w.href ? (
                      <a
                        href={w.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${w.title}のプロジェクトページを見る`}
                        className="group relative block aspect-[3/2] w-full overflow-hidden bg-kinari"
                      >
                        <Image
                          src={w.image}
                          alt={w.title}
                          fill
                          sizes="(max-width: 768px) 92vw, 45vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </a>
                    ) : (
                      <div className="relative aspect-[3/2] w-full overflow-hidden bg-kinari">
                        <Image
                          src={w.image}
                          alt={w.title}
                          fill
                          sizes="(max-width: 768px) 92vw, 45vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  <div className="flex flex-1 flex-col p-7 md:p-8">
                  <span className="inline-flex w-fit items-center rounded-full bg-aka/10 px-3 py-1 text-xs font-semibold text-aka">
                    {w.category}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-sumi">{w.title}</h3>
                  {w.client && <p className="mt-1 text-sm text-sumi-soft">{w.client}</p>}
                  {w.description && (
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-sumi-soft">{w.description}</p>
                  )}
                  {w.role && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {w.role.map((r) => (
                        <span key={r} className="rounded border border-sumi/15 px-2.5 py-1 text-xs text-sumi-soft">
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                  {w.result && (
                    <p className="mt-5 rounded-brand bg-kinari/60 px-4 py-3 text-sm font-semibold text-aka">
                      {w.result}
                    </p>
                  )}
                  {w.href && (
                    <a
                      href={w.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-aka"
                    >
                      プロジェクトを見る
                      <Arrow />
                    </a>
                  )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* クラウドファンディングPR動画（data/videos.ts に追加すると自動表示） */}
      <section className="py-8 md:py-12">
        <div className="container-brand">
          <h2 className="mb-8 font-serif text-xl text-sumi md:text-2xl">クラウドファンディングPR動画</h2>
          {videos.length === 0 ? (
            <div className="rounded-brand border border-dashed border-sumi/20 bg-kinari/30 p-10 text-center text-sm text-sumi-soft">
              動画実績は近日公開予定です。
              <br className="sm:hidden" />
              <span className="text-sumi-soft/70">
                （YouTube URL を <code className="rounded bg-white px-1.5 py-0.5">src/data/videos.ts</code> に追加すると、ここに自動で表示されます）
              </span>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v) => {
                const id = youtubeId(v.youtubeUrl);
                return (
                  <article key={v.id} className="flex flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white">
                    <div
                      className={`relative w-full bg-sumi ${
                        v.vertical ? "mx-auto aspect-[9/16] max-w-[300px]" : "aspect-video"
                      }`}
                    >
                      {id && (
                        <iframe
                          className="absolute inset-0 h-full w-full"
                          src={`https://www.youtube-nocookie.com/embed/${id}`}
                          title={v.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-kin">{v.client ?? v.category}</span>
                      <h3 className="mt-1 text-base text-sumi">{v.title}</h3>
                      {v.description && <p className="mt-2 text-sm text-sumi-soft">{v.description}</p>}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CtaBand title="あなたのプロジェクトも、実績のひとつに。" />
    </>
  );
}
