/**
 * 記事の画像枚数をチェックする
 *
 * 基準：H2見出し1つにつき本文画像1枚（動画・Instagram埋め込みも1枚として数える）
 *
 * 使い方:
 *   node scripts/check-article-images.mjs          不足している記事だけ表示
 *   node scripts/check-article-images.mjs --all    全記事を表示
 */
import fs from "node:fs";
import path from "node:path";

const POSTS = path.resolve(process.cwd(), "src/data/posts.ts");
const showAll = process.argv.includes("--all");

const src = fs.readFileSync(POSTS, "utf8");
const marks = [...src.matchAll(/\n    slug: "([a-z0-9-]+)",/g)];

const rows = marks.map((m, i) => {
  const slug = m[1];
  const seg = src.slice(m.index, i + 1 < marks.length ? marks[i + 1].index : src.length);
  const count = (re) => (seg.match(re) || []).length;
  const h = count(/type: "h"/g);
  const visual = count(/type: "img"/g) + count(/type: "video"/g) + count(/type: "instagram"/g);
  return {
    slug,
    h,
    img: count(/type: "img"/g),
    video: count(/type: "video"/g),
    insta: count(/type: "instagram"/g),
    visual,
    lack: Math.max(0, h - visual),
    eyecatch: /eyecatch:/.test(seg),
  };
});

const target = showAll ? rows : rows.filter((r) => r.lack > 0 || !r.eyecatch);
target.sort((a, b) => b.lack - a.lack);

console.log("slug".padEnd(38) + " H2  画像 動画  IG   計  不足  アイキャッチ");
console.log("-".repeat(84));
for (const r of target) {
  console.log(
    r.slug.padEnd(38) +
      String(r.h).padStart(3) +
      String(r.img).padStart(5) +
      String(r.video).padStart(5) +
      String(r.insta).padStart(4) +
      String(r.visual).padStart(5) +
      (r.lack ? String(r.lack).padStart(5) + "枚" : "    -  ") +
      (r.eyecatch ? "   あり" : "   なし ←要対応")
  );
}

const lackTotal = rows.reduce((s, r) => s + r.lack, 0);
const noEyecatch = rows.filter((r) => !r.eyecatch).length;
console.log(`\n記事数: ${rows.length}`);
console.log(`本文画像が不足している記事: ${rows.filter((r) => r.lack > 0).length}本 / 不足合計 ${lackTotal}枚`);
console.log(`アイキャッチ未設定: ${noEyecatch}本`);
if (lackTotal === 0 && noEyecatch === 0) console.log("→ すべて基準を満たしています");
