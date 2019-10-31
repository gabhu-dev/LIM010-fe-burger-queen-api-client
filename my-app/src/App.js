import React from 'react';
import Login from './components/login/Login';
import TakeOrders from './components/products/TakeOrders';
import ViewOrders from './components/order/ViewOrders';

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
      <Route exact path="/view-orders"> <ViewOrders />
      </Route>
      <Route exact path="/" component={Login} />
      <Route exact path="/take-orders" component={TakeOrders} />
      <Route exact path="/take-orders" component={TakeOrders} />
      <Route exact path="/view-orders" component={ViewOrders} />
      {/* <Route path="/ListaPedidos" component={ViewListOrdersWaiter} />
        <Route path="/Cocinero" component={ViewKitchen} />
        <Route path="/Administrador" component={ViewAdminUser} />
        <Route path="/CerrarSesion" component={ViewLogin} /> */}
    </Switch>
  </Router>
}
export default App;
