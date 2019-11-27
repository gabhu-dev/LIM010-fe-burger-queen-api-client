// modal
import React from 'react';
import editProduct from '../../../controller/products/edit-product';

const FormEdit = (
  {
    showEdit,
    setShowEdit,
    token,
    idProduct,
    nameProduct,
    priceProduct,
    imageProduct,
    typeProduct,
    setNameProduct,
    setPriceProduct,
    setImageProduct,
    setTypeProduct,
  },
) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setShowEdit(showEdit === true ? false : true);
    editProduct(token, idProduct, nameProduct, priceProduct, imageProduct, typeProduct)
      .then((res) => console.log(res));
  };
  return (
    <>
      {showEdit === true && (
      <div className="modal">
        <form onSubmit={onSubmit} className="form-user">
          <h1>Editar producto</h1>
          <input
            type="text"
            className="input-user"
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            value={imageProduct}
            onChange={(e) => setImageProduct(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            value={typeProduct}
            onChange={(e) => setTypeProduct(e.target.value)}
          />
          <button type="submit">Editar</button>
          <span className="close">&times;</span>
        </form>
      </div>
      )}
      {showEdit === false && (
        <></>
      )}
    </>
  );
};
export default FormEdit;
