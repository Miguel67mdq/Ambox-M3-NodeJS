require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./Schema/User");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Connect to DB Mongo */
const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gaxlr2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI);

const db = mongoose.connection;

/* Cuando se conecte sin error */
db.on("connected", () => {
  console.log(`Conexión establecida a la DB de Mongo`);
});

/* Cuando no se pueda conectar */
db.on("error", (err) => {
  console.error("Error de conexión a la base de datos:", err);
});

/* Cuando nos desconectemos */
db.on("disconnected", () => {
  console.log("Desconectado de la base de datos");
});

const Listen_Port = 3000;

app.post("/register", function (req, res) {
  const { name, lastName, email, nickname, password } = req.body;

  const newUser = new User({
    name: name,
    lastName: lastName,
    email: email,
    nickname: nickname,
    password: password,
  });

  newUser
    .save()
    .then((resultado) => {
      console.log("Producto guardado exitosamente:", resultado);
    })
    .catch((error) => {
      console.error("Error al guardar el producto:", error);
    });

  res.send(200);
});

app.get("/users", function (req, res) {
  User.find()
    .then((User) => {
      console.log("Usuarios encontrados:", User);
    })
    .catch((error) => {
      console.error("Error al buscar usuarios:", error);
    });
  res.send(200);
});

app.put("/users/update", function (req, res) {
  User.findOneAndUpdate(
    { name: "Manuel" },
    { name: "Nahuel" },
    {
      new: true,
    }
  )
    .then((resultado) => {
      if (resultado) {
        console.log("Usuario actualizado exitosamente:", resultado);
      } else {
        console.log("Usuario no encontrado:");
      }
      return res.send(200);
    })
    .catch((error) => {
      console.error("Error al actualizar el producto:", error);
    });
});

app.delete("/users/delete", function () {
  User.findOneAndDelete({ name: "Nahuel" })
    .then((resultado) => {
      if (resultado) {
        console.log("Usuario eliminado exitosamente:", resultado);
      } else {
        console.log("Usuario no encontrado:");
      }
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    });
});

app.listen(Listen_Port, function () {
  console.log("Server corriendo http://localhost:" + Listen_Port + "/");
});
