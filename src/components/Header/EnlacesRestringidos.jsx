import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EnlacesRestringidos({ isAuth, cerrarSesion}) {
// agrego la logica que estaba anteriormente en header
  return (
    <Nav className="align-items-center">
      <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link> {/* El carrito esta aca solo para que se vea en la parte derecha */}
      {!isAuth ? (
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      ) : (
        <>
          <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
          <Button onClick={cerrarSesion} className="ms-2" variant='outline-light' >Cerrar sesión</Button>
        </>
      )}
    </Nav>
  );
}
