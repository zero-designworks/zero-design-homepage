import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export type Crumb = { label: string; href?: string };

/**
 * パンくずリスト。
 * 表示に加えて BreadcrumbList 構造化データ（JSON-LD）も出力します。
 * 最後の要素（現在地）は href なしで渡してください。
 */
export function Breadcrumb({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "ホーム", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${siteConfig.url}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="パンくず" className="mb-6 text-xs text-sumi-soft/70">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-sumi-soft/40">
                  /
                </span>
              )}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-aka">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-sumi-soft">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
