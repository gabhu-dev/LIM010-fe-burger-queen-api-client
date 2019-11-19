import React from 'react';
import deleteUser from '../../../controller/users/delete-user';

const ListUsers = ({ data, setShowEdit, setUserEmail, setChoosen }) => {
  const remove = (chosenUser) => {
    deleteUser(localStorage.getItem('token'), chosenUser)
      .then((res) => console.log(res));
  };
  const edit = (chosenUser, email) => {
    setShowEdit(true);
    setUserEmail(email);
    setChoosen(chosenUser);
  };
  return data.map((users) => (
    <tr className="row-list" key={users._id}>
    <td className="cell" value = {users.email}>{users.email}</td>
    <td className="cell">
      <button  
      type="button" 
      className="button"
      value={users._id} 
      onClick={() => edit(users._id, users.email)}>
      <i className="far fa-edit" />
      </button>
      <button 
      type="button" 
      className="button"
      value={users._id} 
      onClick={() => remove(users._id)} 
      >
      <i className="far fa-trash-alt" />
      </button>
    </td>
  </tr>
  ));
};
export default ListUsers;
