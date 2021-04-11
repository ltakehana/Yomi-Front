import React, {useState} from "react";
import "../styles/components/login.css";
import face from "../assets/facebook.svg";
import google from "../assets/googleIcon.svg";
import micro from "../assets/microsoftIcon.svg";
import { useAuth } from '../contexts/auth';

function Login({onRegister= ()=>{}}) {
	
	const {signIn} = useAuth();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn= async ()=>{
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
					<button onClick={handleSignIn}>Login</button>
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
