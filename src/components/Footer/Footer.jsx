/*import Facebook from "../../assets/Facebook";
import Instagram from "../../assets/Instagram";*/
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        {/* Corregir la clase CSS en el siguiente enlace */}
        <Link className="links about">About Us</Link>
        <Link className="links">Contact</Link>
      </div>
      
    </div>
  );
}

export { Footer };
