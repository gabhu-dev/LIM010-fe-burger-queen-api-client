import React from 'react';
import '../orders/Order.css';

const  ListProducts = ({data, type}) => {
  const filter = data.filter((val)=> val.type === type);
  return filter.map(product => (
  <div  key={product._id} >
    <img className="menu-img" src={product.image} alt={product.name} />
    <aside>
      <div>
        <h5>{product.name}</h5>
      </div>
      <div>
        S/. {product.price}
      </div>
    </aside>
  </div>
 ))
};
ListProducts.default = {
  type: 'desayuno'
}
export default ListProducts;

