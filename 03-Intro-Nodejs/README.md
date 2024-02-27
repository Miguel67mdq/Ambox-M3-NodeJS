# Introducción a Node.js: Desarrollo de Aplicaciones Backend

Duración: 2 horas

Objetivo:
En esta sesión introductoria de dos horas, exploraremos Node.js, un entorno de tiempo de ejecución de JavaScript del lado del servidor que permite construir aplicaciones web escalables y eficientes. A lo largo de esta sesión, aprenderemos los conceptos fundamentales de Node.js, cómo configurar un entorno de desarrollo, y cómo crear y ejecutar aplicaciones backend simples.

Agenda:

# ¿Qué es Node.js?

## Introducción a Node.js y su papel en el desarrollo de aplicaciones web

Node.js es una plataforma de tiempo de ejecución de JavaScript de lado del servidor que permite a los desarrolladores crear aplicaciones web y servicios de red altamente escalables. A diferencia de los entornos tradicionales de servidor, que están basados en lenguajes como PHP, Java o Python, Node.js está diseñado para aprovechar el motor V8 de Google Chrome, lo que significa que utiliza JavaScript como su lenguaje principal tanto en el cliente como en el servidor.

El papel de Node.js en el desarrollo de aplicaciones web es fundamentalmente transformador. Antes de Node.js, JavaScript era principalmente un lenguaje de programación del lado del cliente, utilizado para agregar interactividad y dinamismo a las páginas web. Sin embargo, con Node.js, JavaScript también se puede usar en el servidor, lo que permite a los desarrolladores crear aplicaciones web completas utilizando un solo lenguaje de programación a lo largo de todo el stack.

Esto tiene varias ventajas significativas:

Unificación del lenguaje: Al utilizar JavaScript tanto en el cliente como en el servidor, los desarrolladores pueden compartir código, lógica y modelos de datos entre ambos entornos. Esto simplifica el desarrollo y la mantenimiento de aplicaciones, ya que no es necesario aprender múltiples lenguajes y paradigmas de programación.

Eficiencia del equipo: Al utilizar un lenguaje común en todos los aspectos del desarrollo de la aplicación, los equipos de desarrollo pueden trabajar de manera más colaborativa y eficiente. Los desarrolladores frontend y backend pueden comprender y contribuir al código en todas las capas de la aplicación.

Escalabilidad y rendimiento: Node.js está diseñado para ser altamente eficiente y escalable, lo que lo hace ideal para aplicaciones que requieren una alta concurrencia y manejo de eventos en tiempo real, como aplicaciones de chat, juegos en línea y aplicaciones de transmisión de datos en tiempo real.

Ecosistema robusto de paquetes: Node.js cuenta con un ecosistema de paquetes extremadamente rico y diverso gracias a npm, el gestor de paquetes de Node.js. Con miles de paquetes disponibles, los desarrolladores pueden encontrar fácilmente soluciones para prácticamente cualquier problema que puedan enfrentar durante el desarrollo de la aplicación.

En resumen, Node.js ha revolucionado el desarrollo web al permitir a los desarrolladores utilizar JavaScript tanto en el lado del cliente como en el servidor. Esto ha simplificado el desarrollo, mejorado la eficiencia del equipo y permitido la creación de aplicaciones altamente escalables y de alto rendimiento. Como resultado, Node.js se ha convertido en una opción popular para una amplia gama de aplicaciones web modernas.

### Breve historia y evolución de Node.js.

Node.js fue creado por Ryan Dahl en 2009 como una solución para desarrollar aplicaciones web en tiempo real con JavaScript del lado del servidor. Antes de Node.js, JavaScript se usaba principalmente en el navegador para crear experiencias interactivas en el cliente, pero no tenía una presencia significativa en el lado del servidor.

La motivación detrás de Node.js surgió de las limitaciones de los modelos de entrada/salida (I/O) bloqueantes y sincrónicos utilizados por las tecnologías de servidor tradicionales, como Apache HTTP Server. Estos modelos pueden resultar ineficientes y provocar bloqueos en el rendimiento cuando se enfrentan a operaciones de red intensivas, como las solicitudes HTTP.

Node.js introdujo un modelo de E/S sin bloqueo y orientado a eventos, basado en el motor V8 de JavaScript de Google Chrome. Esto permitió que las operaciones de E/S se realizaran de manera asíncrona y no bloqueante, lo que mejoró significativamente la escalabilidad y el rendimiento de las aplicaciones web.

A lo largo de los años, Node.js ha experimentado un crecimiento explosivo y se ha convertido en una de las tecnologías más populares para el desarrollo de aplicaciones web y de red. Su ecosistema de módulos npm ha crecido enormemente, proporcionando a los desarrolladores acceso a una amplia gama de bibliotecas y herramientas para construir aplicaciones más rápidas y eficientes.

Además, Node.js ha evolucionado para admitir una variedad de casos de uso, desde la creación de API RESTful hasta aplicaciones en tiempo real como chats y juegos en línea. Se ha convertido en una opción popular para empresas y desarrolladores que buscan construir aplicaciones escalables y de alto rendimiento.

En resumen, la evolución de Node.js ha transformado la forma en que se desarrollan las aplicaciones web al introducir un modelo de E/S no bloqueante y orientado a eventos, permitiendo un rendimiento y una escalabilidad superiores en comparación con las tecnologías de servidor tradicionales. Su crecimiento y popularidad continúan en constante aumento, impulsando la innovación en el desarrollo web moderno.

### Características principales y ventajas de utilizar Node.js.3

Node.js ofrece varias características principales y ventajas que lo hacen una opción atractiva para el desarrollo de aplicaciones web y de red. Aquí hay algunas de las más destacadas:

Modelo de E/S sin bloqueo y orientado a eventos: Node.js utiliza un modelo de E/S sin bloqueo y orientado a eventos que permite manejar múltiples solicitudes de forma eficiente sin detener el flujo de ejecución. Esto resulta en una alta capacidad de concurrencia y un rendimiento escalable para aplicaciones web en tiempo real.

JavaScript en ambos lados, cliente y servidor: Node.js permite a los desarrolladores utilizar JavaScript tanto en el lado del cliente como en el servidor, lo que unifica el desarrollo de aplicaciones web y simplifica la transferencia de datos entre el cliente y el servidor.

Ecosistema de módulos npm: Node.js cuenta con npm (Node Package Manager), una de las mayores colecciones de paquetes de código abierto disponibles para cualquier lenguaje de programación. Esto facilita la integración de funcionalidades adicionales en las aplicaciones y acelera el desarrollo al proporcionar acceso a una amplia gama de bibliotecas y herramientas.

Rendimiento y escalabilidad: Gracias a su modelo de E/S sin bloqueo y a la eficiencia del motor V8 de JavaScript, Node.js ofrece un rendimiento y una escalabilidad superiores en comparación con las tecnologías de servidor tradicionales. Es especialmente adecuado para aplicaciones web en tiempo real y de alta concurrencia.

Desarrollo rápido de prototipos y MVPs: Node.js es ideal para el desarrollo rápido de prototipos y Minimum Viable Products (MVPs) debido a su facilidad de uso, su amplio ecosistema de módulos y su capacidad para compartir código entre el cliente y el servidor.

Comunidad activa y soporte: Node.js cuenta con una comunidad activa de desarrolladores y una amplia documentación disponible en línea. Esto facilita la resolución de problemas, el aprendizaje y la colaboración en proyectos de desarrollo de Node.js.

En resumen, Node.js ofrece un conjunto único de características y ventajas que lo convierten en una opción popular para el desarrollo de aplicaciones web y de red, especialmente aquellas que requieren rendimiento en tiempo real y escalabilidad. Su modelo de E/S sin bloqueo, su ecosistema de módulos npm y su uso de JavaScript en ambos lados del servidor son solo algunas de las razones por las que los desarrolladores eligen Node.js para sus proyectos.

## Configuración del Entorno de Desarrollo

### Instalación de Node.js y npm (Node Package Manager).

Instalación en Windows:
Descarga:

Ve al sitio web oficial de Node.js en https://nodejs.org/.
Descarga el instalador de Node.js para Windows.
Instalación:

Ejecuta el instalador descargado.
Sigue las instrucciones del asistente de instalación.
Acepta los términos de la licencia y elige la ubicación de instalación (por defecto, se instalará en C:\Program Files\nodejs).
Haz clic en "Instalar" y espera a que se complete el proceso de instalación.
Verificación:

Abre la línea de comandos (cmd).
Ejecuta el siguiente comando para verificar que Node.js y npm se hayan instalado correctamente:

```bash
node -v
npm -v
```

Deberías ver la versión de Node.js y npm instalada.
Instalación en macOS:
Instalación a través de Homebrew:

Abre la terminal.
Instala Homebrew si aún no lo tienes:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Instala Node.js y npm usando Homebrew:

```bash
brew install node
```

Verificación:

Después de la instalación, verifica que Node.js y npm se hayan instalado correctamente ejecutando los siguientes comandos en la terminal:

```bash
node -v
```

npm -v
Deberías ver la versión de Node.js y npm instalada.
Instalación en Linux (Ubuntu/Debian):
Instalación a través de gestor de paquetes:

Abre la terminal.
Actualiza el índice de paquetes:

```bash
sudo apt update
```

Instala Node.js y npm usando el gestor de paquetes:

```bash
sudo apt install nodejs npm
```

Verificación:

Después de la instalación, verifica que Node.js y npm se hayan instalado correctamente ejecutando los siguientes comandos en la terminal:

```bash
node -v
npm -v
```

Deberías ver la versión de Node.js y npm instalada.
Con estos pasos, deberías poder instalar Node.js y npm en tu sistema operativo preferido de manera rápida y sencilla.
Una vez instalados, estarás listo para comenzar a desarrollar aplicaciones con Node.js.

### Creación de un nuevo proyecto Node.js.

Para crear un nuevo proyecto Node.js, puedes seguir estos pasos básicos:

Crear un directorio para el proyecto:
Abre una terminal y navega hasta la ubicación donde deseas crear tu proyecto. Luego, crea un nuevo directorio para el proyecto. Por ejemplo:

```bash
mkdir mi_proyecto_node
```

Ingresar al directorio del proyecto:
Accede al directorio que acabas de crear:

```bash
cd mi_proyecto_node
```

Inicializar un nuevo proyecto Node.js:
Utiliza el comando npm init para iniciar un nuevo proyecto Node.js. Esto generará un archivo package.json que contendrá la información de tu proyecto, como nombre, versión, descripción, etc.:

```bash
npm init
```

El comando te guiará a través de una serie de preguntas interactivas para configurar tu proyecto. Puedes presionar "Enter" para aceptar las opciones predeterminadas o ingresar tus propias respuestas según lo desees.

Instalar dependencias (opcional):
Si tu proyecto necesita dependencias externas, puedes instalarlas utilizando el comando npm install. Por ejemplo, si quieres usar Express, un popular marco web para Node.js, puedes instalarlo con:

```bash
npm install express
```

Crear archivos de código fuente:
Crea los archivos de código fuente necesarios para tu proyecto, como app.js para el código principal de tu aplicación. Puedes usar tu editor de texto favorito para crear y editar estos archivos.

Comenzar a desarrollar:
Con el proyecto configurado y las dependencias instaladas, puedes comenzar a desarrollar tu aplicación Node.js. Puedes escribir tu lógica de aplicación en los archivos de código fuente que creaste en el paso anterior.

Ejecutar la aplicación:
Una vez que hayas escrito parte de tu aplicación, puedes ejecutarla para probarla. Usa el comando node seguido del nombre del archivo principal de tu aplicación. Por ejemplo, si tu archivo principal se llama app.js, puedes ejecutarlo con:

```
node app.js
```

Esto iniciará tu aplicación y la ejecutará localmente en tu máquina.

Siguiendo estos pasos, habrás creado y configurado un nuevo proyecto Node.js listo para el desarrollo. Puedes continuar agregando funcionalidades y construyendo tu aplicación según sea necesario.

## Conceptos Fundamentales de Node.js

### Event Loop y asincronía en Node.js.

Event Loop:

El Event Loop es un bucle que se ejecuta continuamente y maneja las operaciones de entrada y salida (E/S) asíncronas en Node.js.
Node.js se ejecuta de forma asíncrona y no bloqueante, lo que significa que puede manejar múltiples solicitudes simultáneamente sin esperar a que una operación se complete antes de continuar con otra.
El Event Loop es responsable de ejecutar código asíncrono y manejar callbacks una vez que se completa una operación de E/S o una tarea asíncrona.
Asincronía:

En Node.js, muchas operaciones, como la lectura y escritura de archivos, solicitudes HTTP, consultas a la base de datos, etc., son operaciones de E/S asíncronas.
En lugar de bloquear el hilo de ejecución mientras espera que estas operaciones se completen, Node.js delega estas tareas al sistema operativo y continúa ejecutando otras operaciones.
Cuando una operación asíncrona se completa, se agrega un callback a la cola de tareas del Event Loop para ser ejecutado en el momento adecuado.
El flujo básico de trabajo del Event Loop en Node.js es el siguiente:

Ejecutar el código principal: Node.js comienza ejecutando el código principal de tu aplicación de forma sincrónica.
Manejar operaciones asíncronas: Cuando Node.js encuentra una operación asíncrona, la delega al sistema operativo y continúa ejecutando otras operaciones.
Registrar callbacks: Una vez que una operación asíncrona se completa, el callback asociado se registra en la cola de tareas del Event Loop.
Ejecutar callbacks: El Event Loop verifica continuamente la cola de tareas y ejecuta los callbacks disponibles cuando el hilo de ejecución está libre.
Esta capacidad para manejar operaciones de forma asíncrona y no bloqueante es lo que hace que Node.js sea eficiente para aplicaciones de alta concurrencia y escalables.

Es importante entender cómo funciona el Event Loop y la asincronía en Node.js para escribir código eficiente y aprovechar al máximo su capacidad para manejar múltiples solicitudes simultáneamente.

### Módulos en Node.js y el sistema de gestión de paquetes npm.

En Node.js, los módulos son piezas de código reutilizable encapsuladas que pueden ser cargadas y utilizadas dentro de una aplicación. Estos módulos pueden contener funciones, objetos o cualquier otro tipo de funcionalidad, y ayudan a organizar y modularizar el código de una aplicación. Node.js utiliza el sistema de módulos CommonJS, que permite la definición de módulos con require para importarlos y module.exports para exportarlos.

Aquí hay un ejemplo simple de cómo se pueden definir y utilizar módulos en Node.js:

Supongamos que tienes dos archivos: modulo.js y app.js.

En modulo.js, defines un módulo con algunas funciones y lo exportas:

```javascript
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

function despedir(nombre) {
  console.log(`Adiós, ${nombre}!`);
}

module.exports = {
  saludar,
  despedir,
};
```

En app.js, importas el módulo definido en modulo.js y utilizas sus funciones:

```javascript
// app.js
const modulo = require("./modulo");

modulo.saludar("Juan"); // Salida: Hola, Juan!
modulo.despedir("Juan"); // Salida: Adiós, Juan!
```

El sistema de gestión de paquetes npm (Node Package Manager) es una herramienta que facilita la instalación, gestión y compartición de paquetes de código (módulos) en Node.js. npm es el repositorio más grande de paquetes de código abierto del mundo y se utiliza ampliamente en el desarrollo de aplicaciones Node.js.

Aquí hay algunos comandos básicos de npm:

npm install <paquete>: Instala un paquete de npm.
npm install: Instala todos los paquetes definidos en package.json.
npm uninstall <paquete>: Desinstala un paquete.
npm init: Inicia un nuevo proyecto npm y crea un archivo package.json.
npm search <palabra_clave>: Busca paquetes en el repositorio npm.
npm publish: Publica un paquete en el repositorio npm.
Estos son solo algunos ejemplos de cómo funcionan los módulos en Node.js y cómo se gestionan a través de npm. Los módulos y el sistema de gestión de paquetes npm son herramientas fundamentales para construir aplicaciones Node.js eficientes y modulares.

### Callbacks, Promesas y Async/Await para manejar operaciones asincrónicas.

En Node.js, hay varias formas de manejar operaciones asíncronas, como callbacks, promesas y async/await. Cada uno tiene sus propias ventajas y se puede elegir dependiendo de la situación y las preferencias del desarrollador. Aquí te doy una breve descripción de cada uno:

Callbacks:

Los callbacks son funciones que se pasan como argumentos a otras funciones y se llaman una vez que se completa una operación asíncrona.
Son la forma más antigua de manejar operaciones asíncronas en JavaScript y Node.js.
Pueden ser propensos a caer en el "Callback Hell" (anidación excesiva de callbacks), lo que dificulta la legibilidad y mantenibilidad del código.
Ejemplo:

```javascript
function operacionAsincronica(callback) {
  setTimeout(() => {
    console.log("Operación asíncrona completada");
    callback();
  }, 1000);
}

operacionAsincronica(() => {
  console.log("Callback llamado después de la operación asíncrona");
});
```

Promesas:

Las promesas representan el resultado eventual de una operación asíncrona.
Proporcionan una sintaxis más limpia y fácil de entender para manejar operaciones asíncronas.
Permiten encadenar múltiples operaciones asíncronas de manera más legible.
Son compatibles con los bloques try-catch para manejar errores de manera más efectiva.
Ejemplo:

```javascript
function operacionAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación asíncrona completada");
      resolve();
    }, 1000);
  });
}

operacionAsincronica()
  .then(() => {
    console.log("Promesa resuelta");
  })
  .catch((error) => {
    console.error("Error en la promesa:", error);
  });
```

Async/Await:

Async/Await es una sintaxis basada en promesas que permite escribir código asincrónico de manera síncrona.
Hace que el código asincrónico sea más legible y fácil de entender, ya que se parece más a un código síncrono.
Se basa en la palabra clave async para declarar una función asíncrona y await para esperar la resolución de una promesa dentro de esa función.
Ejemplo:

```javascript
async function operacionAsincronica() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Operación asíncrona completada");
      resolve();
    }, 1000);
  });
}

async function ejecutarOperacion() {
  try {
    await operacionAsincronica();
    console.log("Operación completada usando async/await");
  } catch (error) {
    console.error("Error en la operación:", error);
  }
}

ejecutarOperacion();
```

Estas son algunas de las formas más comunes de manejar operaciones asíncronas en Node.js. Cada una tiene sus propias ventajas y desventajas, y la elección depende del contexto y las preferencias del desarrollador.

## Creación de una Aplicación Backend Simple

### Configuración de un servidor HTTP básico.

#### Inicializa un proyecto Node.js:

Ejecuta

```bash
npm init
```

en tu directorio para inicializar un nuevo proyecto Node.js. Esto creará un archivo package.json donde se gestionarán las dependencias de tu proyecto.

#### Instalación de dependencias:

Instala la dependencia http de Node.js, que te permitirá crear un servidor HTTP básico.

```bash
npm install http
```

```javascript
const http = require("http");

const hostname = "127.0.0.1"; // Puedes cambiarlo a tu dirección IP pública si deseas que el servidor sea accesible desde otras máquinas
const port = 3000; // Puedes cambiar el puerto si lo deseas

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("¡Hola, mundo!\n");
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
```

Ejecuta tu servidor:
Ejecuta tu servidor Node.js utilizando el siguiente comando en tu terminal:

```bash
node server.js
```
