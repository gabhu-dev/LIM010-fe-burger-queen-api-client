// se unen todos los componentes 
// -> header,listProducts,
import React from 'react';
import getProducts from '../../controller/products/Products' ;
import ShowData from '../products/ListProducts';
const TakeOrders = () => {
  // const numbers = [1, 2, 3, 4, 5];
  const products = [
      {
        _id:"0001",
        name:"agua",
        price:2,
        image:"http/agua.com",
        type:"bebidas",
        dateEntry:"10/10/10"
      },
      {
        _id:"0002",
        name:"coca-cola",
        price:4,
        image:"http/coca.com",
        type:"bebidas",
        dateEntry:"10/10/10"
      },
      {
        _id:"0003",
        name:"hamburguesa",
        price:8,
        image:"http/hamburguer.com",
        type:"hamburguesa",
        dateEntry:"10/10/10"
      }
    ];
  const listItems = products.map((number) =>
    <li>{number.type}</li>
  );
  const handleBreak = (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token');
    console.log(token);
    getProducts(token)
    .then(res=> ShowData(res))
  }
  return (
  <div> 
    <button
    onClick= {handleBreak}>desayuno</button>
    <button >almuerzo</button>
    <textarea></textarea>
    <ul>{listItems}</ul>
  </div>
  );
};
export default TakeOrders;