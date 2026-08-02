import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostArticle } from "@/components/PostArticle";
import { getPost, getPostsByCategory, categoryMeta } from "@/data/posts";
import { siteConfig } from "@/data/siteConfig";

export function generateStaticParams() {
  return getPostsByCategory("news").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("news", slug);
  if (!post) return {};
  const url = `${categoryMeta.news.path}/${post.slug}`;
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

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost("news", slug);
  if (!post) notFound();
  return (
    <>
      <PostArticle post={post} />
      <ArticleJsonLd slug={post.slug} title={post.title} date={post.publishedAt} desc={post.excerpt} />
    </>
  );
}

function ArticleJsonLd({
  slug,
  title,
  date,
  desc,
}: {
  slug: string;
  title: string;
  date: string;
  desc: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: desc,
    datePublished: date,
    dateModified: date,
    inLanguage: "ja",
    mainEntityOfPage: `${siteConfig.url}${categoryMeta.news.path}/${slug}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/icon.svg` },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
