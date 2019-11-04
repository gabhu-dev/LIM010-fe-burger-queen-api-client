import React from 'react';

const  ListProducts = ({data, type, addProduct }) => { 
  const filter = data.filter((val)=> val.type === type);
  return filter.map(product => (
  <div className="card" key={product._id} onClick ={() => {addProduct(product)} } >
    <img className="product-img" src={product.image} alt={product.name} />
        <div className="container">
        <h4><b>{product.name}</b></h4>
        <h5 className="price">S/.{product.price}</h5>
        </div>
  </div>
 ))
};
ListProducts.default = {
  type: 'desayuno'
}
export default ListProducts;
