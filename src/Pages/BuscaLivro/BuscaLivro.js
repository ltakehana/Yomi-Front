import React from 'react';
import './BuscaLivro.css';
import './header.css';
import logo from './assets/logo.svg';

function BuscaLivro() {
  return (
  <div className = "container">
         <img src={logo} alt = "Yomi"/>
                <div className="content">
                      <label htmlFor= "nomeProduto"></label>
                             <input type="nomeProduto"
                               id="nomeProduto"
                               placeholder="Pesquisa"
                                                         />
                        <button type="submit">
                    &#128269;
                  </button>
                
     </div>
     <div className = "text">
     <p>
                      <strong>Resultados</strong>
                  </p>
     </div>
          <div className="tipos">
     <div className = "editor">
  
    <p1>  <strong>Editora</strong> </p1>
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        </div>

                        <div className = "autor">
  <p1>  <strong>Autor</strong> </p1>
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        </div>
                        <div className = "genero">
    <p1>  <strong>Gênero</strong> </p1>
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
                        <p1>Trama</p1>   
        </div>       
        </div>   
        <div className = "image">
          
 </div>
     </div>
     
    
  );
}

export default BuscaLivro;
