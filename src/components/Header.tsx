"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(28,26,23,0.06)]"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-brand flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl font-semibold tracking-wide text-sumi md:text-2xl">
            ZERO<span className="text-aka">デザイン</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 xl:flex">
          {navItems
            .filter((item) => item.href !== "/contact")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-sumi-soft transition-colors hover:text-aka"
              >
                {item.short ?? item.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="rounded-brand bg-aka px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aka-deep"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] xl:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-sumi transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-sumi transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-sumi transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>

      {/* Mobile menu：headerの外に配置する。
          header の backdrop-blur(=backdrop-filter) が fixed 要素の基準（含有ブロック）に
          なるため、header内に置くとメニューがヘッダー高さに潰れて先頭項目しか表示されない。 */}
      <div
        className={`fixed inset-0 z-40 origin-top bg-kinari transition-all duration-300 xl:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-brand flex h-full flex-col justify-start gap-0.5 overflow-y-auto pt-20 pb-10">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-sumi/10 py-3.5 font-serif text-lg text-sumi transition-colors hover:text-aka"
              style={{
                transitionDelay: open ? `${i * 35}ms` : "0ms",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-brand bg-aka px-5 py-3.5 text-center text-sm font-semibold text-white"
            >
              無料相談
            </Link>
            <Link
              href="/works"
              onClick={() => setOpen(false)}
              className="rounded-brand border border-sumi/25 px-5 py-3.5 text-center text-sm font-semibold text-sumi"
            >
              実績を見る
            </Link>
          </div>
          <p className="mt-6 text-xs text-sumi-soft/70">{siteConfig.location}</p>
        </nav>
      </div>
    </>
  );
}
