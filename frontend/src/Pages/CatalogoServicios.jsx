/* React-Bootstrap */
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

/* My components */
//import ComponentCarta from "../Components/ComponentCarta";
import Footer from "../Components/Footer";
import Header from "../Patrones/Header/Header";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import CartaComponent from "../Components/ComponentCarta";

/* My css */
import "../Styles/Offcanvas.css";

/* Hooks */
import { useState, useEffect } from "react";

function CatalogoServicios() {
  const [estampados, setEstampados] = useState([]);

  useEffect(() => {
    // Llamar al endpoint para obtener los estampados
    fetch("http://localhost:4000/getProductos") // Asegúrate de que la ruta sea correcta según tu configuración de servidor
      .then((response) => response.json())
      .then((data) => {
        if (data.rowCount != 0) {
          setEstampados(data); // Establecer los estampados en el estado local
        } else {
          console.log("no hay Servicios");
          console.log(estampados.length);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los Servicios:", error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // La dependencia vacía asegura que esta llamada solo se haga una vez al cargar el componente

  const Cartas = (estampados.map((data, index) => 
    <Col
      key={index}
      xs="12"
      sm="6"
      md="4"
      lg="3"
      className="text-center mt-3"
      // Agregar lógica de clic aquí si es necesario
    >
      <CartaComponent
        img={data.diseño}
        text={data.nombre}
        artista={data.nombre_artista}
      />
    </Col>
  ));

  return (
    <>
      <Container fluid className=" align-items-center  m-0 p-0">
        <Row className="width-100vw">
          <Header />
        </Row>

        <Row className="width-100vw">
          <Col xs={{ span: 8, offset: 2 }}>
            <Row width="100%" className=" p-5">
              <Col className="centered" width="80%" >
                <img src="/logo.png" alt="" width="500px" />
              </Col>
              <Col>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1>Te damos la bienvenida</h1>
                <br />
                <h3>Materiales y servicios eléctricos</h3>
                <br />
                
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="align-self-start ps-5 pt-5">
          <h1>Servicios: </h1>
        </div>
        <Row className="align-items-center">
          {estampados.length > 0 ? (
            Cartas
          ) : (
            <p className="h2">No hay servicios disponibles</p>
          )}{" "}
        </Row>

        <ThemeSwitcher />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Container>
    </>
  );
}

export default CatalogoServicios;
