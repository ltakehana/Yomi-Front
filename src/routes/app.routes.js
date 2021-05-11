import React from "react";
import { Route, Switch } from "react-router-dom";
import CadastroCompra from "../pages/cadastroCompra";
import CadastroTroca from "../pages/CadastroTroca";
import Profile from "../pages/Profile";
import MyAnnouncements from "../pages/MyAnnouncements";
import Home from "../pages/Home";
import BookSearch from "../pages/BookSearch";
import Chat from "../pages/Chat";
import MyLibrary from "../pages/MyLibrary";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Profile} path="/Profile" exact />
    <Route component={CadastroCompra} path="/Publish_Product" exact/>
    <Route component={CadastroTroca} path="/Publish_Product_exchange" exact/>
    <Route component={MyAnnouncements} path="/MyAnnouncements" exact/>
	<Route component={BookSearch} path="/search" exact />
		<Route component={Chat} path="/chat" exact />
		<Route component={BookSearch} path="/search" exact />
		<Route component={Profile} path="/Profile" exact />
		<Route component={MyAnnouncements} path="/MyAnnouncements" exact />
		<Route component={MyLibrary} path="/MyLibrary" exact />
	</Switch>
);
export default AppRoutes;
