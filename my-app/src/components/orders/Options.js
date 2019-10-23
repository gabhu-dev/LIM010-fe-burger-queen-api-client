import React from 'react';

const Option = ({click, options, aClass}) => {
  return (
    <li  className="nav-item" onClick={click}>
      <button data-testid={options} className={aClass} data-toggle="tab" href="#" role="tab" >{options}</button>
    </li>
  )
};

export default Option;