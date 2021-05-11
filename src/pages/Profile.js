import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar";
import "../styles/pages/profile.css"
import defaultImage from "../assets/person-24px 1.png"
import userInfo from "../services/userInfo";
import updateUser from "../services/updateUser";


const Profile = (props) => {

    const [userData, setUserData] = useState();
    const token = sessionStorage.getItem("userToken");

    const [fieldName,setFieldName] = useState();
    const [fieldEmail,setFieldEmail] = useState();
    const [fieldTel,setFieldTel] = useState();
    const [fieldBirth,setFieldBirth] = useState();
    const [fieldImage,setFieldImage] = useState();
    const [profileImage,setProfileImage] = useState(defaultImage);

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
            if(responseUserInfo.picture){
                setProfileImage("http://localhost:5050/static/users_profile_pic/"+responseUserInfo.picture);
            }
        }
    },[]);

    const handleProfileUpdate = ()=>{
        let name=null;
        let email=null;
        let telephone=null;
        let birth_date=null;
        let profile_image = null;
        if(fieldName)
            name=fieldName;
        if(fieldEmail)
            email=fieldEmail;
        if(fieldTel)
            telephone=fieldTel;
        if(fieldBirth){
            birth_date=fieldBirth;
        }
        if(fieldImage){
            profile_image=fieldImage;
        }

        let body={
            "name":name,
            "email":email,
            "username":email,
            "telephone":telephone,
            "birth_date":birth_date,
            "profile_image":profile_image
        };
        updateUser(token,body);
    };

    const fileToBase64 = async (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (e) => reject(e)
        })

    const handleProfileImage = async (e) =>{
        let file = e.target.files[0];
        let imageBase64=await fileToBase64(file)
        setProfileImage(imageBase64);
        setFieldImage(imageBase64);
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
                    <input id="profileImageInput" onChangeCapture={(e)=>{handleProfileImage(e)}} type="file" accept="image/x-png,image/gif,image/jpeg,image/jpg"/>
                    <label htmlFor="profileImageInput" style={{cursor:"pointer"}}><img id="profileImage" src={profileImage}/></label>
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
