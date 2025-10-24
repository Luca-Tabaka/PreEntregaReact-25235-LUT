import CarouselProductos from "../components/Productos/CarouselProductos";
import ProductList from "../components/Productos/ProductList";
export default function Inicio() {
  return (
    <>
      <CarouselProductos />
      <ProductList />
      {/* <ProductList category="beauty" /> */}
    </>
  );
}
