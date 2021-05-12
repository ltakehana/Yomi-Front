import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/pages/chat.css";
import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";

const Chat = (props) => {
	const user_id = props.match.params.user_id;
	const [message, setMessage] = useState("");
	const [messages, getMessages] = useState([]);


	const scrollToBottom = () => {
		let scrollChat=document.getElementById("listChat");
		scrollChat.scrollTop=scrollChat.scrollHeight;
	} 
	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (message.trim()) {
			setMessages([
				...messages,
				{
					id: 1,
					message,
				},
			]);
			getMessage(" ");
		}
	};

       

	const handleInputChange = (event) =>{
		 updateMessage(event.target.value);
		 scrollToBottom();
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
							onChange={handleInputChange}
							placeholder="Escreva uma mensagem"
							type="text"
							value={message}
						/>
					<button id = "send_button"onClick={handleFormSubmit}>
						<div id="chat_send_message">
							<span className="material-icons">send_white_24dp</span>
						</div>
							</button>
							</form>
							</div>

					<ul id="listChat">
						{messages.map((m) => (
							<li id="list-item">
								<span id="messageChat" key={m.id}>
									{m.message}
								</span>
							</li>
						))}
					</ul>
					<div id="chatHeader">
					<div id="chat_icon_arrow">
							<span className="material-icons">arrow_back</span>
						</div>
						<div id="chat_title">Nome do usuário</div>
						<div id="chat_icon_pearson">
							<span className="material-icons">person</span>
						</div>
						</div>
				</div>
			</div>
			<Footer></Footer>
			
		</div>
	);
};

export default Chat;
