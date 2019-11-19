import React from 'react';
import deleteProduct from '../../../controller/products/edit-product';
import editProduct from '../../../controller/products/add-product';
const ListProducts = ({data}) =>{
  const remove = (chosenUser) =>{
    deleteProduct(localStorage.getItem('token'),chosenUser)
    .then(res => console.log(res))
   }
   const edit = (chosenUser) => {
   editProduct(localStorage.getItem('token'), chosenUser)
   .then(res => console.log(res))
   }
  return data.map(products => (
    <tr className="row-list" key={products._id} >
       <td className="cell">{products.name}</td>
       <td>{products.price}</td>
       <td>{products.type}</td>
       <td>{products.dateEntry}</td>
       <td className="cell">
        <button type="button" className="button" value ={products._id} onClick={()=> edit(products._id)}><i className="far fa-edit"></i></button>
        <button type = "button" value = {products._id} onClick={() => remove(products._id)} className="button">
        <i className="far fa-trash-alt"></i>
        </button>
      </td>
    </tr>
   ))
}
export default ListProducts;
