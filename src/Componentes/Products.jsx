// src/components/Products.js
import React from 'react';


const Products = ({ addToCart}) => {
  const productos = [
    { id: 12, nombre: 'Reloj', precio: '$20', imagen: 'Imagenes/reloj.jpg' },
    { id: 13, nombre: 'Cartera Dama', precio: '$30', imagen: 'Imagenes/cartera.jpg' },
    { id: 14, nombre: 'Cartera Caballero', precio: '$40', imagen: 'Imagenes/billetera.jpg' },
  ];

  return (
    <section className='productos' id="productos">
      <h2>Productos Destacados</h2>
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button onClick={() => {addToCart(producto)}}>Agregar a carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Products;
