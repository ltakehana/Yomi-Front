import React, {useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/pages/bookSearch.css';


const produtos=[

  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  },
  {
    img : "https://img.travessa.com.br/livro/GR/44/44916ab9-4f6c-487e-ae2c-071e888a71ed.jpg",
    name: "livro do rezende evil"
  },
  {
    img : "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
    name: "livro do lucas neto"
  }
]

const BookSearch = (props) => {

  
  const [invisibleProducts,setInvisibleProducts] = useState([]);
  
  const [productView, setProductView] = useState([]);

  const [productViewCount, setProductViewCount] = useState(0);

  useEffect(()=>{
    const productViewCount = Math.floor(window.innerWidth/288)*3;
    setProductViewCount(productViewCount);
    setProductView(produtos.slice(0,productViewCount));
    if(productView.length%Math.floor(window.innerWidth/288)==0){
      setInvisibleProducts([]);
    }
    else{
      let invisibleElements = [];
      for (let index = 0; index < Math.floor(window.innerWidth/288)-productView.length%Math.floor(window.innerWidth/288); index++) {
        invisibleElements.push(<div style={{width:"14em",margin:"2em"}}></div>);
      }
      setInvisibleProducts(invisibleElements);
    }
  },[]);
  const gradeExpandHandle = ()=>{
    const tmpProductViewCount=(productViewCount+Math.floor(window.innerWidth/288)*3)
    setProductViewCount(tmpProductViewCount);
    setProductView(produtos.slice(0,tmpProductViewCount));
    const tmpProductView = (produtos.slice(0,tmpProductViewCount));
    if(tmpProductView.length%Math.floor(window.innerWidth/288)==0){
      setInvisibleProducts([]);
    }
    else{
      let invisibleElements=[];
      for (let index = 0; index < Math.floor(window.innerWidth/288)-tmpProductView.length%Math.floor(window.innerWidth/288); index++) {
        invisibleElements.push(<div style={{width:"14em",margin:"2em"}}></div>);
      }
      setInvisibleProducts(invisibleElements);
    }
  };


  return (
  
                
      <div >
        <Header>
          
        </Header>
        <div>
          <h3 className="grade-title">Resultados</h3>
        </div>
        <div>
        <div className= "searchBox">
        <ul id="searchContainer" >
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
        </ul>
        </div>
        <button class ="filter-1">
            <li>Doações</li>
        </button>
        <button class ="filter-2">
            <li>Vendas</li>
        </button>
        <button class ="filter-3">
            <li>Trocas</li>
        </button>
        <div className = "gradeContainer">
          {productView.map((book,index) => (
            <div className = "book-container" key = {index}>
            <div className = "book-title">
            <img src       = {book.img}/>
                <label>{book.name}</label>
              </div>
              
              </div>
          ))
        }
        {(invisibleProducts)}
        <button onClick={()=>{gradeExpandHandle()}} className="grade-expand">&middot;&middot;&middot;</button>
      </div>
  </div>


            
   
     </div>
     
  );
}

export default BookSearch;
