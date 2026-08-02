import type { Metadata } from "next";
import { PostList } from "@/components/PostList";
import { categoryMeta } from "@/data/posts";

export const metadata: Metadata = {
  title: categoryMeta.column.label,
  description: categoryMeta.column.description,
  alternates: { canonical: categoryMeta.column.path },
};

export default function ColumnPage() {
  return <PostList category="column" />;
}
