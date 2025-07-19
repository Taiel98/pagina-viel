import React from "react";
import Imginicio from "../imagenes/Imginicio.png"

function Inicio(){
    return(
        <>
        <h1>Inicio</h1>
        <img src={Imginicio} alt="imagen de la fachada de la iglesia"/>
        <h2>Iglesia Cristiana Evangélica Viel</h2>
        <h2>Sirviendo al Señor desde 1927</h2>
        <h2>Visítenos en Viel 2052, entre Av. Cobo y Zelarrayán, CABA</h2>
        </>
    )
}

export default Inicio;