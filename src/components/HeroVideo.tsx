"use client";

import { useEffect, useRef } from "react";

// ファーストビュー用の自動再生（無音・ループ）動画。
// React は SSR 時に muted 属性を出力しないため、マウント後に明示的に muted を設定してから再生する。
export function HeroVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="制作したストーリー動画のハイライト（無音・自動再生）"
      className={className}
    />
  );
}
