import React from 'react';

const  ListProducts = ({data}) => {
 return data.map(product => (
  <div  key={product._id} >
    <img src={product.image} alt={product.name} />
    <div>
      <h5>{product.name}</h5>
    </div>
    <div>
      S/. {product.price}
    </div>
  </div>
 ))
};

export default ListProducts;

