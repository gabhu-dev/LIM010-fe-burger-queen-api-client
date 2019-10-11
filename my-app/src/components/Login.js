import React, { useState} from 'react';
// import React from 'react';

import './css/Login.css';
// import takeOrders from './TakeOrders.js';

import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePassChange = (e) =>{
    setPassword(e.target.value);
  }
  const handleTakeOrders = (e) => {
    console.log(e.target.email);
  }

  return (
  <div className="login column white" id="login">
    <img className="logo" src="" alt="Logo Burger Queen"/>
    <div>
      <div className="login-input column calibri">
        <label htmlFor="email">Correo electrónico:</label>
        <input 
          className="user"
          value= {email} 
          // onChange= {handleEmailChange}  
          name="email" 
          type="text"
          placeholder="Ingresa tu correo"
        />
        <label htmlFor="password">Contraseña:</label>
        <input 
          className="user b-radius4 font16"
          value={password}
          // onChange= {handlePassChange} 
          name="password"
          type="password"
          placeholder="Ingresa Contraseña"
        />		
      </div>
        <div className="login-input column calibri">
          <p id="message" className="hide center-s"></p>
          <button 
            className="btn-login b-radius4 font16 white" 
            onClick= {handleTakeOrders}>
           <b>INGRESA</b>
            </button> 
          <Link to = "/TakeOrders" className =  "btn-login b-radius4 font16 white" value="btn-login" >
         <b>INGRESA</b> 
        </Link>
        </div>  
      
       
    </div>
  </div>
    
  );
};
export default Login;

//  
