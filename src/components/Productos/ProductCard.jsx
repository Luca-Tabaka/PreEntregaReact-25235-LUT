import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Descripcion from './productDescription'

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (
    <Card 
    className="d-flex flex-column"
    style={{
        backgroundColor: '#1e1e1e',
        borderColor: '#444',
        color: '#ddd',
        maxWidth: '500px',
        maxHeight: '800px',
    }}
    >
    <Card.Img
        variant="top"
        src={product.images[0]}
        alt={product.title}
        className="card-img-top img-fluid" 
        style={{ height: '150px', objectFit: 'cover' }} 
    />
    <Card.Body className="d-flex flex-column p-2">
        <Card.Title style={{ color: '#f5f5f5' }}>{product.title}</Card.Title>
            <Descripcion descripcion={product.description} />
        <Card.Text style={{ color: '#aaa' }}>
            <strong>Precio: ${product.price}</strong>
        </Card.Text>
            <Button variant="danger" onClick={() => agregarAlCarrito(product)} className="mt-auto">
                Agregar al carrito
            </Button>
        </Card.Body>
    </Card>

  );
};

export default ProductCard;
