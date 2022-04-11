import React from "react";
import { Link } from "react-router-dom";
import Style from "./Card.module.css"


export default function Card({temp, max, min, name, img, onClose, id}) {
    // acá va tu código
    return  <div className={Style.container}>
      <div className={Style.top}> <button className={Style.boton} onClick={onClose}>X</button> <Link className={Style.decoration} to={`city/${id}`}> <h4 >{name}</h4> </Link></div>
      <div>
        <div><h3>{temp}°</h3></div>
        <div className={Style.temperature} >
        <p><span className={Style.minMax} >Min:</span> {min}°</p>
        
         <p><span className={Style.minMax}>Max:</span> {max}°</p> 
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
      </div>
    </div>
  };
  