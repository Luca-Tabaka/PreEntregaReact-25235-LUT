import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contacto() {
  return (
    <div style={{ display: "block", width: 700, padding: 30, margin: "50px auto", color:'white', backgroundColor:'#1c1c1c'}}> 
      <h4 className="text-center mb-4" style={{ color: "#ff8000", fontSize:'40px'}}>Formulario de contacto</h4>
      <Form style={{fontSize:'20px'}}>
        <Form.Group className="mb-4">
          <Form.Label>Ingrese su Nombre completo:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre completo" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Ingrese su dirección de correo electrónico:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese correo electrónico"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Ingrese el motivo de su consulta:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el motivo/asunto"
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Ingrese su consulta:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Escriba su consulta aquí"
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="w-100 fw-bold"  style={{backgroundColor: "#ff8000",border: "none"}} onClick={() => alert('formulario enviado')}>
          Enviar Formulario
        </Button>
      </Form>
    </div>
  );
}
