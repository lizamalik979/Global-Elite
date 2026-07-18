// Shared lead submission used by every website form (division/service pages,
// apostille quote, About application, both Contact forms — and any future
// CMS-created page, since they all render through the same components).
//
// Every lead carries the four common fields (name, email, phone, source) plus
// `extra`: the form-specific fields as {"Field Label": value} pairs. The CMS
// stores `extra` verbatim in Lead.formData, so new forms with different fields
// need no backend changes.

export type LeadSubmission = {
  name: string;
  email: string;
  phone: string;
  /** Which form/page this came from, e.g. "Contact — Request a Quote" */
  source: string;
  /** Form-specific fields keyed by their visible label */
  extra?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Client-side validation of the common fields (mirrored by the CMS lead API).
 * Returns an error message to show the visitor, or null when valid.
 */
export function validateLead(lead: LeadSubmission): string | null {
  if (lead.name.trim().length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }
  if (lead.name.trim().length > 100) {
    return "Name is too long (max 100 characters).";
  }
  if (!EMAIL_RE.test(lead.email.trim()) || lead.email.trim().length > 254) {
    return "Please enter a valid email address.";
  }
  const digits = lead.phone.replace(/[\s\-().]/g, "").replace(/^\+/, "");
  if (!/^\d{7,15}$/.test(digits)) {
    return "Please enter a valid phone number (7–15 digits).";
  }
  return null;
}

export async function submitLead(lead: LeadSubmission): Promise<{
  ok: boolean;
  message: string;
}> {
  // Validate before making the request — the backend re-checks the same rules
  const validationError = validateLead(lead);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  try {
    // Drop empty extras so the CMS only stores what was actually filled in
    const extra = Object.fromEntries(
      Object.entries(lead.extra ?? {}).filter(([, v]) => v && v.trim())
    );

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name.trim(),
        email: lead.email.trim(),
        phoneNo: lead.phone.trim(),
        leadSource: lead.source,
        formData: Object.keys(extra).length > 0 ? extra : undefined,
      }),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data?.success) {
      return { ok: true, message: "Lead submitted" };
    }
    return {
      ok: false,
      message: data?.message || "Something went wrong — please try again.",
    };
  } catch {
    return { ok: false, message: "Network error — please try again." };
  }
}
