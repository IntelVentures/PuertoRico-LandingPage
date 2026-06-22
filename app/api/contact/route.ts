import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nombre, email, rol, municipio, telefono, comentarios } =
      await request.json();

    if (!nombre || !email) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // Prefer the env var; fall back to the same URL the prior static
    // api/contact.js used in production (already public in repo history),
    // so the migrated form keeps working without a separate Vercel env step.
    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbxAlryvtDlWzjdJnlqQS5LCmDOCfZz10ys-JDdOrD6Uhkzpj-xzVcj33iKRASKeaGwQkQ/exec";

    if (!scriptUrl) {
      return NextResponse.json(
        { error: "Google Script URL no está configurada." },
        { status: 500 }
      );
    }

    // Forward every field so the Apps Script can write one column each.
    // `comentarios` (packed summary) is kept as a bridge: the current
    // Sheet1 script still reads it until the new column-per-field script
    // is redeployed.
    const googleRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        email,
        rol,
        municipio,
        telefono,
        comentarios,
      }),
    });

    const googleJson = await googleRes.json();

    if (googleJson.result === "success") {
      return NextResponse.json({ message: "success" });
    } else {
      return NextResponse.json(
        { error: "Error en Google Apps Script." },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Error en el servidor." },
      { status: 500 }
    );
  }
}
