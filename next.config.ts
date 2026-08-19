import type { NextConfig } from "next";

// Canonical host is derived from NEXT_PUBLIC_SITE_URL — the same variable the
// sitemap reads (app/lib/sitemap-utils.ts) — so there is one source of truth
// rather than two that can drift apart.
//
// Unset or malformed produces no redirect at all, instead of a redirect to
// "https://undefined". That is what makes this safe on localhost and on preview
// deployments, and it means the same build works on Vercel or Hostinger with
// only the env var changing.
let canonicalHost: string | undefined;
try {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) canonicalHost = new URL(raw).host;
} catch {
  // A bad value must not fail the build — fall through to no redirect.
}
const apexHost = canonicalHost?.replace(/^www\./, "");

const nextConfig: NextConfig = {
  async redirects() {
    // Only redirect when the canonical host is a www host and the apex differs.
    // `has: host` matches the hostname exactly, so www can never match itself —
    // there is no redirect loop. Redirecting here rather than in the hosting
    // panel keeps the path intact (/travel → www/travel, not the homepage).
    if (!canonicalHost || !apexHost || canonicalHost === apexHost) return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: apexHost }],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true, // emits 308 — permanent, passes SEO signals, preserves method
      },
    ];
  },
};

export default nextConfig;
