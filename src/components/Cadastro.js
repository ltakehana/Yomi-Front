import React from "react";
import "../styles/components/cadastro.css";
import face from "../assets/facebook.svg";
import google from "../assets/googleIcon.svg";
import micro from "../assets/microsoftIcon.svg";
import logo from "../assets/logo_purple.svg";


function Cadastro() {
	return (
		<div className="register-container">
			<div className="content-register">
				<div id="registerContainer">
				<div className="title">
					<p>
						<strong>Crie sua conta!!!</strong>
					</p>
				</div>

				<label htmlFor="nome">Nome: </label>
				<input id="nome" type="input" />
				<label htmlFor="Email">Email: </label>
				<input id="email" type="email" />
				<label htmlFor="Senha">Senha: </label>
				<input id="senha" type="password" />
				<label htmlFor="Email">Confirma senha: </label>
				<input id="TrueSenha" type="password" />
				<button type="submit">Cadastre-se</button>
				<div className="log">
					<p>ou</p>
				</div>
				<div className="socialMedia">
					<img src={google} alt="Icon da google" />
					<img src={face} alt="Icon do face" />
					<img src={micro} alt="Icon da microsft" />
				</div>
				</div>
			</div>
		</div>
	);
}

export default Cadastro;
