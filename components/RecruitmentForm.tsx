"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import {
  a1Options,
  applicantTypes,
  languageOptions,
  mainProfessions,
  preferredCountries,
  preferredWorkTypes,
  recruitmentEmailFlow,
  teamSizeOptions,
  toolOptions,
  tradeLicenseOptions,
  yesNoOptions,
} from "@/lib/recruitment";

export function RecruitmentForm() {
  const router = useRouter();
  const [countriesError, setCountriesError] = useState(false);
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

  if (formData.getAll("countries").length === 0) {
    setCountriesError(true);
    form.querySelector<HTMLInputElement>('input[name="countries"]')?.focus();
    return;
  }

  setCountriesError(false);
  setIsSubmitting(true);
  setSubmitError("");

  try {
    const response = await fetch("/api/recruitment", {
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

    router.push(recruitmentEmailFlow.successRedirect);
  } catch {
    setSubmitError("Formulár sa nepodarilo odoslať. Skúste to prosím znova.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-200 bg-white p-6 shadow-lift sm:p-8 lg:p-10"
      aria-label="Formulár pre pracovníkov a partie"
      noValidate
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="recipient" value={recruitmentEmailFlow.recipient} />
      <input type="hidden" name="subject" value={recruitmentEmailFlow.subject} />

      <div className="mb-8 border-l-2 border-cyan bg-mist px-5 py-4">
        <p className="text-sm font-semibold leading-7 text-navy">
          Vyplňte údaje o sebe alebo o pracovnej partii. HR tím WorkUnit ich
          vyhodnotí podľa aktuálnych projektov, krajiny, skúseností a dostupnosti.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Meno a priezvisko" placeholder="Vaše meno" required />
        <Field id="email" label="E-mail" placeholder="vas@email.sk" type="email" required />
        <Field id="phone" label="Telefón" placeholder="+421 ..." type="tel" required />
        <SelectField
          id="applicantType"
          label="Som"
          placeholder="Vyberte možnosť"
          options={applicantTypes}
          required
        />
        <SelectField
          id="mainProfession"
          label="Hlavná profesia"
          placeholder="Vyberte profesiu"
          options={mainProfessions}
          required
        />
        <SelectField
          id="teamSize"
          label="Počet ľudí"
          placeholder="Vyberte veľkosť"
          options={teamSizeOptions}
          required
        />
      </div>

      <CheckboxGroup
        legend="Krajiny, kde chcete pracovať"
        name="countries"
        options={preferredCountries}
        required
        error={countriesError}
        onChange={() => setCountriesError(false)}
      />

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field
          id="availableFrom"
          label="Kedy môžete nastúpiť"
          placeholder="Napr. od augusta / podľa dohody"
          required
        />
        <SelectField
          id="tradeLicense"
          label="Máte živnosť?"
          placeholder="Vyberte možnosť"
          options={tradeLicenseOptions}
        />
        <SelectField
          id="a1"
          label="Máte A1?"
          placeholder="Vyberte možnosť"
          options={a1Options}
        />
        <SelectField
          id="ownCar"
          label="Máte vlastné auto?"
          placeholder="Vyberte možnosť"
          options={yesNoOptions}
        />
        <SelectField
          id="ownTools"
          label="Máte vlastné náradie?"
          placeholder="Vyberte možnosť"
          options={toolOptions}
        />
      </div>

      <CheckboxGroup legend="Jazyky" name="languages" options={languageOptions} />
      <CheckboxGroup
        legend="Preferovaný typ práce"
        name="preferredWorkTypes"
        options={preferredWorkTypes}
      />

      <label className="mt-5 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
          Správa / skúsenosti <span className="text-sky-700">*</span>
        </span>
        <textarea
          name="experienceMessage"
          required
          rows={6}
          placeholder="Napíšte stručne, aké máte skúsenosti, v akej profesii pracujete, či máte vlastné náradie, auto, živnosť alebo skúsenosti zo zahraničia."
          className="w-full resize-y rounded-none border border-slate-300 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          name="gdprConsent"
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
  className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-60"
>
  {isSubmitting ? "Odosielam..." : "Odoslať údaje"}
  <span aria-hidden="true">→</span>
</button>

      <p className="mt-5 text-xs leading-5 text-slate-500">
  Údaje z formulára budú odoslané tímu WorkUnit na adresu{" "}
  <a
    className="font-semibold text-navy transition hover:text-sky-700"
    href={recruitmentEmailFlow.mailto}
  >
    {recruitmentEmailFlow.recipient}
  </a>
  . Informácia o spracúvaní osobných údajov je uvedená na stránke{" "}
  <Link
    href="/ochrana-osobnych-udajov"
    className="font-semibold text-navy transition hover:text-sky-700"
  >
    Ochrana osobných údajov
  </Link>
  .
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
    <label htmlFor={id}>
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

function SelectField({
  id,
  label,
  placeholder,
  options,
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label htmlFor={id}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
        {label}
        {required ? <span className="text-sky-700"> *</span> : null}
      </span>
      <select
        id={id}
        name={id}
        defaultValue=""
        required={required}
        className="min-h-12 w-full rounded-none border border-slate-300 bg-white px-4 text-sm text-navy outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function CheckboxGroup({
  legend,
  name,
  options,
  required = false,
  error = false,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  error?: boolean;
  onChange?: () => void;
}) {
  return (
    <fieldset className="mt-5">
      <legend className="mb-3 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
        {legend}
        {required ? <span className="text-sky-700"> *</span> : null}
      </legend>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <label
            key={`${name}-${option}`}
            className="flex min-h-12 items-center gap-3 border border-slate-200 bg-mist/50 px-4 py-3 text-sm font-semibold text-navy"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              onChange={onChange}
              className="size-4 rounded-none border-slate-300 accent-sky-700"
            />
            {option}
          </label>
        ))}
      </div>
      {error ? (
        <p className="mt-2 text-sm font-semibold text-red-700">
          Vyberte aspoň jednu možnosť.
        </p>
      ) : null}
    </fieldset>
  );
}
