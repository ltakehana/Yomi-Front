import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../pages/Profile";
import MyAnnouncements from "../pages/MyAnnouncements";
import Home from "../pages/Home";
import BookSearch from "../pages/BookSearch";
import Chat from "../pages/Chat";
import MyLibrary from "../pages/MyLibrary";
import ChatContacts from "../pages/ChatContacts";
import PageAnnouncement from "../pages/PageAnnouncement"
import ResetPassword from "../pages/ResetPassword"


const AppRoutes = () => (
	<Switch>
		<Route component={Home} path="/" exact />
		<Route component={Profile} path="/Profile" exact />
    <Route component={MyAnnouncements} path="/MyAnnouncements" exact/>
	<Route component={BookSearch} path="/search" exact />
		<Route component={Chat} path="/chat/:user_id" />
		<Route component={BookSearch} path="/search" exact />
		<Route component={Profile} path="/Profile" exact />
		<Route component={MyAnnouncements} path="/MyAnnouncements" exact />
		<Route component={MyLibrary} path="/MyLibrary" exact />
		<Route component={ChatContacts} path="/contacts" exact />
		<Route component={PageAnnouncement} path="/announcement/:announceId" />
		<Route component={ResetPassword} path="/reset_password/:token" />
	</Switch>
);
export default AppRoutes;
