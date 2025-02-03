import Producto from "./Producto";
import Creador from "./Creador";
import ProductoPostes from "./ProductoPostes";


class CreadorPostes extends Creador {
  crearProducto(): Producto {
    return new ProductoPostes();
  }
}

export default CreadorPostes;
