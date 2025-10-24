import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LinksGenerales() {
  return (
    <Nav className="me-auto">
      {/* Enlaces visibles para todos los usuarios */}
      <Nav.Link as={Link} to="/Infocontacto">Contacto</Nav.Link>
      {/* saco carrito de aca para que se vea a la derecha */}
      {/* <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link> */}
    </Nav>
  );
}
