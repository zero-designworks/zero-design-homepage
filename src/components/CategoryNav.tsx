import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { blogCategories, categoryPath } from "@/data/blogCategories";
import { countPostsInCategory } from "@/data/posts";

/** カテゴリー一覧（親＋子）。記事一覧・アーカイブ下部の回遊導線 */
export function CategoryNav({
  activeSlug,
  title = "カテゴリーから探す",
}: {
  activeSlug?: string;
  title?: string;
}) {
  return (
    <section className="paper-texture py-16 md:py-20">
      <div className="container-narrow">
        <Reveal>
          <h2 className="font-serif text-xl text-sumi md:text-2xl">{title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {blogCategories.map((parent, i) => {
            const parentCount = countPostsInCategory(parent.slug);
            return (
              <Reveal key={parent.slug} delay={(i % 2) * 70}>
                <div className="h-full rounded-brand border border-sumi/10 bg-white p-6">
                  <Link
                    href={categoryPath(parent.slug)}
                    className={`font-serif text-lg transition-colors hover:text-aka ${
                      activeSlug === parent.slug ? "text-aka" : "text-sumi"
                    }`}
                  >
                    {parent.label}
                    <span className="ml-2 text-xs font-sans text-sumi-soft/70">
                      {parentCount}
                    </span>
                  </Link>
                  {parent.children && parent.children.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {parent.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={categoryPath(child.slug)}
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                              activeSlug === child.slug
                                ? "border-aka bg-aka text-white"
                                : "border-sumi/15 text-sumi-soft hover:border-aka/40 hover:text-aka"
                            }`}
                          >
                            {child.label}
                            <span
                              className={
                                activeSlug === child.slug
                                  ? "text-white/70"
                                  : "text-sumi-soft/60"
                              }
                            >
                              {countPostsInCategory(child.slug)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
