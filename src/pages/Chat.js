import React from 'react'
import Header from '../components/Header';
import '../styles/pages/chat.css';


function Chat () {
return(
    <div>
<div className = "chat-header">
<Header></Header>
</div>
               	
<form id="chat">
       <div className="chat-title"><h1>Bem-vindo ao seu chat ! </h1></div>
        <div className = "input-user">
         <input type= "text" name = "username" placeholder= "Digite o usuário"></input>
         </div>
        
         <div className = "messages-box"></div>
         
         <div className = "input-menssages">
                 <input type= "text" name = "username" placeholder= "Digite sua mensagem">
                
                 </input>
          </div>

          <div className = "chat-button">
                 <button type = "submit">Enviar </button>
         </div>

</form>


</div>

);

}



export default Chat