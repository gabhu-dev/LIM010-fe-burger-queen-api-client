
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
        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
   */}
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route> */}
            <Route path="/takeOrders">
              <TakeOrders />
            </Route>
            <Route path="/">
              <Login/>
            </Route>
          </Switch>
        {/* </div> */}
      </Router>
}


export default App;
