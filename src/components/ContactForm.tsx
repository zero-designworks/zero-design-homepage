"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

// Formspree等のエンドポイントを設定すると自動でPOST送信します。
// 未設定の場合は、メールソフトが開く mailto フォールバックで動作します。
const FORM_ENDPOINT = "https://formspree.io/f/xdenopyg";

const serviceOptions = [
  "クラウドファンディング相談",
  "クラファンページ制作",
  "クラファンSNS動画支援",
  "AI動画・ショート動画制作",
  "Web・LP制作",
  "デザイン制作",
  "その他",
];

const inputCls =
  "w-full rounded-brand border border-sumi/20 bg-white px-4 py-3 text-sm text-sumi outline-none transition-colors placeholder:text-sumi-soft/50 focus:border-aka focus:ring-2 focus:ring-aka/20";

export function ContactForm() {
  const [services, setServices] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function toggleService(s: string) {
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    services.forEach((s) => data.append("希望するサービス", s));

    if (FORM_ENDPOINT) {
      setSending(true);
      setError(false);
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setSent(true);
          form.reset();
          setServices([]);
          setAgree(false);
        } else {
          // 送信できなかった場合は、取りこぼさないようエラーを明示
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setSending(false);
      }
      return;
    }

    // mailto フォールバック
    const get = (k: string) => (data.get(k) as string) || "";
    const lines = [
      `お名前: ${get("name")}`,
      `会社・団体名: ${get("company")}`,
      `メールアドレス: ${get("email")}`,
      `電話番号: ${get("tel")}`,
      `希望するサービス: ${services.join(" / ")}`,
      `希望開始時期: ${get("start")}`,
      `目標金額: ${get("budget")}`,
      `現在のWeb・SNS: ${get("current")}`,
      "",
      "ご相談内容:",
      get("message"),
    ];
    const subject = encodeURIComponent(`【お問い合わせ】${get("name")}様`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-brand border border-sumi/10 bg-kinari/50 p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-aka/10 text-2xl text-aka">
          ✓
        </div>
        <h2 className="mt-5 font-serif text-2xl text-sumi">送信の準備ができました</h2>
        <p className="mt-3 leading-relaxed text-sumi-soft">
          {FORM_ENDPOINT
            ? "お問い合わせありがとうございます。担当より折り返しご連絡いたします。"
            : "メールソフトが開きます。内容をご確認のうえ送信してください。うまく開かない場合は、下記アドレスへ直接ご連絡ください。"}
        </p>
        <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-block font-semibold text-aka">
          {siteConfig.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7 rounded-brand border border-sumi/10 bg-white p-6 md:p-10">
      {/* Formspree用：受信メールの件名 */}
      <input type="hidden" name="_subject" value="【ZEROデザイン】ホームページからのお問い合わせ" />
      {/* Formspree用：スパム対策のハニーポット（人間には見えません） */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="お名前" required>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="山田 太郎" />
        </Field>
        <Field label="会社・団体名">
          <input name="company" autoComplete="organization" className={inputCls} placeholder="〇〇株式会社" />
        </Field>
        <Field label="メールアドレス" required>
          <input name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@example.com" />
        </Field>
        <Field label="電話番号（任意）">
          <input name="tel" type="tel" autoComplete="tel" className={inputCls} placeholder="090-0000-0000" />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-sumi">希望するサービス（複数選択可）</legend>
        <div className="flex flex-wrap gap-2.5">
          {serviceOptions.map((s) => {
            const active = services.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-aka bg-aka text-white"
                    : "border-sumi/20 bg-white text-sumi-soft hover:border-aka/50"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="クラファン予定時期（任意）">
          <input name="start" className={inputCls} placeholder="例：2026年秋ごろ" />
        </Field>
        <Field label="目標金額（任意）">
          <input name="budget" className={inputCls} placeholder="例：300万円" />
        </Field>
      </div>

      <Field label="現在のWebサイト・SNS（任意）">
        <input name="current" className={inputCls} placeholder="URL や アカウント名など" />
      </Field>

      <Field label="ご相談内容">
        <textarea
          name="message"
          rows={6}
          className={inputCls}
          placeholder="現在の状況、実現したいこと、目標金額などをご自由にお書きください。"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-sumi-soft">
        <input
          type="checkbox"
          required
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 h-4 w-4 accent-aka"
        />
        <span>
          <a href="/privacy" className="text-aka underline underline-offset-2">
            個人情報保護方針
          </a>
          に同意します。
        </span>
      </label>

      {error && (
        <div
          role="alert"
          className="rounded-brand border border-aka/30 bg-aka/5 px-5 py-4 text-sm leading-relaxed text-sumi-soft"
        >
          <p className="font-semibold text-aka">送信に失敗しました</p>
          <p className="mt-1">
            通信状況により送信できませんでした。お手数ですが、時間をおいて再度お試しいただくか、
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-aka underline underline-offset-2">
              {siteConfig.email}
            </a>
            へ直接ご連絡ください。
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={!agree || sending}
        className="w-full rounded-brand bg-aka px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-aka-deep disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-12"
      >
        {sending ? "送信中..." : "この内容で相談する"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-sumi">
        {label}
        {required && <span className="rounded bg-aka/10 px-1.5 py-0.5 text-[10px] text-aka">必須</span>}
      </span>
      {children}
    </label>
  );
}
