import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import auth from "../services/auth";
import api from "../services/api";
import userInfo from "../services/userInfo";
import register from "../services/register";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	const [name, setName] = useState("");

	const history = useHistory();

	useEffect(() => {
		async function loadStoragedData() {
			const accessToken = await sessionStorage.getItem("userToken");
			const name = await sessionStorage.getItem("userName");
			if (accessToken) {
				api.defaults.headers.Authorization = `Bearer ${accessToken}`;
				setToken(`Bearer ${accessToken}`);
			}
			if (name) setName(name);
		}

		loadStoragedData();
	}, []);

	const signIn = async (username, password) => {
		try {
			const response = await auth(username, password);
			if (response.result !== null) {
				api.defaults.headers.Authorization = `Bearer ${response.token}`;
				setToken(`Bearer ${response.token}`);
				const userName = await userInfo(`${response.token}`);
				setName(userName.name);
				window.location.reload(false);
			} else {
				alert(response.message);
				return 0;
			}
		} catch (error) {
			alert("Email ou senha incorreta!!");
		}
	};

	const signUp = async (name, email, password) => {
		try {
			const response = await register(name, email, password);
			if (response.token !== null) {
				api.defaults.headers.Authorization = `Bearer ${response.token}`;
				setToken(`Bearer ${response.token}`);
				const userName = await userInfo(`${response.token}`);
				setName(userName.name);
				window.location.reload(false);
			} else {
				alert(response.message);
				return 0;
			}
		} catch (error) {
			console.error(error);
		}
	};
	const signOut = () => {
		sessionStorage.clear();
		history.push("/");
		window.location.reload(false);
	};

	return (
		<AuthContext.Provider
			value={{
				signed: !!token,
				token,
				name,
				signUp,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
