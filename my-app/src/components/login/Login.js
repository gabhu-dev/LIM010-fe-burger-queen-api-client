import React, { useState} from 'react';
import '../css/styles.css';
import logo from '../css/img/burger.png';
import getToken from './Token';

const Login = (props) => {
  const { history } = props;
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
  e.preventDefault()
  getToken(email, password)
  .then((res) => {
    console.log(res.token);
    history.push('/take-orders')
  }).catch((err) => {
      setErr(err.message)
    });
}

  return (
  <div className="login column white calibri" id="login">
    <img className="logo" src={logo} alt="logo burger queen"/>
    <p>¡Tu comida favorita!</p>
      <form >
        <input 
          className="pink"
          value= {email} 
          onChange= {handleEmailChange}  
          name="email" 
          type="email"
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
  </div>
  );
};
export default Login;
