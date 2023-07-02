import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Encabezado from "./Encabezado";
import { loginUsuario } from "../api";

function Login() {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [nombre, setNombre] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const usuario = {
            correo: correo,
            contraseña: contraseña,
        }

        const sesion = await loginUsuario(usuario);

        setNombre(sesion.nombre);
    }

    return (
        <div > 
            <Encabezado nombre={nombre}/>
            <br />
            <div class="container"> 

            <div class="card">
                <div class="card-header">
                    Inicio de Sesión
                </div>

                    <div class="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" value={correo} placeholder="Ingresa tu Correo" onChange={(event) => setCorreo(event.target.value)}/>
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={contraseña} placeholder="Contraseña" onChange={(event) => setContraseña(event.target.value)}/>
                            </Form.Group>

                            <Button variant="primary" type="submit">Ingresar</Button>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
