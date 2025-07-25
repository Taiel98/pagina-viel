import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <ul className="navbar-nav mb-2 mb-lg-0 nav justify-content-end">
                    <li className="nav-item">
                        <div>
                            <NavLink to="Inicio" className="mi-link">INICIO</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div>
                            <NavLink to="SobreNosotros" className="mi-link">SOBRE NOSOTROS</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div>
                            <NavLink to="Ministerios" className="mi-link">MINISTERIOS</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div>
                            <NavLink to="PreguntasFrecuentes" className="mi-link">PREGUNTAS FRECUENTES</NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div>
                            <NavLink to="Contactanos" className="mi-link">CONTACTANOS</NavLink>
                        </div>
                    </li>
                </ul>
            </div> 
        </nav>
        </>
    )
}

export default Navbar;