
import './Style/App.css';
import { useState } from 'react';
import Contact from './Componentes/Contact';
import Footer from './Componentes/Footer';
import Offers from './Componentes/Offers';
import Products from './Componentes/Products';
import ShowCollectionButton from './Componentes/ShowCollectionButton';
import Header from './Componentes/Header';
import Collection from './Componentes/Collection';
import WhatsAppButton from './Componentes/WhatsAppButton';
import AboutMe from './Componentes/AboutMe';
import ClientReviews from './Componentes/ClientReviews';
import LineAnimation from './Componentes/LineAnimation';



function App() {
  
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para agregar productos al carrito

const addToCart = (product, cantidad) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === product.id);

    if (existingProduct) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 }: item );
    } else {
      return [...prevCart, { ...product, cantidad: 1 }];
     }
  });
};
  return (
    <div className="App">
      <Header cart={cart} />
      <ShowCollectionButton  addToCart={addToCart} />
      <Offers />
      <Products  addToCart={addToCart}/>
      <Collection addToCart={addToCart} />
      <AboutMe />
      <ClientReviews />
      <WhatsAppButton />
     <Contact />
     <LineAnimation />
     <Footer />
 
     
     
     


    </div>
  );
}

export default App;