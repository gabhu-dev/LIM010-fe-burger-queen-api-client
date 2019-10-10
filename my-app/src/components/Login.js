import React ,{ useState }from 'react';
import './css/Login.css';
const Login = () => {
const [user, password] = useState('');
const handleUser = (e) => {
  console.log(user);
}
const btn = document.getElementById('btn-login');
btn.addEventListener('click',handleUser);
  return (<div className="login column white" id="login">
    <img className="logo" src="" alt="Logo Burger Queen"/>
    <div>
      <div className="login-input column calibri">
        <label htmlFor="email">Correo electrónico:</label>
        <input className="user" id="email" name="email" type="text"/>
        <label htmlFor="password">Contraseña:</label>
        <input className="user b-radius4 font16" id="password" name="password" type="password"/>		
      </div>
        <div className="login-input column calibri">
          <p id="message" className="hide center-s"></p>
          <button className="btn-login b-radius4 font16 white" id="btn-login"><b>INGRESA</b></button>
        </div>   
    </div>
  </div>)
};


export default Login;