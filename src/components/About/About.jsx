import React from "react";

import Style from "../About/About.module.css"




export default function About (){

    return(
        <div className={Style.about}>
            <h3>About this app</h3>

            <p className={Style.paragrafe}>

             Hey there! <br /> This is a React SPA develeoped by Luis Carlos de Dios. <br />
            I'm currently studying Full Stack Development at "Soy Henry" bootcamp. 
            I apreciate your time to check this app, please support me by clicking in my social media links. Thank you for your feedback. <br />
           <strong> Enjoy! </strong> 
            
            </p>

        </div>
    )
}