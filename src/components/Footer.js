import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

function Footer(){
  return(
    <>
      <p className="footer-text">Coded <FontAwesomeIcon className="footer-icon" icon={faHeart} /> by MustafaEnsar</p>
    </>
  )
}

export default Footer;