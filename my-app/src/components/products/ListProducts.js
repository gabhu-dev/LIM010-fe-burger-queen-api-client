import React from 'react';

const  ListProducts = ({data, type, addProduct }) => { 
  const filter = data.filter((val)=> val.type === type);
  return filter.map(product => (
  <div className="product" key={product._id} onClick ={() => {addProduct(product)} } >
    <img className="nav-img" src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <h5>S/.{product.price}</h5>
  </div>
 ))
};
ListProducts.default = {
  type: 'desayuno'
}
export default ListProducts;
