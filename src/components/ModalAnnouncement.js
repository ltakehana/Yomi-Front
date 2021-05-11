import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/components/Modal.css";
import "../styles/components/page3ModalAnnouncement.css";
import logo from "../assets/logo_purple.svg";
import Photo from "../assets/Photo.svg";
import "../styles/components/page1ModalAnnouncement.css";
import "../styles/components/page2ModalAnnouncement.css";
import "../styles/components/page3ModalAnnouncement.css";
import defaultBookImage from "../assets/batman.png";
import setAnnouncements from "../services/setAnnouncements";

const ModalAnnouncement = ({ showModal, setShowModal }) => {
	const [page, setPage] = useState(1);
	const [announceType, setAnnounceType] = useState(1);
	const [contactChat, setContactChat] = useState(true);
	const [contactTelephone, setContactTelephone] = useState(false);
	const [contactEmail, setContactEmail] = useState(false);
	const token = sessionStorage.getItem("userToken");
	const [announceName, setAnnounceName] = useState("");
	const [announceAuthor, setAnnounceAuthor] = useState("");
	const [announceYear, setAnnounceYear] = useState("");
	const [announcePages, setAnnouncePages] = useState("");
	const [announceSynopsis, setAnnounceSynopsis] = useState("");
	const [announcePublishing_company, setAnnouncePublishing_company] =
		useState("");
	const [announceCep, setAnnounceCep] = useState("");
	const [announceContactType, setAnnounceContactType] = useState(0);
	const [announceDistrict, setAnnounceDistrict] = useState("");
	const [announceCity, setAnnounceCity] = useState("");
	const [announceDescription, setAnnounceDescription] = useState("");
	const [announcePrice, setAnnouncePrice] = useState("");
	const [announceCategoria, setAnnounceCategoria] = useState("");
	const [announceImage, setAnnounceImage] = useState(defaultBookImage);
	const modalRef = useRef();

	const fileToBase64 = async (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (e) => reject(e);
		});

	const handleBookImage = async (e) => {
		let file = e.target.files[0];
		let imageBase64 = await fileToBase64(file);
		setAnnounceImage(imageBase64);
	};

	const handleAnnounceUpdate = () => {
		let name = null;
		let author = null;
		let year = null;
		let pages = null;
		let synopsi = null;
		let publishing_company = null;
		let book_cover = null;
		let cep = null;
		let district = null;
		let city = null;
		let description = null;
		let price = null;
		let type = null;
		let contactType = null;
		let categoria = null;

		if (announceName) {
			name = announceName;
		}
		if (announceAuthor) {
			author = announceAuthor;
		}
		if (announceYear) {
			year = announceYear;
		}
		if (announcePages) {
			pages = announcePages;
		}
		if (announceSynopsis) {
			synopsi = announceSynopsis;
		}
		if (announcePublishing_company) {
			publishing_company = announcePublishing_company;
		}
		if (announceImage) {
			book_cover = announceImage;
		}
		if (announceCep) {
			cep = announceCep;
		}
		if (announceDistrict) {
			district = announceDistrict;
		}
		if (announceCity) {
			city = announceCity;
		}
		if (announceDescription) {
			description = announceDescription;
		}
		if (announcePrice) {
			price = announcePrice;
		}
		if (announceType) {
			type = announceType;
		}
		if (announceContactType) {
			contactType = announceContactType;
		}
		if (announceCategoria) {
			categoria = announceCategoria.toLocaleLowerCase;
		}

		let body = {
			name: name,
			author: author,
			year: year,
			pages: pages,
			synopsi: synopsi,
			publishing_company: publishing_company,
			book_cover: book_cover,
			cep: cep,
			district: district,
			city: city,
			description: description,
			price: price,
			type: announceType,
			contactType: contactType,
			categoria: categoria,
		};
		console.log(body);
		setAnnouncements(token, body);
	};

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const animationModal = useSpring({
		config: {
			duration: 250,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

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
					<animated.div style={animationModal}>
						<div id="ModalWrapper">
							{page == 1 && (
								<div id="Home-announce-container">
									<img src={logo} id="Logo-home"></img>

									<div id="Annouce-options">
										<div id="Announce-title">
											<p>
												Selecione a transação desejada
											</p>
										</div>

										<div id="Announce-buttons-container">
											<button
												onClick={() => {
													setAnnounceType(3);
												}}
												className={
													announceType == 3
														? "Announce-buttons-selected"
														: "Announce-buttons"
												}
											>
												Doações
											</button>
											<button
												onClick={() => {
													setAnnounceType(2);
												}}
												className={
													announceType == 2
														? "Announce-buttons-selected"
														: "Announce-buttons"
												}
											>
												Vendas
											</button>
											<button
												onClick={() => {
													setAnnounceType(1);
												}}
												className={
													announceType == 1
														? "Announce-buttons-selected"
														: "Announce-buttons"
												}
											>
												Trocas
											</button>
										</div>

										<div
											onClick={() => {
												setPage(2);
											}}
											className="NextButton"
										>
											<p>Avançar</p>
											<div className="arrowNext">
												<span className="material-icons">
													arrow_forward_ios
												</span>
											</div>
										</div>
									</div>
								</div>
							)}
							{page == 2 && (
								<div className="Book-announce-container">
									<div className="AnnounceHeader">
										<img
											src={logo}
											className="Logo-header-announce"
										></img>
										<div className="header-title">
											<p>Informações do livro</p>
										</div>
									</div>
									<div id="middle-container">
										<div id="PhotoInputDiv">
											<label For="PhotoInputButton">
												<div id="photoInput">
													<img
														src={Photo}
														id="PhotoIcon"
													></img>
													<div>Adicione Fotos</div>
													<div>
														(JPG e PNG somentes)
													</div>
												</div>
											</label>
											<input
												id="PhotoInputButton"
												type="file"
												accept="image/png, image/jpeg"
												onChangeCapture={(e) => {
													handleBookImage(e);
												}}
											></input>
										</div>
										<div id="bookInput">
											<input
												id="TitleInput"
												placeholder="Título"
												type="input"
												onChange={(e) =>
													setAnnounceName(
														e.target.value,
													)
												}
											></input>

											<div id="midInput">
												<input
													id="AutorInput"
													placeholder="Autor(a)"
													type="input"
													onChange={(e) =>
														setAnnounceAuthor(
															e.target.value,
														)
													}
												></input>
												<input
													id="EditoraInput"
													placeholder="Editora"
													type="input"
													onChange={(e) =>
														setAnnouncePublishing_company(
															e.target.value,
														)
													}
												></input>
												<input
													id="YearInput"
													placeholder="Ano"
													type="number"
													onChange={(e) =>
														setAnnounceYear(
															e.target.value,
														)
													}
												></input>
											</div>
											<div id="lastInput">
												<input
													id="CategoriaInput"
													placeholder="Categoria"
													type="Input"
													onChange={(e) =>
														setAnnounceCategoria(
															e.target.value,
														)
													}
												></input>
												<input
													id="PageInput"
													placeholder="N° de páginas"
													type="number"
													onChange={(e) =>
														setAnnouncePages(
															e.target.value,
														)
													}
												></input>
											</div>
										</div>
									</div>
									<div id="SinopseInputDiv">
										<textarea
											id="SinopseInput"
											placeholder="Sinopse do livro"
											type="input"
											onChange={(e) =>
												setAnnounceSynopsis(
													e.target.value,
												)
											}
										></textarea>
									</div>
									<div
										onClick={() => {
											setPage(3);
										}}
										className="NextButton"
									>
										<p>Avançar</p>
										<div className="arrowNext">
											<span className="material-icons">
												arrow_forward_ios
											</span>
										</div>
									</div>
									<div
										onClick={() => {
											setPage(1);
										}}
										className="BackButton"
									>
										<div className="arrowNext">
											<span className="material-icons">
												arrow_back_ios
											</span>
										</div>

										<p>Voltar</p>
									</div>
								</div>
							)}
							{page == 3 && (
								<div className="Book-announce-container">
									<div className="AnnounceHeader">
										<img
											src={logo}
											className="Logo-header-announce"
										></img>
										<div className="header-title">
											<p>Informações do anúncio</p>
										</div>
									</div>
									<div id="ContactInfo">
										<label id="contactInfoTitle">
											Informações de contato:
										</label>
										<label
											onClick={() => {
												setContactChat(!contactChat);
												setAnnounceContactType(
													announceContactType + 1,
												);
											}}
											className={
												contactChat
													? "contactInfoOptionsSelected"
													: "contactInfoOptions"
											}
										>
											{" "}
											Desejo utilizar o chat do site
										</label>
										<label
											onClick={() => {
												setContactEmail(!contactEmail);
												setAnnounceContactType(
													announceContactType + 2,
												);
											}}
											className={
												contactEmail
													? "contactInfoOptionsSelected"
													: "contactInfoOptions"
											}
										>
											{" "}
											Desejo exibir meu email
										</label>
										<label
											onClick={() => {
												setContactTelephone(
													!contactTelephone,
												);
												setAnnounceContactType(
													announceContactType + 4,
												);
											}}
											className={
												contactTelephone
													? "contactInfoOptionsSelected"
													: "contactInfoOptions"
											}
										>
											{" "}
											Desejo exibir meu telefone
										</label>
									</div>
									<div className="CepContainerRow">
										<input
											className="CepInput"
											placeholder="CEP"
											type="input"
											onChange={(e) => {
												setAnnounceCep(e.target.value);
											}}
										></input>
										<input
											className="CepInput"
											placeholder="Estado"
											type="input"
											onChange={(e) =>
												setAnnounceDistrict(
													e.target.value,
												)
											}
										></input>
										<input
											className="CepInput"
											placeholder="Cidade"
											type="input"
											onChange={(e) =>
												setAnnounceCity(e.target.value)
											}
										></input>
									</div>
									<div className="CepContainerRow">
										<input
											id="BairroInput"
											placeholder="Bairro"
										></input>
										<input
											id="RuaInput"
											placeholder="Rua"
										></input>
									</div>
									<div id="DescriptionRow">
										<textarea
											id="DiscriptionInput"
											placeholder="Descrição do anúncio"
											type="input"
											onChange={(e) =>
												setAnnounceDescription(
													e.target.value,
												)
											}
										></textarea>
									</div>
									{announceType == 2 && (
										<div id="PriceRow">
											<p>Preço: </p>
											<input
												id="PriceInput"
												placeholder="R$ 0,00"
												onChange={(e) =>
													setAnnouncePrice(
														e.target.value,
													)
												}
											></input>
										</div>
									)}
									<div className="NextButton">
										<p>Finalizar</p>
										<div
											className="arrowNext"
											onClick={handleAnnounceUpdate}
										>
											<span className="material-icons">
												check_circle
											</span>
										</div>
									</div>
									<div
										onClick={() => {
											setPage(2);
										}}
										className="BackButton"
									>
										<div className="arrowNext">
											<span className="material-icons">
												arrow_back_ios
											</span>
										</div>

										<p>Voltar</p>
									</div>
								</div>
							)}
							<div
								id="Close"
								className="material-icons"
								onClick={() => {
									setShowModal(false);
								}}
								style={{ color: "white" }}
							>
								close
							</div>
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default ModalAnnouncement;
