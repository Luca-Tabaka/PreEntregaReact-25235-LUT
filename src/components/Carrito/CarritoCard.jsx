import { FaTrash } from 'react-icons/fa';
import { Card, Button, Row, Col } from 'react-bootstrap';

const CarritoCard = ({ product, aumentarCantidad, disminuirCantidad, eliminarProducto }) => {
  const precioTotal = product.price * product.cantidad;

  return (
    <Card className="mb-3" style={{ backgroundColor: '#1e1e1e', color: '#ddd' }}>
      <Card.Body>
        <Row className="align-items-center">
          {/* imagen de producto */}
          <Col xs={3} md={2}>
            <Card.Img
              src={product.images[0]}
              alt={product.title}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Col>

          {/* nombre */}
          <Col xs={9} md={4}>
            <Card.Title>{product.title}</Card.Title>
          </Col>

          {/* precio por uno */}
          <Col xs={6} md={2}>
            <Card.Text>Precio: ${product.price.toFixed(2)}</Card.Text>
          </Col>

          {/* precio total*/}
          <Col xs={6} md={2}>
            <Card.Text>Precio total: ${precioTotal.toFixed(2)} x {product.cantidad}</Card.Text>
          </Col>
          <Col xs={12} md={2} className="d-flex flex-column align-items-end">
            <div>
              <Button variant="secondary" size="sm" onClick={() => disminuirCantidad(product.id)}>-</Button>{' '}
              <Button variant="secondary" size="sm" onClick={() => aumentarCantidad(product.id)}>+</Button>{' '}
              <Button variant="danger" size="sm" onClick={() => eliminarProducto(product.id)}><FaTrash /></Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CarritoCard;
