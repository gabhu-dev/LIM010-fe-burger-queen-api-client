// modal
import React, { useState } from 'react';
import addProduct from '../../../controller/products/add-product';

const FormUser = ({ show, setShow}) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  // const [dateEntry, setDateEntry] = useState('');
  const onSubmit = (e) => {
    e.preventDefault(); 
    setShow(show === true ? false : true);
    addProduct(localStorage.getItem('token'), productName, price, type, image)
      .then(res => console.log(res))
  };
  return (
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
          <input
            type="text"
            className ="input-user" 
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        <button >Agregar</button>
        {/* <span className="close">&times;</span> */}
      </form>s
    </div>
)}
     {show === false && (
       <></>
     )}
    </>
  )
}
export default FormUser;