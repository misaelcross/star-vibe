import { Resend } from "resend";

const resend = new Resend("re_BJi3TEEP_K9JiGtLndbHVZDcEqj9tBpDS"); // Sua API Key

async function sendEmail() {
  try {

    const data = await resend.emails.send({
      from: "Star Vibe <onboarding@resend.dev>",
      to: "misael.silvacruz@gmail.com",
      subject: "Teste direto via Node.js",
      text: "Se você recebeu este email, a API do Resend está funcionando!"
    });
    console.log("✅ Email enviado:", data);
  } catch (error) {
    console.error("🚨 Erro ao enviar email:", error);
  }
}

sendEmail();