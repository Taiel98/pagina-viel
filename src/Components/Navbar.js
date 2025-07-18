import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to="Inicio">INICIO</Link>
            <Link to="SobreNosotros">SOBRE NOSOTROS</Link>
            <Link to="Ministerios">MINISTERIOS</Link>
            <Link to="PreguntasFrecuentes">PREGUNTAS FRECUENTES</Link>
            <Link to="Contactanos">CONTACTANOS</Link>
        </nav>
    )
}

export default Navbar;