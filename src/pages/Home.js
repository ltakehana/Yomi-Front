import React, {useState } from 'react';
import Header from "../components/Header"
import ProductCarousel from '../components/ProductCarousel';
import "../styles/pages/home.css"

const destaques=[
  {
    img:"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name:"livro do lucas neto"
  },
  {
    img:"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name:"livro do rezende evil"
  },
  {
    img:"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name:"livro do lucas neto"
  },
  {
    img:"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name:"livro do rezende evil"
  },
  {
    img:"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name:"livro do lucas neto"
  },
  {
    img:"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name:"livro do rezende evil"
  },
  {
    img:"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name:"livro do lucas neto"
  },
  {
    img:"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name:"livro do rezende evil"
  },
  {
    img:"http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name:"livro do lucas neto"
  },
  {
    img:"https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name:"livro do rezende evil"
  }
]

const Home = (props) => {
  return (
    <div id="body-container">
        <Header></Header>
        <ProductCarousel>
          {destaques.map((book,index) => (
            <div className="bookTitle">
              <img src={book.img}/>
              <label>{book.name}</label>
            </div>
          ))}
        </ProductCarousel>
    </div>
  );
};

export default Home;
