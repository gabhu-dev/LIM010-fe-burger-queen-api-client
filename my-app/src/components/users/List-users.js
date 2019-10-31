import React from 'react';

const  ListUsers = ({data}) => { 
  return data.map(users => (
  <div className="" key={users._id} >
        <h4>{users.email}</h4>
  </div>
 ))
};
export default ListUsers;