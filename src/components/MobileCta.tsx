import Link from "next/link";

// スマホ画面下部の固定CTA（仕様書 17）
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-sumi/10 bg-sumi/10 lg:hidden">
      <Link
        href="/contact"
        className="flex items-center justify-center gap-1.5 bg-aka py-3.5 text-sm font-semibold text-white"
      >
        <IconChat />
        無料相談
      </Link>
      <Link
        href="/works"
        className="flex items-center justify-center gap-1.5 bg-white py-3.5 text-sm font-semibold text-sumi"
      >
        <IconPlay />
        実績を見る
      </Link>
    </div>
  );
}

function IconChat() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 4.5A1.5 1.5 0 0 1 4 3h8a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 12 10H6l-3 2.5V10H4a1.5 1.5 0 0 1-1.5-1.5v-4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 5.5 11 8l-4.5 2.5v-5Z" fill="currentColor" />
    </svg>
  );
}
