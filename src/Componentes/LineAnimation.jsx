import React, { useEffect, useState } from 'react';
import '../Style/LineAnimation.css';

const LineAnimation = () => {
  const [trail, setTrail] = useState([]); // Cola de seguimiento

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPoint = { x: e.pageX, y: e.pageY };
      setTrail((prevTrail) => {
        const updatedTrail = [...prevTrail, newPoint];
        if (updatedTrail.length > 30) updatedTrail.shift(); // Mantiene un límite de puntos para la cola
        return updatedTrail;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="main-container">
      {trail.map((point, index) => (
        <div
          key={index}
          className="line-segment"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: 10 - index * 0.01, // Desvanece gradualmente la cola
          }}
        ></div>
      ))}
    </div>
  );
};

export default LineAnimation;

