import React, { useState} from 'react';
import '../../css/styles.css';
import logo from '../../css/img/logo.png';
import getToken from '../../controller/login-controller/token';
import getSpecificUser from '../../controller/users/id-user';

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
  e.preventDefault();
 
  if(!email || !password) {
    setErr('Ingresa Email y Contraseña')

  } else{
    getToken(email, password).then((res) => {
      const token = localStorage.setItem('token', res.token);
      const emailUser= localStorage.setItem('email', email);
      getSpecificUser(token,emailUser)
      .then(response => {
        if(!response.roles.admin){
          history.push('/take-orders')
        }else{
          history.push('/view-admin')
        }
      })
    
    }).catch((err) => {
        setErr(err.message)
      });
  }
}

  return (
  <div className="login column white calibri" id="login">
   
      <form className="column form-login">
      <img className="logo" src={logo} alt="logo burger queen"/>
    <p className="message-logo">¡El placer en tus manos!</p>
        <input 
          className="pink input-form"
          value= {email}
          onChange= {handleEmailChange}  
          name="email" 
          type="email"
          placeholder=" &#128100; Ingresa tu correo electrónico"
          data-testid="email"
        />
        <input 
          className="pink input-form"
          value={password}
          onChange= {handlePassChange} 
          name="password"
          type="password"
          placeholder=" &#128274; Ingresa tu contraseña"
          data-testid="password"
        />
        <button 
          className="btn-login" 
          type="submit"  
          value="btn" 
          onClick={handlebtn}
          data-testid="botonSubmit"
        > 
        INGRESA
        </button>
        {err && <p data-testid="mensajeError"className='error-message'>{err}</p>}
      </form>
  </div>
  );
};
export default Login;