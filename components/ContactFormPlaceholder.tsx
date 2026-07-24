"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { contactFormServices } from "@/lib/content";

export function ContactFormPlaceholder({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;

        setSubmitError(data?.message ?? "Formulár sa nepodarilo odoslať.");
        return;
      }

      router.push("/dakujeme");
    } catch {
      setSubmitError("Formulár sa nepodarilo odoslať. Skúste to prosím znova.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-slate-200 bg-white shadow-lift ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10"}`}
      aria-label="Kontaktný formulár WorkUnit"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mb-8 border-l-2 border-cyan bg-mist px-5 py-4">
        <p className="text-sm font-semibold leading-7 text-navy">
          Nie ste si istí, koho kontaktovať? Vyplňte formulár a vašu správu
          nasmerujeme správnej osobe.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Meno a priezvisko" placeholder="Vaše meno" required />
        <Field id="company" label="Firma" placeholder="Názov firmy" required />
        <Field id="email" label="E-mail" placeholder="vas@email.sk" type="email" required />
        <Field id="phone" label="Telefón" placeholder="+421 ..." type="tel" />

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            Typ dopytu <span className="text-sky-700">*</span>
          </span>
          <select
            name="inquiryType"
            defaultValue=""
            required
            className="min-h-12 w-full rounded-none border border-slate-300 bg-white px-4 text-sm text-navy outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
          >
            <option value="" disabled>
              Vyberte typ dopytu
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
            Správa <span className="text-sky-700">*</span>
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
          name="gdprConsent"
          value="yes"
          required
          className="mt-0.5 size-4 rounded-none border-slate-300 accent-sky-700"
        />
        <span>
          Odoslaním formulára beriem na vedomie spracúvanie osobných údajov podľa{" "}
          <Link href="/ochrana-osobnych-udajov" className="font-semibold text-navy underline decoration-cyan/50 underline-offset-4 transition hover:text-sky-700">
            Zásad ochrany osobných údajov
          </Link>
          .
        </span>
      </label>

      {submitError ? (
        <p className="mt-5 text-sm font-semibold text-red-700">{submitError}</p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Odosielam..." : "Odoslať dopyt"}
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-xs leading-5 text-slate-500">
        Informácia o spracúvaní osobných údajov pri kontaktnom formulári je uvedená na stránke{" "}
        <Link href="/ochrana-osobnych-udajov" className="font-semibold text-navy transition hover:text-sky-700">
          Ochrana osobných údajov
        </Link>
        . Údaje z formulára sú odosielané cez zabezpečený serverový endpoint.
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