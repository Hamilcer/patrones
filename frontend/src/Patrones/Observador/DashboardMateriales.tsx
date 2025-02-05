import Observer from "./Observer";
import React from "react";
import { Col, Table } from "react-bootstrap";

// Implementación de los Observers como componentes JSX
class DashboardMateriales implements Observer {
    private data: string = "";
    update(newData: string): void {
        this.data = newData;
    }

    render(): JSX.Element {
        // Dividir el string en "Ventas" y el valor numérico
        const parsedData = this.data.split(": ");
        const key = parsedData[0]; // "Ventas"
        const value = parsedData[1]; // "70"

        return (
            <Col xs={12} md={4} style={{ padding: "10px", margin: "10px" }}>
                <h3>Dashboard Materiales</h3>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Indicador</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default DashboardMateriales;
