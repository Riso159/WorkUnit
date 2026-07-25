"use client";

import { useEffect, useId, useState } from "react";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  isCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";
import { chromeCopy, type Locale } from "@/lib/i18n";

export function CookiePreferences({ locale }: { locale: Locale }) {
  const titleId = useId();
  const copy = chromeCopy[locale].cookies;
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    function syncConsent() {
      const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      setConsent(isCookieConsent(storedConsent) ? storedConsent : null);
    }

    function handleStorage(event: StorageEvent) {
      if (event.key === COOKIE_CONSENT_STORAGE_KEY) {
        syncConsent();
      }
    }

    syncConsent();
    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, syncConsent);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, syncConsent);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  function updateConsent(value: CookieConsent | null) {
    if (value) {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    } else {
      window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
    }

    setConsent(value);
    window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGE_EVENT));
  }

  const status = consent
    ? copy.preferences[consent]
    : copy.preferences.notSelected;

  return (
    <section
      lang={locale}
      aria-labelledby={titleId}
      className="border border-slate-200 bg-mist p-6 shadow-lift sm:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
            {copy.preferences.eyebrow}
          </p>
          <h2 id={titleId} className="mt-3 text-2xl font-black tracking-[-0.04em] text-navy">
            {copy.preferences.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            {copy.preferences.description}
          </p>
          <p className="mt-4 text-sm font-semibold text-navy" aria-live="polite">
            {copy.preferences.current}: <span className="text-sky-700">{status}</span>
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[470px]">
          <button
            type="button"
            onClick={() => updateConsent("accepted")}
            aria-pressed={consent === "accepted"}
            className="inline-flex min-h-11 items-center justify-center bg-navy px-4 text-center text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            {copy.accept}
          </button>
          <button
            type="button"
            onClick={() => updateConsent("rejected")}
            aria-pressed={consent === "rejected"}
            className="inline-flex min-h-11 items-center justify-center border border-slate-300 bg-white px-4 text-center text-xs font-bold uppercase tracking-[0.08em] text-navy transition hover:border-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
          >
            {copy.reject}
          </button>
          <button
            type="button"
            onClick={() => updateConsent(null)}
            disabled={consent === null}
            className="inline-flex min-h-11 items-center justify-center border border-slate-300 px-4 text-center text-xs font-bold uppercase tracking-[0.08em] text-slate-600 transition hover:border-navy hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-45"
          >
            {copy.preferences.reset}
          </button>
        </div>
      </div>
    </section>
  );
}
