"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { contactFormServices } from "@/lib/content";

export function ContactFormPlaceholder({ compact = false }: { compact?: boolean }) {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Tu doplniť Resend server action/API route, ENV premenné,
    // honeypot, rate limit alebo CAPTCHA, spam ochranu a analytickú konverziu.
    router.push("/dakujeme");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-slate-200 bg-white shadow-lift ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10"}`}
      aria-label="Kontaktný formulár WorkUnit"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Meno a priezvisko" placeholder="Vaše meno" required />
        <Field id="company" label="Firma" placeholder="Názov firmy" required />
        <Field id="email" label="E-mail" placeholder="vas@email.sk" type="email" required />
        <Field id="phone" label="Telefón" placeholder="+421 ..." type="tel" />

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Typ služby
          </span>
          <select
            name="serviceType"
            defaultValue=""
            required
            className="min-h-12 w-full rounded-none border border-slate-300 bg-white px-4 text-sm text-navy outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
          >
            <option value="" disabled>
              Vyberte službu
            </option>
            {contactFormServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>

        <Field id="projectLocation" label="Miesto projektu" placeholder="Krajina, mesto alebo región" />
        <Field
          id="teamSize"
          label="Počet pracovníkov / veľkosť tímu"
          placeholder="Napr. 2, 6+, 1–10"
        />
        <Field id="startDate" label="Termín začiatku" placeholder="Napr. čo najskôr / dátum" />

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Správa
          </span>
          <textarea
            name="message"
            required
            rows={compact ? 4 : 6}
            placeholder="Napíšte typ práce, miesto projektu, termín, počet pracovníkov a administratívne požiadavky."
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
          Súhlasím so spracovaním údajov na účely kontaktovania a prípravy ponuky.
          Právne texty a zásady ochrany osobných údajov budú doplnené pred ostrým spustením.
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:w-auto"
      >
        Odoslať dopyt
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-xs leading-5 text-slate-500">
        Formulár je zatiaľ frontend-only prototyp. Dáta sa neodosielajú cez Resend.
      </p>
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
    <label htmlFor={id} className={id === "startDate" ? "sm:col-span-2" : ""}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
        {label}
        {required ? <span className="text-sky-700"> *</span> : null}
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
