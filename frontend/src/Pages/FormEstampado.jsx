import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Patrones/Header/Header";
import Footer from "../Components/Footer";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import "../Styles/pago.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

export default function FormEstampado() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const [servicio, setServicio] = useState({
    diseño: "",
    nombre: "",
    categoria: "",
    artista_email: localStorage.getItem("email"),
  });

  const estampadoChange = (e) => {
    setServicio({ ...servicio, [e.target.name]: e.target.value });
  };
  const handleSelect = (e) => {
    setServicio({ ...servicio, categoria: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:4000/image", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Handle response from the server
          if (response.ok) {
            return response.json(); // Parse response JSON if status is OK
          }
          throw new Error("File upload failed");
        })
        .then((data) => {
          // Handle the file path returned from the server
          setServicio({ ...servicio, diseño: data.filePath });
        })
        .catch((error) => {
          // Handle errors
          console.error("Error uploading file:", error);
        });
    }
  };

  useEffect(() => {
    if (servicio.diseño !== "") {
      toDB();
    }
  }, [servicio.diseño]);

  const toDB = () => {
    fetch("http://localhost:4000/estampado", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servicio),
    });
    setTimeout(() => navigate("/catalogoervicios"), 200);
  };

  return (
    <>
  <Header />
  <Container>
    <Form onSubmit={handleSubmit}>
      <Row className="d-flex justify-content-around mt-5 pt-5">
        <Col className="recuadro bordered p-5" md={{ span: 6, offset: 4 }}>
          <h2 className="text-center mb-5">Publica tu servicio</h2>

          {/* Campo para subir el archivo */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Publica tu servicio</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          {/* Campo para el nombre */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={estampadoChange}
              value={servicio.nombre}
              maxLength={100}
            />
            <Form.Text>Nombre del servicio</Form.Text>
          </Form.Group>

          {/* Campo para la categoría */}
          <Form.Group className="mb-3" controlId="Categoria">
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelect}
              data-testid="Categoria"
            >
              <option value="">Categoria</option>
              <option value="Obras Civiles">Obras Civiles</option>
              <option value="Servicios Eléctricos">Servicios Eléctricos</option>
              <option value="Diseños Eléctricos y Solicitudes">Diseños Eléctricos y Solicitudes</option>
              <option value="Sistema Solar Fotovoltaico">Sistema Solar Fotovoltaico</option>
            </Form.Select>
            <Form.Text>
              ¿Con qué categoría crees que se identifica tu servicio?
            </Form.Text>
          </Form.Group>

          {/* Nuevo campo para la descripción */}
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="descripcion"
              placeholder="Descripción"
              onChange={estampadoChange}
              value={servicio.descripcion}
              rows={4} // Número de filas para el textarea
            />
            <Form.Text>Describe tu servicio en detalle</Form.Text>
          </Form.Group>

          {/* Botón de envío */}
          <div className="d-grid">
            <Button
              variant="outline-light"
              type="submit"
              className="ms-3 d-grid"
              size="md"
              disabled={!file || !servicio.nombre || !servicio.categoria}
            >
              Publicar
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  </Container>
  <ThemeSwitcher />
  <Footer />
</>
  );
}
