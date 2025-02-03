/*Esta clase es la implementación del servicio real. Se conecta con el servidor para obtener los productos.*/
import ProductosService from "./ProductosService";

// Implementación real del servicio de estampados
class ProductosServiceImpl implements ProductosService {
  // Método que devuelve una promesa que resuelve un array de objetos
  async getProductos(): Promise<any> {
    return fetch("http://localhost:4000/getProductos")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
        return [];
      });
  }
}

export default ProductosServiceImpl;
