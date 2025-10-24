import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// aca estoy definiendo las categorias del dummyjson que voy a usar
const categoriasAUsar = [
'beauty',
'fragrances'
];

export default function CarouselProductos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => {
        // filtro productos a mostrar segun categoriasAUsar
        const productosFiltrados = data.products.filter(producto => categoriasAUsar.includes(producto.category));
        setItems(productosFiltrados);
      })
      .catch(err => {
        console.error('Error al cargar imágenes:', err);
      });
  }, []);

  if (items.length === 0) return <h1 style={{color: '#ff6600', textAlign: 'center'}}>No se encontraron productos.</h1>;

  return (
    <Carousel style={{ maxWidth: '600px', margin: '0 auto', borderRadius: '10px'}}>
      {items.map(item => (
        <Carousel.Item key={item.id} style={{backgroundColor:"Black"}}>
          <img
            className="d-block w-100"
            src={item.images[0]}
            alt={item.title}
          />
          <Carousel.Caption style={{backgroundColor:'rgba(219, 136, 136, 0.7)', borderRadius:'5px'}}>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
