const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Listen_Port = 3000;

const url =
  "mongodb+srv://NSM:Develop123!@cluster0.gaxlr2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

client
  .connect()
  .then(() => {
    console.log("Connected successfully to server");
  })
  .catch((err) => {
    console.log(err);
  });

const db = client.db("Cluster0");

app.get("/user", async function (req, res) {
  const data = await db
    .collection("Usuarios")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  res.send(data);
});

app.post("/user", async function (req, res) {
  const { name, lastName, email } = req.body;

  const data = await db.collection("Usuarios").insertOne({
    name: name,
    lastName: lastName,
    email: email,
  });
  res.send(data);
});

app.listen(Listen_Port, function () {
  console.log("Server corriendo http://localhost:" + Listen_Port + "/");
});
