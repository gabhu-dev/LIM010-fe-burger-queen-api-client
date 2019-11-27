// modal
import React from 'react';
// import editProduct from '../../../controller/products/edit-product';

const FormEdit = (
  {
    showEdit,
    setShowEdit,
    idProduct,
    nameProduct,
    priceProduct,
    imageProduct,
    typeProduct,
  },
) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setShowEdit(showEdit === true ? false : true);
    console.log('se puede editar');
  };
  return (
    <>
      {showEdit === true && (
      <div className="modal">
        <form onSubmit={onSubmit} className="form-user">
          <label>Editar producto</label>
          <input
            type="text"
            className="input-user"
            value={nameProduct}
            // onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            value={priceProduct}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            value={imageProduct}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            className="input-user"
            value={typeProduct}
            // onChange={(e) => setPassword(e.target.value)}
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
