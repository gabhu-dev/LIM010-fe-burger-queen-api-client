// se unen todos los componentes 
// -> header,listProducts,
import React from 'react';
import getProducts from '../../controller/products/Products' ;
import showProduct from '../products/ListProducts'
const TakeOrders = () => {
  const handleBreak = (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token');
    console.log(token)
    getProducts(token)
    .then(res=> showProduct(res))
  }
  return (
  <div> 
    <button
    onClick= {handleBreak}>desayuno</button>
    <button>almuerzo</button>
  </div>
  );
};
export default TakeOrders;