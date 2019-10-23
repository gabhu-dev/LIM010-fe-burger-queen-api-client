// import React from 'react';

// const Product = ({ data, menu, add }) => {

//   const product = data.filter(prod => {
//     return prod.type === menu
//   })

//   return product.map(product => (
//     <div data-testid={product._id} className="" key={product._id} onClick={() => { add(product._id) }}>
//       <img className="" src={product.image} alt={product.name} />
//       <div className="">
//         <h5 data-testid={product.name} className="">{product.name}</h5>
//       </div>
//       <div className="">
//         S/. {product.price}
//       </div>
//     </div>
//   ))
// };

// export default Product;