"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { formContent } from "@/lib/form-content";
import { routeFor, type Locale } from "@/lib/i18n";
import { recruitmentEmailFlow } from "@/lib/recruitment";

export function RecruitmentForm({ locale = "sk" }: { locale?: Locale }) {
  const router = useRouter();
  const copy = formContent[locale].recruitment;
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

        setSubmitError(locale === "sk" ? (data?.message ?? copy.error) : copy.error);
        return;
      }

      router.push(routeFor(locale, "workerThankYou"));
    } catch {
      setSubmitError(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const privacyHref = routeFor(locale, "privacy");

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-200 bg-white p-6 shadow-lift sm:p-8 lg:p-10"
      aria-label={copy.aria}
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
        <p className="text-sm font-semibold leading-7 text-navy">{copy.intro}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" copy={copy.fullName} required />
        <Field id="email" copy={copy.email} type="email" required />
        <Field id="phone" copy={copy.phone} type="tel" required />
        <SelectField
          id="applicantType"
          copy={copy.applicantType}
          options={copy.applicantOptions}
          required
        />
        <SelectField
          id="mainProfession"
          copy={copy.mainProfession}
          options={copy.professionOptions}
          required
        />
        <SelectField
          id="teamSize"
          copy={copy.teamSize}
          options={copy.teamSizeOptions}
          required
        />
      </div>

      <CheckboxGroup
        legend={copy.countriesLegend}
        name="countries"
        options={copy.countryOptions}
        required
        error={countriesError}
        errorMessage={copy.selectAtLeastOne}
        onChange={() => setCountriesError(false)}
      />

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field id="availableFrom" copy={copy.availableFrom} required />
        <SelectField
          id="tradeLicense"
          copy={copy.tradeLicense}
          options={copy.tradeLicenseOptions}
        />
        <SelectField id="a1" copy={copy.a1} options={copy.a1Options} />
        <SelectField id="ownCar" copy={copy.ownCar} options={copy.yesNoOptions} />
        <SelectField id="ownTools" copy={copy.ownTools} options={copy.toolOptions} />
      </div>

      <CheckboxGroup
        legend={copy.languagesLegend}
        name="languages"
        options={copy.languageOptions}
        errorMessage={copy.selectAtLeastOne}
      />
      <CheckboxGroup
        legend={copy.workTypesLegend}
        name="preferredWorkTypes"
        options={copy.workTypeOptions}
        errorMessage={copy.selectAtLeastOne}
      />

      <label className="mt-5 block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
          {copy.experience.label} <span className="text-sky-700">*</span>
        </span>
        <textarea
          name="experienceMessage"
          required
          rows={6}
          placeholder={copy.experience.placeholder}
          className="w-full resize-y rounded-none border border-slate-300 px-4 py-3 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600">
        <input
          type="checkbox"
          name="gdprConsent"
          value="yes"
          required
          className="mt-0.5 size-4 rounded-none border-slate-300 accent-sky-700"
        />
        <span>
          {copy.gdprPrefix}{" "}
          <Link
            href={privacyHref}
            className="font-semibold text-navy underline decoration-cyan/50 underline-offset-4 transition hover:text-sky-700"
          >
            {copy.privacyLink}
          </Link>
          {copy.gdprSuffix}
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
        {isSubmitting ? copy.submitting : copy.submit}
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-xs leading-5 text-slate-500">
        {copy.helperBeforeEmail}{" "}
        <a
          className="font-semibold text-navy transition hover:text-sky-700"
          href={recruitmentEmailFlow.mailto}
        >
          {recruitmentEmailFlow.recipient}
        </a>
        {copy.helperAfterEmail}{" "}
        {copy.helperPrivacyPrefix}{" "}
        <Link
          href={privacyHref}
          className="font-semibold text-navy transition hover:text-sky-700"
        >
          {copy.helperPrivacyLink}
        </Link>
        {copy.helperPrivacySuffix}
      </p>
    </form>
  );
}

function Field({
  id,
  copy,
  type = "text",
  required = false,
}: {
  id: string;
  copy: { label: string; placeholder: string };
  type?: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={id}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
        {copy.label}
        {required ? <span className="text-sky-700"> *</span> : null}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={copy.placeholder}
        className="min-h-12 w-full rounded-none border border-slate-300 px-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
      />
    </label>
  );
}

function SelectField({
  id,
  copy,
  options,
  required = false,
}: {
  id: string;
  copy: { label: string; placeholder: string };
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <label htmlFor={id}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
        {copy.label}
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
          {copy.placeholder}
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
  errorMessage,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  error?: boolean;
  errorMessage: string;
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
        <p className="mt-2 text-sm font-semibold text-red-700">{errorMessage}</p>
      ) : null}
    </fieldset>
  );
}
