import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../Header-admin';
import getProducts from '../../../controller/products/products';
import ListProducts from './List-products';
import FormProduct from './Form-products';
import FormEdit from './Form-edit';

const ViewAdminProductos = (props) => {
  const [productsData, setProductsData] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [imageProduct, setImageProduct] = useState('');
  const [typeProduct, setTypeProduct] = useState('');
  const [idProduct, setIdProduct] = useState('');
  const token = localStorage.getItem('token');
  const openModal = () => {
    setShow(true);
  };
  const getData = () => {
    getProducts(token)
      .then((res) => setProductsData(res));
    console.log('se esta ejecutando');
  };
  useEffect(() => {
    setInterval(getData, 3000);
  }, []);
  return (
      <div>
        <HeaderAdmin />
        <div className="container-table">
          <div className="sub-container-table">
            <table className="table-list">
              <caption>LISTA DE PRODUCTOS</caption>
              <tbody>
                <tr className="row-list">
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Tipo</th>
                  <th>DateEntry</th>
                  <th>Acciones</th>
                </tr>
                <ListProducts
                  data={productsData}
                  getData={getData}
                  setShowEdit={setShowEdit}
                  setIdProduct={setIdProduct}
                  setNameProduct={setNameProduct}
                  setPriceProduct={setPriceProduct}
                  setImageProduct={setImageProduct}
                  setTypeProduct={setTypeProduct}
                />
              </tbody>
            </table>
          </div>
          <button type="button" onClick={openModal} className="">Agregar producto</button>
          <FormProduct
            show={show}
            setShow={setShow}
          />
          <FormEdit
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            idProduct={idProduct}
            nameProduct={nameProduct}
            priceProduct={priceProduct}
            imageProduct={imageProduct}
            typeProduct={typeProduct}
          />
        </div>
      </div>
  );
};
export default ViewAdminProductos;
