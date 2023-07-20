import styles from "./Footer.css";
import CopyrightC from "../../assets/c-circle.svg"
function Footer() {
    const { footer, p} = styles;
  return (
    <div className="footer">
    <img src={CopyrightC}/><p>Copyright 2023</p>
    </div>
  );
}

export { Footer };
