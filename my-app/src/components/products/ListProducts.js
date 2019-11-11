import React from 'react';

const  ListProducts = ({data, type, addProduct }) => { 
  const filter = data.filter((val)=> val.type === type);
  return filter.map(product => (
  <div className="card" key={product._id} onClick ={() => {addProduct(product)} } >
    <img className="product-img" src={product.image} alt={product.name} />
    <div className="container">
      <div>
        <h4 className="text-center"><b>{product.name}</b></h4>
      </div>
      <div >
        <h5 className="price text-center">S/.{product.price}</h5>
      </div>
    </div>
  </div>
 ))
};
ListProducts.default = {
  type: 'desayuno'
}
export default ListProducts;
