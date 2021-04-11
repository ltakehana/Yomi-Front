import React from "react";
import "../styles/components/login.css";
import face from "../assets/facebook.svg";
import google from "../assets/googleIcon.svg";
import micro from "../assets/microsoftIcon.svg";
import logo from "../assets/logo_purple.svg";

function Login({onRegister= ()=>{}}) {
	return (
		<div className="login-container">
			<div className="login-content">
				<div id="loginContainer">
					<div className="title">
						<p>Bem Vindo ao Yomi!!!</p>
					</div>

					<label htmlFor="email">Email: </label>
					<input id="email" type="email" />
					<label htmlFor="Senha">Senha: </label>
					<input id="senha" type="password" />
					<button type="submit">Login</button>
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
						<button onClick={onRegister}>Cadastre-se aqui</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
