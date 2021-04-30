import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
	</Switch>
);
export default AppRoutes;
