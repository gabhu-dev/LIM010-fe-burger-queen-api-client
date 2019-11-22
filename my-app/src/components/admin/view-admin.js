import React, { useEffect, useState } from 'react';
import HeaderAdmin from './Header-admin';
import getUsers from '../../controller/users/users';
import ListUsers from './users/List-users';
import FormUser from './users/Form-user';
import FormEdit from './users/Form-edit';

const ViewAdmin = (props) => {
  const [usersData, setUsersData] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  // const funcion= useState();
  const getData = () => {
    const token = localStorage.getItem('token');
    getUsers(token)
      .then((res) => setUsersData(res));
  };
  useEffect(() => {
    // setIntervalD
    getData();
  }, []);
 setInterval(getDat
  const openModal = () => {
    setShow(true);
  };
  return (
    <div>
      <HeaderAdmin />
      <div className="container-table">
        <div className="sub-container-table">
          <table className="table-list">
            <caption>LISTA DE USUARIOS</caption>
            <tbody> 
              <tr className="row-list">
                <th>Email</th>
                <th>Acciones</th>
              </tr>
              <ListUsers data={usersData} setShowEdit={setShowEdit} getData={getData}/>
            </tbody> 
          </table>
        </div>
        <button type="button" onClick={openModal} className="">Agregar usuario</button>
        <FormUser show={show} setShow={setShow} />
        <FormEdit showEdit={showEdit} setShowEdit={setShowEdit} />
      </div>
    </div>
  );
};

export default ViewAdmin;
