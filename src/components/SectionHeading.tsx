import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</span>
      )}
      <h2 className="mt-4 text-2xl leading-snug text-sumi md:text-4xl">{title}</h2>
      {children && (
        <div className="mt-5 leading-relaxed text-sumi-soft md:text-[1.0625rem]">{children}</div>
      )}
    </div>
  );
}
