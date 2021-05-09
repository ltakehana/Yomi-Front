import React, {useState} from 'react'
import HeaderSimple from '../components/HeaderSimple';
import '../styles/pages/chat.css';


const Chat = () => {
       const [message, updateMessage] = useState('')
       const [messages, updateMessages] = useState([])
   
       const handleFormSubmit = event => {
           event.preventDefault()
           if (message.trim()) {
               updateMessages([...messages, {
                    id: 1,
                    message
               }])
               updateMessage(' ')
           }
       }
   
       const handleInputChange = event =>
           updateMessage(event.target.value)
   
       return (
              <div className= "chatBody">
                     <HeaderSimple></HeaderSimple>
                  
           <main className="chatContainer">
                  <div className= "chatHeader">
                            <div id = "chat_title">
                                   Nome do usuário
                              </div>
                  </div>
            
                       <ul className="list">
                              { messages.map( m  => (
                     
                                 <li className= "list-item">
                                   <span className="message"
                                             key={m.id}
                                                     >
                               { m.message }
                           </span>
                           
                       </li>
                  )) }
               </ul>
              
               <form className="chatForm" onSubmit={handleFormSubmit}>
                   <input
                       className="form-field"
                       onChange={handleInputChange}
                       placeholder="Escreva uma mensagem"
                       type="text"
                       value={message}
                   />
               </form>
              
           </main>
           </div>
       )
   }
   
   export default Chat
   