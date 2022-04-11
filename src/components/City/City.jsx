import React from "react";
import Style from "../City/City.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function City ({city}){


    return(
        <div className={Style.tarjetas}>
                <div className={Style.container}>
              <Link to={"/"}> <span className={Style.arrow}> <i class="bi bi-arrow-left-circle-fill"></i> </span> </Link>
                    <h4>{city.name}</h4>
                    <div className={Style.text}>
                        <div> <span className={Style.TextWeight}>Temperatura:</span> {city.temp} ºC</div>
                        <div> <span className={Style.TextWeight}>Weather:</span> {city.weather}</div>
                        <div> <span className={Style.TextWeight}>Wind: </span>  {city.wind} km/h</div>
                        <div> <span className={Style.TextWeight}>Clouds:</span>  {city.descript}</div>
                        <div> <span className={Style.TextWeight}> Latitude:</span>  {city.lat}º</div>
                        <div> <span className={Style.TextWeight}>Longitude:</span>{city.lon}º</div>
                    </div>
            </div>
        </div>
    )
}
export default City;