import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Login from "../pages/Login";
import "../styles/components/Modal.css";

export const Modal = ({ showModal, setShowModal }) => {
	const modalRef = useRef();

	const animation = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	const closeModal = (e) => {
		if (modalRef.current == e.target) {
			setShowModal(false);
		}
	};

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

	return (
		<>
			{showModal ? (
				<div id="Background" onClick={closeModal} ref={modalRef}>
					<animated.div style={animation}>
						<div id="ModalWrapper" showModal={showModal}>
							<div
								id="Close"
								className="material-icons"
								onClick={() => setShowModal((prev) => !prev)}
							>
								close
							</div>
							<Login></Login>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};
