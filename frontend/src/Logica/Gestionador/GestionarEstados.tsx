import { EstadoString } from "../EstadoString/EstadoString";
import { Coleccion } from "../Iterador/Coleccion";
import { ColeccionString } from "../Iterador/ColeccionString";
import { Iterador } from "../Iterador/Iterador";
import { EstadoSuccess } from "../EstadoString/EstadoSuccess";
import { EstadoDanger } from "../EstadoString/EstadoDanger";
import { ColeccionBooleana } from "../Iterador/ColeccionBooleana";
import { EstadoBooleano } from "../EstadoBooleano/EstadoBooleano";
import { EstadoFalso } from "../EstadoBooleano/EstadoFalso";
import { EstadoVerdadero } from "../EstadoBooleano/EstadoVerdadero";

export class GestionarEstados {
    private static instancia: GestionarEstados;
    private colecciones: Coleccion[];
    private iteradores: Iterador[];

    private constructor() {
        this.colecciones = [new ColeccionString(), new ColeccionBooleana()];
        this.iteradores = this.colecciones.map(coleccion => coleccion.crearIterador());
    }

    public static singleton(): GestionarEstados {
        if (!this.instancia) {
            this.instancia = new GestionarEstados();
        }
        return this.instancia;
    }

    private crearEstado<T>(index: number, name: string, estadoTrue: T, estadoFalse: T): T {
        const estado = name === "Exito" || name === "Verdad" ? estadoTrue : estadoFalse;
        this.colecciones[index].agregar(this.iteradores[index].getIndex(), estado);
        return this.colecciones[index].buscar(this.iteradores[index].getIndex()) as T;
    }

    public creacionDeEstadosString(name: string): EstadoString {
        return this.crearEstado<EstadoString>(0, name, new EstadoSuccess(), new EstadoDanger());
    }

    public getgestionadorEstadosString(name: string): EstadoString {
        let estado = this.iteradores[0].buscarNombre(name) as EstadoString;
        if (!estado) {
            estado = this.creacionDeEstadosString(name);
        }
        return estado;
    }

    public creacionDeEstadosBoolean(name: string): EstadoBooleano {
        return this.crearEstado<EstadoBooleano>(1, name, new EstadoVerdadero(), new EstadoFalso());
    }

    public getgestionadorEstadosBoolean(name: string): EstadoBooleano {
        let estado = this.iteradores[1].buscarNombre(name) as EstadoBooleano;
        if (!estado) {
            estado = this.creacionDeEstadosBoolean(name);
        }
        return estado;
    }
}