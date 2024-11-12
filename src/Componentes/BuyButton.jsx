// BuyButton.js
import React, { useState, useEffect } from 'react';
import PurchaseModal from './PurchaseModal';




const BuyButton = ({ cart}) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del modal

  // Función para abrir el modal
  const openModal = () => {
    setIsOpen(true);
  
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Efecto para manejar el cierre del modal con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Añade el event listener al componente
    window.addEventListener('keydown', handleKeyDown);
    
    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <>
      <img onClick={openModal} className='img-carrito' src="Imagenes/carro-de-la-compra.png" alt="carro-de-compra" />
      <PurchaseModal  cart={cart}   isOpen={isOpen} closeModal={closeModal} /> {/* Modal de compra */}

    </>
  );
};

export default BuyButton;
