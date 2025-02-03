// Orden abstracto del que heredan los demas ordenes
export abstract class Orden {
  abstract ejecutar(): Promise<void>;
}



// Orden para crear una camisa
export class ComandoCrearCamisa extends Orden {
  private itemData: ItemData[];

  // Constructor de la clase que pide al arreglo itemData que contiene a las camisas del usuario
  constructor(itemData: ItemData[]) {
    super();
    this.itemData = itemData;
  }

  // Llama al metodo de la clase Receptor para crear las camisas
  public async ejecutar(): Promise<void> {
    await Receptor.createShirts(this.itemData);
  }
}


// Orden para crear la informacion de envio
export class ComandoCrearInformacion extends Orden {
  private datosEnvio: DatosEnvio;

  constructor(datosEnvio: DatosEnvio) {
    super();
    this.datosEnvio = datosEnvio;
  }

  // Llama al metodo de la clase Receptor para crear la informacion de envio
  public async ejecutar(): Promise<void> {
    await Receptor.createInformations(this.datosEnvio);
  }
}




export class ComandoPago extends Orden {
  private infoPago: { fechaPago: string };

  // Se pide la inforamcion de pago para realizar el pago
  constructor(infoPago: { fechaPago: string }) {
    super();
    this.infoPago = infoPago;
  }

  public async ejecutar(): Promise<void> {
    await Receptor.processPayment(this.infoPago);
  }
}




// Orden para crear un pedido
export class ComandoPedido extends Orden {
  private detallesPedido: DetallesPedido;

  // Constructor de la clase que pide los detalles del pedido
  constructor(detallesPedido: DetallesPedido) {
    super();
    this.detallesPedido = detallesPedido;
  }

  // Llama al metodo de la clase Receptor para crear el pedido
  public async ejecutar(): Promise<void> {
    await Receptor.createOrder(this.detallesPedido);
  }
}


// El invocador se encarga de ejecutar los ordenes
export class Invocador {
  private ordenes: Orden[] = [];

  // Agrega un orden a la lista de ordenes
  public agregarComando(orden: Orden): void {
    this.ordenes.push(orden);
  }

  // Ejecuta los ordenes en orden de llegada
  public async ejecutarComandos(): Promise<void> {
    for (const orden of this.ordenes) {
      await orden.ejecutar();
    }
  }
}


import DatosEnvio from "../Tipos/DatosEnvio";
import DetallesPedido from "../Tipos/DetallesPedido";
import ItemData from "../Tipos/ItemData";

// Clase que se encarga de realizar las peticiones a la base de datos
export namespace Receptor {
  // Funcion asincrónica que se encarga de enviar los datos de envio a la base de datos
  export async function createInformations(
    datosEnvio: DatosEnvio
  ): Promise<void> {
    await fetch(`http://localhost:4000/createInformations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosEnvio),
    });
  }

  export async function processPayment(infoPago: {
    fechaPago: string;
  }): Promise<void> {
    await fetch("http://localhost:4000/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fechaPago: infoPago.fechaPago,
        valor: localStorage.getItem("precioTotalIVA"),
      }),
    });
  }

  export async function createOrder(
    detallesPedido: DetallesPedido
  ): Promise<void> {
    await fetch("http://localhost:4000/createOrders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(detallesPedido),
    });
  }

  export async function createShirts(itemData: ItemData[]): Promise<void> {
    await fetch("http://localhost:4000/createShirts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });
  }
}
