import React from 'react';

const  ListProducts = ({data, type, addProduct }) => { 
  const filter = data.filter((val)=> val.type === type);
  return filter.map(product => (
  <div  key={product._id} onClick ={() => {addProduct(product)} } >
    <img className="nav-img" src={product.image} alt={product.name} />
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
