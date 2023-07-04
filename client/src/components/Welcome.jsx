import React from "react"
import {Link} from "react-router-dom"
import Encabezado from "./Encabezado"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

function LandingFrameMessage() {
    const style = {
        margin: "margin-top",
        padding: "0% 35% 5% 15%",
        color: "black"
    }
    return <div style={style}>
        
        <div style={{"font-size": "200px"}}>
            Bienvenido!!
        </div>
      
        <br />
        <Row>
            <Col>
            <Link to="/home" class="nav-link">
                <button class="btn btn-primary" > 
                    <span style={{"font-size": "24px"}}>
                        Ir a Home
                    </span>
                </button>
            </Link>
            </Col>
            <br />
            <Col>
            <Link to="/login" class="nav-link">
                <button class="btn btn-primary" > 
                    <span style={{"font-size": "24px"}}>
                        Cerrar Sesión y Login
                    </span>
                </button>
            </Link>
            </Col>
        </Row>
       
    </div>
}
function LandingFrame() {

    
    return <div>

        <LandingFrameMessage />

        <img src="images/undraw_doctors_p6aq.svg" alt="doctores">

        </img>
    </div>
}
function Welcome() {
    return ( 
        <div>
            <Encabezado/>
            <LandingFrame />
        </div>
    );
}

export default Welcome