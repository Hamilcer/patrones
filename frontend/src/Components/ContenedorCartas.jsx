// import React from "react";
// import CreadorEstampable from "../Patrones/MetodoFabrica/CreadorEstampable";
import CreadorTransformadores from "../Patrones/MetodoFabrica/CreadorTransformadores";
import CreadorPostes from "../Patrones/MetodoFabrica/CreadorPostes";
// import CreadorCajasYTableros from "../Patrones/MetodoFabrica/CreadorCajasYTableros"; // Asegúrate de importar esta clase si existe

// eslint-disable-next-line react/prop-types
function ContenedorCartas({ tipo }) {
  let creador;

  switch (tipo) {
    case "transformadores":
      creador = new CreadorTransformadores();
      break;
    case "postes":
      creador = new CreadorPostes();
      break;
    // case "cajas-y-tableros":
    //   creador = new CreadorCajasYTableros(); // Asegúrate de tener esta clase definida
    //   break;
    default:
      return <div></div>; // Opcional: manejar el caso de un tipo desconocido
  }

  const producto = creador.crearProducto();

  return <>{producto.render()}</>;
}

export default ContenedorCartas;
