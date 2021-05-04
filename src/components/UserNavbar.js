import React, {useState } from 'react';
import "../styles/components/userNavbar.css"

const UserNavbar = ({selectedItem}) => {
  return (
    <div id="userNavbar">
        <div className={(selectedItem==1)?("userNavbarSelectedItem"):("userNavbarItem")}>Meus anúncios</div>
        <div className={(selectedItem==2)?("userNavbarSelectedItem"):("userNavbarItem")}>Minhas mensagens</div>
        <div className={(selectedItem==3)?("userNavbarSelectedItem"):("userNavbarItem")}>Minha biblioteca</div>
        <div className={(selectedItem==4)?("userNavbarSelectedItem"):("userNavbarItem")}>Meus dados</div>
    </div>
  );
};

export default UserNavbar;
