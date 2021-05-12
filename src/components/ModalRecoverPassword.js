import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/components/Modal.css";
import logo from "../assets/logo_purple.svg";
import "../styles/components/page1ModalForgotMyPassword.css";
import ResetPassword from "../services/resetPassword";
import updatePassword from "../services/updatePassword";
import { useHistory } from "react-router-dom";



const ModalRecoverPassword = ({ showModal, setShowModal, page=1,token="" }) => {
	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [confirmPassword,setConfirmPassword] = useState("");
	const modalRef = useRef();
	const history = useHistory()

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const animationModal = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});
	

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal],
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);


	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}


	const handleSubmitEmail = async () =>{
		if(validateEmail(email)){
			await ResetPassword(email);
			window.location.reload();
		}
		else{
			alert("Insira um formato de email válido!");
		}
	}


	const handleSubmitPassword = async () =>{
		if(password==confirmPassword){
			const body={
				password:password
			}
			await updatePassword(token,body);
			history.push("/")
			window.location.reload();
		}
		else{
			alert("As senhas não conferem!");
		}
	}


	return (
		<>
			{showModal ? (
				<div id="Background" onClick={closeModal} ref={modalRef}>
					<animated.div style={animationModal}>
						<div id="ModalWrapperLong">
							{(page==1)&&(
							<div id="Home-password-container">

								<div className="middle-container">
									<img src={logo} id="Logo-home"></img>
									<div id="Head-title-recover">Recuperar Senha</div>
									<div id ="Middle-text-recover">Para recuperar sua senha, digite abaixo o email cadastrado, que enviaremos um link com instruções.</div>
									
									<input style={{color:"#8c52ff"}} placeholder = "Email" onChange={(e) => setEmail(e.target.value)}></input>

									<button id = "button-send" onClick={handleSubmitEmail}>Enviar</button>
									
									
									
								</div>
							</div>
							)}                 
							{(page==2)&&(
								<div id="Home-password-container">
									<img src={logo} id="Logo-home"></img>
					
									<div className="middle-container">
										<div id="Head-title">Mudar senha</div>
										
										<input style={{color:"#8c52ff"}} type="password" placeholder = "Nova senha" onChange={(e) => setPassword(e.target.value)}></input>
										<input style={{color:"#8c52ff"}} type="password" placeholder = "Confirmar senha" onChange={(e) => setConfirmPassword(e.target.value)}></input>
					
										<button id = "button-send" onClick={handleSubmitPassword}>Enviar</button>

					
									</div>
								</div>
							)}       
							{(page!=2)&&(
								<div
									id="Close"
									className="material-icons"
									onClick={() => {setShowModal(false)}}
									style={{color:"white"}}
								>
									close
								</div>
							)}       
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalRecoverPassword;