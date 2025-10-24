import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CarritoCard from '../components/Carrito/CarritoCard';

const Carrito = () => {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // aca aumento la cantidad en uno de cada producto
  const aumentarCantidad = (id) => {
    //actualizo el estado del carrito con la nueva cantidad
    setCarrito(carrito.map(p => p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p));
  };

  // disminuyo la cantidad en uno de cada producto
  const disminuirCantidad = (id) => {
    // actualizo el estado del carrito con la nueva cantidad, solo deja disminuir hasta 1
    setCarrito(carrito.map(p => p.id === id ? { ...p, cantidad: p.cantidad > 1 ? p.cantidad - 1 : 1 } : p));
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter(p => p.id !== id));
  };

  if (carrito.length === 0) {
    return <Container><h2 style={{color: '#ff6600', textAlign: 'center'}}>El carrito se encuentra vacío</h2>
    <Link to="/" className="btn btn-danger d-block mx-auto mt-3" style={{ backgroundColor: '#ff6600', borderRadius: '8px', color: '#fff', fontWeight: 'bold', width: '400px', fontSize: '30px'}}>
          Ver productos
    </Link>
    </Container>;
  }

  return (
    <Container style={{ maxWidth: '800px', marginTop: '20px' }}>
      <h1 style={{textAlign:'center',  color: '#ff6600', textShadow: '1px 1px 3px rgba(255, 100, 0, 0.5)'}}>Carrito de compras</h1>
      {carrito.map(product => (
        <CarritoCard
          key={product.id}
          product={product}
          aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad}
          eliminarProducto={eliminarProducto}
        />
      ))}
        <Button variant="primary" style={{ float: 'right' }} onClick={() => alert('Procediendo al pago')} className="mt-auto">
          Pagar
        </Button>
    </Container>
    
  );
};

export default Carrito;
