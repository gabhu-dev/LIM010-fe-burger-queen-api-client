// se unen todos los componentes 
// -> header,listProducts,
import Header from './Header';
import React, {useState, useEffect} from 'react';
import getProducts from '../../controller/products/products'; 
import Clientname from './Cliente';
import ListProducts from '../products/ListProducts';
import Take from './Take';
import postOrder from '../../controller/orders/add-order';
import getSpecificUser  from '../../controller/users/Id-user';


const TakeOrders = (props) => {
  const [name, setName] = useState("");
  const [productData, setProductData]=useState([]);
  const [type, setType] = useState("desayuno");
  const [arrayOrder, setArrayOrder]= useState([]);
  const [total, setTotal] = useState(0);
  const updateName = (e) => {
    setName(e.target.value)
  }
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    getProducts(token)
    .then(res=> setProductData(res));
  }, [])
   const addProduct = (newProducto)=>{
    if(arrayOrder.find((element)=> element.name === newProducto.name)){
      const newArray =arrayOrder.map((product) => {
        if(product.name ===newProducto.name) {
          product.qty = product.qty +1;
          product.total= product.price * product.qty
          return(
            product
          )
        } else {
          return (product)
        }
      }) 
      setArrayOrder(newArray)
    } else {
      setArrayOrder([...arrayOrder, { ...newProducto, qty: 1, total: newProducto.price }]);
    }
  }

  const sendPostOrders = () => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    console.log(arrayOrder.map(elem => ({ product: elem._id, qty: elem.qty })));
    getSpecificUser (token,email)
    .then((res) => {
     postOrder(
       token,
       res._id, 
       name, 
       arrayOrder.map(elem => ({ product: elem._id, qty: elem.qty })))
     .then((res) =>{
      console.log(res)
      // setName('');
      // setArrayOrder([]);
     })
    });
  }

  return (
  <div> 
    <Header props={props}/>
    <main>
    <Clientname name={name} updateName={updateName} />
    <div> 
        <button
          className="btn-break-dinner"
          onClick= {() => setType('desayuno') }>Desayuno</button>
        <button  
          className="btn-break-dinner"
          onClick= {() => setType('almuerzo') }>Almuerzo</    button>
        <div>
           <ListProducts  type={type} data={productData} addProduct={addProduct} />
        </div>
    </div>
    <div>
      <Take arrayOrder={arrayOrder} name={name}  setArrayOrder={setArrayOrder}  total={total} setTotal={setTotal} sendPostOrders={sendPostOrders}/>
    </div>
    </main>
  </div>
)
};
export default TakeOrders;
