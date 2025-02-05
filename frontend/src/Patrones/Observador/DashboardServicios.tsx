import Observer from "./Observer";
import React from "react";
import { Col, Table } from "react-bootstrap";

// Implementación de los Observers como componentes JSX
class DashboardServicios implements Observer {
    private data: string = "";
    update(newData: string): void {
        this.data = newData;
    }
    render(): JSX.Element {
        const parsedData = this.data.split(", ").map((item) => {
            const [key, value] = item.split(": ");
            return { key, value };
        });
        return (
            <Col xs={12} md={4} style={{ padding: "10px", margin: "10px" }}>
                <h3>Dashboard Servicios</h3>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Servicio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parsedData.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.key}</td>
                                <td>{entry.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default DashboardServicios;