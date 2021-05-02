import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
<<<<<<< HEAD
import PageAnnouncement from "../pages/PageAnnouncement";
=======
import CadastroCompra from "../pages/cadastroCompra";
import CadastroTroca from "../pages/CadastroTroca";
import Profile from "../pages/Profile";
>>>>>>> 2b50ef1f5ff3f72c5a97318c6c3b6a0eb4159af4

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
<<<<<<< HEAD
		<Route component={PageAnnouncement} path="/book" exact />
	</Switch>
=======
		<Route component={Profile} path="/Profile" exact />
    <Route component={CadastroCompra} path="/Publish_Product" exact/>
    <Route component={CadastroTroca} path="/Publish_Product_exchange" exact/>
  </Switch>
>>>>>>> 2b50ef1f5ff3f72c5a97318c6c3b6a0eb4159af4
);
export default AppRoutes;
