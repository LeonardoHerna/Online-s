// server.js
require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Permitir solicitudes desde el frontend
app.use(express.json()); // Analizar JSON

// Ruta para enviar el correo
app.post('/api/send-email', async (req, res) => {
  const { email, pedido } = req.body;

  console.log('Datos recibidos en el backend:', { email, pedido });

  // Verificación 
  if (!email || !pedido) {
    return res.status(400).json({ success: false, message: 'Faltan datos.' });
  }
  console.log('datos recibidos:', email, pedido );

  try {
    // Configurar el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Usuario de correo desde variables de entorno
        pass: process.env.EMAIL_PASS, // Contraseña desde variables de entorno
      },
    });

    // Configuración del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // El email del cliente
      subject: 'Confirmación de tu pedido',
      text: `Hola, hemos recibido tu pedido:\n\n${pedido}\n\nGracias por comprar con nosotros.`,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Correo enviado con éxito.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo.' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

  