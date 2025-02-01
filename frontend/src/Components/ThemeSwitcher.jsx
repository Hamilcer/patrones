import { useEffect } from "react";

function ThemeSwitcher() {
  // Función para aplicar el tema light - ahora solo se puede escoger el light osea blanco xd
  const setTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", "light");
  };

  useEffect(() => {
    // Aplicar el tema light al montar el componente
    setTheme();
  }, []);

  return (
    <div data-testid="ThemeSwitcher">
      {/* Elimine El boton */}
    </div>
  );
}

export default ThemeSwitcher;