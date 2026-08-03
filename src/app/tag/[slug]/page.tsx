import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PostCards } from "@/components/PostCards";
import { CategoryNav } from "@/components/CategoryNav";
import { CtaBand } from "@/components/CtaBand";
import { getPostsByTag, usedTagSlugs } from "@/data/posts";
import { getTag } from "@/data/tags";

export function generateStaticParams() {
  return usedTagSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) return {};
  return {
    title: `${tag.label}の記事`,
    description: `「${tag.label}」に関する記事の一覧です。`,
    alternates: { canonical: `/tag/${tag.slug}` },
    // タグページは重複コンテンツになりやすいため、インデックスさせずリンクは辿らせる
    robots: { index: false, follow: true },
  };
}

export default async function TagArchivePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) notFound();

  const posts = getPostsByTag(tag.slug);

  return (
    <>
      <PageHero
        eyebrow="Tag"
        title={`# ${tag.label}`}
        lead={`「${tag.label}」に関する記事の一覧です。`}
      />

      <section className="pb-10 md:pb-12">
        <div className="container-narrow">
          <Breadcrumb items={[{ label: "タグ" }, { label: tag.label }]} />
          <p className="mb-5 text-sm text-sumi-soft">{posts.length} 件の記事</p>
          <PostCards
            posts={posts}
            emptyMessage="このタグの記事は現在準備中です。"
          />
        </div>
      </section>

      <CategoryNav />

      <CtaBand />
    </>
  );
}
