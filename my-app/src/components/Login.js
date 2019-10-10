import React from 'react';
import './css/Login.css';
import takeOrders from './TakeOrders.js';


const Login = () => {
  const handleTakeOrders = () => {
    console.log('bienevenido');

  }
  return (
  <div className="login column white" id="login">
    <img className="logo" src="" alt="Logo Burger Queen"/>
    <div>
      <div className="login-input column calibri">
        <label htmlFor="email">Correo electrónico:</label>
        <input 
          className="user"
          name="email" 
          type="text"
        />
        <label htmlFor="password">Contraseña:</label>
        <input 
          className="user b-radius4 font16"
     
          name="password"
          type="password"
        />		
      </div>
        <div className="login-input column calibri">
          <p id="message" className="hide center-s"></p>
          <button 
            className="btn-login b-radius4 font16 white" 
            value="btn-login"
            onClick={handleTakeOrders}>
            <b>INGRESA</b>
            </button>
        </div>   
    </div>
  </div>
  );
};
export default Login;