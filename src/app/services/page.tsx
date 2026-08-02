import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "サービス",
  description:
    "クラウドファンディング支援／クラファンSNS動画支援／AI動画・ショート動画制作／Web・LP・デザイン制作。挑戦を伝わる形にする4つのサービス。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>挑戦を伝わる形にする、4つの力。</>}
        lead="企画から映像、デザイン、公開後の広報まで。必要な支援をワンストップでご提供します。必要な部分だけのご依頼も可能です。"
      />

      <section className="py-12 md:py-16">
        <div className="container-brand space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <div
                id={s.id}
                className={`grid scroll-mt-28 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-last" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-brand bg-kinari">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-serif text-4xl font-semibold text-kin/40">0{i + 1}</span>
                  <h2 className="mt-2 font-serif text-2xl text-sumi md:text-3xl">{s.title}</h2>
                  <p className="mt-2 text-sm font-medium text-aka">{s.short}</p>
                  <p className="mt-5 leading-relaxed text-sumi-soft">{s.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-sumi-soft">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aka" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {s.articleLink && (
                    <Link
                      href={s.articleLink.href}
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-aka hover:text-aka/80"
                    >
                      {s.articleLink.label}
                      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="どのサービスが必要か、から一緒に考えます。" />
    </>
  );
}
