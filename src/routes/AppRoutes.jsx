import { Routes, Route } from 'react-router-dom';
import { Inicio, Login, Perfil, Carrito, Contacto} from '../pages';
import RutaProtegida from '../routes/RutaProtegida';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rutas de acceso libre */}
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/infocontacto" element={<Contacto />} />

      {/* Rutas protegidas con el componente*/}
      <Route
        path="/perfil"
        element={
          <RutaProtegida>
            <Perfil />
          </RutaProtegida>
        }
      />
    </Routes>
  );
}
