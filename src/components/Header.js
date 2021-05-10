import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/components/header.css";
import logo from "../assets/logo_white.svg";
import { ModalLogin } from "./ModalLogin";
import { useAuth } from '../contexts/auth';
import getCategories from "../services/getCategories";

const Header = (props) => {
	const history = useHistory();

	const [showModal, setShowModal] = useState(false);
	const [searchInput, setSearchInput] = useState("");

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	const {signed} = useAuth();
	const {name} = useAuth();
	const {signOut} = useAuth();
	const userPic = sessionStorage.getItem("userPic");

	const myAnnouncementsRedirect=()=>{
		history.push("/MyAnnouncements")
	}

	const profileRedirect=()=>{
		history.push("/Profile")
	}

	const homeRedirect=()=>{
		history.push("/")
	}

	const myLibraryRedirect=()=>{
	  history.push("/MyLibrary");
	}

	const searchRedirect=(data)=>{
		console.log(data);
		history.push({pathname:"/search",state:data});
	}

	const [categories,setCategories] = useState([]);
  
    useEffect(async ()=>{
		const responseCategories = await getCategories();
        if(responseCategories){
			let categories=responseCategories.map((categories,index)=>(
				<li onClick={()=>{searchRedirect({categories:categories})}}>{categories.name}</li>
			));
			setCategories(categories);
        }
	},[]);

	return (
		<div>
			<ModalLogin showModal={showModal} setShowModal={setShowModal} />
			<div id="header">
				<div id="header_content">
					<img id="header_logo" src={logo} style={{cursor:"pointer"}} onClick={homeRedirect} />

					<div id="header_search">
						<input onChange={(e) => setSearchInput(e.target.value.toLocaleLowerCase())} />
						<span
							onClick={()=>{searchRedirect({search:searchInput})}}
							className="material-icons"
							id="header_search_icon"
						>
							search
						</span>
					</div>
					<div id="header_icons">
						{(signed)?
						(
							<>
								<div className="dropdown">
									{	(userPic)?
										(<img className="headerProfilePic" src={"http://localhost:5050/static/users_profile_pic/"+userPic}/>)
										:(<span className="material-icons">
											person
										</span>)
									}

									<div className="dropdown-content">
										<p className="dropdown-itens" onClick={myAnnouncementsRedirect}>
											<span className="material-icons" style={{fontSize:"1.5em",textAlign:"middle"}}>
												campaign
											</span>
											<span style={{fontSize:"1em"}}>Meus anúncios</span>
										</p>
										<p className="dropdown-itens" onClick={myLibraryRedirect}>
											<span className="material-icons" style={{fontSize:"1.5em",textAlign:"middle"}}>
												bookmark
											</span>
											<span style={{fontSize:"1em"}}>Minha biblioteca</span>
										</p>
										<p className="dropdown-itens" onClick={profileRedirect}>
											<span className="material-icons" style={{fontSize:"1.5em",textAlign:"middle"}}>
												person
											</span>
											<span style={{fontSize:"1em"}}>Meu Perfil</span>
										</p>
										<p className="dropdown-itens" onClick={signOut}>
											<span className="material-icons" style={{fontSize:"1.5em",textAlign:"middle"}}>
												logout
											</span>
											<span style={{fontSize:"1em"}}>Sair</span>
										</p>
									</div>
								</div>
								<label >Olá, {name}</label>

							</>
						):(
							<>
								<span className="material-icons" onClick={openModal}>
									person
								</span>
								<label onClick={openModal}>Entre ou cadastre-se</label>
							</>
						)}
					</div>
				</div>
				<ul id="header_categories">
					{categories}
				</ul>
			</div>
		</div>
	);
};

export default Header;
