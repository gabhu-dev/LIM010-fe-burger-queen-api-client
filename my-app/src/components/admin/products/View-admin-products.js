import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../Header-admin';
import getProducts from '../../../controller/products/products';
import ListProducts from './List-products';
import FormProduct from './Form-product';

const ViewAdminProductos = (props) => {
  const [productsData, setProductsData] = useState([]);
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const getData = () => {
    const token = localStorage.getItem('token');
    getProducts(token)
      .then((res) => setProductsData(res));
    console.log('se esta ejecutando');
  };
  useEffect(() => {
    setInterval(getData, 3000);
  }, []);
  return (
    <div>
      <HeaderAdmin props={props} />
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
              <ListProducts data={productsData} />
            </tbody>
          </table>
        </div>
        <button type="button" onClick={openModal} className="button-add">Agregar producto</button>
        <FormProduct show={show} setShow={setShow} />
      </div>
    </div>
  );
};
export default ViewAdminProductos;
