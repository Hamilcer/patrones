
/*Este archivo implementa un proxy que actúa como intermediario entre el cliente y el servicio real.*/
import ProductosService from "./ProductosService";
import ProductosServiceImpl from "./ProductosServiceImpl";

// Proxy para el acceso a los Productos
class ProductosProxy implements ProductosService {
  private ProductosService: ProductosService;
  private ProductosCache: any[];

  constructor() {
    this.ProductosService = new ProductosServiceImpl();
    this.ProductosCache = [];
  }

  // Método que devuelve los Productos si no existen en caché, y si existen, los devuelve de la caché
  async getProductos(): Promise<any> {
    if (this.ProductosCache.length === 0) {
      this.ProductosCache = await this.ProductosService.getProductos();
    }
    return this.ProductosCache;
  }
}

export default ProductosProxy;