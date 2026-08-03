import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { PostCards } from "@/components/PostCards";
import { CategoryNav } from "@/components/CategoryNav";
import { categoryMeta, getPostsByCategory, type PostCategory } from "@/data/posts";

export function PostList({ category }: { category: PostCategory }) {
  const cat = categoryMeta[category];
  const items = getPostsByCategory(category);

  return (
    <>
      <PageHero
        eyebrow={category === "news" ? "News" : "Column"}
        title={cat.label}
        lead={cat.description}
      />

      <section className="pb-12 md:pb-16">
        <div className="container-narrow">
          <PostCards posts={items} />
        </div>
      </section>

      <CategoryNav />

      <CtaBand />
    </>
  );
}
