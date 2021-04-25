import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
<<<<<<< HEAD
=======
import Cadastro from "../pages/Cadastro";
import CadastroCompra from "../pages/cadastroCompra";
import Login from "../pages/Login";
import CadastroTroca from "../pages/CadastroTroca";
>>>>>>> 52664f3d9d030f66011298be8935a9b03933d712

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
<<<<<<< HEAD
	</Switch>
=======
		<Route component={Cadastro} path="/cadastro" exact />
		<Route component={Login} path="/Login" exact />
    <Route component={CadastroCompra} path="/Publish_Product" exact/>
    <Route component={CadastroTroca} path="/Publish_Product_exchange" exact/>
  </Switch>
>>>>>>> 52664f3d9d030f66011298be8935a9b03933d712
);
export default AppRoutes;
