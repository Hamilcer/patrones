
import { GestionarEstados } from "../Gestionador/GestionarEstados";
import { EstadoString } from "./EstadoString";

export class ContextoString{
    private estado: EstadoString;
    private gestionadorEstados:GestionarEstados;

    constructor(){
        this.gestionadorEstados=GestionarEstados.singleton();
        this.estado=this.gestionadorEstados.getgestionadorEstadosString("Peligro");
    }

    cambioDeEstado(){
        if(this.estado.getName()=="Exito"){
            this.estado=this.gestionadorEstados.getgestionadorEstadosString("Peligro");
        }else{
            this.estado=this.gestionadorEstados.getgestionadorEstadosString("Exito");
        }
    }

    getEstado():string{
        return this.estado.getEstado();
    }

    getEstadoC():EstadoString{
        return this.estado;
    }
}