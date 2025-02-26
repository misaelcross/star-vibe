import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("🔥 API SEND foi chamada");
  try {
    const body = await req.json();
    console.log("📩 Request body recebido:", body);

    const { email } = body;
    if (!email || typeof email !== "string" || !email.includes("@")) {
      console.log("❌ Email inválido:", email);
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    console.log("📤 Tentando enviar email para:", email);
    const data = await resend.emails.send({
      from: "Star Vibe <contato@starvibe.space>",
      to: email,
      subject: "Bem-vindo(a) a Star Vibe! 🌟",
      react: EmailTemplate({ email }),
    });

    console.log("✅ Email enviado com sucesso:", data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("🚨 Erro ao enviar email:", error);
    return NextResponse.json({ error: "Erro interno", details: error }, { status: 500 });
  }
}