import React, { useState } from "react";
import "../styles/components/homeInfoAnnoucement.css";
import logo from "../assets/logo_purple.svg";

function HomeInfoAnnouncement() {
	return (
		<div id="Book-announce-container">
			<div className="AnnounceHeader">
				<img src={logo} className="Logo-header-announce"></img>
				<div className="header-title">
					<p>Informações do livro</p>
				</div>
			</div>
			<div id="middle-container">
				<div id="PhotoInputDiv">
					<input id="PhotoInput" placeholder="photo"></input>
				</div>
				<div id="bookInput">
					<input id="TitleInput" placeholder="Título"></input>
					<div>
						<input id="AutorInput" placeholder="Autor(a)"></input>
						<input id="EditInput" placeholder="Editora"></input>
						<input id="YearInput" placeholder="Ano"></input>
					</div>
					<div>
						<input
							id="CategoriaInput"
							placeholder="Categoria"
						></input>
						<input
							id="PageInput"
							placeholder="N° de páginas"
						></input>
					</div>
				</div>
			</div>
			<div id="SinopseInputDiv">
				<input id="SinopseInput" placeholder="Sinopse do livro"></input>
			</div>
		</div>
	);
}

export default HomeInfoAnnouncement;
