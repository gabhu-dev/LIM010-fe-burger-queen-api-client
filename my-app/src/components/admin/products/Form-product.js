// modal
import React, {useState} from 'react';
import addProduct from '../../../controller/products/add-product';
const FormUser = ({ show, setShow}) =>{
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); 
    setShow(show === true ? false : true);
    addProduct(localStorage.getItem('token'),productName, price)
    .then(res => console.log(res))
  }
  return(
    <>
    {show === true && ( 
      <div className="modal">
      <form onSubmit={onSubmit} className="form-user">
        <label>Crear producto</label>
        <input 
        type="text" 
        className ="input-user" 
        placeholder="name"
        value={productName}
        onChange={(e)=> setProductName(e.target.value)}
        />
        <input 
        type="text"
        className ="input-user" 
        placeholder="price"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        />
        <button >Agregar</button>
        <span className="close">&times;</span>
      </form>
    </div>)}
     {show === false && (
       <></>
     )}
    </>
  )
}
export default FormUser;