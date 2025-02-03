export abstract class Grupo {
    protected indexActual: number;
    protected coleccion: Coleccion;

    public abstract getIndex(): number;

    public abstract siguiente():void;

    public abstract tieneSiguiente():boolean;

    public abstract buscarNombre(name:string): any;
}

export abstract class Coleccion{
    protected array:any[];

    abstract crearGrupo(): Grupo;

    abstract getArrayLenght(): number;

    abstract buscar(number:number):any;

    abstract agregar(number:number, estado:any):void;
}


export class ColeccionBooleana extends Coleccion{
    constructor(){
        super();
        this.array= new Array(2);
    }

    crearGrupo(): Grupo {
        return new GrupoBooleano(this);
    }

    getArrayLenght():number{
        return this.array.length;
    }

    buscar(number: number): EstadoBooleano {
        return this.array[number];
    }

    agregar(number: number, EstadoBooleano:EstadoBooleano) {
        this.array[number]=EstadoBooleano;
    }
}


export class ColeccionString extends Coleccion{
    constructor(){
        super();
        this.array= new Array(2);
    }

    crearGrupo(): Grupo {
        return new GrupoString(this);
    }

    getArrayLenght():number{
        return this.array.length;
    }

    buscar(number: number): EstadoString {
        return this.array[number];
    }

    agregar(number: number, EstadoString:EstadoString) {
        this.array[number]=EstadoString;
    }
}

export class GrupoBooleano extends Grupo{
    constructor(ColeccionBooleana:ColeccionBooleana){
        super();
        this.coleccion=ColeccionBooleana;
        this.indexActual=0;
    }

    getIndex():number{
        return this.indexActual;
    };

    siguiente():EstadoBooleano{
        this.indexActual++;
        return this.coleccion.buscar(this.indexActual-1);
    };

    public tieneSiguiente(): boolean {
        if(this.indexActual<this.coleccion.getArrayLenght()){
            return true;
        }else{
            return false;
        }
    }

    public buscarNombre(name: string): EstadoBooleano {
        let estado:EstadoBooleano;
        this.indexActual=0;
        do{
            estado=this.siguiente();
            if(!estado){
                break;
            }else if(estado.getName()==name){
                break;
            }
        }while(this.tieneSiguiente())
        return estado;
    }
}

import { EstadoString } from "./TextoEstado";
import { EstadoBooleano } from "./LogicoEstado";
export class GrupoString extends Grupo{
    constructor(ColeccionString:ColeccionString){
        super();
        this.coleccion=ColeccionString;
        this.indexActual=0;
    }

    getIndex():number{
        return this.indexActual;
    };

    siguiente():EstadoString{
        this.indexActual++;
        return this.coleccion.buscar(this.indexActual-1);
    };

    public tieneSiguiente(): boolean {
        if(this.indexActual<this.coleccion.getArrayLenght()){
            return true;
        }else{
            return false;
        }
    }

    public buscarNombre(name: string): EstadoString {
        let estado:EstadoString;
        this.indexActual=0;
        do{
            estado=this.siguiente();
            if(!estado){
                break;
            }else if(estado.getName()==name){
                break;
            }
        }while(this.tieneSiguiente())
        return estado;
    }
}