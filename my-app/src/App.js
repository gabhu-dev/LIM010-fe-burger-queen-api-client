
import './App.css';
import React from 'react';


import Login from './components/Login.js';
import TakeOrders from './components/TakeOrders'
import {
BrowserRouter as Router,
  Switch,
 Route,
 } from "react-router-dom";

function App() {

  return <Router>
     
          <Switch>
         
            <Route path="/takeOrders">
              <TakeOrders />
            </Route>
            <Route path="/">
              <Login/>
            </Route>
          </Switch>
   
      </Router>
}


export default App;
