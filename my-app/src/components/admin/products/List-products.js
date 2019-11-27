import React from 'react';
import deleteProduct from '../../../controller/products/delete-product';

const ListProducts = (
  {
    data,
    getData,
    setShowEdit,
    setIdProduct,
    setNameProduct,
    setPriceProduct,
    setImageProduct,
    setTypeProduct,
  },
) => {
  const remove = (chosenUser) => {
    console.log(chosenUser);
    deleteProduct(localStorage.getItem('token'), chosenUser)
      .then((res) => {
        console.log(res);
        getData();
      });
  };
  const edit = (idPdt, namePdt, pricePdt, imagePdt, typePdt) => {
    setShowEdit(true);
    setIdProduct(idPdt);
    setNameProduct(namePdt);
    setPriceProduct(pricePdt);
    setImageProduct(imagePdt);
    setTypeProduct(typePdt);
  };
  return data.map((products) => (
    <tr className="row-list" key={products._id}>
      <td className="cell">{products.name}</td>
      <td>{products.price} soles</td>
      <td>{products.type}</td>
      <td>{products.dateEntry}</td>
      <td className="cell">
        <button
          type="button"
          className="button"
          value={products._id}
          onClick={() => edit(products._id, products.name, products.price, products.image, products.type)}
        >
          <i className="far fa-edit" />
        </button>
        <button
          type="button"
          value={products._id}
          onClick={() => remove()}
          className="button"
        >
          <i className="far fa-trash-alt" />
        </button>
      </td>
    </tr>
  ));
};
export default ListProducts;
