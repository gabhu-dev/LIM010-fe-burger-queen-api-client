import React, { useEffect, useState } from 'react';
import Header from '../orders/Header';
import getUsers from '../../controller/users/users';
import ListUsers from '../users/List-users';
import addUsers from '../../controller/users/add-user';

const ViewAdmin = (props) =>{
  const [usersData, setUsersData] = useState([]);
  // const [show, setShow] = useState(true);
  // const [user, setuser] = useState("");

  // const updateUser = (e)=>{
  //   setuser(e.target.value);
  // }
  // const handleCreateUsers = (e)=>{
  //   e.preventDefault();
  //   addUsers()
  // }
  // const onSubmit = (e) => {
  //   e.preventDefault(); 
  //   setShow(show === true ? false : true)
  // }
  useEffect(()=>{
    const token = localStorage.getItem('token');
    getUsers(token)
    .then(res => setUsersData(res));
  },[])
  // console.log(usersData);
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
      <ListUsers data={usersData}/>
      </ tbody > 
      </table>
      <button>Agregar usuario</button>
    </div>
  )
}

export default ViewAdmin;