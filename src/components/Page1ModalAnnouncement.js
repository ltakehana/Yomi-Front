import React,{useState} from "react";
import "../styles/components/page1ModalAnnouncement.css";
import logo from "../assets/logo_purple.svg";

function Page1ModalAnnouncement() {
	

	return (
		<div id="Home-announce-container">
			<img src={logo} id="Logo-home"></img>

			<div id="Annouce-options">
				<div id="Announce-title">
					<p>Selecione a transação desejada</p>
				</div>

				<div id="Announce-buttons-container">
					<button className="Announce-buttons">Trocas</button>
					<button className="Announce-buttons">Vendas</button>
					<button className="Announce-buttons">Doações</button>
				</div>

				<div className="NextButton">
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

export default Page1ModalAnnouncement;
