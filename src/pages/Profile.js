import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar";
import "../styles/pages/profile.css"
import profileImage from "../assets/person-24px 1.png"


const Profile = (props) => {

	return (
		<div id="body-container">
			<Header></Header>
            <div className="profileContent">
                <UserNavbar selectedItem={4}></UserNavbar>
                <div className="profileDiv"> 
                    <input className="profileInput" title="Nome" placeholder="Nome"/>
                    <input className="profileInput" title="Nome de usuário" placeholder="Nome de usuário"/>
                    <input className="profileInput" type="email" title="Email" placeholder="Email"/>
                    <input className="profileInput" type="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" title="Telefone" placeholder="Telefone"/>
                </div>
                <div className="profileDiv"> 
                    <img id="profileImage" src={profileImage}/>
                    <input id="profileBirthDate" type="date" title="Data de Nascimento" placeholder="Data de Nascimento"/>
                </div>
            </div>
            <div className="profileContent">
                <span id="profileChangePassword">Gostaria de alterar sua senha?</span>
                <button id="profileUpdateButton">Salvar alterações</button>
            </div>
			<Footer></Footer>
		</div>
	);
};

export default Profile;
