import React from "react";
import { Col, Row } from "react-bootstrap";
import CartaComponent from "../../Components/ComponentCarta";
import { useGeneral } from "../../Utils/generalContext";
import Producto from "./Producto";

class ProductoPostes extends Producto {
  render(): JSX.Element {
    const productos = [
      { id: 1, img: "/Productos/Postes/cerco-en-madera-inmunizada-de-2-20-mts.jpg", text: "Cerco en madera inmunizada de 2.20 mts", price: 40000 },
      { id: 2, img: "/Productos/Postes/poste-de-concreto-pretensado-de-8-metros-510-kg.jpg", text: "Poste concreto pretensado de 8 metros", price: 350000 },
      { id: 3, img: "/Productos/Postes/poste-metalico-conico-8-metros-para-alumbrado-publico.jpg", text: "Poste metalico conico 8 metros", price: 78900 },
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
