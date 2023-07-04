import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Encabezado from "./Encabezado";
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { addFichas } from "../api";

function FichaMedica() {
    // Estados para guardar los valores de los campos del formulario
    const [nombre, setNombre] = useState('');
    const [rut, setRut] = useState('');
    const [nacimiento, setNacimiento] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [comuna, setComuna] = useState('');
    const [prevision, setPrevision] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [categoria, setCategoria] = useState('');

    const navigate = useNavigate();

    const handleCategoriaChange = (SelectCategoria) => {
        setCategoria(SelectCategoria);
    };

    // Función para enviar el formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        const horaActual = new Date().toLocaleTimeString();
        const fechaActual = new Date().toLocaleDateString();
        // Aquí puedes agregar el código para enviar la ficha médica a la base de datos
        
        const NuevaFicha = {
            nombre: nombre,
            rut: rut,
            edad: edad,
            nacimiento: nacimiento,
            direccion: direccion,
            comuna: comuna,
            telefono: telefono,
            prevision: prevision,
            fecha: fechaActual,
            hora: horaActual,
            diagnostico: diagnostico,
            categoria: categoria,
        };
        
        await addFichas(NuevaFicha);

        navigate('/addFicha');
    };
  
  return (
    <div>
        <Encabezado/>
        <div className='container'>
        <br/>
        <Form onSubmit={handleSubmit}>
                <br/>
                <h4>Información del paciente</h4>
                <Row className="mb-3">
                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" value={nombre} placeholder="Nombre Compelto" onChange={(event) => setNombre(event.target.value)} />
                    </Form.Group> 

                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Rut:</Form.Label>
                    <Form.Control type="text" value={rut} placeholder="12345678-9" onChange={(event) => setRut(event.target.value)} />
                    </Form.Group>
                </Row>
            
                <Row className="mb-3">
                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Edad:</Form.Label>
                    <Form.Control type="number" value={edad} placeholder="Edad" onChange={(event) => setEdad(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Fecha de Nacimiento:</Form.Label>
                    <Form.Control type="date" value={nacimiento} onChange={(event) => setNacimiento(event.target.value)} />
                    </Form.Group>
                </Row>

                <Row type="mb-3">
                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Dirección:</Form.Label>
                    <Form.Control type="text" value={direccion} placeholder="Dirección" onChange={(event) => setDireccion(event.target.value)} />
                    </Form.Group>
                
                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Comuna:</Form.Label>
                    <Form.Control type="text" value={comuna} placeholder="Comuna" onChange={(event) => setComuna(event.target.value)} />
                    </Form.Group>
                </Row>

                <Row type="mb-3">
                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control type="tel" value={telefono} placeholder="912345678" onChange={(event) => setTelefono(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} className='mb-3'>
                    <Form.Label>Prevision:</Form.Label>
                    <Form.Control type="tel" value={prevision} placeholder="Prevision" onChange={(event) => setPrevision(event.target.value)} />
                    </Form.Group>
                </Row>

                <h4>Información de la consulta</h4>
                <Row type="mb-3">
                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Diágnostico:</Form.Label>
                        <Form.Control type="text" value={diagnostico} placeholder="Diágnostico inicial" onChange={(event) => setDiagnostico(event.target.value)} />
                    </Form.Group>
            
                    <Form.Group as={Col} className='mb-3'>
                        <Form.Label>Categoria Triage:</Form.Label>
                        <SelectTriage onCategoriaChange={handleCategoriaChange} />
                    </Form.Group>
                </Row>
                
                <Button type="submit">Ingresar</Button>
            </Form>
        <ToastContainer/>
        </div>
    </div>
    );
}

function SelectTriage({ onCategoriaChange }) {
    const [categoria, setCategoria] = useState('');
  
    const handleCategoriaChange = (event) => {
        const selectedCategoria = event.target.value;
        setCategoria(selectedCategoria);
        onCategoriaChange(selectedCategoria);
    };

    return (
        <Form.Select value={categoria} onChange={handleCategoriaChange}>
            <option>Categoria Triage</option>
            <option value="C1">C1</option>
            <option value="C2">C2</option>
            <option value="C3">C3</option>
            <option value="C4">C4</option>
            <option value="C5">C5</option>
        </Form.Select>
    );
}

export default FichaMedica;