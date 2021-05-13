import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";

import "../styles/pages/pageAnnouncement.css";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import Footer from "../components/Footer";
import mensagem from "../assets/mensagem.svg";
import getAnnouncement from "../services/getAnnouncement";
import getAnnouncements from "../services/getAnnouncements";
import { useHistory } from "react-router-dom";
import postMyLibrary from "../services/postMyLibrary";
import getMyLibraryItem from "../services/getMyLibraryItem";

function PageAnnouncement(props) {
	const announceId = props.match.params.announceId;
	const [popular, setPopular] = useState([]);
	const [announce, setAnnounce] = useState([]);
	const [announceFav, setAnnounceFav] = useState(false);
	const token = sessionStorage.getItem("userToken");
	const history = useHistory();

	useEffect(async () => {
		let announces = await getAnnouncement(announceId);
		let announceFav = await getMyLibraryItem(token, announceId);
		console.log(announceFav);
		if (announceFav) {
			setAnnounceFav(true);
		}
		setAnnounce(announces);
		let popular = await getAnnouncements({
			orderBy: "popularity",
			limit: 10,
		});
		setPopular(popular.announcements);
	}, []);

	const redirectToBook = (id) => {
		history.push("/announcement/" + id);
		window.location.reload();
	};
     
    const redirectToChat = (id)=>{
        history.push("/chat/"+id);
        window.location.reload();
	}
	
	return (
		<div id="body-book-container">
			<Header></Header>
			<div id="book-info-container">
				<div id="book-image-preview">
					{announce && (
						<img
							id="book-image"
							src={
								"http://35.198.10.112/static/books_images/" +
								announce.book_cover
							}
						/>
					)}
					<span
						className="material-icons"
						id={announceFav ? "Selected-true" : "Selected"}
						onClick={() => {
							setAnnounceFav(true);
							postMyLibrary(token, announceId);
						}}
					>
						bookmark
					</span>
				</div>
				<div id="book-resume-container">
					<div id="book-resume-title">
						<p>{announce && announce.name}</p>
					</div>
					<div id="book-resume-description">
						<p>{announce.description}</p>
					{(announce.contact_type == 2 ||
						announce.contact_type == 3 ||
						announce.contact_type == 6 ||
						announce.contact_type == 7) && (
							announce.user_email+"	"
					)}
					{(announce.contact_type == 4 ||
						announce.contact_type == 5 ||
						announce.contact_type == 6 ||
						announce.contact_type == 7) && (
						announce.user_telephone
					)}
					</div>
				</div>
				<div id="book-sellers-container">
					{announce.announceType == 2 && (
						<div id="book-value">
							<p>R$ {announce.price}</p>
						</div>
					)}
					{announce.announceType == 1 && (
						<div id="book-seller-type">
							<p>Doações</p>
						</div>
					)}
					{announce.announceType == 2 && (
						<div id="book-seller-type">
							<p>Venda</p>
						</div>
					)}
					{announce.announceType == 3 && (
						<div id="book-seller-type">
							<p>Trocas</p>
						</div>
					)}
					<div id="seller-name">
						<p>{announce.user_name}</p>
					</div>
					<div id="seller-icon">
						{(announce.contact_type == 2 ||
							announce.contact_type == 3 ||
							announce.contact_type == 6 ||
							announce.contact_type == 7) && (
								<a style={{cursor:"pointer"}} href={"mailto:"+announce.user_email}><img className="contact-icons" src={email}></img></a>
						)}
						{(announce.contact_type == 4 ||
							announce.contact_type == 5 ||
							announce.contact_type == 6 ||
							announce.contact_type == 7) && (
							<a style={{cursor:"pointer"}} href={"tel:"+announce.user_telephone}><img className="contact-icons" src={whatsapp}></img></a>
						)}
					</div>
					{(announce.contact_type == 1 ||
						announce.contact_type == 3 ||
						announce.contact_type == 5 ||
						announce.contact_type == 7) && (
						<div id={"seller-chat"} onClick={()=>redirectToChat(announce.user_id)}>
							<img id="mensagem-icon" style={{cursor:"pointer"}} src={mensagem}></img>
							<p>Conversar com o vendedor</p>
						</div>
					)}
				</div>
			</div>

			<div id="book-description-container">
				<div id="book-description-title">
					<p>Detalhes</p>
				</div>
				<table id="book-description">
					<tr>
						<td>Número de Páginas</td>
						<td>{announce.pages}</td>
					</tr>
					<tr>
						<td>Ano</td>
						<td>{announce.year}</td>
					</tr>

					<tr>
						<td>Autor</td>
						<td>{announce.author}</td>
					</tr>
					<tr>
						<td>Editora</td>
						<td>{announce.publishing_company}</td>
					</tr>
					<tr>
						<td>Categoria</td>
						<td>{announce.categories}</td>
					</tr>
					<tr>
						<td>Sinopse</td>
						<td>{announce.synopsis}</td>
					</tr>
				</table>
			</div>
			<div id="highlights">
				<p>Produtos Relacionados</p>
			</div>
			<ProductCarousel>
				{popular &&
					popular.length > 0 &&
					popular.map((book, index) => (
						<div
							className="bookTitle"
							key={index}
							onClick={() => {
								redirectToBook(book.id);
							}}
						>
							<img
								src={
									"http://35.198.10.112/static/books_images/" +
									book.book_cover
								}
							/>
							<label>{book.name}</label>
						</div>
					))}
			</ProductCarousel>

			<Footer></Footer>
		</div>
	);
}
export default PageAnnouncement;
