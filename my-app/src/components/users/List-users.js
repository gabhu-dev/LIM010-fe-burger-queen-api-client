import React from 'react';
// import { Table } from 'semantic-ui-react';
// const  ListUsers = ({data, user ,updateUser , show, setShow}) => { 
// // return (
//     {show === true && (
//      data.map(users => (
//         <tr className="hu" key={users._id} >
//             <td>{users.email}</td>  
//             <td><i className="far fa-edit"></i></td>    
//             <td><i className="far fa-trash-alt"></i></td>      
//       </tr>
//        ))
//     )}
//     {show === false && (
//       <button>egegegeg</button>
//     )}
import deleteUsers from '../../controller/users/delete-user';
const ListUsers= ({data}) => {
  const handleDeleteUser = (e) =>{
    e.preventDefault();
    deleteUsers(localStorage.getItem('token'),data[0]._id)
    .then((response)=>{
      console.log(response);
    })
    console.log(data[0]._id)
  }
return data.map(users => (
  <tr className="hu" key={users._id} >
    {/* <h4>{users.email}</h4> */}
        <td>{users.email}</td>  
        <td><button onClick = {handleDeleteUser}><i className="far fa-edit"></i></button></td>    
        <td><i className="far fa-trash-alt"></i></td>      
  </tr>
 ))
};
export default ListUsers;