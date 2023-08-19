# API de Bares

Esta es una API de bares diseñada para gestionar información sobre diferentes bares, su ubicación, menú y fotos. Utiliza Node.js, Express.js, Mongoose y MongoDB para su funcionamiento.

## Pasos para usar la API
1.  **Instalación**: Después de clonar el repositorio, navega a la carpeta del proyecto en tu terminal y ejecuta el siguiente comando para instalar las dependencias necesarias:
  npm install


2.  **Base de datos**: MongoDB
Asegúrate de tener MongoDB instalado en tu máquina. Si no lo tienes, sigue estos pasos para descargarlo:
Ve a https://www.mongodb.com/try/download/community y elige la versión adecuada para tu sistema operativo.

Luego, crea una base de datos llamada dbbares y una colección llamada bars donde se almacenarán los datos de los bares.


3.  **Ejecución y Pruebas**:
Pruebas Automatizadas: Puedes ejecutar las pruebas automatizadas de la API utilizando el siguiente comando:
  npm run test


4.  **Endpoints de la API**
A continuación se presentan los endpoints disponibles en esta API:

GET /api/bares: Obtiene una lista de todos los bares en la base de datos.
GET /api/bares/:barName: Obtiene los detalles de un bar específico por su nombre.
POST /api/bares: Agrega un nuevo bar a la base de datos.
PUT /api/bares/:barId: Actualiza la información de un bar existente.
DELETE /api/bares/:barId: Elimina un bar de la base de datos.


Insertar un Elemento de prueba: Para insertar un nuevo bar en la colección, puedes usar el script pruebas/pruebaBar.js. Ejecuta el siguiente comando en tu terminal:
  node pruebas/pruebaBar.js
