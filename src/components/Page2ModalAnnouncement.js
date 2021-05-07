import React from "react";
import "../styles/components/page2ModalAnnouncement.css";
import logo from "../assets/logo_purple.svg";
import Photo from "../assets/Photo.svg";

function Page2ModalAnnouncement() {
	return (
		<div className="Book-announce-container">
			<div className="AnnounceHeader">
				<img src={logo} className="Logo-header-announce"></img>
				<div className="header-title">
					<p>Informações do livro</p>
				</div>
			</div>
			<div id="middle-container">
				<div id="PhotoInputDiv">
					<label For="PhotoInputButton">
						<div id="photoInput">
							<img src={Photo} id="PhotoIcon"></img>
							<div>Adicione Fotos</div>
							<div>(JPG e PNG somentes)</div>
						</div>
					</label>
					<input
						id="PhotoInputButton"
						type="file"
						accept="image/png, image/jpeg"
					></input>
				</div>
				<div id="bookInput">
					<input id="TitleInput" placeholder="Título"></input>
					<div id="midInput">
						<input id="AutorInput" placeholder="Autor(a)"></input>
						<input id="EditoraInput" placeholder="Editora"></input>
						<input id="YearInput" placeholder="Ano"></input>
					</div>
					<div id="lastInput">
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
				<textarea
					id="SinopseInput"
					placeholder="Sinopse do livro"
				></textarea>
			</div>
			<div className="NextButton">
				<p>Avançar</p>
				<div className="arrowNext">
					<span className="material-icons">arrow_forward_ios</span>
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

export default Page2ModalAnnouncement;
