import React from 'react';
import burger from '../css/img/burger.png'

const Header = ({ props }) => {
  return (
    <header className="">
      <ul className="">
        <li className="">
          <button onClick={() => { props.history.push("/take-orders") }} className="">
            <img src={burger} alt="img" className="" />
          </button>
        </li>
        <li className="">
          <div className=""><i className='fas fa-bars'></i></div>
          <div className="" >
            <button  onClick={() => { props.history.push("/") }} >Cerrar Sesión</button>
          </div>
        </li>
      </ul>

    </header>
  )
};

export default Header;