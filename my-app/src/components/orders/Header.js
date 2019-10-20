import React from 'react';
// import burger from '../css/img/burger.png'
// eslint-disable-next-line

const Header = ({ props }) => {
  return (
    <header data-testid="header" className="">
      <ul className="">
        <li className="">
          {/* <button data-testid='burger' onClick={() => { props.history.push("/take-orders") }} className="">
            <img src={burger} alt="img" className="" />
          </button> */}
        </li>
        <li className="">
          <div className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='fas fa-bars'></i></div>
          <div className="" >
            <button data-testid='close' onClick={() => { props.history.push("/") }} >Cerrar Sesión</button>
          </div>
        </li>
      </ul>

    </header>
  )
};

export default Header;