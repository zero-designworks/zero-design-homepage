import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { categoryMeta } from "@/data/posts";

export const metadata: Metadata = {
  title: categoryMeta.news.label,
  description: categoryMeta.news.description,
  alternates: { canonical: categoryMeta.news.path },
};

export default function NewsPage() {
  return <PostList category="news" />;
}
