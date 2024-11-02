import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const description = formData.get("description") as string;
    const url = formData.get("url") as string;
    const email = formData.get("email") as string;
    const screenshot = formData.get("screenshot") as File;

    // Convert screenshot to base64 if it exists
    let screenshotBase64 = "";
    if (screenshot) {
      const bytes = await screenshot.arrayBuffer();
      screenshotBase64 = Buffer.from(bytes).toString("base64");
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL || "arihantjain7000@gmail.com",
      subject: "New Component Request",
      html: `
        <h1>New Component Request</h1>
        <h2>Description:</h2>
        <p>${description}</p>
        ${url ? `<h2>URL:</h2><p>${url}</p>` : ""}
        ${email ? `<h2>Contact Email:</h2><p>${email}</p>` : ""}
        ${
          screenshotBase64
            ? `<h2>Screenshot:</h2><img src="data:image/png;base64,${screenshotBase64}" />`
            : ""
        }
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
