import React from 'react';
import '../Style/CollectionPage.css';






const products = [
  { id: 1, nombre: 'Bermuda azul Hombre', precio: '$600', imagen: 'Imagenes/Bermudaazul.webp' },
  { id: 2, nombre: 'Bermuda de shing', precio: '$900', imagen: 'Imagenes/Bermudasshin.webp' },
  { id: 3, nombre: 'Remera negra', precio: '$490', imagen: 'Imagenes/remeranegra.webp' },
  { id: 4, nombre: 'Remera regular', precio: '$390', imagen: 'Imagenes/remeraregular.webp' },
  { id: 5, nombre: 'Bermuda slim', precio: '$1200', imagen: 'Imagenes/bermudaslim.webp' },
  { id: 6, nombre: 'Short pana ', precio: '$750', imagen: 'Imagenes/Shortdepananegro.webp' },
  { id: 7, nombre: 'Remera polo', precio: '$800', imagen: 'Imagenes/Remera-polo-verde.webp' },
  { id: 8, nombre: 'Remera polo azul', precio: '$800', imagen: 'Imagenes/Remera-polo.webp' },
  { id: 9, nombre: 'Remera Dama estampada', precio: '$530', imagen: 'Imagenes/Remera-larga-con-estampadoDama.webp' },
  { id: 10,nombre: 'Remera overzide', precio: '$650', imagen: 'Imagenes/Remera-oversizedDama.webp'},
  { id: 11,nombre: 'Remera boxy', precio: '$490', imagen: 'Imagenes/Remera-boxyBlancaDama.webp'}
];


const ShowCollection = ({ addToCart , isOpen , onClose,}) => { 
 
 if(!isOpen) return null;


  return (
      
    
    <section id="collection-page">
      <h2 className="collection-title">Nuestra Colección</h2>
      <button className='btnClose' onClick={onClose}>✖</button>
      
      <div className="collection-grid">
        {products.map((product) => (
          <div key={product.id} className="collection-item">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.precio}</p>
            <button onClick={() => {addToCart(product)}} className="buy-now-btn">Agregar a carrito</button>
        </div>
        ))}
      </div>
    
    </section>

 
  );
};

export default ShowCollection;
