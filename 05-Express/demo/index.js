var express = require("express");
var morgan = require("morgan");
var app = express();

// Creación de Middleware
/* app.use("/", function (req, res, next) {
  console.log("Hicieron un Request a " + req.url);
  next();
}); */
app.use("/assets/", express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//------------------------------------------------
app.listen(3000);

// Creación de rutas 

app.get("/", function (req, res) {
  console.log(req.query)
  res.send("Hola");
});

// Con parametros
app.get("/api/:id/:nombre/:valor", function (req, res) {
  res.json({
    id: req.params.id,
    nombre: req.params.nombre,
    valor: req.params.valor,
  });
});

// Sin parametros
app.get("/api", function (req, res) {
  var obj = {
    nombre: "prueba",
    framework: "express",
    ventaja: "serializó por nosotros",
  };
  res.json(obj);
});

app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});

app.get("/ab*cd", function (req, res) {
  res.send("ab*cd");
});

app.get("/static", function (req, res) {
  res.send(
    '<html><head> \
      <link href="/assets/style.css" rel="stylesheet"> \
      </head><body> \
      <p>Archivos estaticos rapido y facil!!</p>\
      <img src="/assets/expresstatic.png">\
      </body></html>'
  );
});

app.get("/form", function (req, res) {
  res.send(
    '<html><head> \
   <link href="/assets/style.css" rel="stylesheet"> \
   </head><body>\
    <form method="POST" action="/form">\
    Nombre <input name="nombre" type="text"><br>\
    Apellido <input name="apellido" type="text"><br>\
    Curso <input name="curso" type="text"><br>\
    <input type="submit">\
    </form>\
   </body></html>'
  );
});


app.post("/form", function (req, res) {
  res.json(req.body);
});

app.post("/formjson", function (req, res) {
  res.json(req.body);
});