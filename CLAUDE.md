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

## 注意事項

- `npm run dev` の実行中に `npm run build` を走らせると `.next` が壊れる。ビルド前に開発サーバーを止めること
- 正規URLは **www なし**（`https://zerodesign-works.jp`）。Vercel側もwww→非wwwへ308転送する設定
- タイトルは全ページ「○○｜ZEROデザイン」形式（`layout.tsx` の template で自動付与）
- push は**ユーザーの指示があったときのみ**行う
