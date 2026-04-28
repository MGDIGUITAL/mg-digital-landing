import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializa Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, fono, correo, mensaje } = body;

    // Validación básica
    if (!nombre || !fono || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Estructura del correo en HTML
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #050510; color: #ffffff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">MG.DIGITAL</h1>
          <p style="margin: 5px 0 0; color: #00f0ff; font-weight: bold;">NUEVO LEAD OBTENIDO</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff; color: #333333;">
          <h2 style="margin-top: 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Detalles del Contacto</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 120px; font-weight: bold; color: #666;">Nombre:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666;">Teléfono:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${fono}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #666;">Correo:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${correo}" style="color: #007bff;">${correo}</a></td>
            </tr>
          </table>
          <h3 style="margin-top: 20px; color: #666; font-size: 16px;">Mensaje:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #00f0ff; white-space: pre-wrap; line-height: 1.5;">${mensaje}</div>
        </div>
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
          Este correo fue generado automáticamente desde el formulario de contacto de la web de MG.DIGITAL.
        </div>
      </div>
    `;

    // Envío usando Resend
    const data = await resend.emails.send({
      from: "MG.DIGITAL Web <onboarding@resend.dev>", // Cambiar a tu dominio verificado si lo tienes
      to: ["mpeg.logistica@gmail.com"],
      subject: \`NUEVO LEAD MG.DIGITAL: \${nombre}\`,
      html: htmlContent,
      replyTo: correo,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al enviar el correo" },
      { status: 500 }
    );
  }
}
