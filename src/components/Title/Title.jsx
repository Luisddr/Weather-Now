import React from "react";
import Style from "./Title.module.css"



export default function Title(){

    return(
        <div className={Style.title}>
     <div className={Style.sunny}> <i class="bi bi-sun sol"></i> </div><span>Weather Now</span>
      </div>
    )
}