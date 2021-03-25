import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Cadastro} path="/cadastro" exact />
	</Switch>
);

export default AppRoutes;
