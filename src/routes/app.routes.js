import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import BookSearch from "../pages/BookSearch";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={BookSearch} path="/search" exact />
	</Switch>
);
export default AppRoutes;
