import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/pages/bookSearch.css";

const trocas = [
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
	{
		img:
			"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
		name: "livro do rezende evil",
	},
];
const doacoes = [
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "livro do lucas neto",
	},
];
const vendas = [
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
	{
		img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112332",
		name: "livro de Flávia Muniz",
	},
];

const BookSearch = (props) => {
	const [invisibleProducts, setInvisibleProducts] = useState([]);

	const [productView, setProductView] = useState([]);

	const [productViewCount, setProductViewCount] = useState(0);

	const [annouceTypeToggle, setAnnouceTypeToggle] = useState("trocas");

	useEffect(() => {
		const productViewCount = Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(productViewCount);
		if (annouceTypeToggle == "trocas") {
			setProductView(trocas.slice(0, productViewCount));
		}
		if (annouceTypeToggle == "doacoes") {
			setProductView(doacoes.slice(0, productViewCount));
		}
		if (annouceTypeToggle == "vendas") {
			setProductView(vendas.slice(0, productViewCount));
		}
		if (productView.length % Math.floor(window.innerWidth / 288) == 0) {
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
	}, []);
	const gradeExpandHandle = () => {
		const tmpProductViewCount =
			productViewCount + Math.floor(window.innerWidth*0.75 / 288) * 3;
		setProductViewCount(tmpProductViewCount);
		let tmpProductView = null;
		if (annouceTypeToggle == "trocas") {
			setProductView(trocas.slice(0, productViewCount));
			tmpProductView = trocas.slice(0, tmpProductViewCount);
		}
		if (annouceTypeToggle == "doacoes") {
			setProductView(doacoes.slice(0, productViewCount));
			tmpProductView = doacoes.slice(0, tmpProductViewCount);
		}

		if (annouceTypeToggle == "vendas") {
			setProductView(vendas.slice(0, productViewCount));
			tmpProductView = vendas.slice(0, tmpProductViewCount);
		}

		if (tmpProductView.length % Math.floor(window.innerWidth*0.75 / 288) == 0) {
			setInvisibleProducts([]);
		} else {
			let invisibleElements = [];
			for (
				let index = 0;
				index <
				Math.floor(window.innerWidth*0.75 / 288) -
					(tmpProductView.length %
						Math.floor(window.innerWidth*0.75 / 288));
				index++
			) {
				invisibleElements.push(
					<div style={{ width: "14em", margin: "2em" }}></div>,
				);
			}
			setInvisibleProducts(invisibleElements);
		}
	};

	return (
		<div id="searchContainer">
			<Header></Header>
			<div>
				<div id="gradeSearchHeader">
					<div id="gradeSearchTitle">
						<h1>Resultados</h1>
					</div>
					<div id="searchButtons">
						<button
							className={
								annouceTypeToggle == "doacoes"
									? "filterSearchSelected"
									: "filterSearchButtons"
							}
							type="outline"
							onClick={() => {
								setAnnouceTypeToggle("doacoes");
								gradeExpandHandle();
							}}
						>
							Doações
						</button>
						<button
							className={
								annouceTypeToggle == "vendas"
									? "filterSearchSelected"
									: "filterSearchButtons"
							}
							type="outline"
							onClick={() => {
								setAnnouceTypeToggle("vendas");
								gradeExpandHandle();
							}}
						>
							Vendas
						</button>
						<button
							className={
								annouceTypeToggle == "trocas"
									? "filterSearchSelected"
									: "filterSearchButtons"
							}
							type="outline"
							onClick={() => {
								setAnnouceTypeToggle("trocas");
								gradeExpandHandle();
							}}
						>
							Trocas
						</button>
					</div>
				</div>

				<div id="searchBox">
					<p>Editora</p>
					<li>Galera</li>
					<li>Intrínseca</li>
					<li>Rocco</li>
					<p>Gênero</p>
					<li>Terror</li>
					<li>Romance</li>
					<li>Comédia</li>
					<li>Biografia</li>
					<p>Autor</p>
					<li>Ziraldo</li>
					<li> Rick Riordan</li>
					<li>Rezende</li>
					<li>Lucas Neto</li>
				</div>

				<div className="gradeSearchContainer">
					{productView.map((book, index) => (
						<div className="bookSearchContainer" key={index}>
							<div className="bookSearchTitle">
								<img src={book.img} />
								<label>{book.name}</label>
							</div>
						</div>
					))}
					{invisibleProducts}
					<button
						onClick={() => {
							gradeExpandHandle();
						}}
						className="gradeSearchExpand"
					>
						&middot;&middot;&middot;
					</button>
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default BookSearch;
