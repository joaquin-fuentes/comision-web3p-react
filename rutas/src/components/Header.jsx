import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Header = () => {
  const navegacion = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("usuario")) || null;
  function logout() {
    Swal.fire({
      title: "Estas seguro de cerrar sesion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesion cerrada!",
          icon: "success",
        });
        sessionStorage.removeItem("usuario");
        navegacion("/");
      }
    });
  }
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Logo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={NavLink} to="/admin">
                  Admin
                </Nav.Link>
                <Button variant="danger" onClick={logout}>
                  Cerar sesion
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
