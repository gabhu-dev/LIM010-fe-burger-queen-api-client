import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../Header-admin';
import getProducts from '../../../controller/products/products';
import ListProducts from './List-products';
import FormProduct from './Form-products';

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
                <ListProducts data={productsData} getData={getData} />
              </tbody>
            </table>
          </div>
          <button type="button" onClick={openModal} className="">Agregar producto</button>
          <FormProduct show={show} setShow={setShow} />
        </div>
      </div>
  );
};
export default ViewAdminProductos;
