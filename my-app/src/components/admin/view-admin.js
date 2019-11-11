import React, { useEffect, useState } from 'react';
import HeaderAdmin from './Header-admin';
import getUsers from '../../controller/users/users';
import ListUsers from './users/List-users';


const ViewAdmin = (props) =>{
  const [usersData, setUsersData] = useState([]);
  
  const getData = () =>{
    const token = localStorage.getItem('token');
    getUsers(token)
    .then(res => setUsersData(res));
    console.log('sal')
  }
  useEffect(()=>{
    setInterval(getData,3000);
    // const token = localStorage.getItem('token');
    // getUsers(token)
    // .then(res => setUsersData(res));
  },[])
 
  return(
    <div>
      <HeaderAdmin/>
      <table>
      < tbody > 
      <tr>
        <td>Email</td>
        <td>Editar</td>
        <td>Eliminar</td>
      </tr>
      <ListUsers data={usersData} setUsersData={setUsersData}/>
      </ tbody > 
      </table>
      <button>Agregar usuario</button>
    </div>
  )
}

export default ViewAdmin;