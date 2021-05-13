import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/pages/chat.css";
import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";
import getChat from "../services/getChat";
import postMessages from "../services/postMessages";
import getMessage from "../services/getMessage";
import { useHistory } from "react-router-dom";

const Chat = (props) => {
	const user_id = props.match.params.user_id;
	const token = sessionStorage.getItem("userToken");
	const [message, setMessage] = useState("");
	const [userName, setUserName] = useState("");
	const [userPicture, setUserPicture] = useState("");
	const [messages, setMessages] = useState([]);
	const history = useHistory();
	const addMessage = async () =>{
		const messages = await getMessage(token,user_id);  
		setMessages(messages.messages); 
	} ;

	useEffect(async()=>{
		const messages = await getMessage(token,user_id);  
		setMessages(messages.messages); 
		setUserName(messages.user_name);
		if(messages.user_picture){
		setUserPicture(	"http://35.198.10.112/static/users_profile_pic/"+messages.user_picture);
		}
		automaticReload();
	},[]);

	const scrollToBottom = () => {
		let scrollChat=document.getElementById("listChat");
		scrollChat.scrollTop=scrollChat.scrollHeight;
	}; 

	const redirectToContacts = ()=>{
        history.push("/contacts/");
        window.location.reload();
    }

      const automaticReload =()=>{
          setTimeout (()=>{
			  addMessage();
			  automaticReload();
		  },3000);
	  };
	
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		if (message.trim()) {
			console.log(message);
	          const postedMessages = await postMessages(token,user_id,message).then(()=>{
				addMessage();
				scrollToBottom();
				document.getElementById("form-field").value=" ";
			  });
	
		}
	};

       

	const handleInputChange = (event) =>{
		 setMessage(event.target.value);
		};
	

	return (
		<div id="chatBody">
			<Header></Header>
		
			<div id="chatContainer">
				<div id ="chatNavBar">
			<UserNavbar></UserNavbar>
			</div>
				<div id="messageContainer">
					<div id="submitContainer">
					<form id="chatForm" onSubmit={handleFormSubmit}>
						<input
							id="form-field"
							onChange={(e)=>{handleInputChange(e)}}
							placeholder="Escreva uma mensagem"
							type="text"
						/>
					<button id = "send_button"onClick={handleFormSubmit}>
						<div id="chat_send_message">
							<span className="material-icons">send_white_24dp</span>
						</div>
							</button>
							</form>
							</div>

					<ul id="listChat">
						{messages.map((message) => (
							<li id="list-item">
								<span className={(message.user2_id==user_id)?("messageChat-user1"):("messageChat-user2")} key={message.id}>
									{message.message}
								</span>
							</li>
						))}
					</ul>
					<div id="chatHeader">
					<div id="chat_icon_arrow" onClick={redirectToContacts}>
							<span className="material-icons">arrow_back</span>
						</div>
						<div id="chat_title">{userName}</div>
						{(userPicture!="")&&(<img  id="chat_icon_pearson"src={userPicture}/>)}
						</div>
				</div>
			</div>
			<Footer></Footer>
			
		</div>
	);
};

export default Chat;
