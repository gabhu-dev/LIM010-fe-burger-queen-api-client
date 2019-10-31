import React, { useEffect, useState } from 'react';
import Header from '../orders/Header';
import getUsers from '../../controller/users/users';
import ListUsers from '../users/List-users';
const ViewAdmin = (props) =>{
  const [usersData, setUsersData] = useState([]);
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
      <ListUsers data={usersData}/>
      </table>
    </div>
  )
}

export default ViewAdmin;