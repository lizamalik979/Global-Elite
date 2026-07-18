import { NextRequest, NextResponse } from "next/server";

const CMS_URL = process.env.CMS_URL || "http://localhost:3000";

// Server-side proxy: website forms POST here and we forward to the CMS lead
// API. Keeps the CMS URL server-only and avoids browser CORS entirely.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(`${CMS_URL}/api/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("POST /api/lead proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Could not reach the server — please try again." },
      { status: 502 }
    );
  }
}
