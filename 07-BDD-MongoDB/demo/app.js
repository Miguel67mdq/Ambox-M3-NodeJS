var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
/* Una conexión con MongoClient */
const { MongoClient } = require("mongodb");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
// URL de conexión de MongoDB
const dbName = "AH_P1"; // Nombre de la base de datos

client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);
const collection = db.collection("documents");

// the following code examples can be pasted here...

app.get("/proyects", async function (req, res) {
  const data = await db
    .collection("Proyects")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  res.send(data);
});

app.post("/proyects", async function (req, res) {
  const { name, user, type } = req.body;

  const data = await db.collection("Proyects").insertOne({
    name: name,
    user: user,
    type: type,
  });
  res.send(data);
});
app.delete("/proyects", async function (req, res) {
  const { nombre } = req.body;
  const data = await db.collection("Proyects").deleteOne({ nombre: nombre });
  res.send(data);
});

app.delete("/proyects/:idProyects", async function (req, res) {
  const { idProyects } = req.params;
  const data = await db.collection("Proyects").deleteOne({"_id": idProyects });
  console.log(data)
});


app.put("/proyects", function (req, res) {});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
