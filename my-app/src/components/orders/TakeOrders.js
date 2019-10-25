// se unen todos los componentes 
// -> header,listProducts,
import React,{useState, useEffect} from 'react';
import getProducts from '../../controller/products/products';
import ListProducts from '../products/ListProducts';
import Header from './Header';
const TakeOrders = (props) => {
  const [productData, setProductData]=useState([]);
  const [type, setType] = useState('desayuno');
  // la funcion orders va a recibir a los productos que 
  // fueron clickeados 
  // orders recibe
  // teke orders lo pinta

  useEffect(() => { 
  const token = localStorage.getItem('token');
  getProducts(token)
    .then(res=> setProductData(res))
}, [])
// el array vacio-> no hay dependencia
// si quisieramos que dependa del token -> dentro del array se colocaria al 
// token para decirle que queremols que se actualize cada vez que el token cambie.

return(
  <div>
  <Header props={props}/>
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
</main>
</div>
)
};
export default TakeOrders;