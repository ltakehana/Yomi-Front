import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/components/Modal.css";
import logo from "../assets/logo_purple.svg";
import "../styles/components/page1ModalForgotMyPassword.css";



const ModalRecoverPassword = ({ showModal, setShowModal }) => {
	const [page,setPage] = useState(1);
	const modalRef = useRef();

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



	const Page1ModalRecoverPassword = () => {
		return (
			<div id="Home-password-container">
				<img src={logo} id="Logo-home"></img>

				<div className="middle-container">
                    <div id="Head-title-recover">Recuperar Senha</div>
                    <div id ="Middle-text-recover">Para recuperar sua senha, digite abaixo o email cadastrado, que enviaremos um link com instruções.</div>
                    
                    <input placeholder = "example@gmai.com"></input>

					<button id = "button-send">Enviar</button>
					
                    
                    
				</div>
			</div>
		);
	}



	return (
		<>
			{showModal ? (
				<div id="Background" onClick={closeModal} ref={modalRef}>
					<animated.div style={animationModal}>
						<div id="ModalWrapperLong">
							{(page==1)&&(<Page1ModalRecoverPassword></Page1ModalRecoverPassword>)}                        
							<div
								id="Close"
								className="material-icons"
								onClick={() => {setShowModal(false)}}
								style={{color:"white"}}
							>
								close
							</div>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalRecoverPassword;