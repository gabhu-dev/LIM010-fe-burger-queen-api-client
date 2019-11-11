import React from 'react';



const Clientname = ({ name, updateName, show, setShow }) => {
  const onSubmit = (e) => {
    e.preventDefault(); 
    setShow(show === true ? false : true)
  }
  return (
    <form onSubmit={onSubmit} className="form-cliente" data-test-id='div' >
      <label className='margin-1 font-size-1'>Cliente: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Nombre del cliente'
            data-testid='name'
            className='name-cliente margin-1 font-size-1'
            required
          />
          <button data-testid='submit' className="btn-cliente margin-l font-size-1"><i className="fas fa-check"></i></button>
        </>   
      )
      }
      {show === false && (
      <>
        <input data-testid="changeName" className="name-cliente margin-1 font-size-1" value= {name}/>
        <button data-testid="edit" className="btn-cliente margin-1 font-size-1">Edit</button>
      </>
    )}  
    </form>
  )
};
export default Clientname;
