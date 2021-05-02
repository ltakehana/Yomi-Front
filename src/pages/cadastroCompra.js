import React from "react";
import "../styles/pages/cadastroCompra.css";
import Header from "../components/Header"
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar"

function CadastroCompra(){
    return(
    <html id="html_font">

        <Header></Header>

        <div className = "publishAnnounceContent">
            <UserNavbar></UserNavbar>

            <div className = "rightElements">

                <div className ="top-elements">
                            Selecione a transação desejada:
                            
                            <button> Trocas </button> <button> Vendas </button> <button> Doações </button>
                    
                </div>

                <div className = "quadroInformacoes">

                    <div>
                        <input  className = "titulo" type = "titulo" id="details" placeholder ="Título*"/>

                        <input className = "categoria" type = "Categoria" id = "details" placeholder ="Categoria*"/>
                    </div>

                    <div>
                        <input className = "autor" type = "autor(a)" id = "details" placeholder ="Autor(a)*"/>
                        <input className = "editora" type = "editora" id = "details" placeholder ="Editora*"/>
                        <input className = "ano" type = "Ano" id = "details" placeholder ="Ano*"/>
                        <input className = "paginas" type = "paginas" id = "details" placeholder ="Nº de pág*"/>
                    </div>

                    <div>
                        <textarea className = "descricao" type = "descricao" placeholder ="Breve descrição*" ></textarea>
                    </div>            
                        
                    <div className = "ultimaLinha"> 

                        <input className = "cep" type = "cep" id = "details" placeholder ="CEP*"/>
                        

                        <input className = "preco" type = "preco" id = "details" placeholder ="Preço(R$)*"/>
                        
                        <div className = "enviarFoto">

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