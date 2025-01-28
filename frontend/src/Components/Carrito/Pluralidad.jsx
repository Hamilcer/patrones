function Pluralidad(prop) {

    const pluralizacion = () =>{
        return prop.data.cantidad > 1 ? ' los productos':'l producto';
    }

    const plural = () => {
        return (
          <>
            <h3 className="text-light">Información de{pluralizacion()}</h3>
            <br />
            {/* <p className="text-light">Talla de la{pluralizacion()}: {prop.data.talla}</p> */}
          </>
        );
      };

  return (
    <div>
      {plural()}
      <p className="text-light">{prop.data.text}</p>
      <p className="text-light">Precio: {prop.data.price}</p>
      {/* <p className="text-light">Material: {prop.data.material}</p> */}
      <br />
    </div>
  );
}

export default Pluralidad;
