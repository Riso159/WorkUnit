"use client";

import { useState, type FormEvent } from "react";

export function ContactFormPlaceholder({ compact = false }: { compact?: boolean }) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: V ďalšej fáze sem pripojiť serverovú integráciu Resend.
    setMessage(
      "Formulár je v prototype. Odosielanie bude doplnené v ďalšej fáze.",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-slate-200 bg-white shadow-lift ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10"}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Meno a priezvisko" placeholder="Vaše meno" required />
        <Field id="company" label="Firma" placeholder="Názov firmy" />
        <Field id="email" label="E-mail" placeholder="vas@email.sk" type="email" required />
        <Field id="phone" label="Telefón" placeholder="+421 ..." type="tel" />
        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Typ dopytu
          </span>
          <select
            name="inquiryType"
            defaultValue=""
            className="min-h-12 w-full rounded-none border border-slate-300 bg-white px-4 text-sm text-navy outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
          >
            <option value="" disabled>
              Vyberte možnosť
            </option>
            <option>Pracovný tím pre firmu</option>
            <option>Subdodávateľská spolupráca</option>
            <option>Pracovná príležitosť</option>
            <option>Iné</option>
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Správa
          </span>
          <textarea
            name="message"
            rows={compact ? 4 : 6}
            placeholder="Napíšte nám typ práce, lokalitu, termín a požadovanú kapacitu."
            className="w-full resize-y rounded-none border border-slate-300 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
          />
        </label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          required
          className="mt-0.5 size-4 rounded-none border-slate-300 accent-sky-700"
        />
        <span>
          Súhlasím so spracovaním údajov na účely odpovede na môj dopyt.
          Podmienky ochrany osobných údajov budú doplnené pred spustením webu.
        </span>
      </label>
      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:w-auto"
      >
        Odoslať dopyt
        <span aria-hidden="true">→</span>
      </button>
      {message ? (
        <div
          role="status"
          className="mt-5 border-l-2 border-cyan bg-mist px-4 py-3 text-sm leading-6 text-navy"
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={id}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
        {label}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-none border border-slate-300 px-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
      />
    </label>
  );
}
