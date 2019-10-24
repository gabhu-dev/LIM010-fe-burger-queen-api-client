import React from 'react';
import burger from '../../css/img/burger.png';
import {Link} from 'react-router-dom';
import '../../css/header.css';

const Header = ({ props }) => {
  return (
    <div className="header">
      <div>
      <img src={burger} alt="burger" className="img" />
        <input type="checkbox" className= "btn-menu" id="btnMenu" />
        <label className="label" htmlFor="btnMenu"><i className='fas fa-bars'></i> </label>
        <nav className="menu">
          <ul>
            <li>  <Link className="link" to ="/take-orders">Pedidos</Link></li>
            <li>  <Link className="link" to ="/take-orders">Listos</Link></li>
            <li>  <Link className="link"to ="/">Cerrar sesión</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default Header;