/* React-Bootstrap */
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

/* My components */
import Footer from "../Components/Footer";
import Header from "../Patrones/Header/Header";
import { DashboardServicios, DashboardMateriales, DashboardGlobal, MetricsMonitorServicios, MetricsMonitorMateriales } from "../Patrones/Observador/Observador";

export default function Reporte() {
    // Usamos 'new' para crear las instancias de las clases
    const [dashServicios] = useState(() => new DashboardServicios());
    const [dashMateriales] = useState(() => new DashboardMateriales());
    const [dashGlobal] = useState(() => new DashboardGlobal());
    const [monitorServicios] = useState(() => new MetricsMonitorServicios());
    const [monitorMateriales] = useState(() => new MetricsMonitorMateriales());

    // Dummy state para forzar el renderizado
    const [forceRender, setForceRender] = useState(false);

    // Llamado a los observadores en el useEffect
    useEffect(() => {
        monitorServicios.addObserver("dashboardServicios", dashServicios);
        monitorServicios.addObserver("dashboardGlobal", dashGlobal);
        monitorMateriales.addObserver("dashboardMateriales", dashMateriales);
        monitorMateriales.addObserver("dashboardGlobal", dashGlobal);

        // Actualizamos los valores en el intervalo
        const interval = setInterval(() => {
            const canalizacion =  Math.floor(Math.random() * 10);
            const instalacionDuctos = Math.floor(Math.random() * 10);
            const construccionAnclajes = Math.floor(Math.random() * 10);
            const sales = Math.floor(Math.random() * 10);

            // Actualización de los valores en los observadores
            monitorServicios.updateCanalizacion(canalizacion);
            monitorServicios.updateInstalacionDuctos(instalacionDuctos);
            monitorServicios.updateConstruccionAnclajes(construccionAnclajes);
            monitorMateriales.updateSales(sales);

            // Forzamos un cambio en el estado para re-renderizar
            setForceRender(prev => !prev); // Este cambio forzará el re-renderizado
        }, 5000);

        return () => clearInterval(interval); // Limpiamos el intervalo
    }, [monitorServicios, monitorMateriales, dashServicios, dashMateriales, dashGlobal]);

    return (
        <Container fluid className="align-items-center m-0 p-0">
            <Row className="width-100vw">
                <Header />
            </Row>
            <Row className="justify-content-center mt-3">
                {/* Renderizado de los componentes, que son ahora instancias */}
                {dashServicios.render()}
                {dashMateriales.render()}
                {dashGlobal.render()}
            </Row>
            <Footer />
        </Container>
    );
}
