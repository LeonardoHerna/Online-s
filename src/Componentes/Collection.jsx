import React, { useEffect } from 'react';




const Collection = ({addToCart}) => {
  
  
  const products = [
    { id: 1, nombre: 'Remera', precio: '$120', imagen: 'Imagenes/remera.jpg', button: 'Ver colleccion'  },
    { id: 2, nombre: 'Jeans', precio: '$35', imagen: 'Imagenes/jeans.jpg', button: 'Ver colleccion'  },
    { id: 3, nombre: 'Buzo casual', precio: '$75', imagen: 'Imagenes/buso.jpg', button: 'Ver colleccion' },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.collection-item');
      items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight - 50) {
          item.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
 
  
  return (
    <section id="collection">
      <h2>Nueva Colección</h2>
      <div className="collection-grid">
        {products.map((product) => (
          <div key={product.id} className="collection-item">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.precio}</p>
            <button onClick={() => {addToCart(product)}} className='btn-verCollection' >{product.button}</button>
          </div>
        ))}
      </div>
         
     
    </section>
  );
};

export default Collection;


