import Observer from "./Observer";
import React from "react";
import { Col } from "react-bootstrap";

class DashboardGlobal implements Observer {
    private data: string = "";

    update(newData: string): void {
        this.data = `${this.data}\n-${newData}`;
    }

    render(): JSX.Element {
        return (
            <Col xs={12} md={4} style={{ padding: "10px", margin: "10px" }}>
                <h3>Dashboard Global</h3>
                <p style={{ whiteSpace: "pre-line" }}>{this.data}</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Col>
        );
    }
}

export default DashboardGlobal;