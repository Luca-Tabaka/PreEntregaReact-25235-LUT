import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
export default function NombreLogo() {
  return (
    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
      <img
        src={logo}
        alt="TB"
        style={{
          height: '50px',
          width: '50px',
          marginRight: '10px',
        }}
      />
      {/*fuente para el titulo del header*/}
        <span style={{
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          fontSize: '2rem',
          color: '#cc0000',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}>
          Twisted Beauty
        </span>
    </Navbar.Brand>
  );
}
