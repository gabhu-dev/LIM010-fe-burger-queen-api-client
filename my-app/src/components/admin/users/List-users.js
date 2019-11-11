import React from 'react';
import deleteUser from '../../../controller/users/delete-user';
const ListUsers= ({data, setUsersData}) => {
  // console.log(data)
  // const remove = (chosenUser) => {
  //   const arrayUserRemove = data.filter(user => user.name !== chosenUser)
  //   return setUsersData(arrayUserRemove);
  // }
  const remove = (chosenUser) =>{
   deleteUser(localStorage.getItem('token'),chosenUser)
   .then(res => console.log(res))
  }
return data.map(users => (
  <tr className="hu" key={users._id} >
        <td>{users.email}</td>  
        <td>
          <button><i className="far fa-edit"></i></button>
        </td>    
        <td>
          <button type = "button" value = {users._id} onClick={() => remove(users._id)}>
          <i className="far fa-trash-alt"></i>
          </button>
          </td>      
          {/* <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
      </div>
    </div>
  </div> */}
  </tr>
 ))
};
export default ListUsers;