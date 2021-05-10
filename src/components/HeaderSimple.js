import "../styles/components/headerSimple.css"
import logo from "../assets/logo_white.svg"

const HeaderSimple = (props) => {
  return (
    <div className = "header">
        <div className="header_content">
            <img className="header_logo" src={logo}/>
            <div className="header_icons">
                <span className="material-icons">
                    person
                </span>
                <label>Olá usuário</label>
            </div>
        </div>

    </div>
  );
};

export default HeaderSimple;
