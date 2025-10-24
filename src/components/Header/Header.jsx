import {useEffect, useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {NombreLogo, EnlacesLibres, EnlacesRestringidos} from "../index";

import {useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") === "true");
    const navigate = useNavigate();
    const location = useLocation();
    // uso esta funcion para eliminar el estado de localStorage ademas de redireccionar al login
    const cerrarSesion = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("usuarioLogueado");
        setIsAuth(false);
        navigate('/login');
    };

    // sincronizar el estado con el de localStorage
    useEffect(() => {
        setIsAuth(localStorage.getItem("auth") === "true");
    }, [location]);

    return (
        <Navbar variant="dark" expand="lg" style={{backgroundColor:'#0a0a0a', borderBottom: '3px solid #882d2dff'  }}>
            <Container>
                <NombreLogo />
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <EnlacesLibres />
                    <EnlacesRestringidos isAuth={isAuth} cerrarSesion={cerrarSesion} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;