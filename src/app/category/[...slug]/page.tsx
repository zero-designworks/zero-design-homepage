import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb, type Crumb } from "@/components/Breadcrumb";
import { PostCards } from "@/components/PostCards";
import { CategoryNav } from "@/components/CategoryNav";
import { CtaBand } from "@/components/CtaBand";
import { getPostsByBlogCategory } from "@/data/posts";
import { siteConfig } from "@/data/siteConfig";
import {
  allCategoryParams,
  categoryPath,
  categoryTrail,
  getCategory,
  getParentCategory,
  type CategorySlug,
} from "@/data/blogCategories";

export function generateStaticParams() {
  return allCategoryParams();
}

/** URLセグメントを検証し、正しい階層のカテゴリーだけを受け付ける */
function resolve(segments: string[]) {
  if (segments.length === 0 || segments.length > 2) return undefined;
  const target = getCategory(segments[segments.length - 1]);
  if (!target) return undefined;

  const parent = getParentCategory(target.slug);
  if (segments.length === 1) {
    // 親カテゴリーのみ有効（子は必ず /親/子 でアクセス）
    return parent ? undefined : target;
  }
  // 2階層：親スラッグが一致していること
  return parent && parent.slug === segments[0] ? target : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = resolve(slug);
  if (!category) return {};
  const trail = categoryTrail(category.slug);
  const titlePath = trail.map((c) => c.label).join("｜");

  return {
    title: `${titlePath}の記事`,
    description: category.description,
    alternates: { canonical: categoryPath(category.slug) },
    openGraph: {
      type: "website",
      url: categoryPath(category.slug),
      title: `${titlePath}の記事｜${siteConfig.name}`,
      description: category.description,
      images: [{ url: siteConfig.ogImage }],
    },
  };
}

export default async function CategoryArchivePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const category = resolve(slug);
  if (!category) notFound();

  const posts = getPostsByBlogCategory(category.slug);
  const trail = categoryTrail(category.slug);
  const parent = getParentCategory(category.slug);

  const crumbs: Crumb[] = [
    { label: "カテゴリー", href: "/category" },
    ...trail.map((c, i) =>
      i === trail.length - 1
        ? { label: c.label }
        : { label: c.label, href: categoryPath(c.slug) }
    ),
  ];

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.label}
        lead={category.description}
      />

      <section className="pb-10 md:pb-12">
        <div className="container-narrow">
          <Breadcrumb items={crumbs} />

          {/* 親カテゴリーなら子カテゴリーへの導線を表示 */}
          {category.children && category.children.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {category.children.map((child) => (
                <Link
                  key={child.slug}
                  href={categoryPath(child.slug)}
                  className="inline-flex items-center rounded-full border border-sumi/15 px-4 py-2 text-sm text-sumi-soft transition-colors hover:border-aka/40 hover:text-aka"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}

          {/* 子カテゴリーなら親へ戻る導線 */}
          {parent && (
            <div className="mb-8">
              <Link
                href={categoryPath(parent.slug)}
                className="inline-flex items-center gap-2 text-sm text-sumi-soft transition-colors hover:text-aka"
              >
                <span aria-hidden>←</span>
                {parent.label}の記事をすべて見る
              </Link>
            </div>
          )}

          <p className="mb-5 text-sm text-sumi-soft">
            {posts.length} 件の記事
          </p>

          <PostCards
            posts={posts}
            emptyMessage="このカテゴリーの記事は現在準備中です。近日公開予定ですので、どうぞお楽しみに。"
          />
        </div>
      </section>

      <CategoryNav activeSlug={category.slug as CategorySlug} />

      <CtaBand />
    </>
  );
}
