import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { ScaleLoader } from 'react-spinners';

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState(category || 'all'); // arranca con el prop o con 'all'

  useEffect(() => {
    let url = 'https://dummyjson.com/products';
    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // para simular tiempo de carga y poder ver el spinner
        setTimeout(() => {
          setProducts(data.products);
          setLoading(false);
        }, 500); 
      })
      .catch(err => {
        console.error('Error al cargar productos:', err);
        setLoading(false);
      });
  }, [category]);

/*   const agregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
  }; */

const agregarAlCarrito = (producto) => {
  const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];

  // guarda si el producto existe 
  const productoExistente = carritoGuardado.find(p => p.id === producto.id);

  // guardo el carrito actualizado
  let nuevoCarrito;

  // verifico existencia de producto, si ya esta se aumenta cantidad
  if (productoExistente) {
    nuevoCarrito = carritoGuardado.map(p =>
      p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
    );
    alert(`Se ha agregado una unidad del producto"${producto.title}"`);
  } else {
    // si no existe el producto en el carrito lo crea con uno
    nuevoCarrito = [...carritoGuardado, { ...producto, cantidad: 1 }];
    alert(`Se ha agregado "${producto.title}"`);
  }
  // guarda el progreso en el localStorage
  localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
};

if (loading) {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <ScaleLoader color="#ff0000ff" loading={loading} height={35} width={5} radius={2} margin={2} />
    </div>
  );
}
// aca hago una lista con las categorias que quiero mostrar en el dropdown, estas se relacionan con belleza.
const categoriasParaPagina = ['beauty', 'fragrances'];

// revisa el prop y si no hay, hace una lista que arranca con all y sigue con las categorias de la api
const categoriasUnicas = category ? [category] : ['all', ...new Set(products.map(p => p.category))];

// filtra la categorias unicas para mostrar solo las categorias de categoriasParaPagina
const categoriasFiltradas = categoriasUnicas.filter(cat => cat === 'all' || categoriasParaPagina.includes(cat));

// filtra los productos segun la categoria seleccionada o muestra todos si es 'all' (aca el todos es solo de las categoriasParaPagina ya q el api tiene muchas categorias que no vienen al caso)
const productosFiltrados = category ? products : categoria === 'all' ? products.filter(p => categoriasParaPagina.includes(p.category)) : products.filter(p => p.category === categoria);

  return (
    <>
        {/* aca se muestra el dropdown si no se paso categoria por props */}
        <h1 style={{textAlign:'center',  color: '#ff0000ff', marginTop:'5px', textShadow: '2px 2px 4px rgba(236, 120, 25, 0.7)',}}>Listado de productos</h1>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
      {(!category) && (
      <Form.Control
        as="select"
        size='sm'
        value={categoria}
        onChange={e => setCategoria(e.target.value)}
        className="mb-3"
        style={{ width: '150px' }}
      >
        {categoriasFiltradas.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </Form.Control>
        )}
      <Row className="g-2">
        {productosFiltrados.map(product => (
          <Col key={product.id} md={4} sm={6} xs={12}>
            <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
          </Col>
        ))}
      </Row>
      </div>
    </>
  );
  
};

export default ProductList;
