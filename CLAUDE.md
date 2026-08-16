# ZEROデザイン公式サイト｜作業ガイド

Next.js 15 + TypeScript + Tailwind CSS v4。本番: https://zerodesign-works.jp

## SEO記事の企画・執筆を依頼されたとき（重要）

「次に書く記事を考えて」「今週の記事を3本選んで」「新しい記事ネタを追加して」
などの指示を受けたら、**必ず最初に `content/seo/README.md` を読み、そこの運用ルールに従うこと。**

提案の前に、以下4点を必ず確認する。

1. `content/seo/article-ideas.json` … 記事ネタ管理ファイル（ステータス・優先度）
2. `src/data/posts.ts` … 公開済み記事（**重複チェックに必須**）
3. `src/data/blogCategories.ts` … カテゴリー体系
4. `src/data/services.ts` / `src/app/services` / `src/app/sns-ai-video` … サービス内容

記事を公開したら、`article-ideas.json` の `status` を `published` に更新し、
`publishedAt` と `url` を記録すること。

## データの置き場所

| 内容 | ファイル |
|---|---|
| 記事本文 | `src/data/posts.ts`（`categories` は必須・1つ以上） |
| カテゴリー | `src/data/blogCategories.ts` |
| タグ（カテゴリーとは別管理） | `src/data/tags.ts` |
| サービス | `src/data/services.ts` |
| 実績・動画 | `src/data/works.ts` / `src/data/videos.ts` |
| サイト共通設定（正規URL等） | `src/data/siteConfig.ts` |

## 画像のルール

- 本文画像 → **WebP**（200KB以下）
- アイキャッチ → **JPEG**（200KB以下）
  ※ OGP画像はNext/Imageの最適化が効かず原寸配信されるため、互換性重視でJPEG
- 保存先 `public/images/posts/`
- **すべての画像に alt を設定する**

### 記事用画像の生成（Gemini）

記事のイラストは `scripts/gemini-image.mjs` で生成する。**モデルは `gemini-3.1-flash-image`**（スクリプトの既定値）。

```bash
node scripts/gemini-image.mjs "プロンプト" ファイル名          # 本文用（WebP・幅1600）
node scripts/gemini-image.mjs "プロンプト" ファイル名 --hero   # アイキャッチ（JPEG・幅1200）
OUT_DIR=public/images/posts node scripts/gemini-image.mjs ...  # 保存先を変える
```

- 16:9へ自動トリミング＋200KB以下へ自動圧縮まで行う
- **`gemini-3.1-flash-lite-image` は使わない。** 安く速いが、日本語の文字を勝手に描き込み、
  かつ崩れた文字になるため作り直しになる
- プロンプトには必ず「文字は入れない」を含める
- 生成後は**必ず目視で確認**する（意図しない文字・不自然な描写がないか）
- 既存記事の作風に合わせる：やわらかな水彩＋細い墨線、生成り色の背景、深い赤を差し色

### 記事に入れる画像の枚数（重要）

**H2見出し1つにつき、本文画像を1枚入れる。** アイキャッチはこれとは別に必ず用意する。

- 例：H2が8個の記事 → アイキャッチ1枚＋本文画像8枚
- 画像は原則、対応するH2見出しの直後に置く
- まとめ・FAQなど文字だけで完結する見出しは省略可だが、**その分どこかで補う**
- 画像には必ず `caption`（その見出しの要点を1文で）を添える

枚数が足りているかは次で確認できる:
```bash
node scripts/check-article-images.mjs
```

## 注意事項

- `npm run dev` の実行中に `npm run build` を走らせると `.next` が壊れる。ビルド前に開発サーバーを止めること
- 正規URLは **www なし**（`https://zerodesign-works.jp`）。Vercel側もwww→非wwwへ308転送する設定
- タイトルは全ページ「○○｜ZEROデザイン」形式（`layout.tsx` の template で自動付与）
- push は**ユーザーの指示があったときのみ**行う
