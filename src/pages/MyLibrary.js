import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar";
import "../styles/pages/myAnnouncements.css"


const announces = [
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla risus, viverra eu convallis tempus, vehicula a mi. Suspendisse ultrices erat at ligula lacinia, et convallis ex egestas"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    },
    {		
        img: "http://lojasaraiva.vteximg.com.br/arquivos/ids/12112327/1006600468.jpg?v=637142260469930000",
        name: "livro do lucas neto",
        description:"lorem ipsum lorem ipsum"
    }
]

const MyLibrary = (props) => {


    const [myAnnouncementsView,setMyAnnouncementsView] = useState([]);
    const [myAnnouncementsCount,setMyAnnouncementsCount] = useState(5);

    useEffect(()=>{
        setMyAnnouncementsView(announces.slice(0,myAnnouncementsCount));
    },[])

    const listExpandHandle = ()=>{
        let announcesCont = myAnnouncementsCount;
        if(announcesCont+5<=announces.length){
            announcesCont+=5;
        }
        else{
            announcesCont=announces.length;
        }
        setMyAnnouncementsView(announces.slice(0,announcesCont));
        setMyAnnouncementsCount(announcesCont);
    };

	return (
		<div id="body-container">
			<Header></Header>
            <div className="myAnnouncementsContent">
                <UserNavbar selectedItem={3}></UserNavbar>
                <div className="myAnnouncementsDiv"> 
                    {myAnnouncementsView.map((announce,index)=>(
                        <div className="announceItem">
                            <img className="announceImage" src={announce.img} />  
                            <div className="announcesText">
                                <label className="announcesTitle">{announce.name}</label>
                                <span className="announcesDescription">{announce.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={() => {
                    listExpandHandle();
                }}
                className="list-expand"
            >
                &middot;&middot;&middot;
            </button>
			<Footer></Footer>
		</div>
	);
};

export default MyLibrary;
