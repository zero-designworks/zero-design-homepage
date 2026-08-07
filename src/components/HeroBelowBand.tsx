import Link from "next/link";
import { Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { LatestNewsTicker } from "@/components/LatestNewsTicker";

// ファーストビューから移設した信頼情報。
// （CAMPFIREパートナー等は、ここで自然に紹介します）
const trustPoints = [
  { label: "CAMPFIRE公式パートナー", note: "クラウドファンディング・キュレーター" },
  { label: "支援総額 736万円 達成", note: "小谷寺 本堂再建プロジェクト" },
  { label: "全国どこからでも対応", note: "撮影なし・オンライン完結" },
];

/**
 * ファーストビュー直下のバンド。
 * 左：最新のお知らせ（FVから移設） / 右：信頼情報 ＋ 支援事例への導線
 */
export function HeroBelowBand() {
  return (
    <section className="border-y border-sumi/8 bg-white py-14 md:py-16">
      <div className="container-brand grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
        {/* 最新のお知らせ */}
        <Reveal>
          <LatestNewsTicker />
        </Reveal>

        {/* 信頼情報＋支援事例導線 */}
        <Reveal delay={100}>
          <div>
            <ul className="space-y-3.5">
              {trustPoints.map((t) => (
                <li key={t.label} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-sumi">{t.label}</span>
                    <span className="mt-0.5 block text-xs text-sumi-soft">{t.note}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Link
                href="#cases"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-brand border border-sumi/20 px-6 py-3.5 text-sm font-semibold text-sumi transition-colors hover:border-aka hover:text-aka sm:w-auto sm:px-8"
              >
                支援事例を見る
                <Arrow />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="8.25" stroke="#9c2724" strokeOpacity="0.3" strokeWidth="1.2" />
      <path
        d="m5.5 9 2.3 2.3L12.5 6.5"
        stroke="#9c2724"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
