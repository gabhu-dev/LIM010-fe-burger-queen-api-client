// modal
import React, { useState } from 'react';
import addUser from '../../../controller/users/add-user';

const FormUser = ({show, setShow}) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
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
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="text"
            className="input-user" 
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
          >
          Agregar
          </button>
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
