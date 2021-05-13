import React, {useState} from "react";
import "../styles/components/register.css";
import { useAuth } from "../contexts/auth";


function Register({onLogin=()=>{}}) {

	const {signUp} = useAuth();


	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const handleSignUp= async ()=>{
		if(!validateEmail(email))
			alert("Insira um endereço de email válido!");
		else if(password!=confirmPassword)
			alert("As senhas não conferem!")
		else
			await signUp(name, email, password);
	};
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
				<input id="nome" type="input" onChange={(e) => setName(e.target.value)}/>
				<label htmlFor="Email">Email: </label>
				<input id="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
				<label htmlFor="Senha">Senha: </label>
				<input id="senha" type="password" onChange={(e) => setPassword(e.target.value)}/>
				<label htmlFor="Email">Confirma senha: </label>
				<input id="TrueSenha" type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
				<button type="submit" onClick={() => {
												if (
													confirmPassword != "" &&
													password != "" &&
													email != "" &&
													name != ""
												) {
													handleSignUp();
												} else {
													alert(
														"preencha todos os dados",
													);
												}
											}}>Cadastre-se</button>
				<span id="returnLogin" onClick={onLogin}>Já tem uma conta?</span>
				</div>
			</div>
		</div>
	);
}

export default Register;
