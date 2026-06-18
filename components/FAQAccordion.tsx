"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <article key={item.question}>
            <h2>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan sm:py-7"
                aria-expanded={open}
                aria-controls={panelId}
              >
                <span className="text-base font-black tracking-[-0.02em] text-navy sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid size-9 shrink-0 place-items-center border text-lg transition ${
                    open
                      ? "rotate-45 border-cyan bg-cyan text-ink"
                      : "border-slate-300 text-navy group-hover:border-cyan"
                  }`}
                >
                  +
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 pr-10 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
