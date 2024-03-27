# Mongoose:

# Introducción a Mongoose como una biblioteca de modelado de objetos MongoDB para Node.js

# ¿Qué es Mongoose?

Mongoose es una biblioteca de modelado de objetos MongoDB para Node.js que facilita la interacción con una base de datos MongoDB utilizando un enfoque orientado a objetos. En esencia, Mongoose proporciona una capa de abstracción sobre la API nativa de MongoDB, lo que simplifica el proceso de definir modelos, validar datos, ejecutar consultas y gestionar relaciones entre datos en una aplicación Node.js.

# Características principales de Mongoose

# Esquemas y modelos:

En Mongoose, los datos se organizan utilizando esquemas, que definen la estructura de los documentos en una colección de MongoDB. Estos esquemas se utilizan para crear modelos, que son instancias de las colecciones de MongoDB que pueden interactuar con la base de datos.

# Validación de datos

Mongoose proporciona funciones de validación que permiten definir reglas de validación para los datos antes de que se guarden en la base de datos. Esto garantiza la integridad de los datos y ayuda a prevenir errores y datos incorrectos en la base de datos.

# Middleware

Mongoose permite definir funciones de middleware que se ejecutan antes o después de ciertos eventos, como la validación, la inserción o la actualización de documentos. Esto proporciona un mecanismo flexible para ejecutar código personalizado en respuesta a eventos específicos.

# Consultas flexibles

Mongoose ofrece una amplia gama de métodos para realizar consultas en la base de datos, incluyendo métodos para encontrar documentos, actualizarlos, eliminarlos y realizar agregaciones. Estos métodos pueden encadenarse juntos para construir consultas complejas.

Relaciones entre documentos: Mongoose facilita la definición de relaciones entre documentos en MongoDB, ya sea mediante referencias o mediante la inclusión de documentos embebidos (subdocumentos) dentro de otros documentos. Esto permite modelar relaciones de uno a uno, uno a muchos y muchos a muchos entre datos.

# Por qué usar Mongoose:

Simplicidad y productividad: Mongoose simplifica la interacción con MongoDB al proporcionar una API más fácil de usar que la API nativa de MongoDB. Esto permite a los desarrolladores ser más productivos y centrarse en la lógica de la aplicación en lugar de en los detalles de bajo nivel de la base de datos.

# Validación y consistencia de datos:

La capacidad de definir reglas de validación en los esquemas de Mongoose ayuda a garantizar que los datos almacenados en la base de datos cumplan con ciertos criterios, lo que mejora la consistencia y la integridad de los datos.

# Abstracción de la complejidad de MongoDB

Mongoose oculta gran parte de la complejidad de MongoDB, como la gestión de conexiones, la creación de índices y la validación de datos, lo que facilita el desarrollo de aplicaciones Node.js que utilizan MongoDB como base de datos.

En resumen, Mongoose es una herramienta poderosa y versátil que simplifica el desarrollo de aplicaciones Node.js que utilizan MongoDB como base de datos, proporcionando una capa de abstracción sobre la API nativa de MongoDB y facilitando tareas como la definición de modelos, la validación de datos y la ejecución de consultas.

# Instalación y configuración de Mongoose

Para comenzar a utilizar Mongoose en tu proyecto de Node.js, primero debes instalarlo. Puedes hacerlo fácilmente utilizando npm (Node Package Manager) ejecutando el siguiente comando en la terminal en el directorio raíz de tu proyecto:

```bash
npm install mongoose
```

Si prefieres utilizar yarn, también puedes instalar Mongoose ejecutando el siguiente comando:

```bash
yarn add mongoose
```

Este comando instalará Mongoose y todas sus dependencias en tu proyecto.

## Configuración de Mongoose

Una vez que hayas instalado Mongoose, necesitarás configurarlo en tu aplicación Node.js para poder conectarte a tu base de datos MongoDB. Aquí tienes un ejemplo básico de cómo puedes configurar y conectar Mongoose en tu aplicación:

```javascript
// Importa la biblioteca Mongoose
const mongoose = require("mongoose");

// Define la URL de conexión a tu base de datos MongoDB
const dbURI = "mongodb://localhost:27017/tu_base_de_datos";

// Conecta a la base de datos MongoDB utilizando Mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Maneja los eventos de conexión exitosa y de error
const db = mongoose.connection;
db.on("connected", () => {
  console.log(`Conexión establecida a ${dbURI}`);
});
db.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err);
});
db.on("disconnected", () => {
  console.log("Desconectado de la base de datos");
});

// Maneja el cierre de la aplicación y desconecta de la base de datos
process.on("SIGINT", () => {
  db.close(() => {
    console.log("Conexión a la base de datos cerrada");
    process.exit(0);
  });
});
```

En este ejemplo:

Importamos la biblioteca Mongoose en nuestra aplicación.
Definimos la URL de conexión a nuestra base de datos MongoDB. Asegúrate de reemplazar

```
mongodb://localhost:27017/tu_base_de_datos
```

con la URL de tu propia base de datos.

Utilizamos el método mongoose.connect() para establecer una conexión a la base de datos utilizando la URL de conexión que definimos anteriormente.
Manejamos eventos para la conexión exitosa, errores de conexión y desconexión de la base de datos.
Manejamos la señal SIGINT (que se activa cuando se cierra la aplicación) para desconectarnos de la base de datos antes de salir de la aplicación.
Con esta configuración básica, tu aplicación Node.js debería estar lista para conectarse a tu base de datos MongoDB utilizando Mongoose. A partir de aquí, puedes comenzar a definir esquemas, crear modelos y realizar consultas utilizando Mongoose en tu aplicación.

# Esquemas y modelos en Mongoose

En Mongoose, los esquemas y modelos son componentes fundamentales que se utilizan para definir la estructura de los datos y trabajar con ellos en una aplicación Node.js. Los esquemas definen la forma de los documentos en una colección de MongoDB, mientras que los modelos son instancias de estas colecciones que nos permiten interactuar con la base de datos de una manera orientada a objetos.

## Definición de Esquemas en Mongoose

Un esquema en Mongoose es una descripción de la estructura de los documentos que se almacenarán en una colección de MongoDB. Se define utilizando el constructor Schema proporcionado por Mongoose, y puede incluir la especificación de los campos que componen el documento, así como opciones adicionales como validadores y configuraciones de índices.

Aquí tienes un ejemplo básico de cómo puedes definir un esquema en Mongoose:

```javascript
const mongoose = require("mongoose");

// Define el esquema para un documento de tipo Producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  descripcion: String,
  categoria: {
    type: String,
    enum: ["Electrónica", "Ropa", "Hogar", "Alimentación"],
  },
});

// Crea un modelo a partir del esquema definido
const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
```

En este ejemplo:

Importamos la biblioteca Mongoose en nuestro archivo.
Utilizamos el constructor mongoose.Schema para definir un nuevo esquema llamado productoSchema.
Dentro del esquema, definimos varios campos como nombre, precio, descripcion y categoria, junto con sus tipos de datos y opciones de validación.
Finalmente, creamos un modelo llamado Producto utilizando el método mongoose.model, que asociará este esquema con una colección llamada "productos" en nuestra base de datos.

## Uso de Modelos en Mongoose

Una vez que hemos definido un esquema en Mongoose, podemos utilizarlo para crear modelos que representen instancias específicas de documentos en nuestra base de datos. Los modelos proporcionan métodos para realizar operaciones CRUD (Create, Read, Update, Delete) en los documentos de la colección asociada.

Aquí tienes un ejemplo de cómo podemos utilizar el modelo Producto que definimos anteriormente para realizar operaciones CRUD:

```javascript
const Producto = require("./models/producto");

// Crear un nuevo producto
const nuevoProducto = new Producto({
  nombre: "Teléfono móvil",
  precio: 500,
  descripcion: "Teléfono inteligente de última generación",
  categoria: "Electrónica",
});

// Guardar el nuevo producto en la base de datos
nuevoProducto
  .save()
  .then((resultado) => {
    console.log("Producto guardado exitosamente:", resultado);
  })
  .catch((error) => {
    console.error("Error al guardar el producto:", error);
  });

// Buscar todos los productos en la base de datos
Producto.find()
  .then((productos) => {
    console.log("Productos encontrados:", productos);
  })
  .catch((error) => {
    console.error("Error al buscar productos:", error);
  });

// Actualizar un producto existente
Producto.findOneAndUpdate(
  { nombre: "Teléfono móvil" },
  { precio: 600 },
  { new: true }
)
  .then((resultado) => {
    console.log("Producto actualizado exitosamente:", resultado);
  })
  .catch((error) => {
    console.error("Error al actualizar el producto:", error);
  });

// Eliminar un producto existente
Producto.findOneAndDelete({ nombre: "Teléfono móvil" })
  .then((resultado) => {
    console.log("Producto eliminado exitosamente:", resultado);
  })
  .catch((error) => {
    console.error("Error al eliminar el producto:", error);
  });
```

En este ejemplo:

Importamos el modelo Producto que definimos anteriormente en nuestro archivo.
Creamos una nueva instancia de Producto utilizando el constructor de modelos y la guardamos en la base de datos utilizando el método save().
Utilizamos métodos de consulta como find() y métodos de actualización y eliminación como findOneAndUpdate() y findOneAndDelete() respectivamente para interactuar con la base de datos utilizando el modelo Producto.
Con el uso de esquemas y modelos en Mongoose, podemos definir la estructura de nuestros datos y trabajar con ellos de manera eficiente en nuestra aplicación Node.js, facilitando así el desarrollo de aplicaciones escalables y mantenibles.

# Manejo de promesas o el uso de funciones de devolución de llamada para procesar los resultados de las consultas.

Para manejar las promesas o usar funciones de devolución de llamada en Mongoose para procesar los resultados de las consultas, puedes utilizar los métodos proporcionados por Mongoose que devuelven promesas o aceptan funciones de devolución de llamada como argumento. Aquí tienes ejemplos de cómo hacerlo:

## Manejo de Promesas

Mongoose utiliza Promesas nativas de JavaScript para manejar operaciones asincrónicas. Puedes encadenar métodos .then() y .catch() para manejar los resultados exitosos y los errores respectivamente. Por ejemplo:

```javascript
const Producto = require("./models/producto");

// Leer todos los productos y manejar el resultado con promesas
Producto.find()
  .then((productos) => {
    console.log("Productos encontrados:", productos);
  })
  .catch((error) => {
    console.error("Error al buscar productos:", error);
  });
```

# Uso de Funciones de Devolución de Llamada

También puedes utilizar funciones de devolución de llamada en lugar de promesas si lo prefieres. Mongoose permite pasar una función de devolución de llamada como último argumento en sus métodos, que se ejecutará una vez que se complete la operación. Por ejemplo:

```javascript
const Producto = require("./models/producto");

// Leer un producto específico y manejar el resultado con una función de devolución de llamada
Producto.findOne({ nombre: "Portátil" }, (error, producto) => {
  if (error) {
    console.error("Error al buscar el producto:", error);
  } else {
    console.log("Producto encontrado:", producto);
  }
});
```

Ambos métodos son válidos y puedes elegir el que mejor se adapte a tu estilo de codificación o a los requisitos de tu proyecto. El manejo de promesas es más común en el desarrollo moderno de JavaScript debido a su naturaleza más concisa y fácilmente comprensible. Sin embargo, las funciones de devolución de llamada siguen siendo útiles en ciertos casos, especialmente si estás trabajando con código más antiguo o con bibliotecas que aún no han adoptado las promesas.

# Uso de la Validación en la Creación y Actualización de Documentos

Cuando creas o actualizas un documento utilizando Mongoose, se aplicarán automáticamente las reglas de validación definidas en el esquema. Si un documento no cumple con las reglas de validación, Mongoose lanzará un error y no se permitirá guardar el documento en la base de datos.

```javascript
const Usuario = require("./models/usuario");

// Crear un nuevo usuario con datos válidos
const nuevoUsuario = new Usuario({
  nombre: "Juan",
  email: "juan@example.com",
  edad: 25,
});

nuevoUsuario
  .save()
  .then((usuario) => {
    console.log("Usuario guardado correctamente:", usuario);
  })
  .catch((error) => {
    console.error("Error al guardar el usuario:", error);
  });

// Intentar crear un usuario con datos inválidos
const usuarioInvalido = new Usuario({
  nombre: "María",
  email: "correo-invalido", // Este correo no cumple con el formato requerido
  edad: 30,
});

usuarioInvalido
  .save()
  .then((usuario) => {
    console.log("Usuario guardado correctamente:", usuario);
  })
  .catch((error) => {
    console.error("Error al guardar el usuario:", error); // Aquí se mostrará el error de validación
  });
```

# Personalización de Mensajes de Error

Puedes personalizar los mensajes de error de validación proporcionando una cadena de mensaje personalizada en las opciones de validación. Esto te permite proporcionar mensajes de error más descriptivos y significativos.

```javascript
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"], // Mensaje de error personalizado para el campo 'nombre'
  },
  // Otros campos...
});
```

# Validación de datos con Mongoose

La validación de datos con Mongoose te permite garantizar la integridad de los datos en tu aplicación de forma fácil y eficaz, lo que contribuye a una mayor confiabilidad y consistencia en tu base de datos.

# Descripción de cómo utilizar las funciones de validación de Mongoose para garantizar la integridad de los datos.

Para garantizar la integridad de los datos en tu aplicación Node.js utilizando Mongoose, puedes utilizar las funciones de validación integradas que proporciona Mongoose. Estas funciones te permiten definir reglas de validación para los campos de tus esquemas, asegurando que los datos cumplan con ciertos criterios antes de ser almacenados en la base de datos. Aquí te describo cómo puedes utilizar estas funciones de validación:

Definición de Reglas de Validación en los Esquemas
Cuando defines un esquema en Mongoose, puedes especificar opciones de validación para cada campo utilizando propiedades como required, min, max, enum, match, entre otras. Estas opciones te permiten definir reglas específicas que los datos deben cumplir para ser considerados válidos.

Por ejemplo, puedes definir que un campo es obligatorio, que debe tener una longitud mínima o máxima, que debe ser único, o que debe coincidir con un patrón específico, como una expresión regular.

```javascript
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // El campo 'nombre' es obligatorio
  },
  email: {
    type: String,
    required: true, // El campo 'email' es obligatorio
    unique: true, // El campo 'email' debe ser único
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // El campo 'email' debe coincidir con el patrón de una dirección de correo electrónico
  },
  edad: {
    type: Number,
    min: 18, // El campo 'edad' debe ser mayor o igual que 18
    max: 120, // El campo 'edad' debe ser menor o igual que 120
  },
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
```

## Aplicación de las Reglas de Validación al Crear y Actualizar Documentos

Cuando creas o actualizas un documento utilizando Mongoose, las reglas de validación definidas en el esquema se aplicarán automáticamente. Si un documento no cumple con las reglas de validación, Mongoose lanzará un error y no permitirá guardar el documento en la base de datos.

```javascript
const Usuario = require("./models/usuario");

// Crear un nuevo usuario con datos válidos
const nuevoUsuario = new Usuario({
  nombre: "Juan",
  email: "juan@example.com",
  edad: 25,
});

nuevoUsuario
  .save()
  .then((usuario) => {
    console.log("Usuario guardado correctamente:", usuario);
  })
  .catch((error) => {
    console.error("Error al guardar el usuario:", error);
  });

// Intentar crear un usuario con datos inválidos
const usuarioInvalido = new Usuario({
  nombre: "María",
  email: "correo-invalido", // Este correo no cumple con el formato requerido
  edad: 30,
});

usuarioInvalido
  .save()
  .then((usuario) => {
    console.log("Usuario guardado correctamente:", usuario);
  })
  .catch((error) => {
    console.error("Error al guardar el usuario:", error); // Aquí se mostrará el error de validación
  });
```

## Personalización de Mensajes de Error de Validación

También puedes personalizar los mensajes de error de validación proporcionando una cadena de mensaje personalizada en las opciones de validación. Esto te permite proporcionar mensajes de error más descriptivos y significativos.

```javascript
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"], // Mensaje de error personalizado para el campo 'nombre'
  },
  // Otros campos...
});
```

Al utilizar estas funciones de validación de Mongoose de manera efectiva, puedes garantizar la integridad y consistencia de los datos en tu aplicación, lo que contribuye a una base de datos más confiable y sólida.

# Relaciones entre documentos con Mongoose

En Mongoose, puedes modelar relaciones entre documentos de varias formas, como referencias y subdocumentos (incrustados). Estas técnicas te permiten representar relaciones uno a uno, uno a muchos y muchos a muchos entre documentos en tu base de datos MongoDB. A continuación, te mostraré cómo puedes implementar relaciones entre documentos utilizando Mongoose:

## Referencias

Las referencias son una forma común de modelar relaciones entre documentos en MongoDB. En este enfoque, un documento hace referencia a otro documento utilizando el identificador único (\_id) del documento relacionado.

Definición de Esquemas con Referencias

```javascript
const mongoose = require("mongoose");

// Esquema para el modelo de 'Autor'
const autorSchema = new mongoose.Schema({
  nombre: String,
  libros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Libro" }], // Referencia a documentos de la colección 'Libro'
});

// Esquema para el modelo de 'Libro'
const libroSchema = new mongoose.Schema({
  titulo: String,
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Autor" }, // Referencia a un documento de la colección 'Autor'
});

const Autor = mongoose.model("Autor", autorSchema);
const Libro = mongoose.model("Libro", libroSchema);

module.exports = { Autor, Libro };
```

Uso de Referencias en Consultas

```javascript
const { Autor, Libro } = require("./models");

// Crear un autor
const nuevoAutor = new Autor({ nombre: "J.K. Rowling" });
await nuevoAutor.save();

// Crear un libro y asignarlo al autor
const nuevoLibro = new Libro({
  titulo: "Harry Potter y la piedra filosofal",
  autor: nuevoAutor._id,
});
await nuevoLibro.save();

// Consultar libros de un autor específico
const librosDelAutor = await Libro.find({ autor: nuevoAutor._id }).populate(
  "autor"
);
console.log(librosDelAutor);
```

# Subdocumentos (Incrustados)

En este enfoque, los documentos relacionados se incrustan directamente dentro de otro documento. Es útil cuando los documentos relacionados siempre se acceden juntos y no necesitan ser referenciados desde otros documentos.

Definición de Esquemas con Subdocumentos

```javascript
const mongoose = require("mongoose");

// Esquema para el modelo de 'Autor' con libros incrustados
const autorSchema = new mongoose.Schema({
  nombre: String,
  libros: [
    {
      titulo: String,
      año: Number,
    },
  ],
});

const Autor = mongoose.model("Autor", autorSchema);

module.exports = Autor;
```

Uso de Subdocumentos

```javascript
const Autor = require("./models/autor");

// Crear un autor con libros incrustados
const nuevoAutor = new Autor({
  nombre: "Gabriel García Márquez",
  libros: [
    { titulo: "Cien años de soledad", año: 1967 },
    { titulo: "El amor en los tiempos del cólera", año: 1985 },
  ],
});
await nuevoAutor.save();

// Consultar los libros de un autor
const autorConLibros = await Autor.findOne({
  nombre: "Gabriel García Márquez",
});
console.log(autorConLibros);
```

# Elección entre Referencias y Subdocumentos

La elección entre referencias y subdocumentos depende de los requisitos específicos de tu aplicación. En general, las referencias son más adecuadas cuando necesitas consultar documentos relacionados por separado o cuando la cantidad de datos incrustados es grande y necesitas evitar el límite de tamaño de los documentos de MongoDB. Por otro lado, los subdocumentos son útiles cuando los datos relacionados siempre se acceden juntos y no necesitan ser consultados por separado.

# Consultas avanzadas con Mongoose

Las consultas avanzadas con Mongoose permiten realizar operaciones complejas en la base de datos MongoDB, como consultas con múltiples condiciones, agregaciones, búsqueda de texto completo, y más. A continuación, te mostraré algunos ejemplos de consultas avanzadas utilizando Mongoose:

# Consultas con Múltiples Condiciones

Puedes utilizar el método find() de Mongoose para realizar consultas con múltiples condiciones utilizando operadores de consulta de MongoDB, como $and, $or, $gt, $lt, $in, entre otros.

```javascript
const Producto = require("./models/producto");

// Consultar productos con un precio entre 100 y 500
Producto.find({ precio: { $gt: 100, $lt: 500 } })
  .then((resultados) => {
    console.log("Productos encontrados:", resultados);
  })
  .catch((error) => {
    console.error("Error al buscar productos:", error);
  });
```

# Agregaciones

Las agregaciones permiten realizar operaciones más avanzadas en la base de datos, como calcular estadísticas, agrupar datos y realizar transformaciones en los documentos.

```javascript
const Producto = require("./models/producto");

// Calcular el precio promedio de todos los productos
Producto.aggregate([
  { $group: { _id: null, precioPromedio: { $avg: "$precio" } } },
])
  .then((resultados) => {
    console.log(
      "Precio promedio de los productos:",
      resultados[0].precioPromedio
    );
  })
  .catch((error) => {
    console.error("Error al calcular el precio promedio:", error);
  });
```

# Búsqueda de Texto Completo

Mongoose también te permite realizar búsquedas de texto completo en campos de tipo cadena utilizando el índice de texto completo de MongoDB.

```javascript
const Producto = require("./models/producto");

// Buscar productos que contengan la palabra "smartphone" en la descripción
Producto.find({ $text: { $search: "smartphone" } })
  .then((resultados) => {
    console.log("Productos encontrados:", resultados);
  })
  .catch((error) => {
    console.error("Error al buscar productos:", error);
  });
```

# Consultas con Población (Populate)

La población te permite rellenar campos de referencia en un documento con los documentos reales a los que hacen referencia. Esto es útil cuando necesitas obtener datos de documentos relacionados en una sola consulta.

```javascript
const Producto = require("./models/producto");

// Consultar productos y poblar el campo 'categoria' con los datos de la categoría correspondiente
Producto.find()
  .populate("categoria")
  .then((resultados) => {
    console.log("Productos encontrados:", resultados);
  })
  .catch((error) => {
    console.error("Error al buscar productos:", error);
  });
```

Estos son solo algunos ejemplos de consultas avanzadas que puedes realizar utilizando Mongoose en tu aplicación Node.js. Con Mongoose, tienes acceso a una amplia gama de funciones y métodos que te permiten interactuar de manera poderosa y eficiente con tu base de datos MongoDB.

# Indexación en Mongoose

La indexación en Mongoose te permite mejorar el rendimiento de las consultas en tu base de datos MongoDB al organizar y estructurar los datos para facilitar la búsqueda y recuperación rápida de información. Aquí te mostraré cómo puedes utilizar la indexación en Mongoose:

## Índices Simples

Puedes definir índices simples en campos individuales de tu esquema utilizando la opción index. Esto ayuda a acelerar las consultas que buscan en esos campos.

```javascript
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, index: true }, // Índice simple en el campo 'nombre'
  precio: Number,
  descripcion: String,
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
```

## Índices Compuestos

También puedes crear índices compuestos en múltiples campos de tu esquema. Esto es útil cuando tus consultas buscan en múltiples campos simultáneamente.

```javascript
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, index: true },
  categoria: { type: String, index: true }, // Índice simple en el campo 'categoria'
  precio: Number,
  descripcion: String,
});

productoSchema.index({ nombre: 1, categoria: 1 }); // Índice compuesto en los campos 'nombre' y 'categoria'

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
```

## Índices Únicos

Puedes crear índices únicos en un campo para garantizar que no haya duplicados en ese campo.

```javascript
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombreUsuario: { type: String, unique: true }, // Índice único en el campo 'nombreUsuario'
  email: { type: String, unique: true },
  contraseña: String,
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
```

## Índices con Opciones Adicionales

Puedes proporcionar opciones adicionales al definir índices, como la dirección de ordenación (1 para ascendente, -1 para descendente), la exclusión de documentos duplicados (unique) y el tiempo de vida de los documentos (expireAfterSeconds).

```javascript
const mongoose = require("mongoose");

const sesionSchema = new mongoose.Schema({
  token: { type: String, index: { unique: true } },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    index: true,
  },
  expira: { type: Date, index: { expireAfterSeconds: 3600 } }, // Índice con tiempo de vida de 1 hora
});

const Sesion = mongoose.model("Sesion", sesionSchema);

module.exports = Sesion;
```

Creación de Índices Después de la Creación del Modelo
También puedes crear índices después de la creación del modelo utilizando el método createIndex().

```javascript
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
});

const Producto = mongoose.model("Producto", productoSchema);

// Crear índice después de la creación del modelo
Producto.createIndexes();
```

La indexación en Mongoose te permite optimizar el rendimiento de tus consultas en MongoDB, mejorando la velocidad y la eficiencia de tus operaciones de recuperación de datos. Es importante diseñar cuidadosamente tus índices según las necesidades específicas de tu aplicación y la frecuencia de tus consultas.
