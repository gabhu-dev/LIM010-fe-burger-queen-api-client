import React from 'react';
import Header from './Header'
const TakeOrders = () => {
  return (
  <div> 
    <Header/>
  <input placeholder = "Nombre del cliente"/>
  <input type = "number" placeholder = "Nro de Orden"/>
  <button>Desayuno</button>
  <button>Almuerzo y cena</button>
  <div>agregar productos</div>
  <div>eliminar productos</div>
  <div>resumen y total de la compra</div>
  <button>enviar pedido</button>
  </div>
  );
};
export default TakeOrders;