import React, { useState, useEffect } from "react";
import "../styles/pages/meusAnuncios.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

const produtos = [
	{
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
    {
		img:
			"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
		name: "Lorem ipsum",

        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas",
	},
];


const MeusAnuncios = (props) => {
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


    return(
        <html id="html_font">

        <Header></Header>

        <body>
        
        <div className="grade-container_my_products">
				{productView.map((book, index) => (
					<div className="bookContainer_my_products" key={index}>
						<div className="bookTitle_my_products">
							<div id = "image">
                                <img src={book.img} />
                            </div>
							<div id = "title">
                                <label >{book.name}</label>
                            </div>    
                            <div id = "description"> 
                                <label >{book.description}</label>
                            </div>
						</div>
					</div>
				))}
				{invisibleProducts}
				<button
					onClick={() => {
						gradeExpandHandle();
					}}
					className="grade-expand_my_products"
				>
					&middot;&middot;&middot;
				</button>
		</div>


        </body>


        <Footer></Footer>
    </html>

);

}
export default MeusAnuncios;