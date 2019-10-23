import React from 'react'

const Clientname = ({ name, updateName}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <form onSubmit={onSubmit} className="" >
      <label className="">Cliente: </label>
      <>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Nombre'
            className='' />
      </>
      )
     
    </form>
  )
};

export default Clientname;