import { useSpecific } from "../Utils/SpecificContext";
import { useGeneral } from "../Utils/generalContext";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { ManejadorDeEstados } from "../Logica/ManejadorDeEstados";

function OffcanvasProducto() {
  const manejador = new ManejadorDeEstados();

  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(manejador.getMostrarAlerta());
  const [alertState, setAlertState] = useState(manejador.getEstadoDeAlerta());

  const {
    show,
    setShow,
    handleClose,
    setShow2,
    estampable,
    estampados,
    estampadoElegido,
    selectedImage,
  } = useGeneral();

  const agregarAlCarrito = async () => {
    let cantidad = document.querySelector("#cantidad").value;
    // let talla = document.querySelector("#Talla").value;
    // let material = document.querySelector("#Material").value;
    let materialNumber = null;
    let selectedShirt = JSON.parse(localStorage.getItem("selectedShirt"));
    let id = selectedShirt.id;
    let img = selectedShirt.img;
    let text = selectedShirt.text;
    let price = selectedShirt.price;
    let limite;

    // try {
    //   const res = await fetch(
    //     `http://localhost:4000/materialQuantity/${material}`
    //   );
    //   if (res.ok) {
    //     const data = await res.json();
    //     limite = data.cantidad;
    //   } else {
    //     console.log("Sucedio un error buscando el material");
    //     limite = -1;
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    // let estampa =
    //   estampadoElegido >= 0 ? estampados[estampadoElegido].diseño : "";
    // console.log(estampa);
    if (limite == 0) {
      // setShowAlert(manejador.cambioMostrarAlerta());
      // setAlertText("Ya no queda este material");
      // setAlertState(manejador.cambioEstadoDeAlerta(1));
    // } else if (!talla) {
    //   setShowAlert(manejador.cambioMostrarAlerta());
    //   setAlertText("Pon una talla");
    //   setAlertState(manejador.cambioEstadoDeAlerta(1));
    // } else if (!material) {
    //   setShowAlert(manejador.cambioMostrarAlerta());
    //   setAlertText("Elige un material");
    //   setAlertState(manejador.cambioEstadoDeAlerta(1));
    } else if (!cantidad || cantidad <= 0 ){// || cantidad > limite) {
      setShowAlert(manejador.cambioMostrarAlerta());
      setAlertText("La cantidad debe ser mayor a 0");
      setAlertState(manejador.cambioEstadoDeAlerta(1));
    } else {
        let order = {
          cantidad,
          // talla,
          id,
          img,
          text,
          price,
          // estampa,
          materialNumber,
          // material,
        };
        let itemData;
        if (JSON.parse(localStorage.getItem("itemData"))) {
          itemData = JSON.parse(localStorage.getItem("itemData"));
        } else {
          itemData = [];
        }
      // restarCantidad(material, cantidad);
      itemData.push(order);
      localStorage.setItem("itemData", JSON.stringify(itemData));

      setShowAlert(manejador.cambioMostrarAlerta());
      setAlertText("Se agrego al carrito :D");
      if (alertState !== "success") {
        setAlertState(manejador.cambioEstadoDeAlerta(0));
      }
    }
    setTimeout(() => {
      setShow(false);
      setShow2(false);
      setShowAlert(manejador.cambioMostrarAlerta());
    }, 1000);
  };

  const restarCantidad = async (material, cantidad) => {
    fetch("http://localhost:4000/updateQuantity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        material: material,
        cantidad: cantidad,
      }),
    });
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      data-testid="Offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Selecciona la cantidad</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body
        className=" centered-items text-center"
        data-testid="Offcanvas"
      >
        <div className="contenedor">
          {selectedImage && (
            <Image
              src={selectedImage}
              className=" img-to-size imagen-fondo"
              fluid
              thumbnail
              alt="Selected Image"
            />
          )}

          {estampadoElegido >= 0 ? (
            <Image
              className="imagen-centrada"
              src={estampados[estampadoElegido].diseño}
            />
          ) : (
            <></>
          )}
        </div>

        <br />

        <Form>
          {/* <Form.Group className="mb-3" controlId="Talla">
            <Form.Select data-testid="Talla">
              <option value="">Talla</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </Form.Select>
            <Form.Text>¿De qué talla quieres la camisa?.</Form.Text>
          </Form.Group> */}
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>Cantidad</InputGroup.Text>
              <Form.Control type="number" aria-label="Cantidad" id="cantidad" />
            </InputGroup>
            <Form.Text>Indica la cantidad de unidades.</Form.Text>
          </Form.Group>
          <br />
          {/* <Form.Group className="mb-3" controlId="Material">
            <Form.Select data-testid="Material">
              <option value="">Material</option>
              <option value="Poliester">Poliester</option>
              <option value="Lino">Lino</option>
              <option value="Lana">Lana</option>
              <option value="Algodon">Algodon</option>
            </Form.Select>
            <Form.Text>¿De qué material quieres la camisa?.</Form.Text>
          </Form.Group> */}
          <br />
          {/* <Form.Group>
            <br />
            {estampable ? (
              <Button
                onClick={() => {
                  setShow2(true);
                }}
              >
                Agregar Grupo
              </Button>
            ) : (
              <></>
            )}
          </Form.Group> */}
          <Form.Group>
            <br />
            <Button onClick={agregarAlCarrito}>
              Agregar al carrito de compras
            </Button>
          </Form.Group>
        </Form>
        <Alert
          className="mt-5"
          variant={alertState}
          show={showAlert}
          onClose={() => setShowAlert(manejador.cambioMostrarAlerta())}
          dismissible
        >
          {alertText}
        </Alert>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasProducto;
