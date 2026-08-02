// 既存のYouTube動画URLをここに追加するだけで、実績ページに表示されます。
export type Video = {
  id: string;
  title: string;
  youtubeUrl: string;
  category:
    | "クラウドファンディングPR動画"
    | "広告動画"
    | "YouTube動画"
    | "SNSショート動画"
    | "AI動画";
  client?: string;
  role?: string[];
  description?: string;
  result?: string;
  publishedAt?: string;
  vertical?: boolean; // YouTube Shorts など縦型動画
};

export const videos: Video[] = [
  {
    id: "cf-pr-courage-anime",
    title: "クラージュデザイン株式会社様　AIアニメストーリー動画",
    youtubeUrl: "https://www.youtube.com/watch?v=2CNthQ-K52c",
    category: "クラウドファンディングPR動画",
    client: "クラージュデザイン株式会社様",
  },
  {
    id: "cf-pr-kodaniji-interview1",
    title: "小谷寺様　安田住職インタビュー動画①",
    youtubeUrl: "https://youtu.be/HMgFuCOXQNA",
    category: "クラウドファンディングPR動画",
    client: "小谷寺様",
  },
  {
    id: "cf-pr-kodaniji-history-oichi",
    title: "小谷寺様　歴史PR動画（お市の方様）",
    youtubeUrl: "https://youtu.be/0WZN2Ob8USQ",
    category: "クラウドファンディングPR動画",
    client: "小谷寺様",
  },
  {
    id: "cf-pr-kodaniji-return",
    title: "小谷寺様　リターン品紹介動画",
    youtubeUrl: "https://youtube.com/shorts/VKBgjPVEkJU",
    category: "クラウドファンディングPR動画",
    client: "小谷寺様",
    vertical: true,
  },

  {
    id: "ad-zero-pet-cremation",
    title: "ペット火葬広告動画",
    youtubeUrl: "https://www.instagram.com/p/DSB-NEQkrOY/",
    category: "広告動画",
    client: "株式会社ZERO様",
  },
  {
    id: "ad-zero-pet-taxi",
    title: "ペットタクシーZERO広告動画",
    youtubeUrl: "https://www.instagram.com/p/DRTJ_qekllv/",
    category: "広告動画",
    client: "株式会社ZERO様",
  },
  {
    id: "ad-zero-mv",
    title: "MV風PR動画",
    youtubeUrl: "https://www.instagram.com/reels/DbFO5aLSz5T/",
    category: "広告動画",
    client: "株式会社ZERO様",
  },
  {
    id: "ad-pet-reien-story",
    title: "ペット霊園様　ストーリー動画",
    youtubeUrl: "https://youtube.com/shorts/xUESjuJdLVk",
    category: "広告動画",
    client: "ペット霊園様",
    vertical: true,
  },
];

// YouTube URL から動画IDを取り出すヘルパー
export function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}

// Instagram の投稿/リールURLから埋め込みURLを生成するヘルパー
export function instagramEmbedUrl(url: string): string | null {
  const m = url.match(/instagram\.com\/(?:p|reel|reels|tv)\/([\w-]+)/);
  if (!m) return null;
  const isReel = /instagram\.com\/reels?\//.test(url);
  return `https://www.instagram.com/${isReel ? "reel" : "p"}/${m[1]}/embed`;
}
