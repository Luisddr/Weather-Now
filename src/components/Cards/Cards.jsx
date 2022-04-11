import React from "react";
import Card from "../Card/Card.jsx"
import Style from "./Cards.module.css"


export default function Cards({cities, onClose}) {
    // acá va tu código
    // tip, podés usar un map
  
    
    return <div className={Style.tarjetas}>
      {cities.map(city=> <Card
      key={city.id}
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      temp={city.temp}
      onClose={()=>onClose(city.id)}
      id ={city.id}
      />
    )
      
  
    
  }
  </div>;
  }