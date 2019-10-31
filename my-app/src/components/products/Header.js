
import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ props }) => {
  return (
    <div className="header">
        <input type="checkbox" className= "hide" id="btn-menu" />
        <label htmlFor="btn-menu"><i className="fas fa-bars"></i></label>
        <nav className="nav">
          <ul className= "column">
            <li>  <Link className="link" to ="/take-orders">Pedidos</Link></li>
            <li>  <Link className="link" to ="/view-orders">Órdenes</Link></li>
            <li>  <Link className="link" to="/Cocinero">Cocina</Link></li>
            <li>  <Link className="link" to="/Administrador">Admin</Link></li>
            <li>  <Link className="link" to ="/">Cerrar sesión</Link></li>
          </ul>
        </nav>
    </div>
  )
};

export default Header;