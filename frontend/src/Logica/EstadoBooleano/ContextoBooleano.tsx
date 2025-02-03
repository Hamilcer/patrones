import { GestionarEstados } from "../Gestionador/GestionarEstados";
import { EstadoBooleano } from "./EstadoBooleano";

export class ContextoBooleano {
    private estado: EstadoBooleano;
    private gestionadorEstados: GestionarEstados;

    constructor() {
        this.gestionadorEstados = GestionarEstados.singleton();
        this.estado = this.gestionadorEstados.getgestionadorEstadosBoolean("Falso");
    }

    cambioDeEstado(): void {
        const nuevoEstado = this.estado.getName() === "Verdad" ? "Falso" : "Verdad";
        this.estado = this.gestionadorEstados.getgestionadorEstadosBoolean(nuevoEstado);
    }

    getEstado(): boolean {
        return this.estado.getEstado();
    }

    getEstadoC(): EstadoBooleano {
        return this.estado;
    }
}