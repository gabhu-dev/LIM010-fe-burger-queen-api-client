import React from 'react';
import Login from './components/login/Login';
import TakeOrders from './components/products/TakeOrders';
import Cocina from './components/order/ViewOrders';
import ViewAllOrders from './components/order/ViewAllOrders';
import ViewAdmin from './components/admin/View-admin';
import ViewAdminProductos from './components/admin/products/View-admin-products';
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
      <Route exact path="/cocina"> <Cocina />
      </Route>
      <Route exact path="/view-all-Orders"> <ViewAllOrders />
      </Route>
      <Route exact path="/view-admin"> <ViewAdmin />
      </Route>
      <Route exact path="/view-admin-productos"> <ViewAdminProductos />
      </Route>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
}
export default App;