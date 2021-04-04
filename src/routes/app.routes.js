import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import CadastroCompra from "../pages/cadastroCompra";
import Login from "../pages/Login";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Cadastro} path="/cadastro" exact />
		<Route component={Login} path="/Login" exact />
    <Route component={CadastroCompra} path="/Publish_Product" exact/>
  </Switch>
);
export default AppRoutes;
