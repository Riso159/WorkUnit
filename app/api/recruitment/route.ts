import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function getText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function getAllText(formData: FormData, key: string) {
  return formData
    .getAll(key)
    .map((value) => String(value).trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatRow(label: string, value: string | string[]) {
  const normalizedValue = Array.isArray(value) ? value.join(", ") : value;

  if (!normalizedValue) {
    return "";
  }

  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:700;width:210px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">
        ${escapeHtml(normalizedValue)}
      </td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (getText(formData, "website")) {
      return NextResponse.json({ ok: true });
    }

    const fullName = getText(formData, "fullName");
    const email = getText(formData, "email");
    const phone = getText(formData, "phone");
    const applicantType = getText(formData, "applicantType");
    const mainProfession = getText(formData, "mainProfession");
    const teamSize = getText(formData, "teamSize");
    const countries = getAllText(formData, "countries");
    const availableFrom = getText(formData, "availableFrom");
    const tradeLicense = getText(formData, "tradeLicense");
    const a1 = getText(formData, "a1");
    const ownCar = getText(formData, "ownCar");
    const ownTools = getText(formData, "ownTools");
    const languages = getAllText(formData, "languages");
    const preferredWorkTypes = getAllText(formData, "preferredWorkTypes");
    const experienceMessage = getText(formData, "experienceMessage");
    const gdprConsent = getText(formData, "gdprConsent");

    if (
      !fullName ||
      !email ||
      !phone ||
      !applicantType ||
      !mainProfession ||
      !teamSize ||
      countries.length === 0 ||
      !availableFrom ||
      !experienceMessage ||
      !gdprConsent
    ) {
      return NextResponse.json(
        { ok: false, message: "Vyplňte všetky povinné polia." },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, message: "Chýba RESEND_API_KEY." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "info@workunit.sk";
    const fromName = process.env.CONTACT_FROM_NAME ?? "WorkUnit web";
    const toEmail = process.env.CONTACT_RECRUITMENT_EMAIL ?? "recruitment@workunit.sk";

    const subject = `Nový dopyt od pracovníka – ${fullName}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h1 style="margin:0 0 16px;font-size:22px;">Nový dopyt od pracovníka / partie</h1>
        <p style="margin:0 0 20px;color:#475569;">
          Záujemca vyplnil formulár Hľadám zákazku na webe WorkUnit.
        </p>

        <table style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e2e8f0;">
          ${formatRow("Meno a priezvisko", fullName)}
          ${formatRow("E-mail", email)}
          ${formatRow("Telefón", phone)}
          ${formatRow("Som", applicantType)}
          ${formatRow("Hlavná profesia", mainProfession)}
          ${formatRow("Počet ľudí", teamSize)}
          ${formatRow("Krajiny", countries)}
          ${formatRow("Kedy môže nastúpiť", availableFrom)}
          ${formatRow("Živnosť", tradeLicense)}
          ${formatRow("A1", a1)}
          ${formatRow("Vlastné auto", ownCar)}
          ${formatRow("Vlastné náradie", ownTools)}
          ${formatRow("Jazyky", languages)}
          ${formatRow("Preferovaný typ práce", preferredWorkTypes)}
          ${formatRow("Správa / skúsenosti", experienceMessage)}
        </table>

        <p style="margin-top:20px;color:#64748b;font-size:13px;">
          GDPR súhlas / informácia: potvrdené vo formulári.
        </p>
      </div>
    `;

    const text = [
      "Nový dopyt od pracovníka / partie",
      "",
      `Meno a priezvisko: ${fullName}`,
      `E-mail: ${email}`,
      `Telefón: ${phone}`,
      `Som: ${applicantType}`,
      `Hlavná profesia: ${mainProfession}`,
      `Počet ľudí: ${teamSize}`,
      `Krajiny: ${countries.join(", ")}`,
      `Kedy môže nastúpiť: ${availableFrom}`,
      `Živnosť: ${tradeLicense || "-"}`,
      `A1: ${a1 || "-"}`,
      `Vlastné auto: ${ownCar || "-"}`,
      `Vlastné náradie: ${ownTools || "-"}`,
      `Jazyky: ${languages.join(", ") || "-"}`,
      `Preferovaný typ práce: ${preferredWorkTypes.join(", ") || "-"}`,
      "",
      "Správa / skúsenosti:",
      experienceMessage,
      "",
      "GDPR súhlas / informácia: potvrdené vo formulári.",
    ].join("\n");

    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      return NextResponse.json(
        { ok: false, message: result.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { ok: false, message: "Formulár sa nepodarilo odoslať." },
      { status: 500 },
    );
  }
}
