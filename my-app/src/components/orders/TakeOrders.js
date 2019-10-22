import React from 'react';
import Header from './Header'
import getSpecificProduct from './Products';
const TakeOrders = () => {
  // const [userId, setUserId] = useState("");
  // const [client, setClient] = useState("");
  // const [products, setProducts] = useState("");
  // const [productId, setProductId] = useState("");

  // const handleClientChange = (e) =>{
  //   setClient(e.target.value);
  // }
  // const handleProduct = (e) =>{
  //   getSpecificProduct()
  // }
  // llamar a todos los producos y pintarlos
  return (
  <div> 
    <Header/>
  {/* <input 
  placeholder = "Nombre del cliente"
  value ={client}
  onChange= {handleClientChange}
  />
  <input type = "number" placeholder = "Nro de Orden"/>
  <button>Desayuno</button>
  <button>Almuerzo y cena</button>
  <button
  onClick={handleProduct}
  >hamburguesa</button> */}
  <button>coca cola</button>
  <div>agregar productos</div>
  <div>eliminar productos</div>
  <div>resumen y total de la compra</div>
  <button>enviar pedido</button>
  </div>
  );
};
export default TakeOrders;