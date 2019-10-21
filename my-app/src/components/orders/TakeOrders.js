import React from 'react';
import getSpecificProduct from './GetProducts';
// import showProduct from './ShowProducts';
const TakeOrders = () => {
  // llamar a todos los producos y pintarlos
  const handleProducts = (e) =>{
    e.preventDefault()
    // const product = 'agua';
    // const price = 2;
    getSpecificProduct()
    .then(res=>{
      // showProduct(res)
      console.log(res);
    })
  }
  
 
  return (
  <div> 
  <input 
    placeholder = "Nombre del cliente"
  />
  <input
    type = "number" 
    placeholder = "Nro de Orden"/>
  <button
  onClick= {handleProducts}>Desayuno</button>
  <button>Almuerzo y cena</button>
  <button>coca cola</button>
  <div>agregar productos</div>
  <div>eliminar productos</div>
  <div>resumen y total de la compra</div>
  <button>enviar pedido</button>
  </div>
  );
};
export default TakeOrders;