import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/pages/chatContacts.css";
import Footer from "../components/Footer";
import UserNavbar from "../components/UserNavbar";
import defaultImage from "../assets/person-24px 1.png"
import getChat from "../services/getChat";
import { useHistory } from "react-router-dom";

const ChatContacts = (props) => {

    const [myContactsView,setContactsView] = useState([]);
    const [myContactsCount,setContactsCount] = useState(5);
    const[profileImage, setProfileImage] = useState(defaultImage);
    const [contacts,setContacts] = useState([]);
   

    useEffect(async ()=>{
        const token = sessionStorage.getItem("userToken");
        const chats = await getChat(token)
        if (chats)
        setContacts(chats.chats);
        
    },[])

    useEffect(()=>{
        setContactsView(contacts.slice(0,myContactsCount));
    },[contacts]);

    const history = useHistory();
     
    const redirectToChat = (id)=>{
        history.push("/chat/"+id);
        window.location.reload();
    }

    const listExpandHandle = ()=>{
        let contactsCont = myContactsCount;
        if(contactsCont+5<=contacts.length){
            contactsCont+=5;
        }
        else{
            contactsCont=contacts.length;
        }
        setContactsView(contacts.slice(0,contactsCont));
        setContactsCount(contactsCont);
    };

	return (
		<div id="contactsBody">
			<Header></Header>
			<div id="contactsContainer">
            <UserNavbar selectedItem={2}></UserNavbar>
            <div id="contactsDiv"> 
                    {myContactsView.map((contacts,index)=>(
                        <div id="contactsItem" onClick= {
                            ()=>{redirectToChat(contacts.user_id)}
                        }>
                              <img id="contactsImage" src={(contacts.user_picture)?("http://35.198.10.112/static/users_profile_pic/"+contacts.user_picture):(profileImage)} />  
                              <label className="contactsName">{contacts.user_name}</label>
                              <button className= "open_chat">
							                    <span className="material-icons">send_white_24dp</span>
                                </button>
                            </div>

    ) )}
			</div>
            </div>
            <button
                onClick={() => {
                    listExpandHandle();
                }}
                className="contacts_expand"
            >
                &middot;&middot;&middot;
            </button>
			<Footer></Footer>
			
		</div>
	);

    }
export default ChatContacts;
