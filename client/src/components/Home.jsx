import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { deleteFicha, getFichasActivas } from '../api';
import Encabezado from "./Encabezado";

function Home() {
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        async function loadFichas() {
            const res = await getFichasActivas();
            console.log(res);
            setFichas(res.data);
        }
        loadFichas();
    }, []);

    const handleDelete = async (id) => {
        await deleteFicha(id);
        window.location.reload();
    }

    const handleEdit = async (id) => {
        window.location.reload();
    }

    return (
        <div>
        <Encabezado />

        <Container>
            <br />
            <h2>Fichas Médicas Activas</h2>
            <br />
            <Row>
            {fichas.map((ficha) => (
                <Col md={4} key={ficha._id}>
                <Card className="card bg-light">
                    <Card.Header as="h5">{ficha.nombre}</Card.Header>
                    <Card.Body>
                    <Card.Text>RUT: {ficha.rut}</Card.Text>
                    <Card.Text>Edad: {ficha.edad}</Card.Text>
                    <Card.Text>Categoria: {ficha.categoria}</Card.Text>
                    <Button onClick={() => handleEdit(ficha._id)} variant="primary">
                        Editar Ficha
                    </Button> 
                    {'  '}
                    <Button onClick={() => handleDelete(ficha._id)} variant="danger">
                        Dar de Alta
                    </Button>
                    </Card.Body>
                </Card>
                <br />
                </Col>
            ))}
            </Row>
        </Container>
        </div>
    );
}

export default Home;
