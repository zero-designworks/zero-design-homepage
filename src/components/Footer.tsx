import Link from "next/link";
import { navItems, footerExtraItems, siteConfig } from "@/data/siteConfig";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="mt-24 bg-sumi text-kinari/80">
      <div className="container-brand py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-2xl font-semibold text-white">
              ZERO<span className="text-kin">デザイン</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-kinari/70">
              {siteConfig.concept}
              <br />
              {siteConfig.subCopy}
            </p>
            <p className="mt-6 text-xs text-kinari/50">
              代表：{siteConfig.representative}
              <br />
              拠点：{siteConfig.location}
            </p>
          </div>

          <nav className="text-sm">
            <p className="mb-4 font-semibold text-white">メニュー</p>
            <ul className="space-y-2.5">
              {[...navItems, ...footerExtraItems].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-kinari/70 transition-colors hover:text-kin">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/category" className="text-kinari/70 transition-colors hover:text-kin">
                  カテゴリー一覧
                </Link>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <p className="mb-4 font-semibold text-white">リンク</p>
            <ul className="space-y-2.5">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kinari/70 transition-colors hover:text-kin"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/privacy" className="text-kinari/50 transition-colors hover:text-kin">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-kinari/50 transition-colors hover:text-kin">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-kinari/15 pt-6 text-xs text-kinari/40">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
