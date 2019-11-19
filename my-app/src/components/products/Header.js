
import React from 'react';
import {Link} from 'react-router-dom';
import crown from '../../css/img/crown-2.png';
const Header = ({ props }) => {
  return (
    <div className="header">
        <input type="checkbox" className= "hide" id="btn-menu" />
        <label htmlFor="btn-menu"><i className="fas fa-bars"></i></label>
        <img className= "crown" src={crown} alt="corona ,símbolo de burger queen"/>
        <nav className="nav">
          
          <ul className= "column">
            <li>  <Link className="link" to ="/take-orders">Pedidos</Link></li>
            <li>  <Link className="link" to ="/view-all-Orders">Órdenes</Link></li>
            <li>  <Link className="link" to="/cocina">Cocina</Link></li>
            <li>  <Link className="link" to ="/">Cerrar sesión</Link></li>
          </ul>
        </nav>
    </div>
  )
};

export default Header;