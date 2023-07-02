import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Encabezado from "./Encabezado";
import { addUsuario } from "../api";

function Register() {
    const [nombre, setNombre] = useState('');
    const [rol, setRol] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const NuevoUsuario = {
            nombre: nombre,
            rol: rol,
            correo: correo,
            contraseña: contraseña,
        };

        await addUsuario(NuevoUsuario);
    };

    return (
        <div > 
            <Encabezado/>
            <br />
            <div className="container"> 

            <div className="card">
                <div className="card-header">
                    Registro
                </div>

                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" value={nombre} placeholder="Nombre" onChange={(event) => setNombre(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Rol</Form.Label>
                            <Form.Control type="text" value={rol} placeholder="Rol profesional" onChange={(event) => setRol(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="correo" value={correo} placeholder="Correo" onChange={(event) => setCorreo(event.target.value)}/>
                            <Form.Text className="text-muted">
                            Nunca compartiremos su correo electrónico con nadie más.
                            </Form.Text>
                            </Form.Group>
                    
                            <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" value={contraseña} placeholder="Contraseña" onChange={(event) => setContraseña(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                            <Form.Label>Confirma tu Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>

                            <Button type="submit">Registrar</Button>
                            <br/><br/>
                            <h6>¿Ya tienes una Cuenta?</h6>
                            <Button type="button" href="/login">Inicia Sesión</Button>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
