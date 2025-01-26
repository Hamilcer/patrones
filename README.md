# Pagina de compra de camisas y publicacion de estampados por parte de artistas

En esta aplicacion se encontrar una pagina que se encarga de vender camisas, conectando el artista que publica los estampados
con el cliente que tiene limites de cantidad y de presupuesto

## Aplicaciones necesarias para el despliegue:

- npm version 9.8.1
- node version 18.18.2
- PostgrSQL version 16.0
- Github desktop (opcional)

## Instrucciones para el despliegue:

### Pasos para importar el proyecto

- Despues de ejecutar Github desktop, clonar el repositorio del link https://github.com/pulidxxx/Estampa-tu-idea , o usar el que esta en la carpeta con este README
- Abrirlo en Visual Studio Code
- Crear una terminal y escribir el comando "npm i" en la direccion del proyecto
- Luego de que se instalen los paquetes escrbir "cd backend" y luego escribir "npm i"
- Crear una nueva terminal (sin cerrar la anterior), escribir el comando "cd frontend" y escribir el comando "npm i"
- Luego abrir pgAdmin crear una base de datos llamada "PaginaDeCamisasBD"
- Darle click derecho a la Base de datos > Restore, y seleccionar el archivo llamado "backup.sql" que esta ubicado dentro de la carpeta "Postgres DB backup"
- Luego abrir el archivo que se llama "config.js" dentro de la carpeta "src" y cambiarle las credenciales para conectar la base de datos
- Guardar los cambios
- Escribir "npm run dev" en cada una de las dos terminales

### Pasos para correr las pruebas

- Para correr las pruebas, es necesrio haber corrido el proyecto dem manera exitosa, luego hay que entrar en la terminal en la que se corre el frontend
- Se detiene esa terminal puede ser con "ctrl + c"
- Se escribe el comando "npm test"
- Deberia correr exitosamente
- En caso de mostrar error en dos pruebas dirigirse a frontend > src > Testing, abrir Registro.test.jsx y guardar el archivo, puede ser con "ctrl + s"
- Esto ejecutara las pruebas de nuevo y deberian sali correctas
