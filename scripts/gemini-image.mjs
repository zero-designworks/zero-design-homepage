/**
 * Gemini APIで画像を生成し、サイトの掲載基準に合わせて整える
 * （Google GenAI SDK 使用 / 後処理は sharp）
 *
 * 使い方:
 *   node scripts/gemini-image.mjs "プロンプト" [ファイル名]
 *   node scripts/gemini-image.mjs "夕暮れの長浜の町並み" nagahama
 *
 * 後処理（既定でON）:
 *   1. 指定アスペクト比へ正確にトリミング（中央基準）
 *   2. 幅をリサイズ（既定1600px。--hero 指定時は1200px）
 *   3. 200KB以下になるまで品質を落として圧縮
 *      - 通常     → WebP（本文用）
 *      - --hero   → JPEG（アイキャッチ/OGP用。SNSの互換性を優先）
 *
 * オプション:
 *   --hero          アイキャッチとして書き出す（JPEG・幅1200）
 *   --raw           後処理をせず、生成されたままの画像を保存する
 *   --keep-original 後処理版に加えて、無加工の原本も残す
 *
 * 環境変数:
 *   GEMINI_API_KEY  APIキー（必須。コードには書かない）
 *   GEMINI_MODEL    モデル（既定: gemini-3.1-flash-lite-image）
 *   ASPECT_RATIO    アスペクト比（既定: 16:9）
 *   IMAGE_SIZE      生成解像度（既定: 1K）
 *   OUT_DIR         保存先（既定: D:/ホームページ作成/アイキャッチ）
 *   MAX_KB          目標ファイルサイズ上限（既定: 195）
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { GoogleGenAI } from "@google/genai";

// ---- 設定 ----
// 既定は gemini-3.1-flash-image。
// lite版（gemini-3.1-flash-lite-image）は安く速いが、日本語の文字を勝手に描き込み、
// しかも崩れた文字になるため記事用途には使わない。安さ優先で試す場合のみ
// GEMINI_MODEL=gemini-3.1-flash-lite-image で切り替える。
const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-image";
const ASPECT_RATIO = process.env.ASPECT_RATIO || "16:9";
const IMAGE_SIZE = process.env.IMAGE_SIZE || "1K";
const OUT_DIR = process.env.OUT_DIR || "D:/ホームページ作成/アイキャッチ";
const MAX_KB = Number(process.env.MAX_KB || 195);

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const positional = args.filter((a) => !a.startsWith("--"));

const IS_HERO = flags.has("--hero");
const IS_RAW = flags.has("--raw");
const KEEP_ORIGINAL = flags.has("--keep-original");
const TARGET_WIDTH = IS_HERO ? 1200 : 1600;

// ---- APIキーの取得（直書きしない）----
function loadApiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  const envPath = path.resolve(process.cwd(), ".env.local");
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const [k, ...rest] = t.split("=");
      if (k.trim() === "GEMINI_API_KEY") {
        return rest.join("=").trim().replace(/^["']|["']$/g, "");
      }
    }
  }
  throw new Error(
    "GEMINI_API_KEY が見つかりません。.env.local に GEMINI_API_KEY=... を設定してください。"
  );
}

/** "16:9" → 16/9 */
function parseRatio(str) {
  const [w, h] = str.split(":").map(Number);
  if (!w || !h) throw new Error(`アスペクト比の指定が不正です: ${str}`);
  return w / h;
}

/**
 * 指定比率へ中央基準でトリミングし、200KB以下に圧縮して保存する。
 * @returns {Promise<{outPath:string, width:number, height:number, kb:number, quality:number}>}
 */
async function processImage(buffer, outBase) {
  const ratio = parseRatio(ASPECT_RATIO);
  const meta = await sharp(buffer).metadata();

  // 1) 中央基準でトリミング（はみ出す側だけを削る）
  let cropW = meta.width;
  let cropH = Math.round(meta.width / ratio);
  if (cropH > meta.height) {
    cropH = meta.height;
    cropW = Math.round(meta.height * ratio);
  }
  const left = Math.max(0, Math.round((meta.width - cropW) / 2));
  const top = Math.max(0, Math.round((meta.height - cropH) / 2));

  // 2) リサイズ（拡大はしない）
  const width = Math.min(TARGET_WIDTH, cropW);
  const base = sharp(buffer)
    .extract({ left, top, width: cropW, height: cropH })
    .resize({ width, withoutEnlargement: true });

  // 3) 200KB以下になるまで品質を段階的に下げる
  const ext = IS_HERO ? "jpg" : "webp";
  const outPath = `${outBase}.${ext}`;
  let chosen = null;

  for (const quality of [86, 80, 74, 68, 62, 56]) {
    const out = IS_HERO
      ? await base.clone().jpeg({ quality, progressive: true, mozjpeg: true }).toBuffer()
      : await base.clone().webp({ quality, effort: 6 }).toBuffer();

    chosen = { buf: out, quality };
    if (out.length / 1024 <= MAX_KB) break;
  }

  fs.writeFileSync(outPath, chosen.buf);
  const info = await sharp(chosen.buf).metadata();
  return {
    outPath,
    width: info.width,
    height: info.height,
    kb: chosen.buf.length / 1024,
    quality: chosen.quality,
  };
}

// ---- メイン ----
async function main() {
  const prompt = positional[0];
  const name = positional[1] || `gemini-${Date.now()}`;

  if (!prompt) {
    console.error(
      '使い方: node scripts/gemini-image.mjs "プロンプト" [ファイル名] [--hero|--raw|--keep-original]'
    );
    process.exit(1);
  }

  const ai = new GoogleGenAI({ apiKey: loadApiKey() });

  console.log(`モデル : ${MODEL}`);
  console.log(`比率   : ${ASPECT_RATIO} / 生成解像度: ${IMAGE_SIZE}`);
  console.log(`出力   : ${IS_RAW ? "無加工" : IS_HERO ? "アイキャッチ(JPEG)" : "本文用(WebP)"}`);
  console.log(`生成中 : ${prompt.slice(0, 60)}${prompt.length > 60 ? "…" : ""}`);

  const started = Date.now();
  const res = await ai.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      responseModalities: ["IMAGE"],
      imageConfig: { aspectRatio: ASPECT_RATIO, imageSize: IMAGE_SIZE },
    },
  });

  const parts = res?.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find((p) => p.inlineData?.data);
  if (!imagePart) {
    const text = parts.map((p) => p.text).filter(Boolean).join("\n");
    throw new Error(
      `画像が返りませんでした。${text ? `\nモデルの応答: ${text.slice(0, 300)}` : ""}`
    );
  }

  const raw = Buffer.from(imagePart.inlineData.data, "base64");
  const rawMeta = await sharp(raw).metadata();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outBase = path.join(OUT_DIR, name);

  console.log(
    `生成完了: ${rawMeta.width}x${rawMeta.height} / ${(raw.length / 1024).toFixed(0)}KB (${((Date.now() - started) / 1000).toFixed(0)}秒)`
  );

  // --raw：後処理せずそのまま保存
  if (IS_RAW) {
    const mime = imagePart.inlineData.mimeType || "image/png";
    const ext = mime.includes("jpeg") ? "jpg" : mime.includes("webp") ? "webp" : "png";
    const p = `${outBase}.${ext}`;
    fs.writeFileSync(p, raw);
    console.log(`保存    : ${p}`);
    return;
  }

  if (KEEP_ORIGINAL) {
    const p = `${outBase}-original.png`;
    fs.writeFileSync(p, raw);
    console.log(`原本    : ${p}`);
  }

  const r = await processImage(raw, outBase);
  const exact = Math.abs(r.width / r.height - parseRatio(ASPECT_RATIO)) < 0.005;
  console.log(
    `保存    : ${r.outPath}\n` +
      `          ${r.width}x${r.height} ${exact ? `(${ASPECT_RATIO} 一致)` : "(比率ずれあり)"} / ` +
      `${r.kb.toFixed(0)}KB ${r.kb <= MAX_KB ? "" : "※上限超過"} / quality=${r.quality}`
  );
}

main().catch((e) => {
  console.error("エラー:", e.message);
  process.exit(1);
});
