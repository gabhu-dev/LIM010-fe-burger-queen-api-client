import React, { useEffect, useState } from 'react';
import HeaderAdmin from './Header-admin';
import getUsers from '../../controller/users/users';
import ListUsers from './users/List-users';
import FormUser from './Form-user';

const ViewAdmin = (props) =>{
  const [usersData, setUsersData] = useState([]);
  const [show, setShow] = useState(false);
  const getData = () =>{
    const token = localStorage.getItem('token');
    getUsers(token)
    .then(res => setUsersData(res));
  }
  useEffect(()=>{
    setInterval(getData,3000);
  },[])
  
 
  const openModal = () =>{
    setShow(true)
  }
  return(
    <div>
      <HeaderAdmin/>
      <div className="container-table">
        <div className="sub-container-table">
          <table className="table-list">
            <caption>LISTA DE USUARIOS</caption>
            < tbody > 
              <tr className="row-list">
                <th>Email</th>
                <th>Acciones</th>
              </tr>
                <ListUsers data={usersData} setUsersData={setUsersData}/>
            </ tbody > 
          </table>
        </div>
        <button onClick={openModal} className="">Agregar usuario</button>
        <FormUser show={show} setShow={setShow}/>
      </div>
    </div>
  )
}

export default ViewAdmin;