export interface EstadoString {
    getName(): string;
    getEstado() : string;
}


import { GestionarEstados } from "./GestionarEstados";

export class ContextoString{
    private estado: EstadoString;
    private gestionadorEstados:GestionarEstados;

    constructor(){
        this.gestionadorEstados=GestionarEstados.instanciador();
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

export class EstadoDanger implements EstadoString{
    private static instancia: EstadoDanger;
    private estado:string;
    private name:string;

    constructor(){
        this.name="Peligro";
        this.estado="danger";
    }

    getName(): string {
        return this.name;
    }

    getEstado(): string {
        return this.estado;
    }
}

export class EstadoSuccess implements EstadoString{
    private static instancia: EstadoSuccess;
    private estado:string;
    private name:string;

    constructor(){
        this.name="Exito";
        this.estado="success";
    }

    getName(): string {
        return this.name;
    }

    getEstado(): string {
        return this.estado;
    }
}