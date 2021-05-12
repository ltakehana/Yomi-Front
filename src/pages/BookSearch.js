import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getAnnouncements from "../services/getAnnouncements";
import "../styles/pages/bookSearch.css";

const BookSearch = (props) => {
	const history = useHistory();
	const [invisibleProducts, setInvisibleProducts] = useState([]);

	const [productView, setProductView] = useState([]);

	const [data, setData] = useState({});
	const [announcements, setAnnouncements] = useState({});

	const [productViewCount, setProductViewCount] = useState(0);

	const [annouceTypeToggle, setAnnouceTypeToggle] = useState(0);


	const announcementsRender = async () => {
		let locationState = history.location.state;
		let filter = [];
		let data = {};


		if (locationState.search) {
			locationState.search
				.toLowerCase()
				.split(" ")
				.map((item, index) => {
					filter.push(item);
				});
		}
		if (locationState.publishing_company) {
			locationState.publishing_company
				.toLowerCase()
				.split(" ")
				.map((item, index) => {
					filter.push(item);
				});
		}
		if (locationState.author) {
			locationState.author.split(" ").map((item, index) => {
				filter.push(item);
			});
		}
		if (locationState.categories) {
			data.categories = locationState.categories.name.toLowerCase();
		}
		if (annouceTypeToggle != 0) {
			data.announceType = annouceTypeToggle;
		}

		data.filters = filter;
		setData(data);

		let announcements = await getAnnouncements(data);
		setAnnouncements(announcements);

		if (announcements.announcements) {
			const productViewCount = Math.floor(window.innerWidth / 288) * 3;

			setProductViewCount(productViewCount);
			setProductView(
				announcements.announcements.slice(0, productViewCount),
			);

			if (productView.length % Math.floor(window.innerWidth / 288) == 0) {
				setInvisibleProducts([]);
			} else {
				let invisibleElements = [];
				for (
					let index = 0;
					index <
					Math.floor(window.innerWidth / 288) -
						(productView.length %
							Math.floor(window.innerWidth / 288));
					index++
				) {
					invisibleElements.push(
						<div style={{ width: "14em", margin: "2em" }}></div>,
					);
				}
				setInvisibleProducts(invisibleElements);
			}
		}
	};

	useEffect(async () => {
		announcementsRender();
		const userExpiration = Date.parse(sessionStorage.getItem("userExpiration"));
		console.log(userExpiration);
	}, [annouceTypeToggle]);

	const redirectToBook = (id) => {
		history.push("/announcement/" + id);
	};

	const gradeExpandHandle = () => {
		if (announcements.announcements) {
			const tmpProductViewCount =
				productViewCount +
				Math.floor((window.innerWidth * 0.75) / 288) * 3;
			setProductViewCount(tmpProductViewCount);
			let tmpProductView = null;
			setProductView(
				announcements.announcements.slice(0, productViewCount),
			);
			tmpProductView = announcements.announcements.slice(
				0,
				tmpProductViewCount,
			);

			if (
				tmpProductView.length %
					Math.floor((window.innerWidth * 0.75) / 288) ==
				0
			) {
				setInvisibleProducts([]);
			} else {
				let invisibleElements = [];
				for (
					let index = 0;
					index <
					Math.floor((window.innerWidth * 0.75) / 288) -
						(tmpProductView.length %
							Math.floor((window.innerWidth * 0.75) / 288));
					index++
				) {
					invisibleElements.push(
						<div style={{ width: "14em", margin: "2em" }}></div>,
					);
				}
				setInvisibleProducts(invisibleElements);
			}
		}
	};

	return (
		<>
			<Header></Header>
			<div id="searchContainer">
				<div>
					<div id="gradeSearchHeader">
						<div id="gradeSearchTitle">
							<h1>Resultados</h1>
						</div>
						<div id="searchButtons">
							<button
								className={
									annouceTypeToggle == 1
										? "filterSearchSelected"
										: "filterSearchButtons"
								}
								type="outline"
								onClick={() => {
									setAnnouceTypeToggle(1);
									announcementsRender();
								}}
							>
								Doações
							</button>
							<button
								className={
									annouceTypeToggle == 2
										? "filterSearchSelected"
										: "filterSearchButtons"
								}
								type="outline"
								onClick={async () => {
									setAnnouceTypeToggle(2);
								}}
							>
								Vendas
							</button>
							<button
								className={
									annouceTypeToggle == 3
										? "filterSearchSelected"
										: "filterSearchButtons"
								}
								type="outline"
								onClick={() => {
									setAnnouceTypeToggle(3);
									announcementsRender();
								}}
							>
								Trocas
							</button>
						</div>
					</div>

					<div id="searchBox">
						<p>Editora</p>
						{announcements.publishing_company &&
							announcements.publishing_company.map(
								(publishing_company, index) => (
									<li>{publishing_company}</li>
								),
							)}
						<p>Gênero</p>
						{announcements.categories &&
							announcements.categories.map(
								(categories, index) => <li>{categories}</li>,
							)}
						<p>Autor</p>
						{announcements.authors &&
							announcements.authors.map((authors, index) => (
								<li>{authors}</li>
							))}
					</div>

					<div className="gradeSearchContainer">
						{productView.map((book, index) => (
							<div
								className="bookSearchContainer"
								onClick={() => {
									redirectToBook(book.id);
								}}
								key={index}
							>
								<div className="bookSearchTitle">
									<img
										src={
											"http://35.198.10.112/static/books_images/" +
											book.book_cover
										}
									/>
									<label>{book.name}</label>
								</div>
							</div>
						))}
						{invisibleProducts}

						{invisibleProducts.length != 0 && (
							<button
								onClick={() => {
									gradeExpandHandle();
								}}
								className="gradeSearchExpand"
							>
								&middot;&middot;&middot;
							</button>
						)}
					</div>
				</div>
				<div style={{ height: "10vh", display: "block" }}>.</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default BookSearch;
