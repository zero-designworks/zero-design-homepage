"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/Button";
import { works, type Work } from "@/data/works";
import { videos, youtubeId, instagramEmbedUrl, type Video } from "@/data/videos";

// チップ（＝セクション）の並び順。keyは videos.ts のカテゴリー名と一致させる。
const SECTIONS = [
  { key: "クラウドファンディング支援", heading: "クラウドファンディング支援", kind: "works" },
  { key: "クラウドファンディングPR動画", heading: "クラウドファンディングPR動画", kind: "videos" },
  { key: "SNS運用", heading: "SNS運用", kind: "videos" },
  { key: "広告動画", heading: "広告動画", kind: "videos" },
  { key: "プロモーション動画", heading: "プロモーション動画", kind: "videos" },
  { key: "自己PR動画", heading: "自己PR動画", kind: "videos" },
  { key: "デザイン", heading: "デザイン", kind: "videos" },
] as const;

const ALL = "すべて";
const chips = [ALL, ...SECTIONS.map((s) => s.key)];

function WorkCard({ w }: { w: Work }) {
  return (
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
  );
}

function VideoCard({ v }: { v: Video }) {
  const igUrl = instagramEmbedUrl(v.youtubeUrl);
  const ytId = youtubeId(v.youtubeUrl);
  return (
    <article className="flex flex-col overflow-hidden rounded-brand border border-sumi/10 bg-white">
      {igUrl ? (
        <div className="mx-auto w-full max-w-[360px] bg-white">
          <iframe
            src={igUrl}
            title={v.title}
            loading="lazy"
            scrolling="no"
            allowFullScreen
            className="h-[640px] w-full"
          />
        </div>
      ) : (
        <div
          className={`relative w-full bg-sumi ${
            v.vertical ? "mx-auto aspect-[9/16] max-w-[300px]" : "aspect-video"
          }`}
        >
          {ytId && (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${ytId}`}
              title={v.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      )}
      <div className="p-5">
        <span className="text-xs font-semibold text-kin">{v.client ?? v.category}</span>
        <h3 className="mt-1 text-base text-sumi">{v.title}</h3>
        {v.description && <p className="mt-2 text-sm text-sumi-soft">{v.description}</p>}
      </div>
    </article>
  );
}

export function WorksExplorer() {
  const [active, setActive] = useState<string>(ALL);

  return (
    <>
      {/* カテゴリーチップ（クリックで絞り込み） */}
      <section className="pb-8">
        <div className="container-brand">
          <div className="flex flex-wrap gap-2.5">
            {chips.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-aka bg-aka text-white"
                      : "border-sumi/15 text-sumi-soft hover:border-aka hover:text-aka"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* セクション（選択カテゴリーで絞り込み。「すべて」は中身のあるものだけ表示） */}
      {SECTIONS.map((s) => {
        if (active !== ALL && active !== s.key) return null;

        const workItems = s.kind === "works" ? works : [];
        const videoItems = s.kind === "videos" ? videos.filter((v) => v.category === s.key) : [];
        const count = s.kind === "works" ? workItems.length : videoItems.length;

        // 「すべて」表示のときは、中身のないカテゴリーは省略
        if (active === ALL && count === 0) return null;

        return (
          <section key={s.key} className="py-8 md:py-12">
            <div className="container-brand">
              <h2 className="mb-8 font-serif text-xl text-sumi md:text-2xl">{s.heading}</h2>

              {count === 0 ? (
                <div className="rounded-brand border border-dashed border-sumi/20 bg-kinari/30 p-10 text-center text-sm text-sumi-soft">
                  {s.heading}の実績は準備中です。近日公開予定です。
                </div>
              ) : s.kind === "works" ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {workItems.map((w, i) => (
                    <Reveal key={w.id} delay={(i % 2) * 100}>
                      <WorkCard w={w} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {videoItems.map((v) => (
                    <Reveal key={v.id}>
                      <VideoCard v={v} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
