// PurchaseModal.jsx
import React from 'react'; 
import '../Style/PurchaseModal.css'; 


const PurchaseModal = ({  cart , isOpen , closeModal }) => {
  if (!isOpen) return null; // No renderiza si el modal está cerrado

  return (
    <div className="modal-overlay">
       
       <button className="close" onClick={closeModal}>✖</button>

       <section className='contain-prod'>
        {cart.map(item => (
          <div className='content-item' key={item.id}>
            <img className='img-prod' src={item.imagen} alt={item.nombre} />
            <h3 className='nombre-item'>{item.nombre}</h3>
            <p className='precio-item'>{item.precio}</p>
            <li className='li-cantidad'>{ "Cantidad: " + item.cantidad}</li>
            <div className='contain-btn-mas-menos'>
            <button>-</button>
            <button>+</button>
            <img className='img-tacho-reciclaje' src="Imagenes/tacho-de-reciclaje.png" alt=""  />
            </div>
            
          </div>
        ))}
        </section>

      <div className="modal">
        <h2>Formulario de Compra</h2>
      
        <form>
          <label className='nameLabel' htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            required 
            aria-required="true"
            placeholder="Ingresa tu nombre"
          />

          <label className='email' htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            required 
            aria-required="true"
            placeholder="Ingresa tu email"
          />

          <label className='phone' htmlFor="phone">Teléfono:</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            aria-required="true"
            placeholder="Ingresa tu número de teléfono"
          />

          <label className='dirName' htmlFor="address">Dirección:</label>
          <input 
            type="text" 
            id="address" 
            required 
            aria-required="true"
            placeholder="Ingresa tu dirección"
          />

          <label className='payment-method' htmlFor="paymentMethod">Método de Pago:</label>
          <select id="paymentMethod" required>
            <option value="">Selecciona un método</option>
            <option value="credit-card">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Transferencia Bancaria</option>
          </select>

        

          <button type="submit" className="cta">Finalizar Compra</button>
        </form>

           <p className='totalApagarModal'>Total a pagar: </p>
      </div>


    </div>
  );
};

export default PurchaseModal;

