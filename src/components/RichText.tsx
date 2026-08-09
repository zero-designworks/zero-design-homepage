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
 * 「。！？」で文を区切ります。
 * ただし **強調** の内側にある「。！？」では区切りません
 * （区切ると ** のペアが壊れ、記号がそのまま表示されてしまうため）。
 */
function splitSentences(text: string): string[] {
  const out: string[] = [];
  let buf = "";
  let inEmphasis = false;

  for (let i = 0; i < text.length; i++) {
    if (text.startsWith("**", i)) {
      inEmphasis = !inEmphasis;
      buf += "**";
      i += 1; // 2文字目の * を読み飛ばす
      continue;
    }
    const ch = text[i];
    buf += ch;
    if (!inEmphasis && (ch === "。" || ch === "！" || ch === "？")) {
      out.push(buf.trim());
      buf = "";
    }
  }
  if (buf.trim()) out.push(buf.trim());

  return out.filter(Boolean);
}

/**
 * スマホでは1文ずつ改行し、文と文の間に1行分の余白を空けます。
 * PC（sm以上）では通常の文章として続けて表示します。
 */
export function Sentences({ text }: { text: string }) {
  const parts = splitSentences(text);

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
