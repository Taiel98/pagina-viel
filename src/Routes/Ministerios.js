import React from "react";
import { Link } from "react-router-dom";

function Ministerios(){
    return(
        <>
        <div className="container">
            {/* Primera fila con 3 cards */}
            <div className="row mb-4">
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Reunión Femenina</h5>
                            <p className="card-text flex-grow-1">Los primeros domingos de cada mes a las 17:00</p>
                            <Link to="/ReunionFemenina" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Reunión de Hombres</h5>
                            <p className="card-text flex-grow-1">Los primeros sabados de cada mes a las 20:00</p>
                            <Link to="/ReunionHombres" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Horita Feliz en Fiorito</h5>
                            <p className="card-text flex-grow-1">Todos los sabados a las 14:00</p>
                            <Link to="/HoritaFeliz" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Segunda fila con 3 cards */}
            <div className="row mb-4">
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Club Bíblico de Adolescentes</h5>
                            <p className="card-text flex-grow-1">Todos los sabados a las 16:00</p>
                            <Link to="/ClubBiblico" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Jovenes Adultos</h5>
                            <p className="card-text flex-grow-1">Todos los sabados a las 20:00</p>
                            <Link to="/Jovenes" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Escuelita Dominical</h5>
                            <p className="card-text flex-grow-1">Todos los domingos a las 10:30</p>
                            <Link to="/Escuelita" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Tercera fila con 3 cards */}
            <div className="row mb-4">
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Alabanza</h5>
                            <p className="card-text flex-grow-1">Siempre Presentes</p>
                            <Link to="/Alabanza" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Reunion de Matrimonios</h5>
                            <p className="card-text flex-grow-1">Fortalecer los matrimonios de la iglesia</p>
                            <Link to="/Matrimonios" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Mayordomia</h5>
                            <p className="card-text flex-grow-1">Mantenimiento de la iglesia</p>
                            <Link to="/Mayordomia" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Cuarta fila con 2 cards centradas */}
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Reunion de Oracion</h5>
                            <p className="card-text flex-grow-1">Todos los miercoles a las 20:00</p>
                            <Link to="/ReunionOracion" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-3 d-flex">
                    <div className="card h-100" style={{width: "100%"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Cocina</h5>
                            <p className="card-text flex-grow-1">Siempre Presentes</p>
                            <Link to="/ServicioDesayuno" className="btn btn-primary mt-auto">Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ministerios;