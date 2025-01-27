import React from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useGeneral } from "../../Utils/generalContext";
import Producto from "./Producto";

class ProductoTransformadores extends Producto {
  render(): JSX.Element {
    const productos = [
      { id: 1, img: "/Productos/Transformadores/transformador-de-corriente-atel-media-tension-ext-20-40-5-amp-175kv.jpg", text: "transformador de corriente atel media tension", price: 50000 },
    ];

    const { handleShow, setEstampable, setEstampadoElegido } = useGeneral();

    return (
      <>
        <div className="align-self-start ps-5 pt-5 mb-5">
          <h1 data-testid="transformadores">Transformadores: </h1>
        </div>
        <Row
          className="align-items-center"
          onClick={() => {
            setEstampable(false);
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

export default ProductoTransformadores;
