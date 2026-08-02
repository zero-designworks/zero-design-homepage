import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "まずはお気軽にご相談ください。クラウドファンディング相談、ページ制作、SNS動画支援、AI動画、Web・LP制作まで。企画が固まっていない段階からOK。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>まずはお気軽にご相談ください。</>}
        lead={
          <>
            まだ企画が固まっていなくても大丈夫です。「こんなことをやってみたい」「自分の想いがクラファンで通用するだろうか」といったご相談から、動画・デザインに関するご質問まで、どうぞお気軽にお問い合わせください。
          </>
        }
      />
      <section className="pb-16 md:pb-24">
        <div className="container-narrow">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
