import React from "react";
import { Link } from "react-router-dom";

function Ministerios(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Reunión Femenina</h5>
                            <p className="card-text">Los primeros domingos de cada mes a las 17:00</p>
                            <Link to="/ReunionFemenina" className="btn btn-primary">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Reunión de Hombres</h5>
                            <p className="card-text">Los primeros sabados de cada mes a las 20:00</p>
                            <Link to="/ReunionHombres" className="btn btn-primary">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Horita Feliz en Fiorito</h5>
                            <p className="card-text">Todos los sabados a las 14:00</p>
                            <Link to="/HoritaFeliz" className="btn btn-primary">Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Club Bíblico de Adolescentes</h5>
                            <p className="card-text">Todos los sabados a las 16:00</p>
                            <Link to="/ClubBiblico" className="btn btn-primary">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Jovenes Adultos</h5>
                            <p className="card-text">Todos los sabados a las 20:00</p>
                            <Link to="/Jovenes" className="btn btn-primary">Saber más</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Escuelita Dominical</h5>
                            <p className="card-text">Todos los domingos a las 10:30</p>
                            <Link to="/Escuelita" className="btn btn-primary">Saber más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Ministerios;