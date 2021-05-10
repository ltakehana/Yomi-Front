import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import BookSearch from "../pages/BookSearch";
import Profile from "../pages/Profile";
import MyAnnouncements from "../pages/MyAnnouncements";

const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={BookSearch} path="/search" exact />
		<Route component={Profile} path="/Profile" exact />
		<Route component={MyAnnouncements} path="/MyAnnouncements" exact />
	</Switch>
);
export default AppRoutes;
