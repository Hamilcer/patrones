import React, { Component , useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

// Interface Observer
interface Observer {
    update(data: string): void;
    render(): JSX.Element;
}

// Clase abstracta Subject (la que emite cambios)
abstract class Subject {
    private observers: Map<string, Observer> = new Map();

    addObserver(id: string, observer: Observer): void {
        this.observers.set(id, observer);
    }

    removeObserver(id: string): void {
        this.observers.delete(id);
    }

    protected notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Implementación del Subject para los Servicios
class MetricsMonitorServicios extends Subject {
    private canalizacion: number = 0;
    private instalacionDuctos: number = 0;
    private construccionAnclajes: number = 0;

    updateCanalizacion(newCanalizacion: number): void {
        this.canalizacion += newCanalizacion;
        this.notifyObservers(`Canalización: ${this.canalizacion}, Instalación Ductos: ${this.instalacionDuctos}, Construcción Anclajes: ${this.construccionAnclajes}`);
    }

    updateInstalacionDuctos(newInstalacionDuctos: number): void {
        this.instalacionDuctos += newInstalacionDuctos;
        this.notifyObservers(`Canalización: ${this.canalizacion}, Instalación Ductos: ${this.instalacionDuctos}, Construcción Anclajes: ${this.construccionAnclajes}`);
    }

    updateConstruccionAnclajes(newConstruccionAnclajes: number): void {
        this.construccionAnclajes += newConstruccionAnclajes;
        this.notifyObservers(`Canalización: ${this.canalizacion}, Instalación Ductos: ${this.instalacionDuctos}, Construcción Anclajes: ${this.construccionAnclajes}`);
    }
}

// Implementación del Subject para los Materiales
class MetricsMonitorMateriales extends Subject {
    private sales: number = 0;

    updateSales(newSales: number): void {
        this.sales += newSales;
        this.notifyObservers(`Ventas: ${this.sales}`);
    }
}

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

 

// Exportar los observadores y monitores para ser usados en Reporte.jsx
export { DashboardServicios, DashboardMateriales, DashboardGlobal, MetricsMonitorServicios, MetricsMonitorMateriales };