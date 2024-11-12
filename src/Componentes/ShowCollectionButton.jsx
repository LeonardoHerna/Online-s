// ShowCollectionButton.js
import React, { useState } from 'react';
import ShowCollection from './ShowCollection'; 


const ShowCollectionButton = ({ addToCart}) => {
  const [showCollection, setShowCollection] = useState(false); // Estado para manejar la visibilidad


  // Función para mostrar la colección cuando se hace clic en el botón
  const handleOpenColection = () => {
    
    setShowCollection(true); // Cambia el estado a true para mostrar la colección
  };

  const handleCloseColection = () => {
    setShowCollection(false); // Cambia el estado para ocultar la coleccion
  }
 





  return (
    
    <section id="hero">
    <div className="hero-content">
      <h1>¡Bienvenido a tu Tienda de Ropa!</h1>
      <p>Las mejores ofertas de moda están aquí.</p>
      <button  className="cta" onClick={handleOpenColection}>Explora la colección</button>
      {showCollection && <ShowCollection  addToCart={addToCart} isOpen={showCollection} onClose={handleCloseColection} />}{/* Muestra la colección si showCollection es true */}

    </div>
  </section>
  
  );
  
};

export default ShowCollectionButton;
