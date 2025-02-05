import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faStar, faPlus, faChartLine } from "@fortawesome/free-solid-svg-icons"; // Iconos adicionales
import { Link, useNavigate } from "react-router-dom";
import HeaderStrategy from "./HeaderStrategy";

// Estrategia para administrador autenticado
class AdministradorHeaderStrategy implements HeaderStrategy {
  private navigate = useNavigate();

  // Método para cerrar sesión
  public reset = (): void => {
    localStorage.clear();
    this.navigate("/login");
    window.location.reload();
  };

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
                <Nav.Link className="d-flex align-items-center">
                  <span style={{ color: "#333", fontWeight: "500" }}>
                    {"Administrador: " + localStorage.username}
                  </span>
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

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/formEstampado"
                  active={location.pathname === "/formEstampado"}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  <span style={{ color: "#333" }}>Publicar servicios</span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/reporte"
                  active={location.pathname === "/reporte"}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faChartLine} className="me-2" />
                  <span style={{ color: "#333" }}>Ver reporte</span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item onClick={() => this.reset()}>
                <Nav.Link className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faSignOut} className="me-2" />
                  <span style={{ color: "#333" }}>Cerrar sesión</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    );
  }
}

export default AdministradorHeaderStrategy;