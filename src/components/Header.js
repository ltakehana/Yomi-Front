import React, {useState } from 'react';
import "../styles/components/header.css"
import logo from "../assets/logo_white.svg"

const Header = (props) => {
  return (
    <div id="header">
        <div id="header_content">
            <img id="header_logo" src={logo}/>
            <div id="header_search">
                <input/>
                <span class="material-icons" id="header_search_icon">
                    search  
                </span>
            </div>
            <div id="header_icons">
                <span class="material-icons">
                    person
                </span>
                <label>Entre ou cadastre-se</label>
                <span class="material-icons">
                  bookmark
                </span>
                <span class="material-icons">
                 local_library
                </span>
            </div>
        </div>
        <ul id="header_categories"> 
            <li>
                <span class="material-icons">
                    menu
                </span>
            </li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
        </ul>
    </div>
  );
};

export default Header;
