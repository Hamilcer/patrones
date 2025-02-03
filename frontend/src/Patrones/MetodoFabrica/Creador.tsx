import Producto from "./Producto";

abstract class Creador {
  abstract crearProducto(): Producto;
}

export default Creador;
