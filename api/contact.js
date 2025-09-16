export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { nombre, email, comentarios } = req.body;

  if (!nombre || !email || !comentarios) {
    return res.status(400).json({ error: 'Todos los campos son requeridos.' });
  }

  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxAlryvtDlWzjdJnlqQS5LCmDOCfZz10ys-JDdOrD6Uhkzpj-xzVcj33iKRASKeaGwQkQ/exec";

    const payload = {
      nombre: nombre,
      email: email,
      comentarios: comentarios
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.result !== "success") {
      console.error('Google Script error:', data);
      return res.status(500).json({ error: 'Error al guardar en Google Sheets.' });
    }

    return res.status(200).json({ message: 'Formulario enviado exitosamente.' });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Error del servidor.' });
  }
}





