import React from "react";
import "../styles/components/page3ModalAnnouncement.css";
import logo from "../assets/logo_purple.svg";

function Page3ModalAnnouncement() {
	return (
		<div className="Book-announce-container">
			<div className="AnnounceHeader">
				<img src={logo} className="Logo-header-announce"></img>
				<div className="header-title">
					<p>Informações do anúncio</p>
				</div>
			</div>
			<div id="ContactInfo">
				<p>Informações de contato</p>
				<p> Desejo exibir meu telefone</p>
				<p> Desejo exibir meu email</p>
				<p> Desejo utilizar o chat do site</p>
			</div>
			<div className="CepContainerRow">
				<input className="CepInput" placeholder="CEP"></input>
				<input className="CepInput" placeholder="Estado"></input>
				<input className="CepInput" placeholder="Cidade"></input>
			</div>
			<div className="CepContainerRow">
				<input id="BairroInput" placeholder="Bairro"></input>
				<input id="RuaInput" placeholder="Rua"></input>
			</div>
			<div id="DescriptionRow">
				<textarea
					id="DiscriptionInput"
					placeholder="Sinopse do livro"
				></textarea>
			</div>
			<div id="PriceRow">
				<p>Preço: </p>
				<input id="PriceInput" placeholder="R$ 0,00"></input>
			</div>
			<div className="NextButton">
				<p>Finalizar</p>
				<div className="arrowNext">
					<span class="material-icons">check_circle</span>
				</div>
			</div>
			<div className="BackButton">
				<div className="arrowNext">
					<span className="material-icons">arrow_back_ios</span>
				</div>

				<p>Voltar</p>
			</div>
		</div>
	);
}

export default Page3ModalAnnouncement;
