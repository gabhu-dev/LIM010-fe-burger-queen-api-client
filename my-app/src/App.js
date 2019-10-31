import React from 'react';
import Login from './components/login/Login';
import TakeOrders from './components/orders/TakeOrders';
import ViewAdmin from './components/admin/View-admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {

  return <Router>
    <Switch>
      <Route exact path="/take-orders"> <TakeOrders />
      </Route>
      <Route exact path="/view-admin"> <ViewAdmin />
      </Route>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
}
export default App;
