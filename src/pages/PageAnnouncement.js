import React from "react";
import Header from "../components/Header";
import "../styles/pages/pageAnnouncement.css";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";

const bookImage = [
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
];

function PageAnnouncement() {
	return (
		<div id="body-book-container">
			<Header></Header>
			<div id="book-info-container">
				<img
					id="book-image"
					src={
						"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg"
					}
				/>
				<div id="book-resume-container">
					<div id="book-resume-title">
						<p>Lorem ipsum - sit amet</p>
					</div>
					<div id="book-resume-description">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Praesent nulla risus, viverra eu convallis
							tempus, vehicula a mi. Suspendisse ultrices erat at
							ligula lacinia, et convallis ex egestas
						</p>
					</div>
				</div>
				<div id="book-sellers-container">
					<div id="book-value">
						<p>R$ 00,00</p>
					</div>
					<div id="book-seller-type">
						<p>Venda/Troca</p>
					</div>
					<div id="seller-name">
						<p>Fulano da Silva Sicrano</p>
					</div>
					<div id="seller-icon">
						<img id="contact-icons" src={whatsapp}></img>

						<img id="contact-icons" src={email}></img>
					</div>
					<div className="seller-book">
						<p>Conversar com o vendedor</p>
					</div>
					<div className="seller-book">
						<p>Ver outros anuncios do vendedor</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default PageAnnouncement;
