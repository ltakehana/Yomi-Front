import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import CadastroCompra from '../pages/cadastroCompra'

const AppRoutes = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={CadastroCompra} path="/Publish_Product" exact/>
  </Switch>
);

export default AppRoutes;
