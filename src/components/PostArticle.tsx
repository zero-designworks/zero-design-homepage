import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { asamiAuthor, categoryMeta, formatDate, primaryCategory, type Post } from "@/data/posts";
import { instagramEmbedUrl } from "@/data/videos";
import { ProfileSpeech } from "@/components/ProfileSpeech";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { categoryPath, categoryTrail, getCategory } from "@/data/blogCategories";
import { getTag } from "@/data/tags";

export function PostArticle({ post }: { post: Post }) {
  const cat = categoryMeta[post.category];

  // 執筆者プロフィール：明示指定があればそれを、なければコラム記事に共通プロフィールを表示
  const author = post.author ?? (post.category === "column" ? asamiAuthor : undefined);

  // パンくず：ホーム / セクション / カテゴリー（親→子） / 記事タイトル
  const trail = categoryTrail(primaryCategory(post));
  const crumbs: Crumb[] = [
    { label: cat.label, href: cat.path },
    ...trail.map((c) => ({ label: c.label, href: categoryPath(c.slug) })),
    { label: post.title },
  ];

  // 見出し（h）に安定したidを割り当て、目次リンクの飛び先にする
  const headings: { text: string; id: string }[] = [];
  const headingId = new Map<number, string>();
  post.blocks.forEach((b, i) => {
    if (b.type === "h") {
      const id = `sec-${i}`;
      headingId.set(i, id);
      headings.push({ text: b.text, id });
    }
  });
  return (
    <>
      <article className="pt-28 md:pt-36">
        <div className="container-narrow">
          {/* パンくず（カテゴリーを含む・構造化データ付き） */}
          <Breadcrumb items={crumbs} />

          <header>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center rounded-full bg-aka/10 px-3 py-1 text-xs font-semibold text-aka">
                {cat.label}
              </span>
              {post.categories.map((slug) => {
                const c = getCategory(slug);
                if (!c) return null;
                return (
                  <Link
                    key={slug}
                    href={categoryPath(slug)}
                    className="inline-flex items-center rounded-full border border-sumi/15 px-3 py-1 text-xs text-sumi-soft transition-colors hover:border-aka/40 hover:text-aka"
                  >
                    {c.label}
                  </Link>
                );
              })}
              <time dateTime={post.publishedAt} className="text-sm text-sumi-soft">
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <h1 className="mt-5 font-serif text-2xl font-semibold leading-snug text-sumi md:text-4xl">
              {post.title}
            </h1>
          </header>

          {post.eyecatch && (
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari">
              <Image
                src={post.eyecatch}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          <div className="mt-8 hairline" />

          {/* 本文 */}
          <div className="mt-10 space-y-7 leading-loose text-sumi-soft md:space-y-8">
            {/* 冒頭：執筆者プロフィール吹き出し */}
            {post.introSpeech && <ProfileSpeech message={post.introSpeech} position="left" />}

            {post.blocks.map((b, i) => {
              if (b.type === "h") {
                return (
                  <h2
                    key={i}
                    id={headingId.get(i)}
                    className="scroll-mt-28 border-l-4 border-aka pt-2 pl-4 font-serif text-xl leading-snug text-sumi md:pl-5 md:text-2xl"
                  >
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "toc") {
                if (headings.length === 0) return null;
                return (
                  <nav
                    key={i}
                    aria-label="目次"
                    className="rounded-brand border border-sumi/10 bg-kinari/40 p-6 sm:p-7"
                  >
                    <p className="mb-4 text-sm font-semibold text-aka">
                      {b.title ?? "目次"}
                    </p>
                    <ol className="space-y-2.5">
                      {headings.map((h, n) => (
                        <li key={h.id} className="flex gap-3 text-sm leading-relaxed">
                          <span className="shrink-0 font-serif text-aka/70">{n + 1}.</span>
                          <a href={`#${h.id}`} className="text-sumi hover:text-aka hover:underline">
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                );
              }
              if (b.type === "cta") {
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-4 rounded-brand border border-aka/20 bg-aka/5 px-6 py-7 text-center sm:flex-row sm:justify-between sm:text-left"
                  >
                    {b.text && <p className="font-serif text-lg text-sumi">{b.text}</p>}
                    <Link
                      href={b.href}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-brand bg-aka px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-aka/90"
                    >
                      {b.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                );
              }
              if (b.type === "instagram") {
                const ig = instagramEmbedUrl(b.url);
                return (
                  <figure key={i} className="pt-2">
                    {b.title && (
                      <p className="mb-3 font-serif text-lg text-sumi">{b.title}</p>
                    )}
                    <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-brand border border-sumi/10 bg-white">
                      {ig && (
                        <iframe
                          src={ig}
                          title={b.title ?? "Instagram投稿"}
                          loading="lazy"
                          scrolling="no"
                          allowFullScreen
                          className="h-[560px] w-full"
                        />
                      )}
                    </div>
                    {b.caption && (
                      <figcaption className="mt-2 text-center text-xs text-sumi-soft/70">
                        {b.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (b.type === "ul") {
                return (
                  <ul
                    key={i}
                    className="space-y-5 rounded-brand border border-sumi/8 bg-kinari/25 px-5 py-6 sm:px-7"
                  >
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-3.5">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-aka" />
                        <span>
                          <RichText text={it} />
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (b.type === "img") {
                return (
                  <figure key={i} className="pt-2">
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari">
                      <Image
                        src={b.src}
                        alt={b.alt}
                        fill
                        sizes="(max-width: 768px) 92vw, 768px"
                        className="object-cover"
                      />
                    </div>
                    {b.caption && (
                      <figcaption className="mt-2 text-center text-xs text-sumi-soft/70">
                        {b.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (b.type === "video") {
                return (
                  <figure key={i} className="pt-2">
                    {b.title && (
                      <p className="mb-3 font-serif text-lg text-sumi">{b.title}</p>
                    )}
                    <div
                      className={`relative mx-auto w-full overflow-hidden rounded-brand border border-sumi/10 bg-sumi ${
                        b.vertical ? "aspect-[9/16] max-w-[360px]" : "aspect-video"
                      }`}
                    >
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${b.youtubeId}`}
                        title={b.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    {b.caption && (
                      <figcaption className="mt-2 text-center text-xs text-sumi-soft/70">
                        {b.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (b.type === "callout") {
                return (
                  <div
                    key={i}
                    className="flex flex-col gap-1 rounded-brand border border-aka/20 bg-aka/5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-semibold text-aka">{b.label}</span>
                    <span className="font-serif text-xl font-semibold text-sumi">{b.text}</span>
                  </div>
                );
              }
              return (
                <p key={i} className="text-sumi-soft">
                  <RichText text={b.text} />
                </p>
              );
            })}

            {/* 末尾：執筆者プロフィール吹き出し */}
            {post.closingSpeech && <ProfileSpeech message={post.closingSpeech} position="right" />}
          </div>

          {/* 著者プロフィール */}
          {author && (
            <div className="mt-12 flex flex-col gap-5 rounded-brand border border-sumi/10 bg-kinari/40 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
              <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-sumi/10 sm:mx-0">
                <Image
                  src={author.photo}
                  alt={`${author.name}のプロフィール写真`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold text-aka">この記事を書いた人</p>
                <h2 className="mt-1.5 font-serif text-xl text-sumi">{author.name}</h2>
                <p className="mt-1 text-xs leading-relaxed text-sumi-soft">{author.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-sumi-soft">{author.bio}</p>
                {author.href && (
                  <Link
                    href={author.href}
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-aka hover:text-aka/80"
                  >
                    プロフィール詳細を見る
                    <Arrow />
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* 外部リンク */}
          {post.externalLinks && post.externalLinks.length > 0 && (
            <div className="mt-10 rounded-brand border border-sumi/10 bg-kinari/40 p-6">
              <p className="mb-3 text-sm font-semibold text-sumi">リンク</p>
              <ul className="space-y-2">
                {post.externalLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-aka"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 関連リンク（内部） */}
          {post.relatedPages && post.relatedPages.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-sumi">関連リンク</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {post.relatedPages.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group flex items-center justify-between rounded-brand border border-sumi/10 bg-white px-5 py-4 text-sm font-semibold text-sumi transition-colors hover:border-aka/30 hover:text-aka"
                  >
                    {l.label}
                    <Arrow />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* カテゴリー・タグ（タグは別管理） */}
          <div className="mt-10 space-y-5 border-t border-sumi/10 pt-8">
            <div>
              <p className="mb-3 text-sm font-semibold text-sumi">カテゴリー</p>
              <div className="flex flex-wrap gap-2">
                {post.categories.map((slug) => {
                  const c = getCategory(slug);
                  if (!c) return null;
                  return (
                    <Link
                      key={slug}
                      href={categoryPath(slug)}
                      className="inline-flex items-center rounded-full border border-sumi/15 bg-white px-4 py-1.5 text-sm text-sumi-soft transition-colors hover:border-aka/40 hover:text-aka"
                    >
                      {c.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div>
                <p className="mb-3 text-sm font-semibold text-sumi">タグ</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((slug) => {
                    const t = getTag(slug);
                    if (!t) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/tag/${t.slug}`}
                        className="inline-flex items-center rounded-full bg-kinari px-3.5 py-1.5 text-xs text-sumi-soft transition-colors hover:text-aka"
                      >
                        #{t.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 一覧へ戻る */}
          <div className="mt-12">
            <Link href={cat.path} className="inline-flex items-center gap-2 text-sm text-sumi-soft hover:text-aka">
              <span aria-hidden>←</span>
              {cat.label}一覧へ戻る
            </Link>
          </div>
        </div>
      </article>

      <div className="mt-20">
        <CtaBand />
      </div>
    </>
  );
}

/**
 * 本文中の **強調したい言葉** を赤字で表示します。
 * 記事データ（posts.ts）の text / items で使えます。
 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((s, i) =>
        s.startsWith("**") && s.endsWith("**") ? (
          <strong key={i} className="font-semibold text-aka">
            {s.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{s}</Fragment>
        )
      )}
    </>
  );
}
