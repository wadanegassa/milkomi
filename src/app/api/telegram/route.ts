import {NextResponse} from "next/server";

function sanitize(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables.",
        },
        {status: 500}
      );
    }

    const form = await req.formData();
    const type = sanitize(form.get("type"));
    const locale = sanitize(form.get("locale")) || "en";

    const entries = Array.from(form.entries())
      .filter(([k]) => k !== "type")
      .map(([k, v]) => `• ${k}: ${sanitize(v)}`)
      .join("\n");

    const text = [
      `Senaf Int. Hotel Website Lead`,
      `Type: ${type || "unknown"}`,
      `Locale: ${locale}`,
      "",
      entries,
    ].join("\n");

    const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!tgResponse.ok) {
      const detail = await tgResponse.text();
      return NextResponse.json({ok: false, error: detail}, {status: 502});
    }

    return NextResponse.json({ok: true});
  } catch (error) {
    return NextResponse.json(
      {ok: false, error: error instanceof Error ? error.message : "Unknown error"},
      {status: 500}
    );
  }
}

