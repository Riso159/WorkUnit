import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function getText(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatRow(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#475569;font-weight:700;width:210px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;">
        ${escapeHtml(value)}
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

    const name = getText(formData, "name");
    const company = getText(formData, "company");
    const email = getText(formData, "email");
    const phone = getText(formData, "phone");
    const inquiryType = getText(formData, "inquiryType");
    const projectLocation = getText(formData, "projectLocation");
    const teamSize = getText(formData, "teamSize");
    const startDate = getText(formData, "startDate");
    const message = getText(formData, "message");
    const gdprConsent = getText(formData, "gdprConsent");

    if (!name || !company || !email || !inquiryType || !message || !gdprConsent) {
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
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@workunit.sk";
    const salesEmail = process.env.CONTACT_SALES_EMAIL;

    const subject = `Nový dopyt z webu – ${company}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;">
        <h1 style="margin:0 0 16px;font-size:22px;">Nový dopyt z webu WorkUnit</h1>
        <p style="margin:0 0 20px;color:#475569;">
          Návštevník vyplnil kontaktný formulár na webe.
        </p>

        <table style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #e2e8f0;">
          ${formatRow("Meno a priezvisko", name)}
          ${formatRow("Firma", company)}
          ${formatRow("E-mail", email)}
          ${formatRow("Telefón", phone)}
          ${formatRow("Typ dopytu", inquiryType)}
          ${formatRow("Miesto projektu", projectLocation)}
          ${formatRow("Počet pracovníkov / veľkosť tímu", teamSize)}
          ${formatRow("Termín začiatku", startDate)}
          ${formatRow("Správa", message)}
        </table>

        <p style="margin-top:20px;color:#64748b;font-size:13px;">
          GDPR súhlas / informácia: potvrdené vo formulári.
        </p>
      </div>
    `;

    const text = [
      "Nový dopyt z webu WorkUnit",
      "",
      `Meno a priezvisko: ${name}`,
      `Firma: ${company}`,
      `E-mail: ${email}`,
      `Telefón: ${phone || "-"}`,
      `Typ dopytu: ${inquiryType}`,
      `Miesto projektu: ${projectLocation || "-"}`,
      `Počet pracovníkov / veľkosť tímu: ${teamSize || "-"}`,
      `Termín začiatku: ${startDate || "-"}`,
      "",
      "Správa:",
      message,
      "",
      "GDPR súhlas / informácia: potvrdené vo formulári.",
    ].join("\n");

    const cc = salesEmail && salesEmail !== toEmail ? [salesEmail] : undefined;

    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      cc,
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