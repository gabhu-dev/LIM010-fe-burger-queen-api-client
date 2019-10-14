import React, { useState} from 'react';
import '../css/styles.css';
import getToken from './token.js';
import logo from '../burger.png';

import { Link } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  const [err, setErr] = useState("")
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePassChange = (e) =>{
    setPassword(e.target.value);
  }
  
 const handlebtn = (e) => {
   e.preventDefault();
  console.log(email);
}

  return (
  <div className="login column white calibri" id="login">
    <img className="logo" src={logo} alt="logo burger queen"/>
    <p>¡Tu comida favorita!</p>
      <form onSubmit={async e => {
      e.preventDefault()

      await getToken(email, password).then((res) => {
        localStorage.setItem('token', res.token)
        console.log(res.token)
      }).catch((err) => {
        setErr(err.message)
      });
      }}>
        <input 
          className="pink"
          value= {email} 
          onChange= {handleEmailChange}  
          name="email" 
          type="text"
          placeholder=" &#128100; Ingresa tu correo electrónico"
        />
        <input 
          className="pink"
          value={password}
          onChange= {handlePassChange} 
          name="password"
          type="password"
          placeholder=" &#128274; Ingresa tu contraseña"
        />
        <button 
          className="btn-login" 
          type="submit"  
          value="btn" 
          onClick={handlebtn}> 
          INGRESA
        </button>
        {err && <p className='error-message'>*{err}</p>}
      </form>
    <Link to = "/TakeOrders" className =  "" value="btn-login" >
      <b>INGRESA</b> 
      </Link>
  </div>
  );
};
export default Login;
