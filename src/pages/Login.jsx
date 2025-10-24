import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { usuarios } from '../data/Usuarios'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = e.target.usuario.value; 
    const contraseña = e.target.contraseña.value; 
    //const nombre = e.target.nombre.value;

    // valida la existencia de usuario usando los que estan en data
    const usuarioValido = usuarios.find(user => user.usuario === usuario && user.contraseña === contraseña);
    if (usuarioValido) {
      // indico que el usuario esta logeado
      localStorage.setItem('auth', 'true');
      // me guardo el usuario logueado en el localStorage para usarlo en el componente de cardusuario
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioValido));
      // este es usado para limpiar el mensaje de error si se ingresan mal los datos
      setError(''); 
      alert(`¡Bienvenido ${usuarioValido.nombre}!`);
      navigate('/');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg p-4" style={{backgroundColor:'#df681aff', color:'#f3f3f3ff'}}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ fontSize: '30px' }}>Iniciar Sesión</h2>
              <Form onSubmit={handleSubmit}>
                {/* nombre de usuario */}
                <Form.Group className="mb-3" controlId="formUsername" style={{ fontSize: '25px' }}>
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control type="text" name="usuario"  placeholder="Ingrese su usuario" required />
                </Form.Group>
                {/* contraseña */}
                <Form.Group className="mb-3" controlId="formPassword" style={{ fontSize: '25px' }}>
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" name="contraseña" placeholder="Ingrese su contraseña" required />
                </Form.Group>
                {/* boton de ingreso */}
                <Button variant="primary" type="submit" className="w-100">
                  Ingresar
                </Button>
              </Form>
              {/* muestra el mensaje de error*/}
              {error && <p className="mt-3">{error}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
