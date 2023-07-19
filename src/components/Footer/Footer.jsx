import "../Footer"
import Facebook from "../../assets/.svg"
import Instagram from "../../assets/.svg"
import { Link } from "react-router-dom"

export default function Footer(){
return(
    <div className="footer-container">
        <div className="footer-links">
                <Link className="links about">About Us</Link>
                <Link className="links">Contact</Link>
        </div>
        <div className="footer-social-media">
            <div className="instagram-container">
                <img className ="instagram" src={Instagram} alt="instagram icon"/>
                <Link className="links media">Instragram</Link>
                </div>
                <div className="facebook-container">
                <img className="facebook" src={Facebook} alt="Facebook icon"/>
                <Link className="links media">Facebook</Link>
                </div>
        </div>
    </div>
)  
}