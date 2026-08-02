# ZEROデザイン 公式サイト

「ゼロからの挑戦に、伝える力を。」— クラウドファンディング支援・SNS動画・AI動画・Web/LP制作のコーポレートサイト。

## 技術構成

- **Next.js 15**（App Router） / **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- フォント：Noto Serif JP（見出し）+ Noto Sans JP（本文）
- デプロイ想定：Vercel

## セットアップ

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド（静的生成）
npm start        # 本番プレビュー
```

> 注意：`npm run dev` の実行中に `npm run build` を走らせると `.next` が壊れます。ビルド時は dev を止めてください。

## デザインシステム

`src/app/globals.css` の `@theme` で一元管理。

| 用途 | 色 | 値 |
|------|-----|-----|
| 白 | `white` | #ffffff |
| 墨色 | `sumi` | #1c1a17 |
| 深い赤 | `aka` | #9c2724 |
| 金 | `kin` | #b8945a |
| 生成り | `kinari` | #f6f1e7 |
| 濃紺 | `kon` | #1e2a44 |

## コンテンツの編集（コードを触らずに更新できます）

すべて `src/data/` に集約：

| ファイル | 内容 |
|----------|------|
| `siteConfig.ts` | サイト名・コピー・連絡先・ナビ項目 |
| `services.ts` | サービス4種・選ばれる理由・制作の流れ |
| `crowdfundingUses.ts` | クラファン活用法カテゴリー |
| `works.ts` | クラウドファンディング実績 |
| `videos.ts` | **YouTube実績（URLを足すだけで実績ページに自動表示）** |
| `faqs.ts` | よくある質問 |
| `profile.ts` | 代表プロフィール |
| `socialLinks.ts` | SNS・外部リンク |

### YouTube動画実績の追加

`src/data/videos.ts` の配列に追記するだけ：

```ts
{
  id: "work-001",
  title: "企業PR動画",
  youtubeUrl: "https://www.youtube.com/watch?v=xxxxxxxx",
  category: "YouTube動画",
  description: "動画の概要",
}
```

## お問い合わせフォーム

`src/components/ContactForm.tsx` の `FORM_ENDPOINT` を設定すると自動でPOST送信します（Formspree等）。
未設定の場合は、メールソフトが開く `mailto` フォールバックで動作します。

## AIイメージ画像

`public/images/generated/` の画像は OpenAI（gpt-image-1）で生成。
生成スクリプトは開発時のスクラッチに保存（ブランドカラーに合わせた和モダン調）。差し替え・再生成も可能です。

## ページ構成（実装済み）

HOME / ZEROデザインについて / クラウドファンディングとは / 活用法 / サービス / 実績 / プロフィール / 料金・FAQ / お問い合わせ / プライバシーポリシー / 特定商取引法に基づく表記

## SEO

- メタデータ・OGP・Twitterカード（`layout.tsx` / 各ページ）
- 構造化データ（Organization JSON-LD）
- `sitemap.xml` / `robots.txt` 自動生成
- 全ページ静的生成（高速表示）
