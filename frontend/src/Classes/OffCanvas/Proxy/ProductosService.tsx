/*Define el método getProductos(), que devuelve una promesa con los productos.
Permite que diferentes clases implementen este servicio sin que el código cliente tenga que conocer los detalles internos.*/ 
interface ProductosService {
  getProductos(): Promise<any>;
}

export default ProductosService;
