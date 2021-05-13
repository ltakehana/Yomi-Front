import React, {useState } from 'react';
import "../styles/components/userNavbar.css"
import { useHistory } from "react-router-dom";



const UserNavbar = ({selectedItem}) => {

  const history = useHistory();

  const myAnnouncementsRedirect=()=>{
    history.push("/MyAnnouncements");
  }

  const profileRedirect=()=>{
    history.push("/Profile");
  }

  const myLibraryRedirect=()=>{
    history.push("/MyLibrary");
  }

  const chatContactsRedirect=()=>{
    history.push("/contacts");
  }

  return (
    <div id="userNavbar">
        <div onClick={()=>{myAnnouncementsRedirect()}} className={(selectedItem==1)?("userNavbarSelectedItem"):("userNavbarItem")}>Meus anúncios</div>
        <div onClick={() => {chatContactsRedirect()}}className={(selectedItem==2)?("userNavbarSelectedItem"):("userNavbarItem")}>Minhas mensagens</div>
        <div onClick={()=>{myLibraryRedirect()}} className={(selectedItem==3)?("userNavbarSelectedItem"):("userNavbarItem")}>Minha biblioteca</div>
        <div onClick={()=>{profileRedirect()}} className={(selectedItem==4)?("userNavbarSelectedItem"):("userNavbarItem")}>Meus dados</div>
         
    </div>
  );
};

export default UserNavbar;