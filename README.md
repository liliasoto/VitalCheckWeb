# VitalCheckWeb

## Descripción del proyecto

VitalCheckWeb es una aplicación web diseñada para monitorear y gestionar los niveles de oxígeno y pulso cardiaco. Está desarrollada con Vite y React para el frontend, y Node.js con Express para la API. La aplicación permite a los usuarios visualizar estadísticas y añadir contactos relevantes.

### Estructura y uso del proyecto

- **Home**: Página principal desde donde se puede navegar a otras secciones.
- **Ver Estadísticas**: En esta sección se visualizan los niveles de oxígeno y pulso cardiaco. Se muestran los promedios y gráficos que reflejan los cambios en el tiempo.
- **Añadir Contacto**: Permite añadir un contacto nuevo con su nombre, apellido, correo electrónico y rol.
- **Error Page**: Muestra un mensaje de error cuando se navega a una ruta no existente.

## Instrucciones de Instalación y Ejecución

### Clonar el repositorio del frontend

```bash
git clone https://github.com/liliasoto/VitalCheckWeb
cd VitalCheckWeb
npm install
```
### Ejecutar el FrontEnd
```bash
cd VitalCheckWeb
npm run dev
```
### Clonar el repositorio de la API
```bash
git clone https://github.com/liliasoto/node-sql-api
cd node-sql-api
npm install
```
### Configurar y ejecutar el contenedor de Docker para SQL Server
Primero se debe tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Después en la carpeta de la API correr el siguiente comando, será para tener una instancia mssql-server para SQL Server 2022
```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong#Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```
### Preparar base de datos
Ejecutar los querys señalados con el comentario --INSTRUCCIONES PARA VITALCHECK WEB que están en el archivo db.sql en la carpeta Database
### Ejecutar la API
Asegurate de tener corriendo el contenedor.
```bash
npm run dev
```

## Prototipos de las vistas y cómo utilizarlas
### Home
En la página de inicio, hay dos botones en la parte superior derecha:

- **Ver estadísticas:** Navega a la página de estadísticas.
- **Añadir contacto:** Navega al formulario para añadir un contacto.

### Ver Estadísticas
Esta sección toma los datos de la API y muestra:

- **Promedio de niveles de oxígeno:** Indica si el nivel es normal o muestra diferentes grados de hipoxia.
- **Promedio de pulso cardiaco:** Indica si el nivel es excelente, bueno, normal o inadecuado.
- **Gráficos:** Muestra la evolución de los niveles de oxígeno y pulso cardiaco en gráficos de líneas y barras.

### Añadir Contacto
El formulario permite añadir nuevos contactos a la API. Se validan los siguientes campos:

- **Nombre:** Nombre del contacto.
- **Apellido:** Apellido del contacto.
- **Email:** Dirección de correo electrónico válida.
- **Rol:** Rol del contacto (Familiar, Amigo, Personal de salud).

Se verifica que todos los campos estén completos y que el email tenga un formato válido antes de enviar el formulario.

## Descripción de las pruebas y cómo ejecutarlas
Las pruebas están implementadas utilizando Vitest. Para ejecutarlas, utiliza el siguiente comando:
```bash
npm run test
```
### Pruebas implementadas
- **Home component:** Prueba que el componente Home se renderiza correctamente.
- **AnadirContacto Component:** Prueba que el componente Añadir Contacto se renderiza correctamente y que se puede agregar un contacto nuevo mediante el formulario.
- **ErrorPage Component:** Prueba que el componente de la página de error se renderiza correctamente.
- **VerEstadisticas Component:** Prueba que el componente Ver Estadísticas se renderiza correctamente.
- **Simulación de evento de usuario:** Prueba que simula la entrada de datos en el formulario y la acción de agregar un contacto, verificando que se llama a la API correctamente.
