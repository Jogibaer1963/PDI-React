import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Admin from './components/00_admin/admin';
import Login from './components/01_Login-Logout/Login';
import OverView from './components/02_OverView/OverView';
import ShippingMachines from "./components/03_ShippingMachines/03_Shipping-Machines";
import ShippingHeaders from "./components/04_ShippingHeaders/04_Shipping-Headers";
import PdiInspection from "./components/05_PdiInspection/05_Pdi-inspection";
import Repair from "./components/06_Repairs/06_Reapir";
import WashBay from "./components/07_WashBay/07_WashBay";
import ReadyShipList from "./components/08_ReadyShipList/08_ReadyShipList";
import StatisticsView from "./components/10_Statistics/Statistics";
import EcnOverview from "./components/20_EcnOverview/10_ECN-Overview";

const routes = (
  <BrowserRouter>
      <div>
          <Link to="/">Login</Link>
          <Link to="/overView">Over View</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/shippingMachines">Shipping Machines</Link>
          <Link to="/shippingHeaders">Shipping Headers</Link>
          <Link to="/pdiInspection">PDI Inspections</Link>
          <Link to="/repairs">Repairs</Link>
          <Link to="/washBay">Wash Bay</Link>
          <Link to="/readyShipList">Ready Ship List</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/ecnOverview">ECN Overview</Link>
      <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/overView" component={OverView} />
              <Route path="/admin" component={Admin} />
              <Route path="/shippingMachines" component={ShippingMachines} />
              <Route path="/shippingHeaders" component={ShippingHeaders} />
              <Route path="/pdiInspection" component={PdiInspection} />
              <Route path="/repairs" component={Repair} />
              <Route path="/washBay" component={WashBay} />
              <Route path="/readyShipList" component={ReadyShipList} />
              <Route path="/statistics" component={StatisticsView} />
              <Route path="/ecnOverview" component={EcnOverview} />
      </Switch>
      </div>
  </BrowserRouter>
);

Meteor.startup(() => {
   ReactDOM.render(routes, document.getElementById('render-target'));
});