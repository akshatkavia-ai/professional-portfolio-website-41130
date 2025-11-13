import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

// PUBLIC_INTERFACE
export async function POST(req: Request) {
  /** Handle contact form submissions. Accepts JSON {name, email, message} and returns {ok:true} on success.
   * Validates inputs and logs to server console. Does not integrate with third-party services.
   */
  try {
    const body = (await req.json()) as Payload;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }
    const emailOk = /^\S+@\S+\.\S+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ ok: false, error: "Message too short." }, { status: 400 });
    }

    // Log to server console
    console.log("[CONTACT] New message:", { name, email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }
}
