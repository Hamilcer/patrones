import { Subject } from './Subject';

// Implementación del Subject para los Materiales
class MetricsMonitorMateriales extends Subject {
    private sales: number = 0;

    updateSales(newSales: number): void {
        this.sales += newSales;
        this.notifyObservers(`Ventas: ${this.sales}`);
    }
}

export { MetricsMonitorMateriales };