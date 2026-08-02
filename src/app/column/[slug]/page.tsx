import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/PostArticle";
import { getPost, getPostsByCategory, categoryMeta } from "@/data/posts";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams() {
  return getPostsByCategory("column").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("column", slug);
  if (!post) return {};
  const url = `${categoryMeta.column.path}/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: siteConfig.ogImage, width: 1536, height: 1024 }],
    },
  };
}

export default async function ColumnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("column", slug);
  if (!post) notFound();
  return <PostArticle post={post} />;
}
