import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookSearch from '../pages/BookSearch';

import Home from '../pages/Home';

const AppRoutes = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={BookSearch} path="/search" exact />
  </Switch>
);

export default AppRoutes;
