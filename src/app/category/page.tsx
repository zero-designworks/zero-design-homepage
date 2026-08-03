import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryNav } from "@/components/CategoryNav";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "カテゴリー一覧",
  description:
    "クラウドファンディング、AI活用、SNS集客、地域活性化、歴史・文化財、制作実績。ZEROデザインの記事をカテゴリーから探せます。",
  alternates: { canonical: "/category" },
};

export default function CategoryIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Categories"
        title="カテゴリー一覧"
        lead="知りたいテーマから記事を探せます。クラウドファンディングやAI活用、地域・歴史のプロジェクトまで。"
      />

      <section className="pb-4">
        <div className="container-narrow">
          <Breadcrumb items={[{ label: "カテゴリー" }]} />
        </div>
      </section>

      <CategoryNav title="すべてのカテゴリー" />

      <CtaBand />
    </>
  );
}
