import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Encabezado({ nombre }) {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="./Welcome">DigiSapu</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="./Home">Home</Nav.Link>
                <Nav.Link href="./Historial">Historial</Nav.Link>
                </Nav>
                
                {nombre && <span className="text-light">¡Hola, {nombre}!</span>}
                
                <Button href="./addFicha">Ingresar Nuevo Paciente</Button>
                <Button href="./login">Iniciar Sesión</Button>
            </Container>
        </Navbar>
    );
}

export default Encabezado;