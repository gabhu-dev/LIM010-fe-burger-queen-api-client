import React, { useEffect, useState } from 'react';
import Header from '../products/Header';
import getUsers from '../../controller/users/users';
import ListUsers from './users/List-users';


const ViewAdmin = (props) =>{
  const [usersData, setUsersData] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    getUsers(token)
    .then(res => setUsersData(res));
  },[])
  console.log(usersData);
  return(
    <div>
      <Header/>
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