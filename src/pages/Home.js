import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import "../styles/pages/home.css";
import Footer from "../components/Footer"
import getAnnouncements from "../services/getAnnouncements"
import { useHistory } from "react-router-dom";;


const Home = (props) => {
	const [invisibleProducts, setInvisibleProducts] = useState([]);

	const [productView, setProductView] = useState([]);
	const [popular, setPopular] = useState([]);
	const [products, setProducts] = useState([]);
	const [data, setData] = useState({});

	const history = useHistory();


	const [productViewCount, setProductViewCount] = useState(0);

	const [annouceTypeToggle, setAnnouceTypeToggle] = useState(0);
	
	const renderProducts = async()=>{
		let mainProducts = await getAnnouncements(data);
		setProducts(mainProducts.announcements);
		const productViewCount = Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(productViewCount);
		const productView = mainProducts.announcements.slice(0, productViewCount)
		setProductView(productView);
		if (productView.length % Math.floor(window.innerWidth / 288) === 0) {
			setInvisibleProducts([]);
		} else {
			let invisibleElements = [];
			for (
				let index = 0;
				index <
				Math.floor(window.innerWidth / 288) -
					(productView.length % Math.floor(window.innerWidth / 288));
				index++
			) {
				invisibleElements.push(
					<div style={{ width: "14em", margin: "2em" }}></div>,
				);
			}
			setInvisibleProducts(invisibleElements);
		}
	}

	useEffect(async() => {
		renderProducts();
		let popular = await getAnnouncements({orderBy:"popularity",limit:10});
		setPopular(popular.announcements);
	}, []);

	const gradeExpandHandle = () => {
		const tmpProductViewCount =
			productViewCount + Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(tmpProductViewCount);
		setProductView(products.slice(0, tmpProductViewCount));
		const tmpProductView = products.slice(0, tmpProductViewCount);
		if (tmpProductView.length % Math.floor(window.innerWidth / 288) === 0) {
			setInvisibleProducts([]);
		} else {
			let invisibleElements = [];
			for (
				let index = 0;
				index <
				Math.floor(window.innerWidth / 288) -
					(tmpProductView.length %
						Math.floor(window.innerWidth / 288));
				index++
			) {
				invisibleElements.push(
					<div style={{ width: "14em", margin: "2em" }}></div>,
				);
			}
			setInvisibleProducts(invisibleElements);
		}
	};

	const handleFilterButton = (announceType) =>{
		let tmpData = data;
		tmpData.announceType=announceType;
		setData(tmpData);
		renderProducts();
	}

	const redirectToBook=(id)=>{
		history.push("/announcement/"+id);
	}

	return (
		<div id="body-container">
			<Header></Header>
			<h3 className="carousel-title">Destaques</h3>
			<ProductCarousel>
				{(popular && popular.length>0)&&(popular.map((book, index) => (
					<div className="bookTitle" key={index} onClick={()=>{redirectToBook(book.id)}}>
						<img src={"http://localhost:5050/static/books_images/"+book.book_cover} />
						<label>{book.name}</label>
					</div>)
				))}
			</ProductCarousel>
			<div id="gradeHomeHeader">
				<h3 className="carousel-title">Produtos</h3>
				<div id="homeFilterButtons">
					<button
						className={
							annouceTypeToggle == 1
								? "filterSelected"
								: "filterButtons"
						}
						type="outline"
						onClick={() => {
							setAnnouceTypeToggle(1);
							handleFilterButton(1);
						}}
					>
						Doações
					</button>
					<button
						className={
							annouceTypeToggle == 2
								? "filterSelected"
								: "filterButtons"
						}
						type="outline"
						onClick={() => {
							setAnnouceTypeToggle(2);
							handleFilterButton(2);
						}}
					>
						Vendas
					</button>
					<button
						className={
							annouceTypeToggle == 3
								? "filterSelected"
								: "filterButtons"
						}
						type="outline"
						onClick={() => {
							setAnnouceTypeToggle(3);
							handleFilterButton(3);
						}}
					>
						Trocas
					</button>
				</div>
			</div>
			<div className="grade-container">
				{productView.map((book, index) => (
					<div className="bookContainer" key={index} onClick={()=>{redirectToBook(book.id)}}>
						<div className="bookTitle">
							<img src={"http://localhost:5050/static/books_images/"+book.book_cover} />
							<label>{book.name}</label>
						</div>
					</div>
				))}
				{invisibleProducts}
				{(invisibleProducts.length==0 && products.length!=0)&&(
				<button
					onClick={() => {
						gradeExpandHandle();
					}}
					className="grade-expand"
				>
					&middot;&middot;&middot;
				</button>
				)}
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;
