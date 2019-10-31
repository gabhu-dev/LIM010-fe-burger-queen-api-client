import React from 'react';
// import { Table } from 'semantic-ui-react';
const  ListUsers = ({data}) => { 
  return data.map(users => (
  <tr className="hu" key={users._id} >
    {/* <h4>{users.email}</h4> */}
        <td>{users.email}</td>  
        <td>editar</td>    
        <td>eliminar</td>      
  </tr>
 ))
};
export default ListUsers;