export const COOKIE_CONSENT_STORAGE_KEY = "workunit-cookie-consent";
export const COOKIE_CONSENT_CHANGE_EVENT = "workunit-cookie-consent-change";

export type CookieConsent = "accepted" | "rejected";

export function isCookieConsent(value: string | null): value is CookieConsent {
  return value === "accepted" || value === "rejected";
}
