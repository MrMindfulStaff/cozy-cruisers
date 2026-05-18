import { Resend } from "resend";

const TO_EMAIL = "CozyCruiserMKE@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = (data.firstName ?? "").trim();
  const lastName = (data.lastName ?? "").trim();
  const email = (data.email ?? "").trim();

  if (!firstName || !lastName || !EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please provide your name and a valid email address." },
      { status: 400 }
    );
  }

  const isFamily = data.formType !== "facility";
  const subject = isFamily
    ? `New Family Inquiry — ${firstName} ${lastName}`
    : `New Facility Inquiry — ${(data.facilityName ?? "").trim() || `${firstName} ${lastName}`}`;

  const lines = [
    `Inquiry type: ${isFamily ? "Family" : "Facility"}`,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${(data.phone ?? "").trim() || "—"}`,
  ];

  if (isFamily) {
    lines.push(`Childcare facility: ${(data.childcareFacility ?? "").trim() || "—"}`);
    lines.push(`Pickup area: ${(data.pickupArea ?? "").trim() || "—"}`);
  } else {
    lines.push(`Facility name: ${(data.facilityName ?? "").trim() || "—"}`);
    lines.push(`License type: ${(data.licenseType ?? "").trim() || "—"}`);
    lines.push(`Children needing transportation: ${(data.enrolledChildren ?? "").trim() || "—"}`);
  }

  lines.push("", "Message:", (data.message ?? "").trim() || "—");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Cozy Cruisers Website <forms@cozycruisermke.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "We couldn't send your message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
