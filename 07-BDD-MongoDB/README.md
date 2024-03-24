# Introducción

## Breve introducción a MongoDB y Node.js.

En resumen, MongoDB y Node.js son tecnologías que se complementan bien entre sí, ya que Node.js proporciona un entorno de ejecución eficiente para aplicaciones de servidor, mientras que MongoDB ofrece una base de datos flexible y escalable para almacenar y gestionar datos. Juntos, son una combinación popular para el desarrollo de aplicaciones web modernas y escalables.s: Conceptos básicos de MongoDB

## ¿Por qué MongoDB?

MongoDB es una opción popular para bases de datos NoSQL en aplicaciones Node.js por varias razones clave:

Flexibilidad del esquema: MongoDB utiliza un modelo de datos flexible basado en documentos JSON. A diferencia de las bases de datos relacionales, donde se define un esquema rígido antes de insertar datos, en MongoDB no es necesario definir un esquema previamente. Esto permite a los desarrolladores almacenar datos de diferentes estructuras en la misma colección, lo que facilita la adaptación a los cambios en los requisitos de la aplicación.

Escalabilidad horizontal: MongoDB está diseñado para escalar horizontalmente de manera eficiente, lo que significa que puede manejar grandes volúmenes de datos distribuyendo la carga entre múltiples servidores. Esto es especialmente útil en aplicaciones web de alto tráfico donde se necesitan bases de datos que puedan escalar fácilmente para manejar un gran número de solicitudes simultáneas.

Rendimiento: MongoDB ofrece un rendimiento rápido para operaciones de lectura y escritura, especialmente en comparación con algunas bases de datos relacionales. Utiliza un formato de almacenamiento binario eficiente llamado BSON (Binary JSON) y es capaz de realizar consultas complejas de manera eficiente.

Facilidad de uso: MongoDB es fácil de instalar y configurar, y su interfaz de línea de comandos y API de programación son fáciles de aprender. Además, MongoDB proporciona una amplia documentación y una comunidad activa que facilita el aprendizaje y la resolución de problemas.

Compatibilidad con JavaScript y Node.js: Dado que MongoDB almacena datos en formato JSON y utiliza el lenguaje de consulta de MongoDB (similar a JSON), es especialmente compatible con aplicaciones Node.js que también utilizan JavaScript. Esto simplifica el desarrollo de aplicaciones completas en JavaScript, tanto en el lado del cliente como en el del servidor.

En resumen, MongoDB es una opción popular para bases de datos NoSQL en aplicaciones Node.js debido a su flexibilidad de esquema, escalabilidad horizontal, rendimiento, facilidad de uso y compatibilidad con JavaScript y Node.js. Juntos, MongoDB y Node.js ofrecen una combinación poderosa para el desarrollo de aplicaciones web modernas y escalables.

# Instalación

## Guía de instalación de MongoDB

1. Instalación de MongoDB:

### Windows:

1. Descarga el instalador de MongoDB desde el sitio web oficial: MongoDB Download Center.
2. Ejecuta el instalador descargado y sigue las instrucciones del asistente de instalación.
3. Durante la instalación, puedes elegir la opción de instalar MongoDB Compass, una herramienta gráfica para administrar MongoDB.
4. Una vez instalado, puedes iniciar el servidor de MongoDB ejecutando mongod en una terminal.

### macOS:

1. La forma más sencilla de instalar MongoDB en macOS es a través de Homebrew.
2. Abre Terminal y ejecuta el siguiente comando para instalar Homebrew si aún no lo tienes instalado:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Luego, ejecuta el siguiente comando para instalar MongoDB:

```bash
brew tap mongodb/brew
brew install mongodb-community
```

4. Una vez instalado, puedes iniciar el servidor de MongoDB ejecutando

```bash
brew services start mongodb-community en una terminal.
```

## Linux (Ubuntu):

1. Para instalar MongoDB en Ubuntu, primero importa la clave pública utilizada por el sistema de gestión de paquetes:

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```

2. Luego, agrega el repositorio de MongoDB al sistema:

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
```

3. Actualiza el índice de paquetes e instala MongoDB:

```bash
sudo apt-get update
sudo apt-get install -y mongodb-org
```

4. Una vez instalado, puedes iniciar el servidor de MongoDB ejecutando sudo service mongod start en una terminal.

## Explicación de cómo iniciar el servidor de MongoDB localmente.

### Windows:

1. Abre el Explorador de archivos y navega hasta la carpeta donde instalaste MongoDB. Por lo general, la ruta predeterminada es C:\Program Files\MongoDB\Server\<version>\bin.
2. Dentro de la carpeta bin, busca el archivo mongod.exe y haz doble clic en él.
3. Esto abrirá una ventana de línea de comandos y comenzará a ejecutar el servidor de MongoDB. Si ves un mensaje que indica que el servidor está en ejecución y está escuchando conexiones en el puerto predeterminado (27017), entonces MongoDB se ha iniciado correctamente.

### macOS:

1. Abre Terminal.
2. Ejecuta el siguiente comando para iniciar el servidor de MongoDB:

```bash
brew services start mongodb-community
```

3. Esto iniciará el servidor de MongoDB y lo dejará en funcionamiento en segundo plano. Si el servidor se inicia correctamente, verás un mensaje indicando que el servicio se inició correctamente.

### Linux (Ubuntu):

1. Abre Terminal.
2. Ejecuta el siguiente comando para iniciar el servidor de MongoDB:

```bash
sudo service mongod start
```

3. Esto iniciará el servidor de MongoDB y lo dejará en funcionamiento en segundo plano. Si el servidor se inicia correctamente, verás un mensaje indicando que el servicio se inició correctamente.

Una vez que el servidor de MongoDB esté en funcionamiento, puedes conectarte a él desde la línea de comandos o desde tu aplicación Node.js utilizando la biblioteca de controladores de MongoDB. Recuerda que si necesitas detener el servidor de MongoDB en cualquier momento, puedes hacerlo usando los comandos apropiados para tu sistema operativo:

- Windows: Puedes cerrar la ventana de la línea de comandos donde se está ejecutando el servidor, o puedes usar el comando

```bash
mongod.exe --shutdown.
```

- macOS y Linux (Ubuntu): Puedes detener el servidor ejecutando el siguiente comando en Terminal:

```bash
sudo service mongod stop
```

# Conceptos básicos de MongoDB

MongoDB es una base de datos NoSQL que utiliza un modelo de documentos para almacenar datos en lugar de un modelo de tablas y filas como en las bases de datos relacionales. Aquí hay algunos conceptos básicos clave de MongoDB:

1. Colecciones: Una colección en MongoDB es un grupo de documentos relacionados. Es similar a una tabla en una base de datos relacional, pero no impone un esquema rígido en los documentos que contiene. Los documentos dentro de una colección pueden tener diferentes estructuras de datos.

2. Documentos: Un documento es una unidad básica de datos en MongoDB y es similar a un objeto JSON. Cada documento consiste en pares clave-valor y puede contener cualquier tipo de datos compatible con JSON, incluidos otros documentos anidados y matrices.

3. Campos: Los campos en un documento MongoDB son las claves (nombres de las propiedades) y los valores asociados. Los campos pueden ser de diferentes tipos de datos, como cadenas de texto, números, booleanos, fechas, matrices o incluso otros documentos anidados.

4. ID del documento (\_id): Cada documento en una colección MongoDB debe tener un campo especial llamado \_id, que actúa como identificador único para ese documento dentro de la colección. Si no se proporciona un valor para \_id, MongoDB generará automáticamente un valor único para él.

5. Consulta: MongoDB ofrece una amplia gama de operadores de consulta para buscar documentos en una colección. Puedes realizar consultas para encontrar documentos que coincidan con ciertos criterios de búsqueda, utilizando operadores de comparación, lógicos, de conjunto, etc.

6. Actualización: MongoDB permite actualizar documentos existentes en una colección utilizando operadores de actualización como $set, $unset, $inc, $push, etc. Puedes actualizar uno o varios documentos a la vez según tus necesidades.

7. Eliminación: Puedes eliminar documentos de una colección utilizando el método deleteOne() para eliminar un único documento o deleteMany() para eliminar varios documentos que coincidan con ciertos criterios de búsqueda.

8. Índices: Los índices en MongoDB se utilizan para mejorar el rendimiento de las consultas al permitir búsquedas rápidas y eficientes en los datos. Puedes crear índices en uno o varios campos de una colección para acelerar las consultas que se ejecutan con frecuencia.

Estos son solo algunos de los conceptos básicos de MongoDB. A medida que profundices en el uso de MongoDB, aprenderás más sobre sus características y funcionalidades avanzadas que te permiten gestionar y manipular datos de manera eficiente en tus aplicaciones.

## Descripción de la estructura de datos BSON (Binary JSON) utilizado por MongoDB.

BSON, que significa "Binary JSON" (JSON Binario), es el formato de almacenamiento de datos utilizado por MongoDB. Aunque se asemeja a JSON en términos de estructura y sintaxis, BSON agrega varias características adicionales para satisfacer las necesidades específicas de MongoDB y proporcionar una representación más eficiente de los datos. Aquí hay una descripción de la estructura de datos BSON y algunas de sus características clave:

1. Tipos de datos: BSON admite varios tipos de datos, incluidos los tipos de datos estándar de JSON (como cadenas de texto, números, booleanos, matrices y objetos) y tipos de datos adicionales específicos de MongoDB (como ObjectId, Date, BinData, etc.).

2. ObjectId: Un tipo de datos especial utilizado como identificador único para documentos en una colección MongoDB. Los ObjectId son generados automáticamente por MongoDB y garantizan la unicidad dentro de una colección.

3. Fecha: BSON incluye un tipo de datos específico para representar fechas y horas. Esto permite almacenar y manipular fechas de una manera consistente en MongoDB.

4. BinData: BSON permite el almacenamiento de datos binarios, como imágenes o archivos, utilizando el tipo de datos BinData. Puedes especificar el subtipo de datos binarios para indicar el tipo de datos almacenados (por ejemplo, imágenes JPEG, archivos PDF, etc.).

5. Referencias DBRef: BSON admite referencias a documentos en otras colecciones o bases de datos mediante el tipo de datos DBRef. Estas referencias pueden incluir el nombre de la colección, el ObjectId del documento y opcionalmente el nombre de la base de datos.

6. Documentos anidados: Al igual que JSON, BSON permite la anidación de documentos dentro de otros documentos. Esto significa que puedes tener estructuras de datos complejas y jerárquicas en MongoDB, lo que facilita el modelado de datos en aplicaciones complejas.

7. Eficiencia de almacenamiento: BSON está optimizado para el almacenamiento eficiente de datos en MongoDB. Utiliza un formato binario compacto que reduce el tamaño de los documentos en comparación con JSON, lo que resulta en un uso más eficiente del almacenamiento y una transferencia más rápida de datos entre el servidor y la aplicación.

En resumen, BSON es un formato de almacenamiento de datos eficiente y flexible utilizado por MongoDB para representar documentos de manera compacta y optimizada. Aunque se basa en gran medida en la estructura y la sintaxis de JSON, agrega características adicionales para satisfacer las necesidades específicas de MongoDB y proporcionar un rendimiento óptimo en términos de almacenamiento y transferencia de datos.

## Explicación de las colecciones y documentos en MongoDB.

En MongoDB, los datos se organizan en colecciones y documentos. Aquí tienes una explicación de cada uno:

### Colecciones:

- Una colección en MongoDB es un conjunto de documentos almacenados de manera similar a una tabla en una base de datos relacional.
- Las colecciones son equivalentes a tablas en un sistema de base de datos relacional, pero a diferencia de las tablas, las colecciones no imponen un esquema fijo para los documentos que contienen.
- Las colecciones pueden contener cualquier número de documentos y pueden crearse dinámicamente sin la necesidad de definir un esquema previo.
- Las colecciones en MongoDB se crean automáticamente cuando se inserta el primer documento en ellas.

### Documentos:

- Un documento en MongoDB es un registro de datos almacenado en formato BSON (Binary JSON).
- Los documentos son la unidad básica de almacenamiento en MongoDB y se utilizan para representar datos en forma de pares clave-valor.
- Los documentos MongoDB son similares a los objetos JSON y pueden contener diferentes tipos de datos, como cadenas de texto, números, booleanos, arreglos, otros documentos anidados, etc.
- Cada documento en una colección MongoDB puede tener una estructura diferente, lo que significa que los documentos en la misma colección pueden contener diferentes campos y tipos de datos.
- Cada documento en MongoDB debe tener un campo `_id` que actúa como identificador único para ese documento dentro de la colección. Si no se proporciona un valor para `_id`, MongoDB generará automáticamente un valor único para él.

En resumen, en MongoDB, las colecciones son grupos de documentos relacionados y los documentos son registros individuales de datos almacenados en formato BSON. Las colecciones no imponen un esquema fijo, lo que proporciona una gran flexibilidad en el modelado de datos y permite adaptarse fácilmente a los cambios en los requisitos de la aplicación. Esto hace que MongoDB sea una opción popular para el desarrollo de aplicaciones web modernas y escalables.

## Introducción a los comandos básicos de MongoDB, como insert, find, update, delete, etc.

1. Insertar documentos (insertOne() y insertMany())express myapp -e

- `insertOne(documento)`: Inserta un solo documento en una colección.
- `insertMany([documento1, documento2, ...])`: Inserta múltiples documentos en una colección.

```javascript
db.miColeccion.insertOne({ nombre: "Ejemplo", edad: 30 });
db.miColeccion.insertMany([
  { nombre: "Persona1", edad: 25 },
  { nombre: "Persona2", edad: 35 },
]);
```

2. Buscar documentos (find())

- find(filtro): Busca documentos en una colección que coincidan con el filtro especificado. Si no se proporciona ningún filtro, devuelve todos los documentos de la colección.

```javascript
db.miColeccion.find({ edad: { $gt: 25 } }); // Encuentra documentos donde la edad es mayor que 25
```

3. Actualizar documentos (updateOne() y updateMany())

- updateOne(filtro, actualización): Actualiza un solo documento que coincida con el filtro especificado.
- updateMany(filtro, actualización): Actualiza múltiples documentos que coincidan con el filtro especificado.

```javascript
db.miColeccion.updateOne({ nombre: "Ejemplo" }, { $set: { edad: 35 } }); // Actualiza la edad del documento con nombre "Ejemplo" a 35
```

4. Eliminar documentos (deleteOne() y deleteMany())

- deleteOne(filtro): Elimina un solo documento que coincida con el filtro especificado.
- deleteMany(filtro): Elimina múltiples documentos que coincidan con el filtro especificado.

```javascript
db.miColeccion.deleteOne({ nombre: "Persona1" }); // Elimina el documento con nombre "Persona1"
```

5. Contar documentos (count() y countDocuments())

- count(): Devuelve el número total de documentos en una colección.
- countDocuments(filtro): Devuelve el número de documentos que coinciden con el filtro especificado.

```javascript
db.miColeccion.count(); // Devuelve el número total de documentos en la colección
db.miColeccion.countDocuments({ edad: { $gt: 30 } }); // Devuelve el número de documentos con edad mayor que 30
```

Recuerda que estos son solo algunos de los comandos básicos de MongoDB. La biblioteca de controladores MongoDB proporciona una amplia gama de métodos para interactuar con la base de datos, permitiéndote realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y muchas más.

# Conexión a MongoDB desde Node.js

Para conectarse a MongoDB desde una aplicación Node.js, necesitarás usar un controlador de MongoDB. El controlador oficial de MongoDB para Node.js se llama mongodb y se puede instalar a través de npm. Aquí tienes los pasos básicos para conectarte a MongoDB desde Node.js:

1. `Instalar el controlador de MongoDB:`
   Antes que nada, asegúrate de tener npm instalado en tu sistema. Luego, puedes instalar el controlador de MongoDB ejecutando el siguiente comando en la terminal:

```bash
npm install mongodb
```

2. `Importar el módulo de MongoDB en tu aplicación:`
   En tu archivo de script de Node.js, importa el módulo de MongoDB:

```javascript
const { MongoClient } = require("mongodb");
```

3. `Establecer la conexión a la base de datos:`
   Para conectarte a tu base de datos MongoDB, utiliza el método connect proporcionado por el controlador de MongoDB. Este método acepta la URL de conexión de MongoDB y algunas opciones adicionales, y devuelve un objeto MongoClient que puedes usar para realizar operaciones en la base de datos.

```javascript
const url = "mongodb://localhost:27017"; // URL de conexión de MongoDB
const dbName = "miBaseDeDatos"; // Nombre de la base de datos

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error("Error al conectarse a MongoDB:", err);
      return;
    }

    console.log("Conexión establecida correctamente a MongoDB");

    const db = client.db(dbName);

    // A partir de aquí, puedes realizar operaciones en la base de datos utilizando el objeto `db`
  }
);
```

4. `Realizar operaciones en la base de datos:`
   Una vez que te hayas conectado correctamente a MongoDB, puedes utilizar el objeto db para realizar operaciones en la base de datos, como insertar documentos, buscar documentos, actualizar documentos, eliminar documentos, etc.

```javascript
// Ejemplo de inserción de un documento en una colección
const collection = db.collection("miColeccion");
collection.insertOne({ nombre: "Ejemplo", edad: 30 }, (err, result) => {
  if (err) {
    console.error("Error al insertar documento:", err);
    return;
  }
  console.log("Documento insertado correctamente:", result.insertedId);
});
```

Recuerda que la URL de conexión (`mongodb://localhost:27017`) y el nombre de la base de datos (`miBaseDeDatos`) pueden variar dependiendo de tu configuración de MongoDB. Asegúrate de ajustarlos según corresponda.

## Ejemplos de cómo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Node.js con MongoDB.

# Consultas avanzadas

## Introducción a las consultas avanzadas en MongoDB, incluyendo operadores de comparación, lógicos, de conjunto, etc.

## Ejemplos de consultas más complejas utilizando Node.js.
