import {useEffect, useState}from 'react';
import '../Style/ClientReviews.css'; 

const ClientReviews = () => {
 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('client-reviews');
      const rect = section.getBoundingClientRect();
      if (rect.top >= 1 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
 
  const reviews = [
    { name: 'María López', comment: 'Excelente calidad en las prendas, 100% recomendado.', rating: 5 },
    { name: 'Juan Pérez', comment: 'El servicio fue rápido y eficiente. Muy contento con mi compra.', rating: 4 },
    { name: 'Ana Martínez', comment: 'Me encanta el diseño y la atención al cliente fue genial.', rating: 5 },
    { name: 'Carlos Gómez', comment: 'Las ofertas son increíbles, lo recomiendo sin dudas.', rating: 4 },
    { name: 'Lucía Rodríguez', comment: 'Recibí mi pedido en el tiempo estimado y la calidad es excelente.', rating: 5 },
    { name: 'Martin Gonzalez', comment: 'Recibí mi pedido en el tiempo estimado y la calidad es excelente.', rating: 5 },
    { name: 'Santiago Mendez', comment: 'Recibí mi pedido en el tiempo estimado y la calidad es excelente.', rating: 5 },
    { name: 'Lucas Gomez', comment: 'Recibí mi pedido en el tiempo estimado y la calidad es excelente.', rating: 5 },

  ];

  return (
    <section id='client-reviews' className={isVisible ? 'fade-in' : ''}>
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
            <div className="rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
