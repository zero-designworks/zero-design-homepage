import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { WorksExplorer } from "@/components/WorksExplorer";

export const metadata: Metadata = {
  title: "制作・支援実績",
  description:
    "ZEROデザインのクラウドファンディング支援・PR動画・広告動画・プロモーション動画・自己PR動画・デザインの実績をご紹介します。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Works"
        title={<>制作・支援実績</>}
        lead="ゼロから伴走したプロジェクトの一部をご紹介します。実績は随時追加していきます。"
      />

      <WorksExplorer />

      <CtaBand title="あなたのプロジェクトも、実績のひとつに。" />
    </>
  );
}
