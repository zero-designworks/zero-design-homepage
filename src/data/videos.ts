// 既存のYouTube動画URLをここに追加するだけで、実績ページに表示されます。
export type Video = {
  id: string;
  title: string;
  youtubeUrl: string;
  category: "YouTube動画" | "SNSショート動画" | "AI動画";
  client?: string;
  role?: string[];
  description?: string;
  result?: string;
  publishedAt?: string;
};

// 例（サンプル）。実際のURLに差し替えてください。
export const videos: Video[] = [
  // {
  //   id: "work-001",
  //   title: "企業PR動画",
  //   youtubeUrl: "https://www.youtube.com/watch?v=xxxxxxxx",
  //   category: "YouTube動画",
  //   client: "クライアント名",
  //   role: ["企画", "構成", "編集"],
  //   description: "動画の概要",
  //   result: "成果や反響",
  //   publishedAt: "2026-01-01",
  // },
];

// YouTube URL から動画IDを取り出すヘルパー
export function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}
