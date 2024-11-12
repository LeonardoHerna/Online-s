// Header.js
import React from 'react';
import BuyButton from './BuyButton';


const Header = ({ addToCart, cart}) => { 
  return (
    <header>
      <div className="logo">Tu Tienda</div>
      <nav>
        <a href="#productos">Productos</a>
        <a href="#ofertas">Ofertas</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <BuyButton addToCart={addToCart} cart={cart} /> {/* Integrando el botón de compra */}
    </header>
  );
};

export default Header;
