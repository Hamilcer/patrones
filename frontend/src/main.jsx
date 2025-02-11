import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoutes from "./Utils/ProtectedRoutes.jsx";
import Login from "./Pages/Login.jsx";
import Registro from "./Pages/Registro.jsx";
import Catalogo from "./Pages/Catalogo";
import Pago from "./Pages/Pago.tsx";
import Carrito from "./Pages/Carrito.jsx";
import FormEstampado from "./Pages/FormEstampado.jsx";
import CatalogoServicios from "./Pages/CatalogoServicios.jsx";
import Reporte from "./Pages/Reporte.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Catalogo />} />
      <Route path="/catalogoServicios" element={<CatalogoServicios />} />
     <Route path="/reporte" element={ <Reporte/> }></Route> 
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Route>

      <Route path="/" element={<ProtectedRoutes rolAutorizado="Cliente" />}>
        <Route path="interfazPago" element={<Pago />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>

      <Route path="/" element={<ProtectedRoutes rolAutorizado="Administrador" />}>
        <Route path="formEstampado" element={<FormEstampado />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
