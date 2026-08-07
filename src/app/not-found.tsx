import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center paper-texture px-6 pt-20 text-center">
      <div>
        <p className="font-serif text-6xl font-semibold text-aka">404</p>
        <h1 className="mt-4 font-serif text-2xl text-sumi">ページが見つかりませんでした</h1>
        <p className="mt-3 text-sumi-soft">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-brand bg-aka px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-aka-deep"
        >
          ホームに戻る
        </Link>
      </div>
    </section>
  );
}
