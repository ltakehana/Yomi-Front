import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PageAnnouncement from "../pages/PageAnnouncement";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={PageAnnouncement} path="/book" exact />
	</Switch>
);
export default AppRoutes;
