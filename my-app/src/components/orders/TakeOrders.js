// se unen todos los componentes 
// -> header,listProducts,
import React from 'react';
import getProducts from '../../controller/products/Products' 
// import showProduct from './ShowProducts';
const TakeOrders = () => {
  const handleBreak = (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token');
    console.log(token)
    getProducts(token)
    .then(res=> console.log(res))
  }
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
    <button
    onClick= {handleBreak}>desayuno</button>
    <button>almuerzo</button>
  </div>
  );
};
export default TakeOrders;