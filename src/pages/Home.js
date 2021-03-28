import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCarousel from "../components/ProductCarousel";
import "../styles/pages/home.css";

const destaques = [
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

const produtos = [
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
];

const Home = (props) => {
	const [invisibleProducts, setInvisibleProducts] = useState([]);

	const [productView, setProductView] = useState([]);

	const [productViewCount, setProductViewCount] = useState(0);

	useEffect(() => {
		const productViewCount = Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(productViewCount);
		setProductView(produtos.slice(0, productViewCount));
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
			productViewCount + Math.floor(window.innerWidth / 288) * 3;
		setProductViewCount(tmpProductViewCount);
		setProductView(produtos.slice(0, tmpProductViewCount));
		const tmpProductView = produtos.slice(0, tmpProductViewCount);
		if (tmpProductView.length % Math.floor(window.innerWidth / 288) == 0) {
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

	return (
		<div id="body-container">
			<Header></Header>
			<h3 className="carousel-title">Destaques</h3>
			<ProductCarousel>
				{destaques.map((book, index) => (
					<div className="bookTitle" key={index}>
						<img src={book.img} />
						<label>{book.name}</label>
					</div>
				))}
			</ProductCarousel>
			<div>
				<h3 className="carousel-title">Produtos</h3>
			</div>
			<div className="grade-container">
				{productView.map((book, index) => (
					<div className="bookContainer" key={index}>
						<div className="bookTitle">
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
					className="grade-expand"
				>
					&middot;&middot;&middot;
				</button>
			</div>
		</div>
	);
};

export default Home;
