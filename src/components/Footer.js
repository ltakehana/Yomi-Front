import "../styles/components/footer.css"
import linkedin from "../assets/linkedin-round.png"
import twitter from "../assets/twitter-round 1.png"
import youtube from "../assets/youtube-round 1.png"
import github from "../assets/github 1.png"
import instagram from "../assets/instagram-round 1.png"
import facebook from "../assets/facebook.png"


const Footer= (props) => {
  return (
<div id = "Footer">
        Contato
    

    <div>
        <div id = "Buttons_Footer">
            <button> <img className = "Size" src={linkedin} ></img></button> 
            <button> <img className = "Size" src={twitter} ></img></button> 
            <button> <img className = "Size" src={youtube} ></img></button> 
            <button> <img className = "Size" src={github} ></img></button> 
            <button> <img className = "Size" src={instagram} ></img></button> 
            <button> <img className = "Size" src={facebook} ></img></button> 

        </div>

        <div id = "Contacts">
                <div id = "Contacts_esquerda"> lorem ipsum  lorem ipsum lorem ipsum</div>
                <div id = "Contacts_direita"> lorem ipsum  lorem ipsum lorem ipsum</div> 
        </div>

    </div>
    
</div>
  );
};

export default Footer;
