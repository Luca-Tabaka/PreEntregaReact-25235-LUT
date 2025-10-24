import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ProductDescription = ({ descripcion }) => {
  const [verDescripcionCompleta, setVerDescripcionCompleta] = useState(false);

  const handleLeerMas = () => {
    setVerDescripcionCompleta(!verDescripcionCompleta);
  };

  return (
    <div>
      <p>{verDescripcionCompleta? descripcion :""}</p>
      <Button variant="btn btn-info" onClick={handleLeerMas}>
        {verDescripcionCompleta ? 'Ver menos' : 'Ver Descripción'}
      </Button>
    </div>
  );
};

export default ProductDescription;
