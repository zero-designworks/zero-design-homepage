import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import {
  categoryMeta,
  formatDate,
  getPostsByCategory,
  postPath,
  type Post,
  type PostCategory,
} from "@/data/posts";

const LIMIT = 3;

/** HOMEの「最新情報」。お知らせ／コラムの最新3件をデータから自動取得して表示 */
export function LatestPosts() {
  return (
    <section className="py-24 md:py-28">
      <div className="container-brand">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Latest</span>
            <h2 className="mt-4 font-serif text-2xl leading-snug text-sumi md:text-4xl">
              最新情報
            </h2>
            <p className="mt-5 leading-relaxed text-sumi-soft">
              ZEROデザインからのお知らせと、クラウドファンディング・SNS発信のヒントになるお役立ちコラムをお届けします。
            </p>
          </div>
        </Reveal>

        {/* PCは2カラム、スマホは縦並び */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
          <PostColumn category="news" />
          <PostColumn category="column" />
        </div>
      </div>
    </section>
  );
}

function PostColumn({ category }: { category: PostCategory }) {
  const meta = categoryMeta[category];
  const items = getPostsByCategory(category).slice(0, LIMIT);

  return (
    <Reveal delay={category === "column" ? 120 : 0}>
      <div className="flex h-full flex-col">
        <div className="flex items-end justify-between gap-4 border-b border-sumi/10 pb-4">
          <h3 className="font-serif text-xl text-sumi md:text-2xl">
            {meta.label}
            <span className="ml-3 text-xs font-sans tracking-widest text-kin">
              {category === "news" ? "NEWS" : "COLUMN"}
            </span>
          </h3>
          <Link
            href={meta.path}
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-aka sm:inline-flex"
          >
            一覧を見る
            <Arrow />
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="mt-6 rounded-brand border border-dashed border-sumi/20 bg-kinari/30 p-8 text-center text-sm text-sumi-soft">
            現在準備中です。
          </p>
        ) : (
          <ul className="mt-2 flex-1 divide-y divide-sumi/10">
            {items.map((post) => (
              <li key={post.slug}>
                <PostRow post={post} />
              </li>
            ))}
          </ul>
        )}

        {/* スマホ用の「一覧を見る」ボタン */}
        <div className="mt-7">
          <Link
            href={meta.path}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-brand border border-sumi/20 px-6 py-3.5 text-sm font-semibold text-sumi transition-colors hover:border-aka hover:text-aka sm:w-auto sm:px-8"
          >
            {meta.label}の一覧を見る
            <Arrow />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={postPath(post)}
      className="group flex items-center gap-4 py-5 transition-colors hover:bg-kinari/40 sm:gap-5"
    >
      <div className="relative aspect-[4/3] w-24 shrink-0 overflow-hidden rounded-brand border border-sumi/10 bg-kinari sm:w-32">
        {post.eyecatch ? (
          <Image
            src={post.eyecatch}
            alt={post.title}
            fill
            sizes="128px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full items-center justify-center font-serif text-xs text-sumi-soft/50">
            ZERO
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <time dateTime={post.publishedAt} className="text-xs text-sumi-soft">
          {formatDate(post.publishedAt)}
        </time>
        <h4 className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-sumi transition-colors group-hover:text-aka md:text-[0.95rem]">
          {post.title}
        </h4>
      </div>
    </Link>
  );
}
