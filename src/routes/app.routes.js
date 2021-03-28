import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Cadastro} path="/cadastro" exact />
		<Route component={Login} path="/Login" exact />
	</Switch>
);

export default AppRoutes;
