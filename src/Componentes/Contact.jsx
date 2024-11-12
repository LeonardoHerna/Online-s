// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  // Estados para los campos del formulario y el mensaje de estado
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verifica que los datos sean correctos antes de enviarlos
    console.log({ email, pedido: message });
  
    try {
      // Enviar datos al backend
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pedido: message }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        setFeedback('Correo enviado con éxito.');
      } else {
        setFeedback('Hubo un error al enviar el correo.');
      }
    } catch (error) {
      console.log('Error en la solicitud:', error);
      setFeedback('Ocurrió un error inesperado.');
    }
  
    setName('');
    setEmail('');
    setMessage('');
  };
  
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar feedback */}
      {feedback && <p>{feedback}</p>}
    </section>
  );
};

export default Contact;
