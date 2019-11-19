import React from 'react';

const MenuOptions = ({click, options}) => {
  return (
    <div  className="" onClick={click}>
      <button className='btn-break-dinner' data-toggle="tab" href="#" role="tab" >{options}</button>
    </div>
  )
};

export default MenuOptions;