import React from "react";
import styles from "./Footer.module.css";
import CopyrightC from "../../assets/copyright-circle.svg";

function Footer() {
  const { footer } = styles;
  return (
    <div className={footer}>
      <img src={CopyrightC} alt="Copyright Circle" />
      <p>Copyright 2023</p>
    </div>
  );
}

export { Footer };
