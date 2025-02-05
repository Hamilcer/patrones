import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShop,
  faUser,
  faCartShopping,
  faSignOut,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import HeaderStrategy from "./HeaderStrategy";

// Estrategia para cliente autenticado
class ClienteHeaderStrategy implements HeaderStrategy {
  // Atributos de la clase
  private navigate = useNavigate();
  private value = localStorage.getItem("dinero");

  // Método para formatear el dinero del usuario
  public currencyFormatter({ currency, value }): string {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      minimumFractionDigits: 2,
      currency,
    });
    return formatter.format(value);
  }

  // Método para cerrar sesión
  public reset = (): void => {
    localStorage.clear();
    this.navigate("/login");
    window.location.reload();
  };

  // Método que retorna la barra de navegación del cliente
  public renderNavbar(): JSX.Element {
    return (
      <>
        <Navbar
          data-testid="Header"
          sticky="top"
          key="md"
          expand="md"
          className="bg-body-tertiary mb-5 ps-5 shadow-sm"
          style={{ backgroundColor: "#ffffff" }}
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
                className="justify-content-end flex-grow-1 pe-3 gap-2"
              >
                <Nav.Item>
                  <Nav.Link className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    <span style={{ color: "#333" }}>{localStorage.username}</span>
                  </Nav.Link>
                </Nav.Item>
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
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/carrito"
                    active={location.pathname === "/carrito"}
                    className="d-flex align-items-center"
                  >
                    <FontAwesomeIcon icon={faCartShopping} className="me-2" />
                    <span style={{ color: "#333" }}>Carrito</span>
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
      </>
    );
  }
}

export default ClienteHeaderStrategy;