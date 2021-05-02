import React from "react";
import "../styles/pages/cadastroCompra.css";
import Header from "../components/Header"
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar"

function CadastroCompra(){
    return(
    <html id="html_font">

        <Header></Header>

        <div className = "publishProductContent">
            <UserNavbar></UserNavbar>

            <div className = "rightElements">

                <div className ="topElements">
                            Selecione a transação desejada:
                            
                            <button> Trocas </button> <button> Vendas </button> <button> Doações </button>
                    
                </div>

                <div className = "informations">

                    <div>
                        <input  className = "title" type = "titulo" id="details" placeholder ="Título*"/>

                        <input className = "category" type = "Categoria" id = "details" placeholder ="Categoria*"/>
                    </div>

                    <div>
                        <input className = "author" type = "autor(a)" id = "details" placeholder ="Autor(a)*"/>
                        <input className = "press" type = "editora" id = "details" placeholder ="Editora*"/>
                        <input className = "year" type = "Ano" id = "details" placeholder ="Ano*"/>
                        <input className = "pages" type = "paginas" id = "details" placeholder ="Nº de pág*"/>
                    </div>

                    <div>
                        <textarea className = "description" type = "descricao" placeholder ="Breve descrição*" ></textarea>
                    </div>            
                        
                    <div className = "lastLine"> 

                        <input className = "cep" type = "cep" id = "details" placeholder ="CEP*"/>
                        

                        <input className = "price" type = "preco" id = "details" placeholder ="Preço(R$)*"/>
                        
                        <div className = "uploadPhoto">

                            <input className = "inputButton" type="file"
                                id="foto" name="foto"
                                accept="image/png, image/jpeg"></input>
                        
                        </div>

                    </div>
            
                </div>
        
            </div>
        
        </div>


        <Footer>


        </Footer>
    </html>

    );
}

export default CadastroCompra;