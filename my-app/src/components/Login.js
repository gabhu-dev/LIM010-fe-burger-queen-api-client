import React, { useState} from 'react';
import './css/Login.css';

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
  
 const handlebtn = (e) => {
  console.log(email);

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
          onChange= {handleEmailChange}  
          name="email" 
          type="text"
          placeholder="Ingresa tu correo"
        />
        <label htmlFor="password">Contraseña:</label>
        <input 
          className="user b-radius4 font16"
          value={password}
          onChange= {handlePassChange} 
          name="password"
          type="password"
          placeholder="Ingresa Contraseña"
        />		
      </div>
        <div className="login-input column calibri">
          <p id="message" className="hide center-s"></p>
          <Link to = "/TakeOrders" className =  "btn-login b-radius4 font16 white" value="btn-login" >
            <b>INGRESA</b> 
          </Link>
        </div>    
        <button type="submit"  value="btn" onClick={handlebtn}> enter</button>
    </div>
  </div>
    
  );
};
export default Login;