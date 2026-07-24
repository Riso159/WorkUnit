"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "workunit-cookie-consent";

type CookieConsent = "accepted" | "rejected";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(STORAGE_KEY);
    setVisible(storedConsent !== "accepted" && storedConsent !== "rejected");
  }, []);

  function saveConsent(value: CookieConsent) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <section
      aria-label="Nastavenie cookies"
      className="fixed bottom-3 left-3 right-3 z-[90] max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-2xl border border-white/10 bg-ink/95 p-4 text-white shadow-lift backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:mx-auto sm:max-w-3xl sm:p-5"
    >
      <div className="flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 md:max-w-2xl">
          <p className="text-sm font-bold text-white">Cookies</p>

          <p className="mt-1 break-words text-xs leading-6 text-slate-300 sm:text-sm">
            Webová stránka používa cookies na správne fungovanie stránky.
            Analytické alebo ďalšie cookies budú použité iba v prípade súhlasu
            návštevníka. Viac informácií nájdete v časti{" "}
            <Link
              href="/cookies"
              className="font-semibold text-cyan underline underline-offset-4 transition hover:text-white"
            >
              Cookies politika
            </Link>
            .
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:flex md:shrink-0">
          <button
            type="button"
            onClick={() => saveConsent("rejected")}
            className="inline-flex min-h-11 w-full min-w-0 items-center justify-center border border-white/20 px-4 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:px-5 sm:text-xs md:w-auto"
          >
            Odmietnuť
          </button>

          <button
            type="button"
            onClick={() => saveConsent("accepted")}
            className="inline-flex min-h-11 w-full min-w-0 items-center justify-center bg-cyan px-4 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5 sm:text-xs md:w-auto"
          >
            Prijať cookies
          </button>
        </div>
      </div>
    </section>
  );
}