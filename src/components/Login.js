import React, {useState} from "react";
import "../styles/components/login.css";
import { useAuth } from '../contexts/auth';

function Login({onRegister= ()=>{},openRecoverPass=()=>{}}) {
	
	const {signIn} = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const handleSignIn= async ()=>{
		if(!validateEmail(email))
			alert("Insira um endereço de email válido!");
		else
			await signIn(email, password);
	};

	return (
		<div className="login-container">
			<div className="login-content">
				<div id="loginContainer">
					<div className="title">
						<p>Bem Vindo ao Yomi!!!</p>
					</div>

					<label htmlFor="email">Email: </label>
					<input id="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
					<label htmlFor="Senha">Senha: </label>
					<input id="senha" type="password" onChange={(e) => setPassword(e.target.value)} />
					<label style={{cursor:"pointer"}} onClick={openRecoverPass}>Esqueci minha senha</label>
					<button onClick={handleSignIn}>Login</button>
					<br/>
					<div className="register">
						<p>Não tem uma conta?</p>
						<button onClick={onRegister}>Cadastre-se aqui</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
