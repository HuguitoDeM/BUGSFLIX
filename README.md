
# BUGSFLIX

Esta es una app en la cual se implementa node.js y react.js para realizar una busqueda de peliculas en una larga lista en una base de datos


## Instalación

Bajar el repositorio con un fork o simplemente descargando los archivos desde GitHub.
Abrir la carpeta del proyecto en su terminal favorito (puede ser VS Code, Terminal local de tu computador, o el IDE de tu preferencia).
Primero, hay que instalar dependencias, tanto en FE como en BE. Por lo tanto, hacemos lo siguiente:
Ejecutamos:
```bash
cd Front-end
```
Seguido de:
```bash
npm install
```
Hacemos lo mismo con el backend.

Escribir en terminal (dentro del directorio del proyecto)
```bash
 cd backend
```
Una vez dentro del directorio de backend, corremos el comando:
 ```bash
 npm run dev
```
Con los comandos previamente ejecutados, el servidor se enciende localmente
Al finalizar con eso, abrimos otra terminal, y corremos lo siguiente:
 ```bash
 cd Front-end
```
 
Una vez dentro del directorio de backend, corremos el comando:
cd frontend
```bash
 npm run dev
```
Una vez instaladas las dependencias, para correr la aplicación se debe escribir en terminal dentro de frontend: npm run dev
## .env

en el .env esto seria un ejemplo de como seria: 

```bash
port = PuertoDeLaApp
DB_USER = UsuarioBaseDeDatosPostrgresql
DB_PASSWORD = ContraseñaDelUsuarioPosrgresql
DB_HOST = HostingDeLaBaseDeDatos
DB_NAME = NombreBaseDeDatos
DB_PORT =  PuertoDeLaBaseDeDatos
```

para ejecutarlo de forma local un ejemplo: 
```bash
port = 5432
DB_USER = postgres
DB_PASSWORD = 1234
DB_HOST = 127.0.0.1
DB_NAME = films
DB_PORT =  5432
```