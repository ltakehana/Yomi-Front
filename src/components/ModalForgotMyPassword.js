import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/components/Modal.css";
import logo from "../assets/logo_purple.svg";
import "../styles/components/page1ModalForgotMyPassword.css";
import "../styles/components/page2ModalAnnouncement.css";



const ModalForgotMyPassword = ({ showModal, setShowModal }) => {
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



	const Page1ModalForgotMyPassword = () => {
		return (
			<div id="Home-password-container">
				<img src={logo} id="Logo-home"></img>

				<div className="middle-container">
                    <div id="Head-title">Mudar senha</div>
                    <div id ="Middle-text">Informe sua senha atual.</div>
                    
                    <input placeholder = "Senha atual"></input>
					
                    
                    <div onClick={()=>{setPage(2)}} className="NextButton">
						<p>Avançar</p>
						<div className="arrowNext">
							<span className="material-icons">
								arrow_forward_ios
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}

    const Page2ModalForgotMyPassword = () => {
		return (
			<div id="Home-password-container">
				<img src={logo} id="Logo-home"></img>

				<div className="middle-container">
                    <div id="Head-title">Mudar senha</div>
                    
                    <input placeholder = "Criar senha"></input>
                    <input placeholder = "Confirmar senha"></input>

                    <button id = "button-send">Enviar</button>


					<div onClick={()=>{setPage(1)}} className="BackButton">
                        <div className="arrowNext">
                            <span className="material-icons">arrow_back_ios</span>
                        </div>

					<p>Voltar</p>
				</div>
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
							{(page==1)&&(<Page1ModalForgotMyPassword></Page1ModalForgotMyPassword>)}
                            {(page==2)&&(<Page2ModalForgotMyPassword></Page2ModalForgotMyPassword>)}
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

export default ModalForgotMyPassword;