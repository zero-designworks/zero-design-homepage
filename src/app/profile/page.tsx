import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "代表プロフィール",
  description:
    "ZEROデザイン代表・浅見和貴（あさみかずき）。CAMPFIRE公式パートナー。小谷寺本堂再建プロジェクトで736万円を達成。挑戦に伴走するキュレーター。",
  alternates: { canonical: "/profile" },
};

export default function ProfilePage() {
  return (
    <>
      <PageHero eyebrow="Profile" title={<>ZEROデザイン代表プロフィール</>} />

      <section className="pb-12 md:pb-16">
        <div className="container-brand grid gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-brand ring-1 ring-sumi/10 lg:w-72">
                <Image
                  src={profile.photo}
                  alt={`${profile.name}のプロフィール写真`}
                  fill
                  sizes="288px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h2 className="font-serif text-2xl text-sumi">
                  {profile.name}
                  <span className="ml-2 text-sm font-normal text-sumi-soft">{profile.nameKana}</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-aka">{profile.title}</p>
                <p className="mt-2 text-sm text-sumi-soft">活動拠点：{profile.location}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {socialLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-sumi/15 px-4 py-1.5 text-xs text-sumi-soft transition-colors hover:border-aka hover:text-aka"
                    >
                      {s.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 leading-loose text-sumi-soft">
              {profile.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 rounded-brand border border-sumi/10 bg-kinari/40 p-8">
              <span className="eyebrow">Values</span>
              <h3 className="mt-3 font-serif text-xl text-sumi">大切にしていること</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {profile.values.map((v) => (
                  <li key={v} className="flex items-start gap-2.5 text-sm text-sumi-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aka" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title="あなたの「静かな志」を、丁寧にお聞きします。" />
    </>
  );
}
