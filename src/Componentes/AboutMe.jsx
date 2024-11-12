import React, { useEffect, useState } from 'react';
import '../Style/AboutMe.css';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-me');
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about-me" className={isVisible ? 'fade-in' : ''}>
      <div className="about-me-container">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una tienda de ropa apasionada por ofrecer las últimas tendencias de moda a precios accesibles. 
          Nuestra misión es brindarte una experiencia de compra única, con productos de alta calidad y diseños exclusivos. 
          ¡Explora nuestra colección y encuentra el estilo que mejor te representa!
        </p>
    
      </div>
    </section>
  );
};

export default AboutMe;

