import React, { useState } from 'react';
import deleteUser from '../../../controller/users/delete-user';

const ListUsers = ({ data, getData, setShowEdit, setUserEmail }) => {
  const remove = (chosenUser) => {
    deleteUser(localStorage.getItem('token'), chosenUser)
      .then((res) => {
        console.log(res);
        getData();
      });
  };
  const editUser = (userEmail) => {
    setShowEdit(true);
    setUserEmail(userEmail);
  };
  return data.map((users) => (
    <tr className="row-list" key={users._id}>
      <td className="cell">
        {users.email }
      </td>
      <td className="cell">
        <button
          type="button"
          className="button"
          value={users._id}
          onClick={() => editUser(users.email)}
        >
          <i className="far fa-edit" />
        </button>
        <button
          type="button"
          value={users._id}
          onClick={() => remove(users._id, users.email)}
          className="button"
        >
          <i className="far fa-trash-alt" />
        </button>
      </td>
    </tr>
  ));
};
export default ListUsers;
