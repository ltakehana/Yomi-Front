import React from "react";
import "./Login.css";
import face from "../../assets/facebook.svg";
import google from "../../assets/googleIcon.svg";
import micro from "../../assets/microsoftIcon.svg";

function Login() {
	return (
		<div className="container">
			<div className="left-content"></div>

			<div className="right-content">
				<div className="title">
					<p>
						<strong>Bem Vindo ao Yomi!!!</strong>
					</p>
				</div>

				<form>
					<label htmlFor="email">Email: </label>
					<input id="email" type="email" />
					<label htmlFor="Senha">Senha: </label>
					<input id="senha" type="senha" />
					<button type="submit">Login</button>
				</form>
				<div className="log">
					<p>Logar com:</p>
				</div>
				<div className="socialMedia">
					<img src={google} alt="Icon da google" />
					<img src={face} alt="Icon do face" />
					<img src={micro} alt="Icon da microsft" />
				</div>
				<div className="cadastro">
					<p>Não tem uma conta?</p>
					<button type="submit">Cadastre-se aqui</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
