import Observer from "./Observer";
import React from "react";
import { Col } from "react-bootstrap";

// Implementación de los Observers como componentes JSX
class DashboardServicios implements Observer {
    private data: string = "";
    update(newData: string): void {
        this.data = newData;
    }
    render(): JSX.Element {
        return (
            <Col xs={12} md={4} style={{  padding: "10px", margin: "10px" }}>
                <h3>Dashboard Servicios</h3>
                <p>{this.data}</p>
            </Col>
        );
    }
}

export default DashboardServicios;