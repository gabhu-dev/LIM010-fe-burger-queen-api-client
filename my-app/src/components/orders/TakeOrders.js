// se unen todos los componentes 
// -> header,listProducts,
import React,{useState, useEffect} from 'react';
import getProducts from '../../controller/products/products';
import ListProducts from '../products/ListProducts';
const TakeOrders = (props) => {
  const [productData, setProductData]=useState([]);
  const [type, setType] = useState('desayuno');
  const token = localStorage.getItem('token');

  useEffect(() => {
  getProducts(token)
    .then(res=> setProductData(res))
}, [])
// el array vacio-> no hay dependencia
// si quisieramos que dependa del token -> dentro del array se colocaria al 
// token para decirle que queremols que se actualize cada vez que el token cambie.

return(
  <main>
  <button
    onClick= {() => setType('desayuno')} 
  >
  Desayuno
  </button>
  <button onClick = {() => setType('almuerzo')}>Almuerzo</button>
  <div>
      <ListProducts type={type} data={productData} />
  </div>
  {/* <div>
    <ListProducts data={productData} menu="almuerzo"/>
  </div> */}
</main>
)
};
export default TakeOrders;