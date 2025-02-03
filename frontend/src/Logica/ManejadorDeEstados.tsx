import { ContextoBooleano } from "./LogicoEstado";
import { ContextoString } from "./TextoEstado";

export class ManejadorDeEstados {
    private contextoEstadoDeAlerta: ContextoString;
    private contextoMostrarAlerta: ContextoBooleano;

    constructor() {
        this.contextoEstadoDeAlerta = new ContextoString();
        this.contextoMostrarAlerta = new ContextoBooleano();
    }

    cambioEstadoDeAlerta(num: number): string {
        const estadoActual = this.contextoEstadoDeAlerta.getEstado();

        if ((num === 1 && estadoActual !== "danger") || num !== 1) {
            this.contextoEstadoDeAlerta.cambioDeEstado();
        }

        return this.contextoEstadoDeAlerta.getEstado();
    }

    cambioMostrarAlerta(): boolean {
        this.contextoMostrarAlerta.cambioDeEstado();
        return this.contextoMostrarAlerta.getEstado();
    }

    getEstadoDeAlerta(): string {
        return this.contextoEstadoDeAlerta.getEstado();
    }

    getMostrarAlerta(): boolean {
        return this.contextoMostrarAlerta.getEstado();
    }
}