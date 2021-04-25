import React, { useState } from "react";
import "../styles/components/header.css";
import logo from "../assets/logo_white.svg";
import { Modal } from "./Modal";
import { useAuth } from '../contexts/auth';

const Header = (props) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	const {signed} = useAuth();
	const {name} = useAuth();
	const {signOut} = useAuth();


	return (
		<div>
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<div id="header">
				<div id="header_content">
					<img id="header_logo" src={logo} />

					<div id="header_search">
						<input />
						<span
							className="material-icons"
							id="header_search_icon"
						>
							search
						</span>
					</div>
					<div id="header_icons">
						{(signed)?
						(
							<>
								<div class="dropdown">
									<span className="material-icons">
										person
									</span>
									<div class="dropdown-content">
										<p className="dropdown-itens" onClick={signOut}>
											Sair
										</p>
									</div>
								</div>
								<label>Olá, {name}</label>

							</>
						):(
							<>
								<span className="material-icons" onClick={openModal}>
									person
								</span>
								<label onClick={openModal}>Entre ou cadastre-se</label>
							</>
						)}
						<span className="material-icons">bookmark</span>
						<span className="material-icons">local_library</span>
					</div>
				</div>
				<ul id="header_categories">
					<li>lorem ipsum</li>
					<li>lorem ipsum</li>
					<li>lorem ipsum</li>
					<li>lorem ipsum</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
