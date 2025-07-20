import React from "react";
import ImgsobreNosotros from "../imagenes/ImgsobreNosotros.jpeg"

function SobreNosotros(){
    return(
        <>
        <div id="reuniones">
            <h2>REUNIONES:</h2>
            <h2>Miércoles 20hs. Reunion de oración</h2>
            <h2>Sábado 16hs. Adolecentes</h2>
            <h2>Sábado 20hs. Jóvenes</h2>
            <h2>Domingo 9hs. Cena del Señor</h2>
            <h2>Domingo 10:30hs. Escuela dominical</h2>
        </div>
        <img src={ImgsobreNosotros} alt="imagen de los miembros" id="imgnosotros"/>
        </>
    )
}

export default SobreNosotros;