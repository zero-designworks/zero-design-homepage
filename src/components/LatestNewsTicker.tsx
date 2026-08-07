import Link from "next/link";
import { Arrow } from "@/components/Button";
import { newsPosts, formatDate } from "@/data/posts";

/**
 * ファーストビュー内に置く「最新のお知らせ」。
 * data/posts.ts のお知らせを新しい順に3件、自動で表示します。
 */
export function LatestNewsTicker({ limit = 3 }: { limit?: number }) {
  const items = newsPosts.slice(0, limit);
  if (items.length === 0) return null;

  return (
    <aside
      aria-label="最新のお知らせ"
      className="rounded-brand border border-sumi/10 bg-white/80 p-5 backdrop-blur-sm sm:p-6"
    >
      <p className="text-xs font-semibold tracking-widest text-aka">最新のお知らせ</p>

      <ul className="mt-3 divide-y divide-sumi/8">
        {items.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/news/${p.slug}`}
              className="group flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <time
                dateTime={p.publishedAt}
                className="shrink-0 text-xs tabular-nums text-sumi-soft/70"
              >
                {p.publishedAt.replace(/-/g, ".")}
              </time>
              <span className="line-clamp-1 text-sm text-sumi transition-colors group-hover:text-aka">
                {p.title}
              </span>
              <span className="sr-only">（{formatDate(p.publishedAt)}）</span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/news"
        className="group mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-aka"
      >
        一覧を見る
        <Arrow />
      </Link>
    </aside>
  );
}
