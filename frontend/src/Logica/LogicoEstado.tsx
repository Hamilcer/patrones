export interface EstadoBooleano {
    /**
     * Obtiene el nombre del estado.
     * @returns El nombre del estado (por ejemplo, "Verdad" o "Falso").
     */
    getName(): string;

    /**
     * Obtiene el valor booleano del estado.
     * @returns El valor booleano del estado (true o false).
     */
    getEstado(): boolean;
}

import { GestionarEstados } from "./GestionarEstados";

export class ContextoBooleano {
    private estado: EstadoBooleano;
    private gestionadorEstados: GestionarEstados;

    constructor() {
        this.gestionadorEstados = GestionarEstados.instanciador();
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

export class EstadoFalso implements EstadoBooleano{
    private static instancia: EstadoFalso;
    private estado:boolean;
    private name:string;

    constructor(){
        this.name="Falso";
        this.estado=false;
    }

    getName(): string {
        return this.name;
    }

    getEstado(): boolean {
        return this.estado;
    }
}

export class EstadoVerdadero implements EstadoBooleano{
    private static instancia: EstadoVerdadero;
    private estado:boolean;
    private name:string;

    constructor(){
        this.name="Verdad";
        this.estado=true;
    }

    getName(): string {
        return this.name;
    }

    getEstado(): boolean {
        return this.estado;
    }
}