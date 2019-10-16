import React from 'react';
import Login from './components/login/Login.js';
import TakeOrders from './components/orders/TakeOrders.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return <Router>
    <Switch>
      <Route path="/take-orders"> <TakeOrders />
      </Route>
      <Route path="/" component={Login} />
    </Switch>
  </Router>
}
export default App;
