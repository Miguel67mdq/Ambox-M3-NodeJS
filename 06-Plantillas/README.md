Utilización de motores de plantilla con Express
Para que Express pueda representar archivos de plantilla, deben establecerse los siguientes valores de aplicación:

views, el directorio donde se encuentran los archivos de plantilla. Ejemplo: 
```js
app.set('views', './views')
```
view engine, el motor de plantilla que se utiliza. Ejemplo: 
```js
app.set('view engine', 'hbs')
```
A continuación, instale el paquete npm de motor de plantilla correspondiente:


```bash
$ npm install pug --save
```


Los motores de plantilla compatibles con Express como, por ejemplo, Pug exportan una función denominada \_\_express(filePath, options, callback), que es invocada por la función res.render() para representar el código de plantilla.

Algunos motores de plantilla no siguen esta convención. La biblioteca Consolidate.js sigue esta convención correlacionando todos los motores de plantilla de Node.js más conocidos, por lo que funciona de forma ininterrumpida en Express.

Una vez establecida la propiedad view engine, no tiene que especificar el motor ni cargar el módulo de motor de plantilla en la aplicación; Express carga el módulo internamente, como se muestra a continuación (para el ejemplo anterior).

```javascript
app.set("view engine", "pug");
```

Cree un archivo de plantilla Pug denominado index.pug en el directorio views, con el siguiente contenido:

```HTML
html
  head
    title= title
  body
    h1= message
```

A continuación, cree una ruta para representar el archivo index.pug. Si la propiedad view engine no se establece, debe especificar la extensión del archivo view. De lo contrario, puede omitirla.

```javascript
app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
```

Cuando realice una solicitud a la página de inicio, el archivo index.pug se representará como HTML.
