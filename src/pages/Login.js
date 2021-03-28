import React from "react";
import "../styles/pages/login.css";
import face from "../assets/facebook.svg";
import google from "../assets/googleIcon.svg";
import micro from "../assets/microsoftIcon.svg";
import logo from "../assets/logo_purple.svg";

function Login() {
	return (
		<div className="container">
			<div className="left-content-login">
				<div className="logo">
					<img src={logo} id="logoLogin" alt="Yomi icon" />
				</div>
			</div>

			<div className="right-content-login">
				<div id="loginContainer">
					<div className="title">
						<p>Bem Vindo ao Yomi!!!</p>
					</div>

					<form>
						<label htmlFor="email">Email: </label>
						<input id="email" type="email" />
						<label htmlFor="Senha">Senha: </label>
						<input id="senha" type="password" />
						<button type="submit">Login</button>
					</form>
					<div className="log">
						<p>Logar com:</p>
					</div>
					<div className="socialMedia">
						<img src={google} alt="Google icon" />
						<img src={face} alt="Facebook icon" />
						<img src={micro} alt="Microsft icon" />
					</div>
					<div className="cadastro">
						<p>Não tem uma conta?</p>
						<button type="submit">Cadastre-se aqui</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
