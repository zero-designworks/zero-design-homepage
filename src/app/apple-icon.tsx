import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS ホーム画面用アイコン（brandマーク：深い赤 + 生成りの輪 + 金の陽）
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#9c2724",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            border: "24px solid #f6f1e7",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 34,
            width: 30,
            height: 30,
            borderRadius: 9999,
            background: "#cdaf74",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
