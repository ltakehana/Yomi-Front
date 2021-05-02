import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar";
import "../styles/pages/profile.css"
import profileImage from "../assets/person-24px 1.png"
import userInfo from "../services/userInfo";
import { useAuth } from "../contexts/auth";
import updateUser from "../services/updateUser";


const Profile = (props) => {

    const [userData, setUserData] = useState();
    const token = sessionStorage.getItem("userToken");

    const [fieldName,setFieldName] = useState();
    const [fieldEmail,setFieldEmail] = useState();
    const [fieldTel,setFieldTel] = useState();
    const [fieldBirth,setFieldBirth] = useState();

    useEffect(async ()=>{
        const responseUserInfo = await userInfo(token);
        setUserData(responseUserInfo);
        if(responseUserInfo){
            if(responseUserInfo.name)
                setFieldName(responseUserInfo.name)
            if(responseUserInfo.email)
                setFieldEmail(responseUserInfo.email)
            if(responseUserInfo.telephone)
                setFieldTel(responseUserInfo.telephone)
            if(responseUserInfo.birth_date){
                setFieldBirth(responseUserInfo.birth_date.replace(" 00:00:00",""));
            }
        }
        console.log(responseUserInfo);
    },[]);

    const handleProfileUpdate = ()=>{
        let name=null;
        let email=null;
        let telephone=null;
        let birth_date=null;

        if(fieldName)
            name=fieldName;
        if(fieldEmail)
            email=fieldEmail;
        if(fieldTel)
            telephone=fieldTel;
        if(fieldBirth){
            birth_date=fieldBirth;
        }
        let body={
            "name":name,
            "email":email,
            "username":email,
            "telephone":telephone,
            "birth_date":birth_date
        };
        updateUser(token,body);
    };

	return (
		<div id="body-container">
			<Header></Header>
            <div className="profileContent">
                <UserNavbar selectedItem={4}></UserNavbar>
                <div className="profileDiv"> 
                    <input className="profileInput" defaultValue={fieldName} title="Nome" placeholder="Nome" onChange={(e) => setFieldName(e.target.value)}/>
                    <input className="profileInput" defaultValue={fieldEmail} type="email" title="Email" placeholder="Email" onChange={(e) => setFieldEmail(e.target.value)}/>
                    <input className="profileInput" defaultValue={fieldTel} type="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" title="Telefone" placeholder="Telefone" onChange={(e) => setFieldTel(e.target.value)}/>
                    <input id="profileBirthDate" defaultValue={fieldBirth} type="date" title="Data de Nascimento" placeholder="Data de Nascimento" onChange={(e) => setFieldBirth(e.target.value)}/>
                </div>
                <div className="profileDiv"> 
                    <img id="profileImage" src={profileImage}/>
                </div>
            </div>
            <div className="profileContent">
                <span id="profileChangePassword">Gostaria de alterar sua senha?</span>
                <button id="profileUpdateButton" onClick={handleProfileUpdate}>Salvar alterações</button>
            </div>
			<Footer></Footer>
		</div>
	);
};

export default Profile;
