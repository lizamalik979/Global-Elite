import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by the CMS dashboard's "revalidate" button (the CMS proxies here with
// the shared secret). Expires the given cache tags immediately so the very
// next visit fetches fresh content from the CMS — deletes 404 and edits show
// without a stale-while-revalidate window.
// Hosting dashboards often end up with surrounding quotes or stray whitespace
// pasted into env values (dotenv strips quotes, dashboard UIs don't). Normalize
// so both sides compare the same secret regardless.
const normalizeSecret = (v: string | null | undefined) =>
  (v ?? "").trim().replace(/^['"]|['"]$/g, "");

export async function POST(req: NextRequest) {
  const secret = normalizeSecret(process.env.REVALIDATE_SECRET);
  if (!secret || normalizeSecret(req.headers.get("x-revalidate-secret")) !== secret) {
    return NextResponse.json({ success: false, message: "Invalid secret" }, { status: 401 });
  }

  let tags: unknown;
  try {
    ({ tags } = await req.json());
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON body" }, { status: 400 });
  }

  if (!Array.isArray(tags) || tags.length === 0 || !tags.every((t) => typeof t === "string")) {
    return NextResponse.json({ success: false, message: "tags array required" }, { status: 400 });
  }

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  return NextResponse.json({ success: true, revalidated: tags });
}
