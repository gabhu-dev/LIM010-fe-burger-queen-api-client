// se unen todos los componentes 
// -> header,listProducts,
import Header from './Header';
import React, {useState} from 'react';
import getProducts from '../../controller/products/products'; 
import Clientname from './Cliente';
import ListProducts from '../products/ListProducts';

const TakeOrders = (props) => {
  const [name, setName] = useState("");
  const [productData, setProductData]=useState([]);
  const updateName = (e) => {
    setName(e.target.value)
  }
  const handleBreak = (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token');
    getProducts(token)
    .then(res=> setProductData(res))

  }

  return (
  <div> 
    <Header props={props}/>
    <main>
    <Clientname name={name} updateName={updateName} />
    <div> 
        <button
        onClick= {handleBreak}>desayuno</button>
        <button>almuerzo</button>
        <div>
        <ListProducts data={productData}/>
        </div>
      </div>
    </main>
  </div>
  );
};
export default TakeOrders;


















