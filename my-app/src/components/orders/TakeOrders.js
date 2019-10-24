// se unen todos los componentes 
// -> header,listProducts,
import React,{useState} from 'react';
import getProducts from '../../controller/products/products';
import ListProducts from '../products/ListProducts';
const TakeOrders = (props) => {
  const [productData, setProductData]=useState([]);
  const handleBreak = (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token');
    getProducts(token)
    .then(res=> setProductData(res))
}
return(
  <main>
  <button
    onClick= {handleBreak}
  >
  desayuno
  </button>
  <button>almuerzo</button>
  <div>
    <ListProducts data={productData}/>
  </div>
</main>
)
};
export default TakeOrders;