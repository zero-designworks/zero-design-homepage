import Link from "next/link";
import { Arrow } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { categoryMeta, formatDate, type Post } from "@/data/posts";

export function PostArticle({ post }: { post: Post }) {
  const cat = categoryMeta[post.category];
  return (
    <>
      <article className="pt-28 md:pt-36">
        <div className="container-narrow">
          {/* パンくず */}
          <nav aria-label="パンくず" className="mb-6 text-xs text-sumi-soft/70">
            <Link href="/" className="hover:text-aka">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <Link href={cat.path} className="hover:text-aka">
              {cat.label}
            </Link>
          </nav>

          <header>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-aka/10 px-3 py-1 text-xs font-semibold text-aka">
                {cat.label}
              </span>
              <time dateTime={post.publishedAt} className="text-sm text-sumi-soft">
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <h1 className="mt-5 font-serif text-2xl font-semibold leading-snug text-sumi md:text-4xl">
              {post.title}
            </h1>
          </header>

          <div className="mt-8 hairline" />

          {/* 本文 */}
          <div className="mt-10 space-y-6 leading-loose text-sumi-soft">
            {post.blocks.map((b, i) => {
              if (b.type === "h") {
                return (
                  <h2 key={i} className="pt-4 font-serif text-xl text-sumi md:text-2xl">
                    {b.text}
                  </h2>
                );
              }
              if (b.type === "ul") {
                return (
                  <ul key={i} className="space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aka" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
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
                  {b.text}
                </p>
              );
            })}
          </div>

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
