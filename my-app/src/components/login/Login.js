import React, { useState} from 'react';
import '../css/Login.css';
import getToken from './token.js';
import getUser from './user.js';
import auth from './auth.js';

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
    <img className="logo" src="" alt="Logo Burger Queen"/>
    <div className="form">
      <form onSubmit={async e => {
      e.preventDefault()

      await getToken(email, password).then((res) => {
        localStorage.setItem('token', res.token)
        console.log(res.token)
      }).catch((err) => {
        setErr(err.message)
      });
       getUser(email).then((data) => {
         localStorage.setItem('user', JSON.stringify(data));
        auth.login(() => {props.history.push("/home") })
         }).catch(console.error)
      }}>
        <label htmlFor="email">Correo electrónico:</label>
        <input 
          className="user"
          value= {email} 
          onChange= {handleEmailChange}  
          name="email" 
          type="text"
          placeholder="Ingresa tu correo electrónico"
        />
        <label htmlFor="password">Contraseña:</label>
        <input 
          className="user"
          value={password}
          onChange= {handlePassChange} 
          name="password"
          type="password"
          placeholder="Ingresa tu contraseña"
        />
        <button 
          className="btn-login" 
          type="submit"  
          value="btn" 
          onClick={handlebtn}> 
          INGRESA
        </button>
        {err && <p data-testid="errMsg" className='error-message'>*{err}</p>}
      </form>
    </div>
    <Link to = "/TakeOrders" className =  "" value="btn-login" >
      <b>INGRESA</b> 
      </Link>
  </div>
    
  );
};
export default Login;
