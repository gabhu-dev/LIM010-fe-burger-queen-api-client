// modal
import React from 'react';
import addUser from '../../controller/users/add-user';

const FormUser = ({ show, setShow, userEmail, setUserEmail, password, setPassword }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setShow(show === true ? false : true);
    addUser(localStorage.getItem('token'), userEmail, password)
      .then((res) => console.log(res));
  };
  return (
    <>
      {show === true && (
      <div className="modal">
      <form onSubmit={onSubmit} className="form-user">
        <label>Crear usuario</label>
        <input 
        type="text" 
        className ="input-user" 
        placeholder="name"
        value={userEmail}
        onChange={(e)=> setUserEmail(e.target.value)}
        />
        <input 
        type="text"
        className ="input-user" 
        placeholder="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button type="button">Agregar</button>
        <span className="close">&times;</span>
      </form>
    </div>
)}
      {show === false && (
       <></>
     )}
    </>
  );
};
export default FormUser;
