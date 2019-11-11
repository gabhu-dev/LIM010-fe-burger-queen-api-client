import React from 'react';
import deleteUser from '../../../controller/users/delete-user';
import editUser from '../../../controller/users/edit-user';
const ListUsers= ({data, setUsersData}) => {
  const remove = (chosenUser) =>{
   deleteUser(localStorage.getItem('token'),chosenUser)
   .then(res => console.log(res))
  }
  const edit = (chosenUser) => {
  editUser(localStorage.getItem('token'), chosenUser)
  .then(res => console.log(res))
  }
return data.map(users => (
  <tr className="row-list" key={users._id} >
     <td className="cell">{users.email}</td>   
     <td className="cell">
      <button type="button" className="button" value ={users._id} onClick={()=> edit(users._id)}><i className="far fa-edit"></i></button>
      <button type = "button" value = {users._id} onClick={() => remove(users._id)} className="button">
      <i className="far fa-trash-alt"></i>
      </button>
    </td>  
  </tr>
 ))
};
export default ListUsers;