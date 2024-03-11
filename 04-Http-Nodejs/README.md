# Aprender a crear un servidor HTTP básico utilizando Node.js.

## Introducción al Módulo HTTP (15 minutos)

### Explicación breve del módulo http en Node.js.

El módulo http en Node.js es una parte esencial de su funcionalidad básica. Permite la creación de servidores HTTP y clientes en aplicaciones Node.js. Con este módulo, puedes crear un servidor que escuche en un puerto específico y maneje las solicitudes HTTP entrantes. También puedes hacer solicitudes HTTP a otros servidores desde tu aplicación Node.js.

En resumen, el módulo http proporciona una interfaz para trabajar con el protocolo HTTP en Node.js, permitiendo a los desarrolladores construir aplicaciones web desde cero, sin necesidad de depender de frameworks adicionales. Es una herramienta fundamental para el desarrollo de servidores web y clientes HTTP en Node.js.

### Descripción de su función principal: permitir la creación de servidores y clientes HTTP.

El módulo http en Node.js tiene como función principal permitir la creación tanto de servidores como de clientes HTTP dentro de una aplicación Node.js.

Creación de Servidores HTTP:

Utilizando el método http.createServer(), puedes crear un servidor HTTP que escuche en un puerto específico. Este servidor puede manejar solicitudes entrantes y enviar respuestas correspondientes.
Puedes definir cómo manejar cada solicitud mediante la implementación de un "manejador de solicitud" que se ejecuta cada vez que llega una solicitud HTTP al servidor.
Creación de Clientes HTTP:

El módulo http también permite hacer solicitudes HTTP desde una aplicación Node.js utilizando el objeto http.request().
Con http.request(), puedes realizar solicitudes GET, POST, PUT, DELETE y otras, especificando la URL de destino, los encabezados y el cuerpo de la solicitud si es necesario.
Además, http.request() proporciona métodos para manejar eventos como la recepción de datos de respuesta, errores de solicitud y el final de la respuesta.
En resumen, el módulo http en Node.js es esencial para la comunicación HTTP en ambas direcciones: la creación de servidores para manejar solicitudes entrantes y la creación de clientes para realizar solicitudes salientes. Esta funcionalidad es clave para el desarrollo de aplicaciones web, APIs RESTful, servicios web y más en Node.js.

### Importancia del módulo http en el desarrollo web con Node.js.

El módulo http en Node.js es fundamental para el desarrollo web, ya que proporciona las herramientas necesarias para crear servidores HTTP y manejar solicitudes y respuestas HTTP. Aquí hay algunas razones por las que el módulo http es importante en el desarrollo web con Node.js:

Creación de servidores HTTP: El módulo http permite a los desarrolladores crear servidores web HTTP desde cero. Esto significa que pueden configurar y personalizar completamente el comportamiento del servidor según sus necesidades específicas.

Manejo de solicitudes y respuestas: Con el módulo http, los desarrolladores pueden manejar las solicitudes entrantes y generar respuestas correspondientes. Esto incluye la capacidad de analizar datos de solicitud, como parámetros de URL o cuerpos de solicitud, y enviar respuestas con el contenido adecuado, como HTML, JSON, archivos estáticos, etc.

Flexibilidad y control: Al utilizar el módulo http, los desarrolladores tienen un mayor control sobre cómo se manejan las solicitudes y respuestas en comparación con los marcos de desarrollo web más tradicionales. Esto les permite implementar lógica personalizada y optimizar el rendimiento de sus aplicaciones según sea necesario.

Escalabilidad: Node.js es conocido por su capacidad para manejar grandes volúmenes de solicitudes de manera eficiente gracias a su modelo de E/S sin bloqueo y su enfoque basado en eventos. El módulo http forma la base de esta capacidad al permitir la creación de servidores HTTP altamente escalables.

Integración con otros módulos y herramientas: El módulo http se puede combinar con otros módulos de Node.js, como fs para manejar archivos, stream para transmitir datos, y crypto para seguridad, lo que permite a los desarrolladores crear aplicaciones web completas y robustas.

En resumen, el módulo http en Node.js es esencial para construir aplicaciones web eficientes, escalables y altamente personalizables, ofreciendo a los desarrolladores un control total sobre la creación y el manejo de servidores HTTP.

## Creación de un Servidor HTTP Básico

### Importar el módulo http en un archivo JavaScript.

Para importar el módulo http en un archivo JavaScript en Node.js, puedes utilizar la función require() de Node.js. Aquí tienes un ejemplo de cómo hacerlo:

```javascript
const http = require("http");

// Aquí puedes utilizar el módulo http y sus funcionalidades
// Por ejemplo, crear un servidor HTTP

const server = http.createServer((req, res) => {
  // Manejar las solicitudes entrantes y enviar respuestas
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("¡Hola mundo!\n");
});

// Escuchar en el puerto 3000
server.listen(3000, "localhost", () => {
  console.log("Servidor HTTP iniciado en http://localhost:3000/");
});
```
En este ejemplo, estamos importando el módulo http utilizando require('http') y luego utilizando sus funciones para crear un servidor HTTP y manejar las solicitudes entrantes. Finalmente, el servidor se pone a la escucha en el puerto 3000 y se imprime un mensaje en la consola para indicar que el servidor se ha iniciado correctamente.
### Utilizar el método http.createServer() para crear un servidor HTTP.
Aquí tienes un ejemplo de cómo utilizar el método http.createServer() para crear un servidor HTTP en Node.js:

```javascript
const http = require('http');

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
  // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Enviar la respuesta al cliente
  res.end('¡Hola mundo!\n');
});

// Escuchar en el puerto 3000 y en la dirección localhost
server.listen(3000, 'localhost', () => {
  console.log('Servidor HTTP iniciado en http://localhost:3000/');
});
```
### Escuchar peticiones en un puerto específico utilizando el método server.listen().

Para escuchar peticiones en un puerto específico utilizando el método server.listen() en Node.js, simplemente debes proporcionar el número del puerto como primer argumento. Aquí tienes un ejemplo:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola mundo!\n');
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en el puerto ${PORT}`);
});
```
En este ejemplo, el servidor HTTP creado con http.createServer() escuchará las solicitudes entrantes en el puerto 3000. El método server.listen() toma como primer argumento el número del puerto y opcionalmente una dirección IP (en caso de que desees escuchar en una interfaz de red específica). En este caso, solo se especifica el puerto 3000 y el servidor escuchará en todas las interfaces disponibles en el equipo. Una vez que el servidor está escuchando, se imprime un mensaje en la consola indicando en qué puerto está escuchando.

### Ejemplo práctico de creación de un servidor HTTP que responde con "¡Hola Mundo!" en la raíz /.

Un ejemplo práctico de cómo crear un servidor HTTP en Node.js que responde con "¡Hola Mundo!" cuando se accede a la raíz /:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Verificar si la solicitud es para la ruta raíz "/"
  if (req.url === '/') {
    // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Enviar la respuesta al cliente
    res.end('¡Hola Mundo!\n');
  } else {
    // Si la solicitud no es para la ruta raíz, responder con un código de estado 404 (Not Found)
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 - Not Found\n');
  }
});

// Escuchar en el puerto 3000 y en la dirección localhost
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en http://localhost:${PORT}`);
});
```
En este ejemplo, el servidor HTTP creado con http.createServer() verifica si la solicitud es para la ruta raíz /. Si lo es, responde con "¡Hola Mundo!" y un código de estado 200 (OK). Si la solicitud no es para la ruta raíz, responde con un código de estado 404 (Not Found).

Después de crear el servidor, se utiliza server.listen() para hacer que el servidor escuche en el puerto 3000 y en la dirección localhost. Una vez que el servidor está escuchando, se imprime un mensaje en la consola para indicar en qué puerto está escuchando.
## Manejo de Solicitudes y Respuestas HTTP (20 minutos)

### Introducción al manejo de solicitudes y respuestas en un servidor HTTP.
El manejo de solicitudes y respuestas en un servidor HTTP es una parte fundamental del desarrollo web con Node.js. Cuando un cliente realiza una solicitud HTTP (como un navegador web) a un servidor, este último debe procesar esa solicitud y enviar una respuesta adecuada. Aquí hay una introducción básica al manejo de solicitudes y respuestas en un servidor HTTP:

Creación del servidor HTTP: Para comenzar, necesitas crear un servidor HTTP utilizando el módulo http de Node.js. Esto se hace utilizando la función http.createServer(), que toma un callback como argumento. El callback se ejecuta cada vez que el servidor recibe una solicitud, y toma dos parámetros: req (la solicitud entrante) y res (la respuesta que se enviará al cliente).

Manejo de solicitudes: En el callback de http.createServer(), puedes escribir la lógica para manejar las solicitudes entrantes. Esto incluye analizar la URL solicitada, leer los datos enviados en el cuerpo de la solicitud (en caso de una solicitud POST o PUT), y cualquier otra manipulación necesaria para procesar la solicitud.

Manejo de respuestas: Después de procesar la solicitud, debes enviar una respuesta al cliente utilizando el objeto res. Esto generalmente se hace utilizando los métodos res.writeHead() para establecer la cabecera de la respuesta, res.write() para enviar datos al cliente y res.end() para finalizar la respuesta.

Códigos de estado HTTP: Al enviar una respuesta al cliente, es importante incluir un código de estado HTTP apropiado. Los códigos de estado informan al cliente si la solicitud fue exitosa (200 OK), si hay un error (404 Not Found, por ejemplo) u otras situaciones.

Tipos de contenido: Además del código de estado, también debes establecer el tipo de contenido de la respuesta utilizando el encabezado Content-Type. Esto le dice al cliente qué tipo de datos está recibiendo (por ejemplo, text/html para HTML, application/json para JSON, etc.).

Aquí hay un ejemplo básico de cómo manejar solicitudes y respuestas en un servidor HTTP en Node.js:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Enviar la respuesta al cliente
  res.end('¡Hola mundo!\n');
});

// Escuchar en el puerto 3000 y en la dirección localhost
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en http://localhost:${PORT}`);
});
```
Este es un ejemplo muy básico que simplemente responde con "¡Hola mundo!" a todas las solicitudes entrantes. En aplicaciones más complejas, el manejo de solicitudes y respuestas implica lógica adicional para procesar datos, acceder a bases de datos, autenticar usuarios, etc.
### Explicación de los objetos request y response.

En el contexto de un servidor HTTP en Node.js, los objetos request (solicitud) y response (respuesta) son fundamentales para manejar las interacciones entre el cliente y el servidor. Aquí hay una explicación detallada de cada uno:

Objeto Request (Solicitud):
El objeto request representa la solicitud HTTP que el cliente envía al servidor. Contiene información sobre la solicitud, como la URL solicitada, los encabezados HTTP, el método de solicitud (GET, POST, etc.), y, en el caso de solicitudes POST, PUT, o DELETE, también puede contener datos enviados desde el cliente (como datos de formulario, JSON, etc.). Algunos de los atributos y métodos importantes del objeto request son:

1. request.url: La URL solicitada por el cliente.
2. request.method: El método de solicitud HTTP utilizado (GET, POST, etc.).
3. request.headers: Los encabezados de la solicitud HTTP.
4. request.params: Los parámetros de la URL en el caso de rutas dinámicas.
5. request.body: Los datos enviados en el cuerpo de la solicitud (en el caso de solicitudes POST, PUT, o DELETE).
Objeto Response (Respuesta):
El objeto response representa la respuesta que el servidor envía de vuelta al cliente como resultado de la solicitud. Permite al servidor configurar los datos que se enviarán al cliente, incluyendo el contenido de la respuesta, los encabezados HTTP y el código de estado HTTP. Algunos de los atributos y métodos importantes del objeto response son:

1. response.writeHead(statusCode, [headers]): Configura el código de estado y los encabezados de la respuesta HTTP.
2. response.write(data): Escribe datos en el cuerpo de la respuesta.
3. response.end([data]): Finaliza la respuesta y envía los datos opcionales al cliente. Es importante llamar a este método para completar la respuesta.
4. response.setHeader(name, value): Configura un encabezado HTTP en la respuesta.
5. response.statusCode: El código de estado HTTP de la respuesta.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Escribir "¡Hola Mundo!" en el cuerpo de la respuesta
  res.write('¡Hola Mundo!\n');
  
  // Finalizar la respuesta
  res.end();
});

// Escuchar en el puerto 3000 y en la dirección localhost
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en http://localhost:${PORT}`);
});
```
En este ejemplo, estamos utilizando tanto el objeto request como el objeto response para manejar una solicitud HTTP entrante y enviar una respuesta de "¡Hola Mundo!" al cliente. Primero configuramos la cabecera de la respuesta con res.writeHead(), luego escribimos el contenido de la respuesta con res.write(), y finalmente finalizamos la respuesta con res.end().
### Mostrar cómo acceder a la URL solicitada y a los datos enviados por el cliente.


Para acceder a la URL solicitada y a los datos enviados por el cliente en Node.js, podemos utilizar el objeto request. Aquí hay un ejemplo que muestra cómo acceder a estos datos:
```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parsear la URL solicitada para obtener sus componentes
  const parsedUrl = url.parse(req.url, true);

  // Acceder a la URL solicitada
  const requestedUrl = parsedUrl.pathname;

  // Acceder a los datos enviados por el cliente (en el cuerpo de la solicitud)
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString(); // Convertir los datos en una cadena
  });

  req.on('end', () => {
    // En este punto, todos los datos han sido recibidos
    // Acceder a los datos como un objeto JSON si la solicitud es de tipo JSON
    const requestData = JSON.parse(body);

    // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    // Construir la respuesta con la URL solicitada y los datos enviados por el cliente
    const responseObj = {
      requestedUrl: requestedUrl,
      requestData: requestData
    };

    // Enviar la respuesta al cliente
    res.end(JSON.stringify(responseObj));
  });
});

// Escuchar en el puerto 3000 y en la dirección localhost
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en http://localhost:${PORT}`);
});
```
En este ejemplo:

1. Importamos el módulo url de Node.js para poder analizar la URL solicitada.
2. Usamos url.parse() para obtener los componentes de la URL, como el pathname, que nos da la ruta de la solicitud.
3. Utilizamos los eventos data y end del objeto request para recopilar los datos enviados por el cliente.
4. Parseamos los datos recibidos (en este caso, asumiendo que son JSON) y los accedemos en el evento end.
5. Configuramos la cabecera de la respuesta con res.writeHead() y enviamos una respuesta JSON que contiene la URL solicitada y los datos enviados por el cliente.

Es importante tener en cuenta que este ejemplo asume que los datos enviados por el cliente son JSON y que la solicitud está codificada como tal. Si la solicitud es de otro tipo, el manejo de los datos puede requerir un enfoque diferente.

### Enviar respuestas personalizadas utilizando el objeto response.
Claro, el objeto response en Node.js te permite enviar respuestas personalizadas al cliente. Aquí tienes un ejemplo que muestra cómo enviar una respuesta personalizada con diferentes códigos de estado y tipos de contenido:
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Verificar la URL solicitada
  if (req.url === '/') {
    // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Enviar una respuesta personalizada
    res.end('¡Bienvenido a la página de inicio!\n');
  } else if (req.url === '/about') {
    // Configurar la cabecera de la respuesta HTTP con el código de estado 200 y el tipo de contenido
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Enviar una respuesta personalizada
    res.end('<h1>Acerca de nosotros</h1><p>Este es un sitio web de demostración.</p>');
  } else {
    // Si la URL solicitada no coincide con ninguna ruta conocida, enviar un código de estado 404 (Not Found)
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 - Página no encontrada\n');
  }
});

// Escuchar en el puerto 3000 y en la dirección localhost
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP iniciado en http://localhost:${PORT}`);
});
```
En este ejemplo:

Cuando se accede a la ruta raíz (/), se envía una respuesta con el código de estado 200 (OK) y el tipo de contenido text/plain, y se muestra un mensaje de bienvenida.
Cuando se accede a la ruta /about, se envía una respuesta con el código de estado 200 (OK) y el tipo de contenido text/html, y se muestra una página HTML con información sobre la página "Acerca de nosotros".
Si se accede a una ruta que no coincide con ninguna de las anteriores, se envía una respuesta con el código de estado 404 (Not Found) y un mensaje indicando que la página no se encontró.
Este es solo un ejemplo básico, pero muestra cómo puedes utilizar el objeto response para enviar respuestas personalizadas al cliente según la solicitud recibida. Puedes adaptar este código según tus necesidades específicas para crear respuestas más complejas y dinámicas.

