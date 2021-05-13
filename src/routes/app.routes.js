import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import BookSearch from "../pages/BookSearch";
import Profile from "../pages/Profile";
import MyAnnouncements from "../pages/MyAnnouncements";
import MyLibrary from "../pages/MyLibrary";
import PageAnnouncement from "../pages/PageAnnouncement"
import ResetPassword from "../pages/ResetPassword"


const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={BookSearch} path="/search" exact />
		<Route component={Profile} path="/Profile" exact />
		<Route component={MyAnnouncements} path="/MyAnnouncements" exact />
		<Route component={MyLibrary} path="/MyLibrary" exact />
		<Route component={PageAnnouncement} path="/announcement/:announceId" />
		<Route component={ResetPassword} path="/reset_password/:token" />
	</Switch>
);
export default AppRoutes;
