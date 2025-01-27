import React from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useGeneral } from "../../Utils/generalContext";
import Producto from "./Producto";

class ProductoPostes extends Producto {
  render(): JSX.Element {
    const productos = [
      { id: 1, img: "/Productos/Postes/cerco-en-madera-inmunizada-de-2-20-mts.jpg", text: "Azul", price: 50000 },
    ];

    const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

    return (
      <>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="Postes">Postes: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(true);
            setEstampadoElegido(-1);
          }}
        >
          {productos.map((data) => (
            <Col key={data.id} xs="12" sm="6" md="4" lg="3" className="text-center mt-3">
              <div onClick={() => handleShow(data)}>
                <CartaComponent img={data.img} text={data.text} price={data.price} artista={undefined} style={undefined} />
              </div>
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default ProductoPostes;
