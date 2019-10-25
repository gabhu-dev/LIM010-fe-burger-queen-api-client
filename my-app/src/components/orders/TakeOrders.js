// se unen todos los componentes 
// -> header,listProducts,
import Header from './Header';
import React, {useState, useEffect} from 'react';
import getProducts from '../../controller/products/products'; 
import Clientname from './Cliente';
import ListProducts from '../products/ListProducts';
import Take from './Take';
import './Order.css'

const TakeOrders = (props) => {
  const [name, setName] = useState("");
  const [productData, setProductData]=useState([]);
  const [type, setType] = useState("desayuno")
  const updateName = (e) => {
    setName(e.target.value)
  }
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    getProducts(token)
    .then(res=> setProductData(res));
  }, [])
  
  return (
  <div> 
    <Header props={props}/>
    <main>
    <Clientname name={name} updateName={updateName} />
    <div> 
        <button
          className="btn-da"
          onClick= {() => setType('desayuno') }>Desayuno</button>
        <button  
          className="btn-da"
          onClick= {() => setType('almuerzo') }>Almuerzo</button>
        <div>
          <ListProducts  type={type} data={productData}/>
        </div>
    </div>
    <div>
      <Take props={props} />
    </div>
    </main>
  </div>
  );
};
export default TakeOrders;


















