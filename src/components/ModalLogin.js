import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import Login from "./Login";
import Register from "./Register";
import "../styles/components/Modal.css";
import logo from "../assets/logo_purple.svg";

export const ModalLogin = ({ showModal, setShowModal }) => {
	const modalRef = useRef();

	const [showRegister,setShowRegister]=useState(false);

	const animationModal = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	const animationLogo = useSpring({
		config: {
			duration: 250,
		},
		transform: showRegister ? `translateX(100%)` : `translateX(0%)`,
	});


	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowRegister(false);
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowRegister(false);
				setShowModal(false);
			}
		},
		[setShowModal, showModal],
	);
	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<div id="Background" onClick={closeModal} ref={modalRef}>
					<animated.div style={animationModal}>
						<div id="ModalWrapper">
							<div id="ModalView">
								<Register onLogin={()=>{setShowRegister(false)}}></Register>
								<Login onRegister={()=>{setShowRegister(true)}}></Login>
							</div>
							<animated.div className="content-logo-login" style={animationLogo}>
								<img src={logo} id="logoLogin" alt="Yomi icon" />
							</animated.div>
							<div
								id="Close"
								className="material-icons"
								onClick={() => {setShowModal(false);setShowRegister(false)}}
								style={{color:(showRegister)?"white":'#8c52ff'}}
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
