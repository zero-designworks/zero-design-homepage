import Link from "next/link";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "まだ形になっていない段階でも、ご相談ください。",
  body = "「ゼロ」の段階から、一緒に考え、伴走します。まずはお気軽にお問い合わせください。",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-aka py-20 text-center text-white md:py-24">
      <div className="container-brand">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-serif text-2xl leading-snug text-white md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/85">{body}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-brand bg-white px-8 py-4 text-sm font-semibold text-aka transition-colors hover:bg-kinari"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center justify-center rounded-brand border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              制作実績を見る
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
