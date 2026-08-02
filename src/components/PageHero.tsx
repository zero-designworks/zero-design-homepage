import Image from "next/image";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-kinari/95 via-kinari/85 to-white" />
        </div>
      )}
      {!image && <div className="absolute inset-0 -z-10 paper-texture" />}
      <div className="container-brand">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight text-sumi md:text-5xl">
          {title}
        </h1>
        {lead && <div className="mt-6 max-w-2xl leading-relaxed text-sumi-soft md:text-lg">{lead}</div>}
      </div>
    </section>
  );
}
