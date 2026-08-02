// 既存のYouTube動画URLをここに追加するだけで、実績ページに表示されます。
export type Video = {
  id: string;
  title: string;
  youtubeUrl: string;
  category:
    | "クラウドファンディングPR動画"
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
];

// YouTube URL から動画IDを取り出すヘルパー
export function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}
