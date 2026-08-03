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
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: post.eyecatch ?? siteConfig.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.eyecatch ?? siteConfig.ogImage],
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

  const image = post.eyecatch ?? siteConfig.ogImage;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "ja",
    mainEntityOfPage: `${siteConfig.url}${categoryMeta.column.path}/${post.slug}`,
    image: `${siteConfig.url}${image}`,
    author: post.author
      ? { "@type": "Person", name: post.author.name }
      : { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
  };

  return (
    <>
      <PostArticle post={post} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
