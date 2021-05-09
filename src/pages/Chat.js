import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/pages/chat.css";
import Footer from "../components/Footer";

const Chat = () => {
	const [message, updateMessage] = useState("");
	const [messages, updateMessages] = useState([]);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (message.trim()) {
			updateMessages([
				...messages,
				{
					id: 1,
					message,
				},
			]);
			updateMessage(" ");
		}
	};

	const handleInputChange = (event) => updateMessage(event.target.value);

	return (
		<div id="chatBody">
			<Header></Header>

			<div id="chatContainer">
				<div id="chatHeader">
					<div id="chat_title">Nome do usuário</div>
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

				<form id="chatForm" onSubmit={handleFormSubmit}>
					<input
						id="form-field"
						onChange={handleInputChange}
						placeholder="Escreva uma mensagem"
						type="text"
						value={message}
					/>
				</form>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default Chat;
