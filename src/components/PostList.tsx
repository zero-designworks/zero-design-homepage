import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import {
  categoryMeta,
  formatDate,
  getPostsByCategory,
  type PostCategory,
} from "@/data/posts";

export function PostList({ category }: { category: PostCategory }) {
  const cat = categoryMeta[category];
  const items = getPostsByCategory(category);

  return (
    <>
      <PageHero eyebrow={category === "news" ? "News" : "Column"} title={cat.label} lead={cat.description} />

      <section className="pb-12 md:pb-16">
        <div className="container-narrow">
          {items.length === 0 ? (
            <div className="rounded-brand border border-dashed border-sumi/20 bg-kinari/30 p-12 text-center text-sm text-sumi-soft">
              現在準備中です。近日公開予定ですので、どうぞお楽しみに。
            </div>
          ) : (
            <ul className="divide-y divide-sumi/10 overflow-hidden rounded-brand border border-sumi/10 bg-white">
              {items.map((post, i) => (
                <li key={post.slug}>
                  <Reveal delay={(i % 4) * 60}>
                    <Link
                      href={`${cat.path}/${post.slug}`}
                      className="group grid gap-5 p-6 transition-colors hover:bg-kinari/40 md:grid-cols-[16rem_1fr] md:items-center md:gap-7 md:p-8"
                    >
                      {post.eyecatch && (
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-brand border border-sumi/10 bg-kinari">
                          <Image
                            src={post.eyecatch}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 92vw, 256px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center rounded-full bg-aka/10 px-3 py-1 text-xs font-semibold text-aka">
                            {cat.label}
                          </span>
                          <time dateTime={post.publishedAt} className="text-sm text-sumi-soft">
                            {formatDate(post.publishedAt)}
                          </time>
                        </div>
                        <h2 className="font-serif text-lg leading-snug text-sumi transition-colors group-hover:text-aka md:text-xl">
                          {post.title}
                        </h2>
                        <p className="line-clamp-2 text-sm leading-relaxed text-sumi-soft">
                          {post.excerpt}
                        </p>
                        <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-aka">
                          続きを読む
                          <Arrow />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
