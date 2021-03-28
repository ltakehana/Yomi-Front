import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Login} path="/Login" exact />
	</Switch>
);

export default AppRoutes;
