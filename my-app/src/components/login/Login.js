import React, { useState} from 'react';
import '../css/styles.css';
import logo from '../css/img/logo.png';
import getToken from '../../controller/login-controller/Token';

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
  getToken(email, password).then((res) => {
    console.log(res.token);
    history.push('/take-orders')
  }).catch((err) => {
      setErr(err.message)
      console.log(err)
    });
}

  return (
  <div className="login column white calibri" id="login">
    <img className="logo" src={logo} alt="logo burger queen"/>
    <p>¡Tu comida favorita!</p>
      <form className="column">
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
          onClick={handlebtn}
          data-testid = "botonSubmit" 
        > 
        INGRESA
        </button>
        {err && <p data-testid="errorMessage"className='error-message'>*{err}</p>}
      </form>
  </div>
  );
};
export default Login;
