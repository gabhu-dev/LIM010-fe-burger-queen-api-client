// se unen todos los componentes 
// -> header,listProducts,
import Header from './Header';
import React, {useState, useEffect} from 'react';
import getProducts from '../../controller/products/products'; 
import Clientname from './Cliente';
import ListProducts from './ListProducts';
import Take from './Take';
import postOrder from '../../controller/orders/add-order';


const TakeOrders = (props) => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(true);
  const [productData, setProductData] = useState([]);
  const [type, setType] = useState('desayuno');
  const [arrayOrder, setArrayOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const updateName = (e) => {
    setName(e.target.value)
  }
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    getProducts(token)
    .then(res=> setProductData(res));
  }, [])
  console.log(productData);
  const addProduct = (newProducto) => {
    if(arrayOrder.find((element)=> element.name === newProducto.name)){
      const newArray =arrayOrder.map((product) => {
        if(product.name ===newProducto.name) {
          product.qty = product.qty +1;
          product.total = product.price*product.qty
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
  };
  const sendPostOrders = () => {
    // const token = localStorage.getItem('token');
    // const email = localStorage.getItem('email');
    // getSpecificUser(token,email)
    // .then((resp) => {
    //  postOrder(
    //    token,
    //    resp._id, 
    //    name, 
    //    arrayOrder.map(elem => ({ product: elem._id, qty: elem.qty })))
    //    .then((res) =>{
    //   setName('');
    //   setArrayOrder([]);
    //   setShow(true);
    //  })
    // });
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    postOrder(token, email, name, arrayOrder.map(elem => ({ product: elem._id, qty: elem.qty })))
      .then(res => {
        setName('');
        setArrayOrder([]);
        setShow(true);
      })
  };
  return (
  <div> 
    <Header props={props}/>
    <main className='column' >
      <Clientname name={name} updateName={updateName} show={show} setShow={setShow} />
      <section className="products-container"> 
        <button
          className="btn-break-dinner"
          onClick= {() => setType('desayuno') }>Desayuno</button>
        <button  
          className="btn-break-dinner"
          onClick= {() => setType('almuerzo') }>Almuerzo</    button>
        <div className="subproducts-container">
           <ListProducts  type={type} data={productData} addProduct={addProduct} />
        </div>
      </section>
      <section className="products-container">
        <Take arrayOrder={arrayOrder} name={name}  setArrayOrder={setArrayOrder}  total={total} setTotal={setTotal} sendPostOrders={sendPostOrders}/>
      </section>
    </main>
  </div>
)
};
export default TakeOrders;