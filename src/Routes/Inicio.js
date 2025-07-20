import React from "react";
import Imginicio from "../imagenes/Imginicio.png"

function Inicio(){
    return(
        <>
        <img src={Imginicio} alt="imagen de la fachada de la iglesia" id="imginicio"/>
        <div id="cuadrotexto">
            <h2>Iglesia Cristiana Evangélica Viel</h2>
            <h2>Sirviendo al Señor desde 1927</h2>
            <h2>Visítenos en Viel 2052, entre Av. Cobo y Zelarrayán, CABA</h2>
        </div>
        
        </>
    )
}

export default Inicio;