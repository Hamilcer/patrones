import Producto from "./Producto";
import Creador from "./Creador";
import ProductoTransformadores from "./ProductoTransformadores";


class CreadorTransformadores extends Creador {
  crearProducto(): Producto {
    return new ProductoTransformadores();
  }
}

export default CreadorTransformadores;
