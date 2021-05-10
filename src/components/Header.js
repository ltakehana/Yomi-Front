import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/components/header.css";
import logo from "../assets/logo_white.svg";
import { ModalLogin } from "./ModalLogin";
import { useAuth } from '../contexts/auth';

const Header = (props) => {
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	const {signed} = useAuth();
	const {name} = useAuth();
	const {signOut} = useAuth();

	const myAnnouncementsRedirect=()=>{
		history.push("/MyAnnouncements")
	}

	const profileRedirect=()=>{
		history.push("/Profile")
	}

	const homeRedirect=()=>{
		history.push("/")
	}

	return (
		<div>
			<ModalLogin showModal={showModal} setShowModal={setShowModal} />
			<div id="header">
				<div id="header_content">
					<img id="header_logo" src={logo} style={{cursor:"pointer"}} onClick={homeRedirect} />

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
								<div className="dropdown">
									<span className="material-icons">
										person
									</span>
									<div className="dropdown-content">
										<p className="dropdown-itens" onClick={myAnnouncementsRedirect}>
											Meus anúncios
										</p>
										<p className="dropdown-itens" onClick={profileRedirect}>
											Meu Perfil
										</p>
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
