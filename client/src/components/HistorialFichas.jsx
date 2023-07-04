import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { getFichasInactivas } from '../api';
import Encabezado from "./Encabezado";

function HistorialFichas() {
    const [fichas, setFichas] = useState([]);

    useEffect(() => {
        async function loadFichas() {
            const res = await getFichasInactivas();
            console.log(res);
            setFichas(res.data);
        }
        loadFichas();
    }, []);

    return (
        <div>
        <Encabezado />

        <Container>
            <br />
            <h2>Fichas Médicas Antiguas</h2>
            <br />
            <Row>
            {fichas.map((ficha) => (
                <Col md={4} key={ficha._id}>
                <Card className="card bg-light">
                    <Card.Header as="h5">{ficha.nombre}</Card.Header>
                    <Card.Body>
                    <Card.Text>RUT: {ficha.rut}</Card.Text>
                    <Card.Text>Edad: {ficha.edad}</Card.Text>
                    <Card.Text>Direccion: {ficha.direccion}</Card.Text>
                    <Card.Text>Comuna: {ficha.comuna}</Card.Text>
                    <Card.Text>Teléfono: {ficha.telefono}</Card.Text>
                    <Card.Text>Fecha de Atención: {ficha.fecha}</Card.Text>
                    <Card.Text>Hora de atención: {ficha.hora}</Card.Text>
                    <Card.Text>Diagnóstico: {ficha.diagnostico}</Card.Text>
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

export default HistorialFichas;
