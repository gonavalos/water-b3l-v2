// app/api/contact/route.ts
import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Forward to N8N webhook
    if (N8N_WEBHOOK_URL) {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          company: body.company,
          subject: body.subject,
          message: body.message,
          timestamp: new Date().toISOString(),
          source: "waterb3l.com",
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Error processing request" }, { status: 500 });
  }
}
