import React from 'react'

const Clientname = ({ name, updateName, show, setShow }) => {
  const onSubmit = (e) => {
    e.preventDefault(); 
    setShow(show === true ? false : true)
  }
  return (
    <form onSubmit={onSubmit} className="form-cliente" data-test-id='div' >
      <label>Cliente: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Nombre del cliente'
            data-testid='name'
          />
          <button data-testid='submit' className=""><i className="fas fa-check"></i></button>
        </>   
      )
      }
      {show === false && (
      <>
        <p data-testid="changeName" className="">{name}</p>
        <button data-testid="edit" className="">Edit</button>
      </>
    )}  
    </form>
  )
};
export default Clientname;