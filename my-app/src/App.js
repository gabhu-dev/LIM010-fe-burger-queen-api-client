import React from 'react';
import './App.css';

function App() {
  return (
  <section class="login column white" id="login">
    <img class="logo" src="" alt="Logo Burger Queen"/>
    <div>
      <div class="login-input column calibri">
        <label for="email">Correo electrónico:</label>
        <input class="user" id="email" name="email" type="text"/>
        <label for="password">Contraseña:</label>
        <input class="user b-radius4 font16" id="password" name="password" type="password"/>		
      </div>
        <div class="login-input column calibri">
          <p id="message" class="hide center-s"></p>
          <button class="btn-login b-radius4 font16 white" id="btn-login"><b>INGRESA</b></button>
        </div>   
    </div>
  </section>
  );
}

export default App;
