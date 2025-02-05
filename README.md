# Requisitos para el despliegue:

- npm
- node
- PostgreSQL

## Guía para el despliegue:

### Pasos para importar el proyecto

- Abre el proyecto en Visual Studio Code.
- Crea una terminal y ejecuta el comando "npm i" en la ruta del proyecto.
- Una vez instalados los paquetes, ejecuta "cd backend" y luego "npm i".
- Crea una nueva terminal (sin cerrar la anterior), navega con "cd frontend" y ejecuta "npm i".
- Abre pgAdmin y crea una base de datos llamada "cmcenergy".
- Haz clic derecho sobre la base de datos, selecciona "Restore" y elige el archivo "backup.sql" que está en la carpeta "Postgres DB backup".
- Luego, abre el archivo "config.js" dentro de la carpeta "src" y modifica las credenciales para conectar la base de datos.
- Guarda los cambios.
- Ejecuta "npm run dev" en ambas terminales.