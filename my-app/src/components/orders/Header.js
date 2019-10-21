import React from 'react';
// import burger from '../css/img/burger.png'
// eslint-disable-next-line
import {Link} from 'react-router-dom'

const Header = ({ props }) => {
  return (
    <header data-testid="header" className="">
      <nav>
      <div className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className='fas fa-bars'></i></div>
        <ul className="">
          <li className="">
          {/* <button data-testid='burger' onClick={() => { props.history.push("/take-orders") }} className="">
            <img src={burger} alt="img" className="" />
          </button> */}
      
        pedidos
          </li>
          <li className="">
          listos
          {/* <div className="" >
            <button data-testid='close' onClick={() => { props.history.push("/") }} >Cerrar Sesión</button>
          </div> */}
        </li>
        <li>  <Link to ="/">Cerrar sesion</Link></li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;