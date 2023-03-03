import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import "./Header.css"

function Header(){
  return(
    <>
      <div className="header">
        <h3 className="header-text"><FontAwesomeIcon icon={faGlobeAmericas} className="header-icon"/> my travel journal.</h3>
      </div>
    </>
  )
}

export default Header;