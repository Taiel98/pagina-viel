import React from "react";
import Imgcontactanos from "../imagenes/Imgcontactanos.png"

function Contactanos(){
    return(
        <>
        <div id="contactanos">
            <img src={Imgcontactanos} alt="imagen del interior"/>
            <br/>
            <a href="goo.gl/maps/baWAmm6tbiYZfnMA7" target="_blank" rel="noopener noreferrer" className="enlace-externo">
                Viel 2052, CABA
            </a>
            <br/>
            <a href="wa.me/541158430304" target="_blank" rel="noopener noreferrer" className="enlace-externo">
                WhatsApp
            </a>
            <br/>
            <a href="mailto:contacto@iglesiaviel.com" target="_blank" rel="noopener noreferrer" className="enlace-externo">
                E-mail
            </a>
            <br/>
            <a href="youtube.com/iceviel2052" target="_blank" rel="noopener noreferrer" className="enlace-externo">
                Youtube
            </a>
            <br/>
            <a href="instagram.com/iceviel2052" target="_blank" rel="noopener noreferrer" className="enlace-externo">
                Instagram
            </a>
            <br/>
            <a href="facebook.com/iceviel2052" target="_blank" rel="noopener noreferrer" className="enlace-externo">
                Facebook
            </a>
            <h3>Te esperamos</h3>
        </div>
        
        </>
    )
}

export default Contactanos;