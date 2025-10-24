import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children }) => {
  const auth = localStorage.getItem('auth');
  //const rol = localStorage.getItem('rol');

  //si no se esta autenticado se redirige al login
  if (auth !== 'true') {
    return <Navigate to="/login" />;
  }

  //si esta todo correcto envia a la ruta deseada
  return children;
};

export default RutaProtegida;   