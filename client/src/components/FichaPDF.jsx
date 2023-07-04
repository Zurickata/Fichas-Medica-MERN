import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

const FichaPDF = ({ ficha }) => {
    return (
        <Document>
        <Page>
            <Text>Nombre: {ficha.nombre}</Text>
            <Text>RUT: {ficha.rut}</Text>
            <Text>Edad: {ficha.edad}</Text>
            <Text>Fecha: {ficha.fecha}</Text>
        </Page>
        </Document>
    );
};

export default FichaPDF;