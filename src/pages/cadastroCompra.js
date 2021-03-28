import React from "react";
import "./cadastroCompra.css";

function CadastroCompra(){
    return(
    <html>

        <header>

        </header>

        <body>

            <div className ="topText">
                Selecione a transação desejada
            </div>
            
            <div className = "alinhamentoBotoes">
                
                <button className = "botoes"> Trocas </button> <button className = "botoes"> Vendas </button> <button className = "botoes"> Doações </button>
            
            </div>

            <div className = "quadroInformacoes">

                <div>
                    <input className = "titulo" type = "titulo" id = "titulo" placeholder ="Título*"/>

                    <input className = "categoria" type = "Categoria" id = "categoria" placeholder ="Categoria*"/>
                </div>

                <div>
                    <input className = "autor" type = "autor(a)" id = "autor(a)" placeholder ="Autor(a)*"/>
                    <input className = "editora" type = "editora" id = "editora" placeholder ="Editora*"/>
                    <input className = "ano" type = "Ano" id = "Ano" placeholder ="Ano*"/>
                    <input className = "paginas" type = "paginas" id = "paginas" placeholder ="Nº de pág*"/>
                </div>

                <div>
                    <textarea className = "descricao" type = "descricao" id = "descricao" placeholder ="Breve descrição*" ></textarea>
                </div>            
                    
                <div className = "ultimaLinha"> 

                    <input className = "cep" type = "cep" id = "cep" placeholder ="CEP*"/>
                    

                    <input className = "preco" type = "preco" id = "preco" placeholder ="Preço(R$)*"/>
                    
                    <div className = "enviarFoto">

                        <input className = "inputButton" type="file"
                            id="foto" name="foto"
                            accept="image/png, image/jpeg"></input>
                    
                    </div>

                </div>
            
            </div>
        
        </body>


        <footer>


        </footer>
    </html>

    );
}

export default CadastroCompra;