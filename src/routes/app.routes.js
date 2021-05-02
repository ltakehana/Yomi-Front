import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import CadastroCompra from "../pages/cadastroCompra";
import CadastroTroca from "../pages/CadastroTroca";
import Profile from "../pages/Profile";
import PageAnnouncement from "../pages/PageAnnouncement";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Profile} path="/Profile" exact />
		<Route component={CadastroCompra} path="/Publish_Product" exact />
		<Route
			component={CadastroTroca}
			path="/Publish_Product_exchange"
			exact
		/>
		<Route component={PageAnnouncement} path="/book" exact />
	</Switch>
);
export default AppRoutes;
