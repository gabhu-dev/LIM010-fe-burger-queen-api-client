import React from 'react';
import deleteProduct from '../../../controller/products/delete-product';
import editProduct from '../../../controller/products/edit-product';

const ListProducts = ({ data, getData }) => {
  const remove = (chosenUser) => {
    console.log(chosenUser);
    deleteProduct(localStorage.getItem('token'), chosenUser)
      .then((res) => {
        console.log(res);
        getData();
      });
  };
  const edit = (chosenUser) => {
    editProduct(localStorage.getItem('token'), chosenUser)
      .then((res) => console.log(res));
  };
  return data.map((products) => (
    <tr className="row-list" key={products._id}>
      <td className="cell">{products.name}</td>
      <td>{products.price}</td>
      <td>{products.type}</td>
      <td>{products.dateEntry}</td>
      <td className="cell">
        <button
          type="button"
          className="button"
          value={products._id}
          onClick={() => edit(products._id)}
        >
          <i className="far fa-edit" />
        </button>
        <button
          type="button"
          value={products._id}
          onClick={() => remove(products._id)}
          className="button"
        >
          <i className="far fa-trash-alt" />
        </button>
      </td>
    </tr>
  ));
};
export default ListProducts;
