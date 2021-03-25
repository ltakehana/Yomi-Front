import React from "react";
import "../styles/pages/cadastro.css";
import face from "../assets/facebook.svg";
import google from "../assets/googleIcon.svg";
import micro from "../assets/microsoftIcon.svg";
import logo from "../assets/logo_purple.svg";

function Cadastro() {
	return (
		<div className="container">
			<div className="left-content">
				<div className="logo">
					<img src={logo} alt="Yomi icon" />
				</div>
			</div>

			<div className="right-content">
				<div className="title">
					<p>
						<strong>Crie sua conta!!!</strong>
					</p>
				</div>

				<form>
					<label htmlFor="nome">Nome: </label>
					<input id="nome" type="nome" />
					<label htmlFor="Email">Email: </label>
					<input id="email" type="email" />
					<label htmlFor="Senha">Senha: </label>
					<input id="senha" type="senha" />
					<label htmlFor="Email">Confirma senha: </label>
					<input id="TrueSenha" type="TrueSenha" />
					<button type="submit">Cadastre-se</button>
				</form>
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
	);
}

export default Cadastro;
