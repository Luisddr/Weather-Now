import React from "react";

import Style from "../About/About.module.css"




export default function About (){

    return(
        <div className={Style.about}>
            <h3>About this app</h3>

            <p className={Style.paragrafe}>

             Hey there! <br /> This is a React SPA developed by Luis Carlos de Dios. <br />
            I'm currently studying to become a Full Stack Developer at "SoyHenry" bootcamp. 
            I apreciate your time to check this app, please support me and contact with me by clicking in my social media links. Thank you for your feedback. <br />
           <strong> Enjoy! </strong> 
            
            </p>

        </div>
    )
}