import { Subject } from './Subject';
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

export { MetricsMonitorServicios };