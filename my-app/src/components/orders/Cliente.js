import React from 'react'

const Clientname = ({ name, updateName, show, setShow }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    setShow(show === true ? false : true)
  }

  return (
    <form onSubmit={onSubmit} className="" data-test-id="div">
      <label className="">Cliente: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Nombre'
            className='' />
          <button type='submit' className=""><i className="fas fa-check"></i></button>
        </>
      )
      }
    </form>
  )
};

export default Clientname;