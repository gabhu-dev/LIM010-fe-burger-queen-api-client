import React from 'react';
import Header from './Header'
const TakeOrders = () => {
  return (
  <div> 
    <Header/>
  <input placeholder = "nombre del cliente"/>
  <div>agregar productos</div>
  <div>eliminar productos</div>
  <div>resumen y total de la compra</div>
  <button>enviar pedido</button>
  </div>
  );
};
export default TakeOrders;