import { EstadoString } from "./TextoEstado";
import { Coleccion, ColeccionString, ColeccionBooleana} from "./Grupo";
import { Grupo } from "./Grupo";
import { EstadoSuccess, EstadoDanger } from "./TextoEstado";
import { EstadoBooleano } from "./LogicoEstado";
import { EstadoFalso, EstadoVerdadero } from "./LogicoEstado";

export class GestionarEstados {
    private static instancia: GestionarEstados;
    private colecciones: Coleccion[];
    private grupos: Grupo[];

    private constructor() {
        this.colecciones = [new ColeccionString(), new ColeccionBooleana()];
        this.grupos = this.colecciones.map(coleccion => coleccion.crearGrupo());
    }

    public static instanciador(): GestionarEstados {
        if (!this.instancia) {
            this.instancia = new GestionarEstados();
        }
        return this.instancia;
    }

    private crearEstado<T>(index: number, name: string, estadoTrue: T, estadoFalse: T): T {
        const estado = name === "Exito" || name === "Verdad" ? estadoTrue : estadoFalse;
        this.colecciones[index].agregar(this.grupos[index].getIndex(), estado);
        return this.colecciones[index].buscar(this.grupos[index].getIndex()) as T;
    }

    public creacionDeEstadosString(name: string): EstadoString {
        return this.crearEstado<EstadoString>(0, name, new EstadoSuccess(), new EstadoDanger());
    }

    public getgestionadorEstadosString(name: string): EstadoString {
        let estado = this.grupos[0].buscarNombre(name) as EstadoString;
        if (!estado) {
            estado = this.creacionDeEstadosString(name);
        }
        return estado;
    }

    public creacionDeEstadosBoolean(name: string): EstadoBooleano {
        return this.crearEstado<EstadoBooleano>(1, name, new EstadoVerdadero(), new EstadoFalso());
    }

    public getgestionadorEstadosBoolean(name: string): EstadoBooleano {
        let estado = this.grupos[1].buscarNombre(name) as EstadoBooleano;
        if (!estado) {
            estado = this.creacionDeEstadosBoolean(name);
        }
        return estado;
    }
}