import Observer from "./Observer";
import React from "react";
import { Col } from "react-bootstrap";

class DashboardMateriales implements Observer {
    private data: string = "";
    update(newData: string): void {
        this.data = newData;
    }
    render(): JSX.Element {
        return (
            <Col xs={12} md={4} style={{  padding: "10px", margin: "10px" }}>
                <h3>Dashboard Ventas</h3>
                <p>{this.data}</p>
            </Col>
        );
    }
}

export default DashboardMateriales;