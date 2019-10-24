import React from 'react';

const  ListProducts = ({data, type}) => {
  const filter = data.filter((val)=> val.type === type);
    return filter.map(product => (
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

ListProducts.defaultProps = {
  type: 'desayuno'
}

export default ListProducts;