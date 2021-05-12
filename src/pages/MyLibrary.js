import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import UserNavbar from "../components/UserNavbar";
<<<<<<< HEAD
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
=======
import getMyLibrary from "../services/getMyLibrary";
import deleteMyLibraryItem from "../services/deleteMyLibraryItem";
import { useHistory } from "react-router-dom";
import "../styles/pages/myAnnouncements.css";

const MyLibrary = (props) => {
	const history = useHistory();
	const [announces, setAnnounces] = useState([]);

	const [myAnnouncementsView, setMyAnnouncementsView] = useState([]);
	const [myAnnouncementsCount, setMyAnnouncementsCount] = useState(5);

	const token = sessionStorage.getItem("userToken");

	useEffect(async () => {
		let announces = await getMyLibrary(token);
		if (announces != null && announces.length > 0)
			setMyAnnouncementsView(
				announces.slice(
					0,
					Math.max(myAnnouncementsCount, announces.length),
				),
			);
		setAnnounces(announces);
	}, []);

	const redirectToBook = (id) => {
		history.push("/announcement/" + id);
	};

	useEffect(() => {
		if (announces != null && announces.length > 0)
			setMyAnnouncementsView(
				announces.slice(
					0,
					Math.max(myAnnouncementsCount, announces.length),
				),
			);
	}, [announces]);
	const listExpandHandle = () => {
		let announcesCont = myAnnouncementsCount;
		if (announcesCont + 5 <= announces.length) {
			announcesCont += 5;
		} else {
			announcesCont = announces.length;
		}
		setMyAnnouncementsView(announces.slice(0, announcesCont));
		setMyAnnouncementsCount(announcesCont);
	};
>>>>>>> 831cb4041d2180c0627490cec69428b784f15472

	return (
		<div id="body-container">
			<Header></Header>
<<<<<<< HEAD
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
=======
			<div className="myAnnouncementsContent">
				<UserNavbar selectedItem={3}></UserNavbar>
				<div className="myAnnouncementsDiv">
					{myAnnouncementsView.length == 0 ? (
						<span
							style={{
								textAlign: "center",
								display: "block",
								width: "100%",
								color: "gray",
							}}
						>
							Infelizmente você ainda não possui nenhum anúncio.
							:(
						</span>
					) : (
						myAnnouncementsView.map((announce, index) => (
							<div className="announceItem">
								<img
									className="announceImage"
									src={
										"http://35.198.10.112/static/books_images/" +
										announce.book_cover
									}
									onClick={() => {
										redirectToBook(announce.id);
									}}
								/>
								<div className="announcesText">
									<div className="announcesTitle">
										<span
											style={{ marginRight: "1vw" }}
											onClick={() => {
												redirectToBook(announce.id);
											}}
										>
											{announce.name}
										</span>
										<span
											className="material-icons"
											onClick={() => {
												deleteMyLibraryItem(
													announce.id,
													token,
												);
												window.location.reload();
											}}
										>
											delete
										</span>
									</div>
									<span className="announcesDescription">
										{announce.description}
									</span>
								</div>
							</div>
						))
					)}
				</div>
			</div>

			{announces != null && announces.length > myAnnouncementsCount && (
				<button
					onClick={() => {
						listExpandHandle();
					}}
					className="list-expand"
				>
					&middot;&middot;&middot;
				</button>
			)}

>>>>>>> 831cb4041d2180c0627490cec69428b784f15472
			<Footer></Footer>
		</div>
	);
};

export default MyLibrary;
