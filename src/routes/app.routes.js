import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import BookSearch from "../pages/BookSearch";
import Chat from  "../pages/Chat";
const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Cadastro} path="/cadastro" exact />
		<Route component={Login} path="/Login" exact />
		<Route component={BookSearch} path="/search" exact />
		<Route component={Chat} path="/chat" exact />
	</Switch>
);

export default AppRoutes;
