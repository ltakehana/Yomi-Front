import React, { useState } from "react";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";

import "../styles/pages/pageAnnouncement.css";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import Footer from "../components/Footer";
import mensagem from "../assets/mensagem.svg";

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

const ImagePreview = [
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		Number: 1,
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		Number: 2,
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		Number: 3,
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		Number: 4,
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		Number: 5,
	},
];

function PageAnnouncement() {
	const [bookSelected, setbookSelected] = useState(ImagePreview[0]);
	return (
		<div id="body-book-container">
			<Header></Header>
			<div id="book-info-container">
				<div id="book-image-preview">
					<img id="book-image" src={bookSelected.img} />
					{/*
					<div id="BookPreviewCarousel">
						<BookPreview>
							{ImagePreview.map((book, index) => (
								<div className="bookPreview" key={index}>
									<img
										src={book.img}
										onClick={() => {
											setbookSelected(book);
										}}
									/>
								</div>
							))}
						</BookPreview>
					</div>
						*/}
				</div>
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
						<img className="contact-icons" src={whatsapp}></img>

						<img className="contact-icons" src={email}></img>
					</div>
					<div id="seller-chat">
						<img id="mensagem-icon" src={mensagem}></img>
						<p>Conversar com o vendedor</p>
					</div>
				</div>
			</div>

			<div id="book-description-container">
				<div id="book-description-title">
					<p>Detalhes</p>
				</div>
				<table id="book-description">
					<tr>
						<td>Número de Páginas</td>
						<td>176</td>
					</tr>
					<tr>
						<td>Ano</td>
						<td>1992</td>
					</tr>

					<tr>
						<td>Autor</td>
						<td>Rezende</td>
					</tr>
					<tr>
						<td>Edição</td>
						<td>1</td>
					</tr>
					<tr>
						<td>Editora</td>
						<td>youtube</td>
					</tr>
					<tr>
						<td>Categoria</td>
						<td>Terror</td>
					</tr>
					<tr>
						<td>Sinopse</td>
						<td>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Praesent nulla risus, viverra eu convallis
							tempus, vehicula a mi. Suspendisse ultrices erat at
							ligula lacinia, et convallis ex egestas
						</td>
					</tr>
				</table>
			</div>
			<div id="highlights">
				<p>Produtos Relacionados</p>
			</div>
			<ProductCarousel>
				{bookImage.map((book, index) => (
					<div className="bookTitle" key={index}>
						<img src={book.img} />
						<label>{book.name}</label>
					</div>
				))}
			</ProductCarousel>

			<Footer></Footer>
		</div>
	);
}
export default PageAnnouncement;
