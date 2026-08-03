import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  categoryMeta,
  formatDate,
  postPath,
  primaryCategory,
  type Post,
} from "@/data/posts";
import { categoryPath, getCategory } from "@/data/blogCategories";

/** 記事一覧カード。お知らせ／コラム／カテゴリー／タグの各アーカイブで共用 */
export function PostCards({
  posts,
  emptyMessage = "現在準備中です。近日公開予定ですので、どうぞお楽しみに。",
}: {
  posts: Post[];
  emptyMessage?: string;
}) {
  if (posts.length === 0) {
    return (
      <div className="rounded-brand border border-dashed border-sumi/20 bg-kinari/30 p-12 text-center text-sm text-sumi-soft">
        {emptyMessage}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-sumi/10 overflow-hidden rounded-brand border border-sumi/10 bg-white">
      {posts.map((post, i) => {
        const section = categoryMeta[post.category];
        const mainCat = getCategory(primaryCategory(post));
        return (
          <li key={`${post.category}-${post.slug}`}>
            <Reveal delay={(i % 4) * 60}>
              <div
                className={`group grid gap-5 p-6 transition-colors hover:bg-kinari/40 md:items-center md:gap-7 md:p-8 ${
                  post.eyecatch ? "md:grid-cols-[16rem_1fr]" : ""
                }`}
              >
                {post.eyecatch && (
                  <Link
                    href={postPath(post)}
                    className="relative block aspect-[16/9] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari"
                  >
                    <Image
                      src={post.eyecatch}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 92vw, 256px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                )}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center rounded-full bg-aka/10 px-3 py-1 text-xs font-semibold text-aka">
                      {section.label}
                    </span>
                    {mainCat && (
                      <Link
                        href={categoryPath(mainCat.slug)}
                        className="inline-flex items-center rounded-full border border-sumi/15 px-3 py-1 text-xs text-sumi-soft transition-colors hover:border-aka/40 hover:text-aka"
                      >
                        {mainCat.label}
                      </Link>
                    )}
                    <time dateTime={post.publishedAt} className="text-sm text-sumi-soft">
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                  <h2 className="font-serif text-lg leading-snug text-sumi md:text-xl">
                    <Link href={postPath(post)} className="transition-colors hover:text-aka">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="line-clamp-2 text-sm leading-relaxed text-sumi-soft">
                    {post.excerpt}
                  </p>
                  <Link
                    href={postPath(post)}
                    className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-semibold text-aka"
                  >
                    続きを読む
                    <Arrow />
                  </Link>
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
