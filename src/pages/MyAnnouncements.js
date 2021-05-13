import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalAnnouncement from "../components/ModalAnnouncement";
import deleteAnnouncement from "../services/deleteAnnouncement";
import { useHistory } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import "../styles/pages/myAnnouncements.css";
import getMyAnnouncements from "../services/getMyAnnouncements";

const MyAnnouncements = (props) => {
	const history = useHistory();
	const [showModal, setShowModal] = useState(false);
	const [announces, setAnnounces] = useState([]);
	const token = sessionStorage.getItem("userToken");

	const openModal = () => {
        if(showModal)
            setShowModal(false);
        else
            setShowModal(true);
	};

    const [myAnnouncementsView,setMyAnnouncementsView] = useState([]);
    const [myAnnouncementsCount,setMyAnnouncementsCount] = useState(5);

	useEffect(async () => {
		let announces = await getMyAnnouncements(token);
		if (announces != null && announces.length > 0)
			setMyAnnouncementsView(
				announces.slice(
					0,
					Math.max(myAnnouncementsCount, announces.length),
				),
			);
		setAnnounces(announces);
	}, []);

	const redirectToBook = (id) => {
		history.push("/announcement/" + id);
	};

	const deleteRefresh = async (id, token) => {
		await deleteAnnouncement(id, token);
		window.location.reload();
	};

	useEffect(() => {
		if (announces != null && announces.length > 0)
			setMyAnnouncementsView(
				announces.slice(
					0,
					Math.max(myAnnouncementsCount, announces.length),
				),
			);
	}, [announces]);
	const listExpandHandle = () => {
		let announcesCont = myAnnouncementsCount;
		if (announcesCont + 5 <= announces.length) {
			announcesCont += 5;
		} else {
			announcesCont = announces.length;
		}
		setMyAnnouncementsView(announces.slice(0, announcesCont));
		setMyAnnouncementsCount(announcesCont);
	};

	return (
		<div id="body-container">
            <ModalAnnouncement showModal={showModal} setShowModal={setShowModal} />
			<Header></Header>
			<div className="myAnnouncementsContent">
				<UserNavbar selectedItem={1}></UserNavbar>
				<div className="myAnnouncementsDiv">
					{myAnnouncementsView.length == 0 ? (
						<span
							style={{
								textAlign: "center",
								display: "block",
								width: "100%",
								color: "gray",
							}}
						>
							Infelizmente você ainda não possui nenhum anúncio.
							:(
						</span>
					) : (
						myAnnouncementsView.map((announce, index) => (
							<div className="announceItem">
								<img
									className="announceImage"
									src={
										"http://35.198.10.112/static/books_images/" +
										announce.book_cover
									}
									onClick={() => {
										redirectToBook(announce.id);
									}}
								/>
								<div className="announcesText">
									<div className="announcesTitle">
										<span
											style={{ marginRight: "1vw" }}
											onClick={() => {
												redirectToBook(announce.id);
											}}
										>
											{announce.name}
										</span>
										<span
											className="material-icons"
											onClick={() => {
												deleteRefresh(
													announce.id,
													token,
												);
											}}
										>
											delete
										</span>
										<span
											className="material-icons"
											onClick={openModal}
										>
											edit
										</span>
									</div>
									<span className="announcesDescription">
										{announce.description}
									</span>
								</div>
							</div>
						))
					)}
				</div>
			</div>

			{announces != null && announces.length > myAnnouncementsCount && (
				<button
					onClick={() => {
						listExpandHandle();
					}}
					className="list-expand"
				>
					&middot;&middot;&middot;
				</button>
			)}
			<button
				onClick={openModal}
				title="Crie um novo anuncio"
				id="createAnnounceButton"
			>
				+
			</button>
			<Footer></Footer>
		</div>
	);
};

export default MyAnnouncements;
