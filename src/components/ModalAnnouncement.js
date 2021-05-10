import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../styles/components/Modal.css";
import "../styles/components/page3ModalAnnouncement.css";
import logo from "../assets/logo_purple.svg";
import Photo from "../assets/Photo.svg";
import "../styles/components/page1ModalAnnouncement.css";
import "../styles/components/page2ModalAnnouncement.css";
import "../styles/components/page3ModalAnnouncement.css";



const ModalAnnouncement = ({ showModal, setShowModal }) => {
	const [page,setPage] = useState(1);
	const [announceType,setAnnounceType] = useState(1);
	const [contactChat,setContactChat] = useState(true);
	const [contactTelephone,setContactTelephone] = useState(false);
	const [contactEmail,setContactEmail] = useState(false);
	const modalRef = useRef();

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



	const Page1ModalAnnouncement = () => {
		return (
			<div id="Home-announce-container">
				<img src={logo} id="Logo-home"></img>

				<div id="Annouce-options">
					<div id="Announce-title">
						<p>Selecione a transação desejada</p>
					</div>

					<div id="Announce-buttons-container">
						<button onClick={()=>{setAnnounceType(1)}} className={(announceType==1)?("Announce-buttons-selected"):("Announce-buttons")}>Trocas</button>
						<button onClick={()=>{setAnnounceType(2)}} className={(announceType==2)?("Announce-buttons-selected"):("Announce-buttons")}>Vendas</button>
						<button onClick={()=>{setAnnounceType(3)}} className={(announceType==3)?("Announce-buttons-selected"):("Announce-buttons")}>Doações</button>
					</div>

					<div onClick={()=>{setPage(2)}} className="NextButton">
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

	const Page2ModalAnnouncement = () => {
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
				<div onClick={()=>{setPage(3)}} className="NextButton">
					<p>Avançar</p>
					<div className="arrowNext">
						<span className="material-icons">arrow_forward_ios</span>
					</div>
				</div>
				<div onClick={()=>{setPage(1)}} className="BackButton">
					<div className="arrowNext">
						<span className="material-icons">arrow_back_ios</span>
					</div>

					<p>Voltar</p>
				</div>
			</div>
		);
	}

	const Page3ModalAnnouncement = () => {
		return (
			<div className="Book-announce-container">
				<div className="AnnounceHeader">
					<img src={logo} className="Logo-header-announce"></img>
					<div className="header-title">
						<p>Informações do anúncio</p>
					</div>
				</div>
				<div id="ContactInfo">
					<label id="contactInfoTitle">Informações de contato:</label>
					<label onClick={()=>{setContactChat(!contactChat)}} class={(contactChat)?("contactInfoOptionsSelected"):("contactInfoOptions")}> Desejo utilizar o chat do site</label>
					<label onClick={()=>{setContactEmail(!contactEmail)}} class={(contactEmail)?("contactInfoOptionsSelected"):("contactInfoOptions")}> Desejo exibir meu email</label>
					<label onClick={()=>{setContactTelephone(!contactTelephone)}} class={(contactTelephone)?("contactInfoOptionsSelected"):("contactInfoOptions")}> Desejo exibir meu telefone</label>
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
						placeholder="Descrição do anúncio"
					></textarea>
				</div>
				{(announceType==2)&&(<div id="PriceRow">
					<p>Preço: </p>
					<input id="PriceInput" placeholder="R$ 0,00"></input>
				</div>)}
				<div className="NextButton">
					<p>Finalizar</p>
					<div className="arrowNext">
						<span class="material-icons">check_circle</span>
					</div>
				</div>
				<div onClick={()=>{setPage(2)}} className="BackButton">
					<div className="arrowNext">
						<span className="material-icons">arrow_back_ios</span>
					</div>

					<p>Voltar</p>
				</div>
			</div>
		);
	}



	return (
		<>
			{showModal ? (
				<div id="Background" onClick={closeModal} ref={modalRef}>
					<animated.div style={animationModal}>
						<div id="ModalWrapper">
							{(page==1)&&(<Page1ModalAnnouncement></Page1ModalAnnouncement>)}
							{(page==2)&&(<Page2ModalAnnouncement></Page2ModalAnnouncement>)}
							{(page==3)&&(<Page3ModalAnnouncement></Page3ModalAnnouncement>)}
							<div
								id="Close"
								className="material-icons"
								onClick={() => {setShowModal(false)}}
								style={{color:"white"}}
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