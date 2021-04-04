import React, {useState } from 'react';
import "../styles/components/headerSimple.css"
import logo from "../assets/logo_white.svg"

const HeaderSimple = (props) => {
  return (
    <div id="header">
        <div id="header_content">
            <img id="header_logo" src={logo}/>
            <div id="header_icons">
                <span className="material-icons">
                    person
                </span>
                <label classname = "text_header">Olá usuário</label>
            </div>
        </div>

    </div>
  );
};

export default HeaderSimple;
