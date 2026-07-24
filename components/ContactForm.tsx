"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { formContent } from "@/lib/form-content";
import { routeFor, type Locale } from "@/lib/i18n";

export function ContactForm({
  compact = false,
  locale = "sk",
}: {
  compact?: boolean;
  locale?: Locale;
}) {
  const router = useRouter();
  const copy = formContent[locale].contact;
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

        setSubmitError(locale === "sk" ? (data?.message ?? copy.error) : copy.error);
        return;
      }

      router.push(routeFor(locale, "thankYou"));
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
      className={`border border-slate-200 bg-white shadow-lift ${compact ? "p-6 sm:p-8" : "p-6 sm:p-10"}`}
      aria-label={copy.aria}
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
        <p className="text-sm font-semibold leading-7 text-navy">{copy.intro}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" copy={copy.name} required />
        <Field id="company" copy={copy.company} required />
        <Field id="email" copy={copy.email} type="email" required />
        <Field id="phone" copy={copy.phone} type="tel" />

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            {copy.inquiryType} <span className="text-sky-700">*</span>
          </span>
          <select
            name="inquiryType"
            defaultValue=""
            required
            className="min-h-12 w-full rounded-none border border-slate-300 bg-white px-4 text-sm text-navy outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-cyan/25"
          >
            <option value="" disabled>
              {copy.inquiryPlaceholder}
            </option>
            {copy.inquiryOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <Field id="projectLocation" copy={copy.projectLocation} />
        <Field id="teamSize" copy={copy.teamSize} />
        <Field id="startDate" copy={copy.startDate} className="sm:col-span-2" />

        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-navy">
            {copy.message.label} <span className="text-sky-700">*</span>
          </span>
          <textarea
            name="message"
            required
            rows={compact ? 4 : 6}
            placeholder={copy.message.placeholder}
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
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-navy px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? copy.submitting : copy.submit}
        <span aria-hidden="true">→</span>
      </button>

      <p className="mt-5 text-xs leading-5 text-slate-500">
        {copy.helperPrefix}{" "}
        <Link
          href={privacyHref}
          className="font-semibold text-navy transition hover:text-sky-700"
        >
          {copy.helperLink}
        </Link>
        {copy.helperSuffix}
      </p>
    </form>
  );
}

function Field({
  id,
  copy,
  type = "text",
  required = false,
  className = "",
}: {
  id: string;
  copy: { label: string; placeholder: string };
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label htmlFor={id} className={className}>
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
