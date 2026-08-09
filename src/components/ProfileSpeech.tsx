import Image from "next/image";
import { Sentences } from "@/components/RichText";

export type ProfileSpeechProps = {
  /** 吹き出しに表示する文章（記事ごとに変更） */
  message: string;
  /** PC表示で写真を左右どちらに置くか（既定：left） */
  position?: "left" | "right";
  /** 表示名（既定：浅見 和貴） */
  name?: string;
  /** 肩書き（既定：ZEROデザインの紹介文） */
  role?: string;
  /** プロフィール画像パス（既定：/images/profile/asami.jpg。あとから変更可） */
  imageSrc?: string;
};

/**
 * プロフィール写真つきの吹き出しコンポーネント。
 * 通常は message だけ指定すれば使えます（name / role / imageSrc は既定値あり）。
 *   例：<ProfileSpeech message="こんにちは。ZEROデザインの浅見和貴です。…" />
 *       <ProfileSpeech message="…" position="right" />
 */
export function ProfileSpeech({
  message,
  position = "left",
  name = "浅見 和貴",
  role = "ZEROデザイン｜SNS・AI動画でクラウドファンディングを支援",
  imageSrc = "/images/profile/asami.jpg",
}: ProfileSpeechProps) {
  const isRight = position === "right";

  return (
    <figure
      className={`my-8 flex flex-col gap-3 sm:items-start sm:gap-5 ${
        isRight ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      {/* 写真＋名前（SP：横並びで上部／PC：縦並びで左右端） */}
      <figcaption className="flex items-center gap-3 sm:w-24 sm:shrink-0 sm:flex-col sm:gap-2 sm:text-center">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-sumi/10 sm:h-20 sm:w-20">
          <Image
            src={imageSrc}
            alt={`${name}のプロフィール写真`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="leading-tight sm:text-center">
          <p className="text-sm font-semibold text-sumi">{name}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-sumi-soft">{role}</p>
        </div>
      </figcaption>

      {/* 吹き出し */}
      <div className="relative flex-1 rounded-2xl border border-sumi/10 bg-white px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        {/* 三角形：SP＝上向き（写真の下に吹き出し） */}
        <span
          aria-hidden
          className="absolute left-8 top-0 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-sumi/10 bg-white sm:hidden"
        />
        {/* 三角形：PC＝写真の側を向く */}
        <span
          aria-hidden
          className={`absolute top-7 hidden h-3 w-3 rotate-45 border-sumi/10 bg-white sm:block ${
            isRight
              ? "right-0 translate-x-1/2 border-r border-b"
              : "left-0 -translate-x-1/2 border-l border-t"
          }`}
        />
        <p className="text-[15px] leading-loose text-sumi-soft">
          <Sentences text={message} />
        </p>
      </div>
    </figure>
  );
}
