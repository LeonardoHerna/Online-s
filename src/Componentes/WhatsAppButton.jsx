
import React from 'react';
import '../Style/WhatsAppButton.css'; 

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '097431589'; 
    const message = '¡Hola! Estoy interesado en saber más sobre tus productos.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Abre el enlace en una nueva pestaña
  };

  return (
    <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
      <img
        src="Imagenes/whatsapp.webp"
        alt="WhatsApp"
      />
    </button>
  );
};

export default WhatsAppButton;
