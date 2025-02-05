import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faUser,
  faSignIn,
  faUsers,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderStrategy from "./HeaderStrategy";

// Estrategia para usuario no autenticado
class NoAuthHeaderStrategy implements HeaderStrategy {
  private navigate = useNavigate();

  // Método que retorna la barra de navegación del cliente
  public renderNavbar(): JSX.Element {
    return (
      <Navbar
        data-testid="Header"
        sticky="top"
        key="md"
        expand="md"
        className="bg-white mb-5 shadow-sm ps-5"
      >
        <Navbar.Brand href="/#/" className="d-flex align-items-center">
          <img
            src="logo.png"
            width="47"
            height="35"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          <span style={{ color: "#007bff", fontWeight: "bold", fontSize: "1.5rem" }}>
            CMC Energy
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              variant="pills"
              className="justify-content-end flex-grow-1 pe-3 gap-3"
            >
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  active={location.pathname === "/"}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faShop} className="me-2" />
                  <span style={{ color: "#333" }}>Catálogo</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/catalogoServicios"
                  active={location.pathname === "/catalogoServicios"}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faStar} className="me-2" />
                  <span style={{ color: "#333" }}>Servicios</span>
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                title={
                  <span className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    <span style={{ color: "#333" }}>Regístrate</span>
                  </span>
                }
                id={`offcanvasNavbarDropdown-expand-md`}
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  active={location.pathname === "/login"}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faSignIn} className="me-2" />
                  <span style={{ color: "#333" }}>Iniciar sesión</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/registro"
                  active={location.pathname === "/registro"}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faUsers} className="me-2" />
                  <span style={{ color: "#333" }}>Regístrate</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    );
  }
}

export default NoAuthHeaderStrategy;