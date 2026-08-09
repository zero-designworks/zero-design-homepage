import { Fragment } from "react";

/**
 * 本文中の **強調したい言葉** を赤字で表示します。
 * 記事データ（posts.ts）の text / items / 吹き出しで使えます。
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((s, i) =>
        s.startsWith("**") && s.endsWith("**") ? (
          <strong key={i} className="font-semibold text-aka">
            {s.slice(2, -2)}
          </strong>
        ) : (
          <Fragment key={i}>{s}</Fragment>
        )
      )}
    </>
  );
}

/**
 * スマホでは「。！？」ごとに1文ずつ改行し、文と文の間に1行分の余白を空けます。
 * PC（sm以上）では通常の文章として続けて表示します。
 */
export function Sentences({ text }: { text: string }) {
  const parts = text
    .split(/(?<=[。！？])/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (parts.length <= 1) return <RichText text={text} />;

  return (
    <>
      {parts.map((s, i) => (
        <span key={i} className="mb-[2em] block last:mb-0 sm:mb-0 sm:inline">
          <RichText text={s} />
        </span>
      ))}
    </>
  );
}
