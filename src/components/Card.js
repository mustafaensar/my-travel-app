import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import "./Card.css"

function Card(props){
  return(
    <>
    <div className="card">
      <div className="card-img-area">
        <img src={props.data.imageUrl} alt="" className="card-img"></img>
      </div>
      <div className="card-information"> 
        <div className="card-header">
          <h6 className="card-location"><FontAwesomeIcon icon={faLocationDot} className="card-icon"/>{props.data.location}</h6>
          <a className="card-link" target="_blank" rel="noopener noreferrer" href={props.data.googleMapsUrl} >View on Google Maps</a>
        </div>
        <h1 className="card-title">{props.data.title}</h1>
        <h4 className="card-date">{props.data.startDate} - {props.data.endDate}</h4>
        <p className="card-description">{props.data.description}</p>
      </div>
    </div>
    <hr className="card-line"/>
    </>
  )
}

export default Card;