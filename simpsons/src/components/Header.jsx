import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoNav from "../assets/imagenesSimpsons/logo.png";

const Header = () => {
  return (
    <Navbar sticky="top" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoNav} alt="Logo de los simpsons" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={NavLink} to="/favoritos">
            Favoritos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/registro">
            Registro
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Iniciar Sesión
          </Nav.Link>
          <Nav.Link as={NavLink} to="/admin">
            Panel Administrador
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
