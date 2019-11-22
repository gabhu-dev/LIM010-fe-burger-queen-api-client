// modal
import React from 'react';
import editUser from '../../../controller/users/edit-user';

const FormEdit = ({showEdit, setShowEdit}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setShowEdit(showEdit === true ? false : true);
    editUser(localStorage.getItem('token'), localStorage.getItem('email'),)
  };
  return (
    <>
      {showEdit === true && (
      <div className="modal">
        <form onSubmit={onSubmit} className="form-user">
          <label>Editar usuario</label>
          <input
          type="text"
          className="input-user"
          placeholder="name"
          // value={userEmail}
          // onChange={(e) => setUserEmail(e.target.value)}
        />
          <input
          type="text"
          className="input-user"
          placeholder="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
          <button type="button">Editar</button>
          <span className="close">&times;</span>
        </form>
      </div>
      )}
      {showEdit === false && (
        <></>
      )}
    </>
  );
};
export default FormEdit;
